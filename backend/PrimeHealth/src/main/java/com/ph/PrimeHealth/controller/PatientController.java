package com.ph.PrimeHealth.controller;

import com.ph.PrimeHealth.entity.Patient;
import com.ph.PrimeHealth.repository.PatientRepository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Transactional
@RestController
@RequestMapping(value="/patients")
@CrossOrigin
public class PatientController {

    private final PatientRepository patientRepository;

    PatientController(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    // All items
    @GetMapping
    List<Patient> all() {
        return patientRepository.findAll();
    }

    // Single item
    @GetMapping("/{id}")
    Patient one(@PathVariable int id) {

        return patientRepository.findById(id)
                .orElseThrow(() -> new PatientNotFoundException(id));
    }


    @PostMapping
    Patient newPatient(@RequestBody Patient patient) {
        return patientRepository.save(patient);
    }


    @PutMapping("/{id}")
    Patient replacePatient(@RequestBody Patient newPatient, @PathVariable int id) {

        return patientRepository.findById(id)
                .map(patient -> {
                    patient.setFirstname(newPatient.getFirstname());
                    patient.setLastname(newPatient.getLastname());
                    patient.setPhone(newPatient.getPhone());
                    patient.setAddress(newPatient.getAddress());
                    patient.setCity(newPatient.getCity());
                    patient.setPostalcode(newPatient.getPostalcode());
                    return patientRepository.save(patient);
                })
                .orElseGet(() -> {
                    newPatient.setId(id);
                    return patientRepository.save(newPatient);
                });
    }

    @DeleteMapping("/{id}")
    void deletePatient(@PathVariable int id) {
        patientRepository.deleteById(id);
    }


}
