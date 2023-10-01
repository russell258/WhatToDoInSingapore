package project.WhatToDoInSingapore.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class AccomodationService {

    @Value("${api.key}")
    private String apiKey;


    // Call TIH API here
    // https://api.stb.gov.sg/content/accommodation/v2/search?searchType=keyword&searchValues=${searchInput}`
}
