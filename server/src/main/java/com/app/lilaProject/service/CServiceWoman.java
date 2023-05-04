package com.app.lilaProject.service;

import com.app.lilaProject.Model.CModelWoman;
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

    public void createConsultation(CModelWoman model){
        iRepositoryWoman.save(model);
    }

    public List<CModelWoman> readConsultation(){
        List<CModelWoman> models = new ArrayList<CModelWoman>(iRepositoryWoman.findAll());
        return models;

    }
    public Optional<CModelWoman> readConsultationId(Long id){
        Optional<CModelWoman> model = iRepositoryWoman.findById(id);
        return model;
    }

    public void updateConsultation(CModelWoman model, Long id){
        model.setId(id);
        iRepositoryWoman.save(model);

    }

    public void deleteConsultation(Long id){
        iRepositoryWoman.deleteById(id);


    }
    public void setiRepository(IRepositoryWoman iRepository) {
        this.iRepositoryWoman = iRepository;
    }
}
