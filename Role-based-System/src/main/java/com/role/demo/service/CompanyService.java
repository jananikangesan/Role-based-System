package com.role.demo.service;

import com.role.demo.model.Company;
import com.role.demo.model.CompanyServiceDTO;
import com.role.demo.model.ProfileResponse;

import java.util.List;

public interface CompanyService {

    public String registerCompany(Company company);

    public ProfileResponse getProfile(String email);

    public List<CompanyServiceDTO> getCompanyAndServiceDetails();
}
