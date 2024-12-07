# nestjs-app

application usion nest.js

controller
: api 정의

service
: logic

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
