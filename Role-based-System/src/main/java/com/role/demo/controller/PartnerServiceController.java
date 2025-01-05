package com.role.demo.controller;

import com.role.demo.model.PartnerService;
import com.role.demo.service.PartnerServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/partner-service")
public class PartnerServiceController {

    @Autowired
    private PartnerServiceService partnerServiceService;

    @PostMapping("/create")
    public ResponseEntity<String> createService(@RequestBody PartnerService partnerService){
        return ResponseEntity.ok(partnerServiceService.createService(partnerService));

    }
    @GetMapping("/getAll")
    public ResponseEntity<List<PartnerService>> getService(){
        return ResponseEntity.ok(partnerServiceService.getService());
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteService(@PathVariable String id){
        return ResponseEntity.ok(partnerServiceService.deleteService(id));
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<String> updateService(@PathVariable String id,@RequestBody PartnerService partnerService){
        return ResponseEntity.ok(partnerServiceService.updateService(id,partnerService));
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<PartnerService> getServiceById(@PathVariable String id){
        return ResponseEntity.ok(partnerServiceService.getServiceById(id));
    }


}

