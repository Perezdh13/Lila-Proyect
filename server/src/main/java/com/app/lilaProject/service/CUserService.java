package com.app.lilaProject.service;

import com.app.lilaProject.entities.CEntityUser;
import com.app.lilaProject.repository.IRepositoryUser;
import com.app.lilaProject.repository.IRepositoryUsers;
import com.app.lilaProject.share.Dto.CUserDto;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CUserService implements IRepositoryUser {
    @Autowired
    IRepositoryUsers repositoryUsers;

    @Override
    public void save(CEntityUser cEntityUser) {

    }

    @Override
    public CUserDto createUser(CUserDto user) {

        CEntityUser cEntityUser = new CEntityUser();
        BeanUtils.copyProperties(user, cEntityUser);

        cEntityUser.setEncryptedPassword("test encrypted");
        cEntityUser.setUserId("Test ID public");

        CEntityUser storeUserDetails = repositoryUsers.save(cEntityUser);

        CUserDto userToReturn = new CUserDto();
        BeanUtils.copyProperties(storeUserDetails, userToReturn);


        return userToReturn;
    }
}
