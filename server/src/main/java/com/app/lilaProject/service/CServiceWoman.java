package com.app.lilaProject.service;

import com.app.lilaProject.Model.Women;
import com.app.lilaProject.repository.IRepositoryWoman;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CServiceWoman {
    @Autowired
    private IRepositoryWoman iRepositoryWoman;

    public void createConsultation(Women model){
        iRepositoryWoman.save(model);
    }

    public List<Women> readConsultation(){
        List<Women> models = new ArrayList<Women>(iRepositoryWoman.findAll());
        return models;

    }
    public Optional<Women> readConsultationId(Long id){
        Optional<Women> model = iRepositoryWoman.findById(id);
        return model;
    }

    public void updateConsultation(Women model, Long id){
        model.setId(id);
        iRepositoryWoman.save(model);

    }

    public void deleteConsultation(Long id) {
        iRepositoryWoman.deleteById(id);
    }
}
