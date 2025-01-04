package com.role.demo.repository;

import com.role.demo.model.PartnerService;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PartnerServiceRepository extends MongoRepository<PartnerService,String> {
}
