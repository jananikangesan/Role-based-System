package com.role.demo.controller;

import com.role.demo.model.AuthenticationResponse;
import com.role.demo.model.PartnerService;
import com.role.demo.model.User;
import com.role.demo.service.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class AuthenticationController {

    @Autowired
    public  AuthenticationService authenticationService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User request){
        return ResponseEntity.ok(authenticationService.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(@RequestBody User request){
        return ResponseEntity.ok(authenticationService.authenticate(request));
    }
    @GetMapping("/user/getAll")
    public ResponseEntity<List<User>> getUsers(){
        return ResponseEntity.ok(authenticationService.getUsers());
    }

    @DeleteMapping("/user/delete/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable String id){
        return ResponseEntity.ok(authenticationService.deleteUser(id));
    }


}
