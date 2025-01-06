package com.role.demo.service.impl;

import com.role.demo.model.PartnerService;
import com.role.demo.repository.PartnerServiceRepository;
import com.role.demo.service.PartnerServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PartnerServiceServiceImpl implements PartnerServiceService {

    @Autowired
    private PartnerServiceRepository partnerServiceRepository;


    public String createService(PartnerService partnerService) {
        try {
            partnerServiceRepository.save(partnerService);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return "Service created successfully";
    }


    public List<PartnerService> getService(String email) {
        List<PartnerService> partnerServiceList;
        try {
            partnerServiceList=partnerServiceRepository.findByPartnerEmail(email);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return partnerServiceList;
    }


    public String deleteService(String id) {

        try {
            PartnerService partnerService = partnerServiceRepository.findById(id).orElse(null);

            if(partnerService!= null){
                partnerServiceRepository.deleteById(id);
                return "Service deleted successfully";
            }

        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return "Service not found";
    }

    public String updateService(String id, PartnerService partnerService) {
        try {
            PartnerService service = partnerServiceRepository.findById(id).orElse(null);

            if(service == null){
                return "Service not found";
            }else{
                service.setServiceName(partnerService.getServiceName());
                service.setDescription(partnerService.getDescription());
                service.setPrice(partnerService.getPrice());

                partnerServiceRepository.save(service);
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return "Service updated successfully";
    }


    public PartnerService getServiceById(String id) {
        PartnerService service = partnerServiceRepository.findById(id).orElse(null);
        return service;
    }

    @Override
    public List<PartnerService> getAllService() {
        List<PartnerService> partnerServiceList;
        try {
            partnerServiceList=partnerServiceRepository.findAll();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return partnerServiceList;
    }
}
