package com.role.demo.model;

public class CompanyServiceDTO {

    private String companyName;
    private String serviceName;
    private String description;
    private double price;

    public CompanyServiceDTO(String companyName, double price, String description, String serviceName) {
        this.companyName = companyName;
        this.price = price;
        this.description = description;
        this.serviceName = serviceName;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getServiceName() {
        return serviceName;
    }

    public void setServiceName(String serviceName) {
        this.serviceName = serviceName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
