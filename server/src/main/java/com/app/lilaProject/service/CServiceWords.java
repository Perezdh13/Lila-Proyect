package com.app.lilaProject.service;

import com.app.lilaProject.Model.CModelQuestions;
import com.app.lilaProject.Model.CModelWords;
import com.app.lilaProject.repository.IRepositoryWords;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CServiceWords {
    @Autowired
    private IRepositoryWords iRepositoryWords;



    public void createQuestion(CModelWords model) { iRepositoryWords.save(model);}

    public List<CModelWords> readWords() {
        List<CModelWords> models = new ArrayList<>(iRepositoryWords.findAll());
        return models;
    }

    public Optional<CModelWords> readWordById(Long id) {
        Optional<CModelWords> model =iRepositoryWords.findById(id);
        return model;


    }

    public void createWords(CModelWords model) {
    }
}

