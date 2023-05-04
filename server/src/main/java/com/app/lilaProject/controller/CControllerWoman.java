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
    CServiceWoman cserviceWoman;

    @GetMapping("")
    private List<CModelWoman> readConsultation(){
        return cserviceWoman.readConsultation();
    }
    @GetMapping("/{id}")
    private Optional<CModelWoman> readConsultationId(@PathVariable("id") Long id){
        return cserviceWoman.readConsultationId(id);
    }

    @PostMapping("")
    private void createConsultation(@RequestBody CModelWoman model){
        cserviceWoman.createConsultation(model);

    }
    @PutMapping("/{id}")
    private void updateConsultation(@RequestBody CModelWoman model,@PathVariable("id")Long id){
        cserviceWoman.updateConsultation(model,id);
    }


    @DeleteMapping("/{id}")
    private void deleteConsultation(@PathVariable("id")Long id){
        cserviceWoman.deleteConsultation(id);
    }
}
