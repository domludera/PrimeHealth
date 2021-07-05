package com.ph.PrimeHealth.controller;

import com.ph.PrimeHealth.entity.Doctor;
import com.ph.PrimeHealth.repository.DoctorRepository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Transactional
@RestController
@RequestMapping(value="/doctors")
public class DoctorController {

    private final DoctorRepository doctorRepository;

    DoctorController(DoctorRepository doctorRepository){
        this.doctorRepository = doctorRepository;
    }

    // All items
    @GetMapping
    List<Doctor> all() {
        return doctorRepository.findAll();
    }

    // Single item
    @GetMapping("/{id}")
    Doctor one(@PathVariable int id) {

        return doctorRepository.findById(id)
                .orElseThrow(() -> new DoctorNotFoundException(id));
    }


    @PostMapping
    Doctor newDoctor(@RequestBody Doctor doctor) {
        return doctorRepository.save(doctor);
    }


    @PutMapping("/{id}")
    Doctor replaceDoctor(@RequestBody Doctor newDoctor, @PathVariable int id) {

        return doctorRepository.findById(id)
                .map(doctor -> {
                    doctor.setFirstname(newDoctor.getFirstname());
                    doctor.setLastname(newDoctor.getLastname());
                    doctor.setPhone(newDoctor.getPhone());
                    doctor.setAddress(newDoctor.getAddress());
                    doctor.setCity(newDoctor.getCity());
                    doctor.setPostalcode(newDoctor.getPostalcode());
                    return doctorRepository.save(doctor);
                })
                .orElseGet(() -> {
                    newDoctor.setId(id);
                    return doctorRepository.save(newDoctor);
                });
    }

    @DeleteMapping("/{id}")
    void deleteDoctor(@PathVariable int id) {
        doctorRepository.deleteById(id);
    }




}
