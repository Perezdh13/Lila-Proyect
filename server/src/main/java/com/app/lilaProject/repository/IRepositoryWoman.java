package com.app.lilaProject.repository;

import com.app.lilaProject.Model.CModelWomen;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface IRepositoryWoman extends MongoRepository<CModelWomen, Long> {
}
