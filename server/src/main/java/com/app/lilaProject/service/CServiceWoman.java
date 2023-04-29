package com.app.lilaProject.service;

import com.app.lilaProject.Model.CModelWomen;
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

    public void createConsultation(CModelWomen model){
        iRepositoryWoman.save(model);
    }

    public List<CModelWomen> readConsultation(){
        List<CModelWomen> models = new ArrayList<CModelWomen>(iRepositoryWoman.findAll());
        return models;

    }
    public Optional<CModelWomen> readConsultationId(Long id){
        Optional<CModelWomen> model = iRepositoryWoman.findById(id);
        return model;
    }

    public void updateConsultation(CModelWomen model, Long id){
        model.setId(id);
        iRepositoryWoman.save(model);

    }

    public void deleteConsultation(Long id) {
        iRepositoryWoman.deleteById(id);
    }
}
