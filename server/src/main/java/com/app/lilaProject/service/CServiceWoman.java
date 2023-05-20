package com.app.lilaProject.service;

import com.app.lilaProject.entity.CWomenModel;
import com.app.lilaProject.repository.IWomanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CServiceWoman {
    @Autowired
    private IWomanRepository iWomanRepository;

    public void createConsultation(CWomenModel model){
        iWomanRepository.save(model);
    }

    public List<CWomenModel> readConsultation(){
        List<CWomenModel> models = new ArrayList<CWomenModel>(iWomanRepository.findAll());
        return models;

    }
    public Optional<CWomenModel> readConsultationId(Long id){
        Optional<CWomenModel> model = iWomanRepository.findById(id);
        return model;
    }

    public void updateConsultation(CWomenModel model){
        iWomanRepository.save(model);

    }

    public CWomenModel deleteWoman(Long id) {
        iWomanRepository.deleteById(id);
        return null;
    }


}
