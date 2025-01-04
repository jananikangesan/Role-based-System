package com.role.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "companyService")
public class PartnerService {

    @Id
    private String id;
    private String partnerEmail;
    private String serviceName;
    private String description;
    private double price;

    public PartnerService() {
    }

    public PartnerService(String id, String partnerEmail, String serviceName, String description, double price) {
        this.id = id;
        this.partnerEmail = partnerEmail;
        this.serviceName = serviceName;
        this.description = description;
        this.price = price;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPartnerEmail() {
        return partnerEmail;
    }

    public void setPartnerEmail(String partnerEmail) {
        this.partnerEmail = partnerEmail;
    }

    public String getServiceName() {
        return serviceName;
    }

    public void setServiceName(String serviceName) {
        this.serviceName = serviceName;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
