package com.ph.PrimeHealth.controller;

public class DoctorNotFoundException extends RuntimeException{
    DoctorNotFoundException(int id){
        super("Could not find doctor " + id);
    }
}
