package com.role.demo.repository;

import com.role.demo.model.Booking;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepository extends MongoRepository<Booking,String> {
}
