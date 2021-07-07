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
('Sid', 'Amana', '905-678-2224', '68 Candle Avenue', 'Toronto', 'M5Z 4T8');

INSERT INTO primedb.appointment(doctorid,patientid, starttime, endtime)
VALUES
(1, 1, '2021-07-19 08:00:00', '2021-07-19 09:00:00'),
(2,1, '2021-07-21 12:00:00', '2021-07-19 13:00:00'),
(5,1, '2021-07-30 15:30:00', '2021-07-20 16:30:00'), 
(14,1, '2021-07-31 07:00:00', '2021-07-20 08:00:00');
