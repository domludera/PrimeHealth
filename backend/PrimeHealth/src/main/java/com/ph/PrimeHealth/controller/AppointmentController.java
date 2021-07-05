package com.ph.PrimeHealth.controller;

import com.ph.PrimeHealth.entity.Appointment;
import com.ph.PrimeHealth.entity.Doctor;
import com.ph.PrimeHealth.entity.Patient;
import com.ph.PrimeHealth.repository.AppointmentRepository;
import com.ph.PrimeHealth.repository.DoctorRepository;
import com.ph.PrimeHealth.repository.PatientRepository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Transactional
@RestController
@RequestMapping(value="/appointments")
public class AppointmentController {

    private final AppointmentRepository appointmentRepository;

    AppointmentController(AppointmentRepository appointmentRepository,
                          DoctorRepository doctorRepository,
                          PatientRepository patientRepository) {
        this.appointmentRepository = appointmentRepository;
    }

    // All items
    @GetMapping
    List<Appointment> all() {
        return appointmentRepository.findAll();
    }

    // Single item
    @GetMapping("/{id}")
    Appointment one(@PathVariable int id) {

        return appointmentRepository.findById(id)
                .orElseThrow(() -> new AppointmentNotFoundException(id));
    }


    @PostMapping
    Appointment newAppointment(@RequestBody Appointment appointment) {
        return appointmentRepository.save(appointment);
    }


    @PutMapping("/{id}")
    Appointment replaceAppointment(@RequestBody Appointment newAppointment, @PathVariable int id) {

        return appointmentRepository.findById(id)
                .map(appointment -> {
                    appointment.setDoctor(newAppointment.getDoctor());
                    appointment.setPatient(newAppointment.getPatient());
                    appointment.setStarttime(newAppointment.getStarttime());
                    appointment.setEndtime(newAppointment.getEndtime());
                    return appointmentRepository.save(appointment);
                })
                .orElseGet(() -> {
                    newAppointment.setId(id);
                    return appointmentRepository.save(newAppointment);
                });
    }

    @DeleteMapping("/{id}")
    void deleteAppointment(@PathVariable int id) {
        appointmentRepository.deleteById(id);
    }


}