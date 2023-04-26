package com.app.lilaProject.controller;

import com.app.lilaProject.Model.CModelWoman;
import com.app.lilaProject.service.CServiceWoman;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/woman")
@CrossOrigin("*")
public class CControllerWoman {
    @Autowired
    CServiceWoman cServiceWoman;

    @GetMapping("")
    private List<CModelWoman> readConsultation(){
        return cServiceWoman.readConsultation();
    }
    @GetMapping("/{id}")
    private Optional<CModelWoman> readConsultationId(@PathVariable("id") Long id){
        return cServiceWoman.readConsultationId(id);
    }

    @PostMapping("")
    private void createConsultation(@RequestBody CModelWoman model){
        cServiceWoman.createConsultation(model);

    }
    @PutMapping("/{id}")
    private void updateConsultation(@RequestBody CModelWoman model,@PathVariable("id")Long id){
        cServiceWoman.updateConsultation(model,id);
    }
}
