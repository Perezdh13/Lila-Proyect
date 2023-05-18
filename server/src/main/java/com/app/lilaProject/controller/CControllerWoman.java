package com.app.lilaProject.controller;


import com.app.lilaProject.Model.CModelWomen;
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
public class CControllerWoman {

    @Autowired
    CServiceWoman cServiceWoman;

    @GetMapping("")
    public List<CModelWomen> readConsultation(){
        return cServiceWoman.readConsultation();
    }
    @GetMapping("/{id}")
    public Optional<CModelWomen> readConsultationId(@PathVariable("id") Long id){
        return cServiceWoman.readConsultationId(id);
    }

    @PostMapping("")
    public void createConsultation(@RequestBody CModelWomen model){
        cServiceWoman.createConsultation(model);

    }
    @PutMapping("")
   public void updateConsultation(@RequestBody CModelWomen model){
        cServiceWoman.updateConsultation(model);
    }
    @DeleteMapping("/{id}")
    public CModelWomen deleteWomen(@PathVariable Long id) {
       return cServiceWoman.deleteWoman(id);
    }
}
