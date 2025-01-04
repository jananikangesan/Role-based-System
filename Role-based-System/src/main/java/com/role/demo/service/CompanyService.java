package com.role.demo.service;

import com.role.demo.model.Company;
import com.role.demo.model.ProfileResponse;

public interface CompanyService {

    public String registerCompany(Company company);

    public ProfileResponse getProfile(String email);
}
