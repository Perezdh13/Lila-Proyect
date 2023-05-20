package com.app.lilaProject.controller;

import com.app.lilaProject.entity.CWomenModel;
import com.app.lilaProject.service.CServiceWoman;
import jakarta.persistence.Access;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.naming.ldap.Control;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/woman")
@CrossOrigin("*")
public class CWomanController {

    @Autowired
    CServiceWoman cServiceWoman;

    @GetMapping("")
    public List<CWomenModel> readConsultation(){
        return cServiceWoman.readConsultation();
    }
    @GetMapping("/{id}")
    public Optional<CWomenModel> readConsultationId(@PathVariable("id") Long id){
        return cServiceWoman.readConsultationId(id);
    }

    @PostMapping("")
    public void createConsultation(@RequestBody CWomenModel model){
        cServiceWoman.createConsultation(model);

    }
    @PutMapping("")
    public void updateConsultation(@RequestBody CWomenModel model){
        cServiceWoman.updateConsultation(model);
    }
    @DeleteMapping("/{id}")
    public CWomenModel deleteWomen(@PathVariable Long id) {
        return cServiceWoman.deleteWoman(id);
    }
}