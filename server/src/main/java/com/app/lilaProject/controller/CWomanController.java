package com.app.lilaProject.Controller;


import com.app.lilaProject.entity.CWomenModel;
import com.app.lilaProject.service.CServiceWoman;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/woman")
@CrossOrigin("*")
public class CWomanController {
    @Autowired
    CServiceWoman cServiceWoman;

    @GetMapping("")
    private List<CWomenModel> readConsultation(){
        return cServiceWoman.readConsultation();
    }
    @GetMapping("/{id}")
    private Optional<CWomenModel> readConsultationId(@PathVariable("id") Long id){
        return cServiceWoman.readConsultationId(id);
    }

    @PostMapping("")
    private void createConsultation(@RequestBody CWomenModel model){
        cServiceWoman.createConsultation(model);

    }
    @PutMapping("/{id}")
    private void updateConsultation(@RequestBody CWomenModel model, @PathVariable("id")Long id){
        cServiceWoman.updateConsultation(model,id);
    }
}
