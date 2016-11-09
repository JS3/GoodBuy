/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.eci.cosw.model;

import java.io.*;
import java.util.*;
import javax.persistence.*;

/**
 *
 * @author User
 */
@Entity
@Table(name = "Usuarios")
public class Usuario implements Serializable {

    private String user, password;

    public Usuario(String user, String password) {
        setUser(user);
        setPassword(password);
    }

    public Usuario() {
    }

    @Id
    @Column(name = "correo", nullable = false, length = 75)
    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    @Column(name = "contrasena", nullable = false, length = 40)
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
