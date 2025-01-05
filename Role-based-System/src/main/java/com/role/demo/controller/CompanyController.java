package com.role.demo.controller;

import com.role.demo.model.*;
import com.role.demo.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class CompanyController {

    @Autowired
    private CompanyService companyService;

    @PostMapping("/company-register")
    public ResponseEntity<String> registerCompany(@RequestBody Company company){
        return ResponseEntity.ok(companyService.registerCompany(company));
    }

    @GetMapping("/profile/{email}")
    public ResponseEntity<ProfileResponse> getProfile(@PathVariable String email) {
        return ResponseEntity.ok(companyService.getProfile(email));
    }
    @GetMapping("/companies-services")
    public ResponseEntity<List<CompanyServiceDTO>> getCompaniesAndServices() {
        List<CompanyServiceDTO> result = companyService.getCompanyAndServiceDetails();
        return ResponseEntity.ok(result);
    }
}
