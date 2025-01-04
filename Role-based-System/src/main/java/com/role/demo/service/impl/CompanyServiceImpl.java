package com.role.demo.service.impl;

import com.role.demo.model.Company;
import com.role.demo.repository.CompanyRepository;
import com.role.demo.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CompanyServiceImpl implements CompanyService {
    @Autowired
    private CompanyRepository companyRepository;

    @Override
    public String registerCompany(Company company) {
        try{

            companyRepository.save(company);
        }catch (Exception e){
            return "exception: "+e;
        }
        return "company registed successfully";
    }
}
