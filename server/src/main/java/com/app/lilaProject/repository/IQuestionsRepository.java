package com.app.lilaProject.repository;

import com.app.lilaProject.entity.CQuestionsModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IQuestionsRepository extends JpaRepository<CQuestionsModel, Long> {
}
