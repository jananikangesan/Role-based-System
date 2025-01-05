package com.role.demo.service;

import com.role.demo.model.AuthenticationResponse;
import com.role.demo.model.User;

import java.util.List;

public interface AuthenticationService {
    public String register(User request);

    public AuthenticationResponse authenticate(User request);

    public List<User> getUsers();

    public String deleteUser(String id);
}
