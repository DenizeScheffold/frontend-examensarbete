Examensarbete

**GET STARTED**

Kanban board: https://trello.com/b/EErJuPSK/examensarbete

----------------------------

**To run backend:**

Clone repo: 

https://github.com/DenizeScheffold/examensarbete


*To set up via command propt* (Mysql database in Docker):


docker pull mysql/mysql-server:latest


docker run --name examensarbetedb -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -d mysql


docker exec -it examensarbetedb bash


mysql -uroot -proot


create database examensarbete;


In IDE: *Build and Run application*

-----------------------


**To run frontend:** 

clone repo: 

https://github.com/DenizeScheffold/kindi.git

--

*To set up via command prompt:* 

npm install

npm install axios

npm install @mui/material @mui/styled-engine-sc styled-components

npm start

--


*To Run:* 

npm start


*To login:* 

in browser: localhost:3000

username: Kattis 

password: abb

--

Weeks prepared in the database: 

2-8 - use those when you play around in the application 
