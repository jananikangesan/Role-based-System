package com.role.demo.controller;

import com.role.demo.model.Booking;
import com.role.demo.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.time.LocalDateTime;

@Controller
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @PostMapping("/booking")
    public ResponseEntity<Booking> bookService(@RequestParam String clientEmail, @RequestParam String serviceId, @RequestParam String bookingDateTime) {

        LocalDateTime parsedDateTime;
        try {
            parsedDateTime = LocalDateTime.parse(bookingDateTime);
        } catch (Exception e) {
            throw new RuntimeException("Invalid date-time format. Please use 'YYYY-MM-DDTHH:mm:ss'.");
        }

        return ResponseEntity.ok(bookingService.createBooking(clientEmail, serviceId, parsedDateTime));
    }

}
