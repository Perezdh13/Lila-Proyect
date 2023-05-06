package com.app.lilaProject.repository;

import com.app.lilaProject.entities.CEntityUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IRepositoryUsers extends JpaRepository<CEntityUser, Long> {
}
