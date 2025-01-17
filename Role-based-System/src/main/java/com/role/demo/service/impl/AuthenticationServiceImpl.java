package com.role.demo.service.impl;


import com.role.demo.model.AuthenticationResponse;
import com.role.demo.model.PartnerService;
import com.role.demo.model.User;
import com.role.demo.repository.UserRepository;
import com.role.demo.service.AuthenticationService;
import com.role.demo.service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {

    @Autowired
    public UserRepository userRepository;

    @Autowired
    public PasswordEncoder passwordEncoder;

    @Autowired
    public JwtService jwtService;

    @Autowired
    public AuthenticationManager authenticationManager;

    @Override
    public String register(User request){

        if(request.getPassword().equals(request.getConfirmPassword())){

            User user=new User();
            user.setEmail(request.getEmail());
            user.setName(request.getName());
            user.setRole(request.getRole());

            user.setPassword(passwordEncoder.encode(request.getPassword()));
            userRepository.save(user);

        }

        return "user registered successfully";
    }

    @Override
    public AuthenticationResponse authenticate(User request){

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );

        User user=userRepository.findByEmail(request.getEmail()).orElseThrow();
        System.out.println(user.toString());


        String token=jwtService.generateToken(user);

        return new AuthenticationResponse(token);
    }


    public List<User> getUsers(){
        List<User> user;
        try {
            user=userRepository.findAll();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return user;

    }

    @Override
    public String deleteUser(String id) {
        try {
            User user = userRepository.findById(id).orElse(null);

            if(user!= null){
                userRepository.deleteById(id);
                return "User deleted successfully";
            }

        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return "User not found";
    }
}

