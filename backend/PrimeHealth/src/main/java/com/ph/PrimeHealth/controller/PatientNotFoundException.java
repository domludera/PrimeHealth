package com.ph.PrimeHealth.controller;

public class PatientNotFoundException extends RuntimeException{
    PatientNotFoundException(int id){
        super("Could not find patient " + id);
    }
}
