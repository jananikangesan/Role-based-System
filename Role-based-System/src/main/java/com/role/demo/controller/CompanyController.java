package com.role.demo.controller;

import com.role.demo.model.AuthenticationResponse;
import com.role.demo.model.Company;
import com.role.demo.model.ProfileResponse;
import com.role.demo.model.User;
import com.role.demo.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class CompanyController {

    @Autowired
    private CompanyService companyService;

    @PostMapping("/company-register")
    public ResponseEntity<String> registerCompany(@RequestBody Company company){

        System.out.println("hiiiiiiiiii"+company.toString());
        return ResponseEntity.ok(companyService.registerCompany(company));
    }

    @GetMapping("/profile/{email}")
    public ResponseEntity<ProfileResponse> getProfile(@PathVariable String email) {
        return ResponseEntity.ok(companyService.getProfile(email));
    }
}
