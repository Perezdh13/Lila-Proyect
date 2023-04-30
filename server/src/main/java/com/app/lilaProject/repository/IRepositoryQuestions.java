package com.app.lilaProject.repository;

import com.app.lilaProject.Model.CModelQuestions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface IRepositoryQuestions extends MongoRepository<CModelQuestions, Long> {
}
