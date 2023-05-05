package com.app.lilaProject.controller;

import com.app.lilaProject.Model.CModelWords;
import com.app.lilaProject.service.CServiceWords;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/words")
@CrossOrigin("*")
public class CControllerWords {
    @Autowired
    CServiceWords cServiceWords;


    @GetMapping("")
        private List <CModelWords> readWords() {
        return cServiceWords.readWords();
        }
        @PostMapping("")
    private void createwords(@RequestBody CModelWords model) {cServiceWords.createWords(model); }
}
