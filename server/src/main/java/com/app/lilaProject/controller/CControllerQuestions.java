package com.app.lilaProject.Controller;

import com.app.lilaProject.Model.CModelQuestions;
import com.app.lilaProject.Service.CServiceQuestions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/questions")
@CrossOrigin("*")
public class CControllerQuestions {
    @Autowired
    CServiceQuestions cServiceQuestions;

    @GetMapping("")
    private List <CModelQuestions> readQuestion() {

        return cServiceQuestions.readQuestion();
    }

    @PostMapping("")
    private void createQuestion(@RequestBody CModelQuestions model){
        cServiceQuestions.createQuestion(model);
    }

    @DeleteMapping(path = "/{id}")
public String deleteConsultation(@PathVariable Long id) { return cServiceQuestions.deleteUserById(id);
}


}
