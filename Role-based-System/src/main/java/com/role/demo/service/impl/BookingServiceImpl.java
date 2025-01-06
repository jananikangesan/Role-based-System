package com.role.demo.service.impl;

import com.role.demo.model.Booking;
import com.role.demo.model.PartnerService;
import com.role.demo.repository.BookingRepository;
import com.role.demo.repository.PartnerServiceRepository;
import com.role.demo.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class BookingServiceImpl implements BookingService {
    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private PartnerServiceRepository partnerServiceRepository;


    public Booking createBooking(String clientEmail, String serviceId, LocalDateTime bookingDateTime) {
        PartnerService service = partnerServiceRepository.findById(serviceId)
                .orElseThrow(() -> new RuntimeException("Service not found with ID: " + serviceId));

        Booking booking = new Booking();
        booking.setClientEmail(clientEmail);
        booking.setBookingDateTime(bookingDateTime);
        booking.setServiceCreatedAt(LocalDateTime.now());
        booking.setService(service);

        return bookingRepository.save(booking);
    }
}
