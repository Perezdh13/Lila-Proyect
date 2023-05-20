package com.app.lilaProject.Controller;

import com.app.lilaProject.entity.CQuestionsModel;
import com.app.lilaProject.Service.CServiceQuestions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/questions")
@CrossOrigin("*")
public class CQuestionsController {
    @Autowired
    CServiceQuestions cServiceQuestions;

    @GetMapping("")
    private List <CQuestionsModel> readQuestion() {

        return cServiceQuestions.readQuestion();
    }

    @PostMapping("")
    private void createQuestion(@RequestBody CQuestionsModel model){
        cServiceQuestions.createQuestion(model);
    }
}
