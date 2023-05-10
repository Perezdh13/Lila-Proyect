package com.app.lilaProject.Service;

import com.app.lilaProject.Model.CModelQuestions;
import com.app.lilaProject.repository.IRepositoryQuestions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CServiceQuestions {
    @Autowired
    private IRepositoryQuestions iRepositoryQuestions;



    public void createQuestion(CModelQuestions model){
        iRepositoryQuestions.save(model);
    }

    public List<CModelQuestions> readQuestion(){
        List<CModelQuestions> models = new ArrayList<CModelQuestions>(iRepositoryQuestions.findAll());
        return models;

    }
    public Optional<CModelQuestions> readQuestionId(Long id){
        Optional<CModelQuestions> model = iRepositoryQuestions.findById(id);
        return model;
    }

public String deleteUserById(Long id) {
    try {
        iRepositoryQuestions.deleteById(id);
        return "Borrado con éxito" + id;
    } catch (Exception error) {
        return "No se ha podido borrar" + error;
    }
}


}
