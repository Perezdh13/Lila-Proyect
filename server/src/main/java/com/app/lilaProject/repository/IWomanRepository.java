package com.app.lilaProject.repository;

import com.app.lilaProject.entity.CWomenModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IWomanRepository extends JpaRepository<CWomenModel, Long> {
}
