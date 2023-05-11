package com.app.lilaProject.repository;

import com.app.lilaProject.entities.UserEntity;
import com.app.lilaProject.share.Dto.CUserDto;

public interface UserRepositoryInterface {
    void save(UserEntity userEntity);

    public CUserDto createUser(CUserDto user);

}
