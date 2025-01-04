package com.role.demo.controller;

import com.role.demo.model.Company;
import com.role.demo.model.User;
import com.role.demo.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

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
}
