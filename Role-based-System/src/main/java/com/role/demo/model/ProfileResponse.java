package com.role.demo.model;

public class ProfileResponse {
    private String name;
    private String email;
    private String companyName;
    private String address;
    private String contactNumber;

    public ProfileResponse(String name, String email, String companyName, String address, String contactNumber) {
        this.name = name;
        this.email = email;
        this.companyName = companyName;
        this.address = address;
        this.contactNumber = contactNumber;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }
}
