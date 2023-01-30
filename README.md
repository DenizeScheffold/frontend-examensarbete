examensarbete

Examensarbete in Spring Boot 3: https://github.com/DenizeScheffold/examensarbete

To run: set up Mysql database or use Docker via cmd:

docker pull mysql/mysql-server:latest

docker run --name examensarbetedb -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -d mysql

docker exec -it examensarbetedb bash

mysql -uroot -proot

create database examensarbete;

To run frontend: https://github.com/DenizeScheffold/frontend-examensarbete
npm start

To login:

To set week:
