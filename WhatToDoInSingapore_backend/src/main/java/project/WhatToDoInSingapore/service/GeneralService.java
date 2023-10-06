package project.WhatToDoInSingapore.service;

import java.io.StringReader;

import org.springframework.stereotype.Service;

import jakarta.json.Json;
import jakarta.json.JsonObject;
import jakarta.json.JsonReader;

@Service
public class GeneralService {
    
    public JsonObject parseJsonString(String jsonString) {
        try {
            JsonReader jsonReader = Json.createReader(new StringReader(jsonString));
            return jsonReader.readObject();
        }
        catch(Exception e) {
            System.out.println("There was an error parsing the given string to JSON: " + jsonString + "\n Error: " + e.getMessage());
            return null;
        }
    }
}
