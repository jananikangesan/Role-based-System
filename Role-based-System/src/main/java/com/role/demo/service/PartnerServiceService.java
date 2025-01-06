package com.role.demo.service;

import com.role.demo.model.PartnerService;

import java.util.List;

public interface PartnerServiceService {

    public String createService(PartnerService partnerService);
    public List<PartnerService> getService(String email);
    public String deleteService(String id);
    public String updateService(String id, PartnerService partnerService);
    public PartnerService getServiceById(String id);
    public List<PartnerService>  getAllService();
}
