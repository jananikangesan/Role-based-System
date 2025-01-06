package com.role.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document(collection = "bookings")
public class Booking {
    @Id
    private String id;
    private String clientEmail;
    private LocalDateTime bookingDateTime;
    private LocalDateTime serviceCreatedAt;
    private PartnerService Service;

    public Booking(String id, String clientEmail, LocalDateTime bookingDateTime, LocalDateTime serviceCreatedAt, PartnerService service) {
        this.id = id;
        this.clientEmail = clientEmail;
        this.bookingDateTime = bookingDateTime;
        this.serviceCreatedAt = serviceCreatedAt;
        Service = service;
    }

    public Booking() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getClientEmail() {
        return clientEmail;
    }

    public void setClientEmail(String clientEmail) {
        this.clientEmail = clientEmail;
    }

    public LocalDateTime getBookingDateTime() {
        return bookingDateTime;
    }

    public void setBookingDateTime(LocalDateTime bookingDateTime) {
        this.bookingDateTime = bookingDateTime;
    }

    public LocalDateTime getServiceCreatedAt() {
        return serviceCreatedAt;
    }

    public void setServiceCreatedAt(LocalDateTime serviceCreatedAt) {
        this.serviceCreatedAt = serviceCreatedAt;
    }

    public PartnerService getService() {
        return Service;
    }

    public void setService(PartnerService service) {
        Service = service;
    }

    @Override
    public String toString() {
        return "Booking{" +
                "id='" + id + '\'' +
                ", clientEmail='" + clientEmail + '\'' +
                ", bookingDateTime=" + bookingDateTime +
                ", serviceCreatedAt=" + serviceCreatedAt +
                ", Service=" + Service +
                '}';
    }
}


