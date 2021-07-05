-- CREATE DATA BASE

DROP DATABASE IF EXISTS primedb;
CREATE DATABASE primedb; 
USE primedb;

-- CREATE TABLES (Doctor,Patient,APPOINTMENT)

DROP TABLE IF EXISTS doctor;
CREATE TABLE doctor	(
    id  int NOT NULL auto_increment,
    firstname varchar(15) NOT NULL ,
    lastname varchar(15) NOT NULL ,
    phone varchar(12) NOT NULL,
    address varchar(30) NOT NULL,
    city varchar(20) NOT NULL,
    postalcode varchar(10) NOT NULL,
	-- specialty 
	PRIMARY KEY (id)
       
 ); 

DROP TABLE IF EXISTS patient;
CREATE TABLE patient(
    id  int NOT NULL auto_increment,
    firstname varchar(15) NOT NULL ,
	lastname varchar(15) NOT NULL ,
    phone varchar(12) NOT NULL,
    address varchar(30) NOT NULL,
    city varchar(20) NOT NULL,
    postalcode varchar(10) NOT NULL,
	PRIMARY KEY (id)

 ); 

DROP TABLE IF EXISTS appointment;
CREATE TABLE appointment(
	id int NOT NULL auto_increment ,
	doctorid int NOT NULL,
	patientid int NOT NULL,
	starttime datetime not null,
	endtime datetime not null,
	PRIMARY KEY (id),
	FOREIGN KEY (doctorid) REFERENCES doctor(id),
	FOREIGN KEY (patientid) REFERENCES patient(id)
); 

INSERT INTO primedb.doctor(firstname,lastname,phone, address, city, postalcode)
VALUES('James', 'Smith', '905-678-2224', '698 Candlewood Lane', 'Mississauga', 'L5Z 4A8'),
('Roy', 'Johnson', '647-777-8768', '8111 Park Avenue East', 'Milton', 'T5C 2QS'),
('Noah', 'Williams', '763-111-1234', '1 Main St', 'Toronto', 'M5S 2Q9'),
('Ally', 'Brown', '905-647-1290', '32 First St', 'Mississauga', 'L4T 2K7'),
('Peter', 'Garcia', '973-641-6358', '888 Flagship Drive', 'Toronto', 'L5Z 4A8'),
('Melody', 'Miller', '281-815-9841', '99 Upside Down Road', 'Mississauga', 'M8T 9O8'),
('Jose', 'Davis', '770-862-1809', '767 Koolade West', 'Toronto', 'T2Q 3Q2'),
('Dennis', 'Rodriguez', '423-727-2599', '123 Orange Road East', 'Milton', 'Z6G 8K7'),
('Hannah', 'Martinez', '719-497-5383', '9456 Applewood Road', 'Mississauga', 'M3Q 6J0'),
('Patrick', 'Turner', '765-848-6742', '698 Rio Court', 'Toronto', 'B2Y 3G2'),
('Nicholas', 'Edwards', '330-316-7009', '17 Fourth Lane', 'Toronto', 'L9K 2Q7'),
('Kevin', 'Evans', '207-283-6765', '33 Maplewood Circle', 'Milton', 'M8W 2Q8'),
('Edward', 'Collins', '605-399-7370', '85 Islington Avenue East', 'Mississauga', 'L6T 3B1'),
('Holly', 'Walker', '269-983-3280', '76  Lakeview North', 'Toronto', 'K47 2Q1'),
('Jason', 'Lee', '773-977-4176', '345 Oak Road', 'Milton', 'V8V 5X5');

