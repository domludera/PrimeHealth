-- CREATE DATA BASE

DROP DATABASE IF EXISTS primedb;
CREATE DATABASE primedb ; 
USE primedb;

-- CREATE TABLES (Doctor,Patient,Availability,APPOINTMENT)


CREATE TABLE doctor	(
    id  int NOT NULL auto_increment,
    firstname varchar(15) NOT NULL ,
    lastname varchar(15) NOT NULL ,
    phone varchar(10) NOT NULL,
    address varchar(10) NOT NULL,
    city varchar(25) NOT NULL,
    postalcode varchar(10) NOT NULL,
	-- specialty 
	PRIMARY KEY (id)
       
 ); 
 -- INSERT INTO Doctor;
CREATE TABLE patient(
    id  int NOT NULL auto_increment,
    firstname varchar(15) NOT NULL ,
	lastname varchar(15) NOT NULL ,
    phone varchar(10) NOT NULL,
    address varchar(10) NOT NULL,
    city varchar(25) NOT NULL,
    postalcode varchar(10) NOT NULL,
	PRIMARY KEY (id)
     
 ); 
 

 
CREATE TABLE appointment(
	id int NOT NULL auto_increment ,
        doctorid int NOT NULL,
        patientid int NOT NULL,
        starttime Date not null,
        endtime Date not null,
	PRIMARY KEY (id),
        FOREIGN KEY (doctorid) REFERENCES doctor(id),
        FOREIGN KEY (patientid) REFERENCES patient(id)
); 
     
  
