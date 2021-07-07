package com.ph.PrimeHealth.entity;

import lombok.*;
import org.apache.tomcat.jni.Local;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Table(name="appointment")
@Setter
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    @Basic
    private int id;

    @Column(name="starttime")
    private LocalDateTime starttime;

    @Column(name="endtime")
    private LocalDateTime endtime;

    @OneToOne
    @JoinColumn(name="doctorid")
    private Doctor doctor;

    @OneToOne
    @JoinColumn(name="patientid")
    private Patient patient;

}
