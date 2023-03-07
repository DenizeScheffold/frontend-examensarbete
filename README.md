examensarbete

Examensarbete in Spring Boot 3: https://github.com/DenizeScheffold/examensarbete

To run: set up Mysql database or use Docker via cmd:

docker pull mysql/mysql-server:latest

docker run --name examensarbetedb -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -d mysql

docker exec -it examensarbetedb bash

mysql -uroot -proot

create database examensarbete;

To run frontend: https://github.com/DenizeScheffold/kindi.git

In cmd: 
npm install
npm install axios
npm start

to run: 
npm start

To login: 
in browser: localhost:3000 
username: Kattis 
password: abb

Weeks prepared in the database: 2,3,4 - use those when you play around in the application
