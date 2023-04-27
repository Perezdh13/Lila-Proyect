package com.app.lilaProject.controller;

import com.app.lilaProject.Model.CModelWoman;
import com.app.lilaProject.service.CServiceWoman;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.app.lilaProject.DTO.CUserDto;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/woman")
@CrossOrigin("*")
public class CControllerWoman {
    @Autowired
    CServiceWoman cServiceWoman;

    @GetMapping("")
    private List<CModelWoman> readWoman(){
        return cServiceWoman.readWoman();
    }
    @GetMapping("/{id}")
    private Optional<CModelWoman> readWomanId(@PathVariable("id") Long id){
        return cServiceWoman.readWomanId(id);
    }

    @PostMapping("")
    private void createWoman(@RequestBody CUserDto userDto){
       String id = CServiceWoman.addUser(userDto);

    }
    @PutMapping("/{id}")
    private void updateWoman(@RequestBody CModelWoman model,@PathVariable("id")Long id){
        cServiceWoman.updateWoman(model,id);
    }
}
