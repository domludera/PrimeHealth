-- CREATE DATA BASE

DROP DATABASE IF EXISTS PrimeDB;
CREATE DATABASE PrimeDB ; 
USE PrimeDB;

-- CREATE TABLES (Doctor,Patient,Availability,APPOINTMENT)


DROP TABLE IF EXISTS Doctor;
CREATE TABLE Doctor	(
    DoctorID  int NOT NULL auto_increment,
    FirstName varchar(15) NOT NULL ,
    LastName varchar(15) NOT NULL ,
    phone varchar(10) NOT NULL,
    Address varchar(10) NOT NULL,
    City varchar(25) NOT NULL,
    PostalCode varchar(10) NOT NULL,
	-- specialty 
	PRIMARY KEY (DoctorID)
       
 ); 
 -- INSERT INTO Doctor;
DROP TABLE IF EXISTS Patient;
CREATE TABLE Patient(
    PatientID  int NOT NULL auto_increment,
    FirstName varchar(15) NOT NULL ,
	LastName varchar(15) NOT NULL ,
    phone varchar(10) NOT NULL,
    Address varchar(10) NOT NULL,
    City varchar(25) NOT NULL,
    PostalCode varchar(10) NOT NULL,
	PRIMARY KEY (PatientID)
     
 ); 
 

 
  DROP TABLE IF EXISTS Appointment;
CREATE TABLE Appointment(
		AppointmentID int NOT NULL auto_increment ,
        DoctorID int NOT NULL,
        PatientID int NOT NULL,
        ApptDate Date not null,
        StartTime time not null,
        EndTime time not null,
		PRIMARY KEY (AppointmentID),
        FOREIGN KEY (DoctorID) REFERENCES Doctor(DoctorID),
        FOREIGN KEY (PatientID) REFERENCES Patient(PatientID)
); 
     
  