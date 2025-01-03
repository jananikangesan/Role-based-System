package com.role.demo.service;

import com.role.demo.model.User;
import io.jsonwebtoken.Claims;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.function.Function;

public interface JwtService {

    public String extractEmail(String token);
    public <T> T extractClaim(String token, Function<Claims,T> resolver);
    public boolean isValid(String token, UserDetails user);
    public String generateToken(User user);
}
