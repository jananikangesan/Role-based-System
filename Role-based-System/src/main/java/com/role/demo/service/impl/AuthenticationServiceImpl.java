package com.role.demo.service.impl;


import com.role.demo.model.AuthenticationResponse;
import com.role.demo.model.User;
import com.role.demo.repository.UserRepository;
import com.role.demo.service.AuthenticationService;
import com.role.demo.service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

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
    public User register(User request){
        User user=new User();

        if(request.getPassword().equals(request.getConfirmPassword())){
            user.setEmail(request.getEmail());
            user.setName(request.getName());
            user.setRole(request.getRole());

            user.setPassword(passwordEncoder.encode(request.getPassword()));
            user=userRepository.save(user);
        }

        return user;
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
}

