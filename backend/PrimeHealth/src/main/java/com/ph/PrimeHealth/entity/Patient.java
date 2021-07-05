package com.ph.PrimeHealth.entity;


import lombok.*;

import javax.persistence.*;

@Entity
@Table(name="patient")
@Setter
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Patient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    @Basic
    private int id;

    @Column(name="firstname")
    private String firstname;

    @Column(name="lastname")
    private String lastname;

    @Column(name="phone")
    private String phone;

    @Column(name="address")
    private String address;

    @Column(name="city")
    private String city;

    @Column(name="postalcode")
    private String postalcode;

}
