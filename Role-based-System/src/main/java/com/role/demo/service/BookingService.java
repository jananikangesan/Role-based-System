package com.role.demo.service;

import com.role.demo.model.Booking;

import java.time.LocalDateTime;

public interface BookingService {
    public Booking createBooking(String clientEmail, String serviceId, LocalDateTime bookingDateTime);
}
