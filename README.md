# nestjs-app

application using nest.js

nestjs
: node.js framework (express or fastify 위에서 동작)

controller
: http 요청을 처리하고 필요한 데이터를 service에 전달

service
: 비즈니스 로직을 담당하고 Controller에 필요한 결과를 반환.

NotFoundException
: not found 예외 처리 제공.

DTO(Data Transfer Object)
: client <-> server data type object
: class로 type 정의.
: 목적 : code를 더 간결하게 해줌. 쿼리에 대한 유효성 검사를 할 수 있게 함.

pipe
: npm i class-validator class-transformer
: middleware 같은 것.
: ex) app.useGlobalPipes(new ValidationPipe());

ValidationPipe()
: options
whitelist : DTO 클래스에 정의된 속성만 허용. DTO에 정의되지 않은 속성은 요청 데이터에서 자동으로 제거.
forbidNonWhitelisted : DTO에 정의되지 않은 속성이 있을 경우, 요청을 거부하고 예외 발생.
transform : 클라이언트가 보낸 데이터를 DTO에 정의된 type으로 자동 변환.

Partialtype()
: @nestjs/mapped-types
: ref하는 DTO class를 partial로 사용할 수 있게 해줌.
: @IsOptional() 등 다양한 기능 제공

Module(indirect using Controller, Provider) vs direct using Controller, Provider
: Module화를 모듈간의 결합도가 낮아지고 재사용이 가능
: 직접 사용하면 간단하나 어플리케이션이 클수록 추후 관리가 어려워짐.

dependency injection
: 모듈간의 결합도를 낮추는 개념.
: 객체의 인스턴스를 직접 생성하지 않고, nestjs가 자동으로 필요한 인스턴스를 제공하는 방식.
