package project.WhatToDoInSingapore.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import jakarta.json.JsonObject;
import project.WhatToDoInSingapore.service.AccomodationService;

@Controller
@RequestMapping("/api")
public class AccomodationRestController {

    @Autowired
    private AccomodationService accommodationService;


    @GetMapping("/accomodation")
    public ResponseEntity<String> searchAccomodationByKeyWord(
        @RequestParam String searchString
    ) {
        JsonObject jo = accommodationService.getAccomodationsBySearch(searchString);
        return ResponseEntity.ok(jo.toString());
    }
    
}
