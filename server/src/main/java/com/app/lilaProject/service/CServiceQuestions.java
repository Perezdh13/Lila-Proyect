package com.app.lilaProject.Service;

import com.app.lilaProject.entity.CQuestionsModel;
import com.app.lilaProject.repository.IQuestionsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CServiceQuestions {
    @Autowired
    private IQuestionsRepository iQuestionsRepository;



    public void createQuestion(CQuestionsModel model){
        iQuestionsRepository.save(model);
    }

    public List<CQuestionsModel> readQuestion(){
        List<CQuestionsModel> models = new ArrayList<CQuestionsModel>(iQuestionsRepository.findAll());
        return models;

    }
    public Optional<CQuestionsModel> readQuestionId(Long id){
        Optional<CQuestionsModel> model = iQuestionsRepository.findById(id);
        return model;
    }

    public CQuestionsModel deleteQuestion(Long id) {
        iQuestionsRepository.deleteById(id);
        return null;
    }

    public  void updateQuestion(CQuestionsModel model){
        iQuestionsRepository.save(model);
    }
}
