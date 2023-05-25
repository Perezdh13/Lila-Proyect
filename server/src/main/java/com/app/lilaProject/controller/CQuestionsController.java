package com.app.lilaProject.Controller;

import com.app.lilaProject.entity.CQuestionsModel;
import com.app.lilaProject.Service.CServiceQuestions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.service.annotation.DeleteExchange;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/questions")
@CrossOrigin("*")
public class CQuestionsController {
    @Autowired
    CServiceQuestions cServiceQuestions;

    @GetMapping("")
    private List<CQuestionsModel> readQuestion() {

        return cServiceQuestions.readQuestion();
    }

    @GetMapping("/{id}")
    public Optional<CQuestionsModel> readQuestionById(@PathVariable("id") long id) {
        return cServiceQuestions.readQuestionId(id);
    }


    @PostMapping("")
    private void createQuestion(@RequestBody CQuestionsModel model) {
        cServiceQuestions.createQuestion(model);
    }


    @PutMapping("")
    public void updateQuestion(@RequestBody CQuestionsModel model) {
        cServiceQuestions.updateQuestion(model);
    }

    @DeleteMapping("/{id}")
    public CQuestionsModel deleteQuestion(@PathVariable Long id){
        return cServiceQuestions.deleteQuestion(id);
    }
}