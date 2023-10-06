package project.WhatToDoInSingapore.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import jakarta.json.JsonObject;

@Service
public class AccomodationService {

    @Value("${api.key}")
    private String apiKey;

    @Autowired
    private GeneralService generalService;
    
    private RestTemplate restTemplate = new RestTemplate();

    private final String baseUrl = "https://api.stb.gov.sg/content/accommodation/v2/search";
    private final String defaultSearch = "cosy";

    public JsonObject getAccomodationsBySearch(String searchString) {
        String searchParam = "";
        if (searchString.length() == 0) {
            searchParam = defaultSearch;
        }
        else {
            searchParam = searchString;
        }

        String url = UriComponentsBuilder.fromHttpUrl(baseUrl)
                                        .queryParam("searchType", "keyword")
                                        .queryParam("searchValues", searchParam)
                                        .queryParam("sort", "name")
                                        .queryParam("sortOrder", "asc")
                                        .toUriString();

        HttpHeaders headers = new HttpHeaders();
        headers.set("X-Api-Key", apiKey);

        // Create an HttpEntity with the headers
        HttpEntity<String> entity = new HttpEntity<>(headers);

        String result = restTemplate.exchange(url, HttpMethod.GET, entity, String.class).getBody();
        return generalService.parseJsonString(result);

    }
}