INSERT INTO primedb.patient(firstname,lastname,phone, address, city, postalcode)
VALUES
('Sid', 'Amana', '905-678-2224', '68 Candle Avenue', 'Toronto', 'M5Z 4T8'),
('Eugene', 'Katz', '647-777-8768', '711 Avenue East', 'Mississauga', 'T5C 2QS'),
('Sophia', 'Madden', '647-121-1134', '11 Chieftan Circle', 'Milton', 'L5S 2W9'),
('Diana', 'Laurier', '647-127-2220', '112 St Mary St', 'Toronto', 'M4S 2J7'),
('Vincent', 'Viotto', '905-969-9999', '88 Milton Road', 'Milton', 'O0Z 4B5'),
('Rose', 'Dubois', '749-389-9182', '9 Uptown Road', 'Toronto', 'M0Z 7J8'),
('Jose', 'Haddad', '839-718-7383', '77 Adelade East', 'Mississauga', 'L2Q 3Q1'),
('Philip', 'Fox', '292-492-8939', '111 Apple Circle', 'Milton', 'L6G 1K7'),
('Kayla', 'Bond', '928-939-3829', '1234 Applewood Road', 'Toronto', 'M3Q 6J0'),
('Beverly', 'Smith', '782-929-8388', '17 Rio Court', 'Mississauga', 'B3Y 3G2'),
('Logan', 'Smith', '648-736-1722', '416 Ojbway Trail', 'Toronto', 'M9K 2L7'),
('Alan', 'Frederick', '292-927-8422', '415 Chieftan Circle', 'Mississauga', 'L4Z 3A8'),
('Willie', 'Jackson', '827-626-1242', '85 Islington Avenue West', 'Milton', 'L6W 3w1'),
('Abigail', 'Wayne', '872-633-3212', '76  Lakeshore Road', 'Oakville', 'N47 2W1'),
('Jacqueline', 'Vader', '111-111-1111', '77 Lakeshell Road', 'Milton', 'N6V 5Z5'),
('Tina', 'Corolo', '223-123-4432', '12 Weston Lane', 'Mississauga', 'L0Z 4L8'),
('Jim', 'Henry', '472-273-8768', '311 Eglinton East', 'Milton', 'T4C 2QS'),
('Henry', 'Doris', '905-112-8632', '2 Main St', 'Toronto', 'M5S 2Q8'),
('Mona', 'Morollo', '738-905-1290', '33 First St', 'Mississauga', 'L4T 2K9'),
('Minnie', 'Viotto', '828-182-6358', '1919 Yard Drive', 'Oakville', 'N5Z 3J3'),
('Adam', 'Damo', '647-815-9841', '49 Uptown Circle', 'Mississauga', 'L8T 8O8'),
('Harris', 'Borrono', '905-862-1809', '18 Simple Road', 'Toronto', 'T3Y 3Y2'),
('Faddy', 'West', '647-727-2599', '2222 Blue East', 'Toronto', 'G6G 8H7'),
('Natalie', 'Vitali', '905-497-5383', '33 Wood Avenue', 'Mississauga', 'M2Q 6J6'),
('Fidel', 'Rima', '647-848-6742', '68 Ten Court', 'Mississauga', 'B3Y 3U2'),
('Bob', 'Jan', '905-316-7009', '1 Sugar Lane', 'Toronto', 'M9K 2Q7'),
('Jane', 'Frederick', '647-283-6765', '11 Canada Lane', 'Oakville', 'M7K 2N8'),
('Amanda', 'Larrison', '828-111-7370', '8 Island Avenue', 'Oakville', 'N6N 3N1'),
('Dua', 'Lipa', '906-983-3280', '76 Lakeview North', 'Mississauga', 'L4S 6Q2'),
('Justin', 'Bieber', '905-977-4176', '3 Forest Road', 'Toronto', 'K2K 2U2');

INSERT INTO primedb.appointment(doctorid,patientid, starttime, endtime)
VALUES
(1, 3, '2021-07-19 08:00:00', '2021-07-19 09:00:00'),
(1,4, '2021-07-19 09:30:00', '2021-07-19 10:30:00'),
(2,7, '2021-07-19 12:00:00', '2021-07-19 13:00:00'),
(5,14, '2021-07-20 15:30:00', '2021-07-20 16:30:00'), 
(6,12, '2021-07-20 07:00:00', '2021-07-20 08:00:00'),
(3,12, '2021-07-21 16:00:00', '2021-07-21 17:00:00'), 
(10,1, '2021-08-25 08:00:00', '2021-08-25 10:00:00'), 
(14, 20, '2021-08-30 12:00:00', '2021-08-30 14:00:00');
