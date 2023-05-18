package com.app.lilaProject.repository;

import com.app.lilaProject.entity.CUserModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUserRepository extends JpaRepository<CUserModel, Long> {
    CUserModel findByEmail(String email);
}
