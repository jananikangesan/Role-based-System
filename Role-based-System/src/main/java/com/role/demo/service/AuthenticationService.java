package com.role.demo.service;

import com.role.demo.model.AuthenticationResponse;
import com.role.demo.model.User;

public interface AuthenticationService {
    public User register(User request);

    public AuthenticationResponse authenticate(User request);
}
