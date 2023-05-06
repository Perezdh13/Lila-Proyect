package com.app.lilaProject.repository;

import com.app.lilaProject.entities.CEntityUser;
import com.app.lilaProject.share.Dto.CUserDto;

public interface IRepositoryUser {
    void save(CEntityUser cEntityUser);

    public CUserDto createUser(CUserDto user);

}
