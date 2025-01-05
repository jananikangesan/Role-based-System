package com.role.demo.service.impl;

import com.role.demo.model.*;
import com.role.demo.repository.CompanyRepository;
import com.role.demo.repository.PartnerServiceRepository;
import com.role.demo.repository.UserRepository;
import com.role.demo.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CompanyServiceImpl implements CompanyService {
    @Autowired
    private CompanyRepository companyRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PartnerServiceRepository partnerServiceRepository;

    @Override
    public String registerCompany(Company company) {
        try{

            companyRepository.save(company);
        }catch (Exception e){
            return "exception: "+e;
        }
        return "company registed successfully";
    }

    @Override
    public ProfileResponse getProfile(String email) {
        Optional<User> userOptional = userRepository.findByEmail(email);
        if (userOptional.isEmpty()) {
            throw new RuntimeException("User not found");
        }
        User user = userOptional.get();

        Optional<Company> companyOptional = companyRepository.findByEmail(email);
        Company company = companyOptional.orElse(new Company());

        return new ProfileResponse(
                user.getName(),
                user.getEmail(),
                company.getCompanyName(),
                company.getAddress(),
                company.getContactNumber()
        );
    }

    public List<CompanyServiceDTO> getCompanyAndServiceDetails() {

        List<CompanyServiceDTO> result = new ArrayList<>();

        List<Company> companies = companyRepository.findAll();

        for (Company company : companies) {

            List<PartnerService> services = partnerServiceRepository.findByPartnerEmail(company.getEmail());

            for (PartnerService service : services) {

                result.add(new CompanyServiceDTO(
                        company.getCompanyName(),
                        service.getPrice(),
                        service.getDescription(),
                        service.getServiceName()
                ));
            }
        }

        return result;

    }
}
