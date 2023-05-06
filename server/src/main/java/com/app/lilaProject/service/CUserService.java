package com.app.lilaProject.service;

import com.app.lilaProject.entities.CEntityUser;
import com.app.lilaProject.repository.IRepositoryUser;
import com.app.lilaProject.repository.IRepositoryUsers;
import com.app.lilaProject.share.Dto.CUserDto;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class CUserService implements IRepositoryUser {
    @Autowired
    IRepositoryUsers repositoryUsers;
    @Autowired
    BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public void save(CEntityUser cEntityUser) {
    }
    @Override
    public CUserDto createUser(CUserDto user) {

        if (repositoryUsers.findByEmail(user.getEmail()) != null)
            throw new RuntimeException("El correo electronico ya existe");

        CEntityUser cEntityUser = new CEntityUser();
        BeanUtils.copyProperties(user, cEntityUser);

        cEntityUser.setEncryptedPassword(bCryptPasswordEncoder.encode(user.getPassword()));

        UUID userId = UUID.randomUUID();
        cEntityUser.setUserId(userId.toString());

        CEntityUser storeUserDetails = repositoryUsers.save(cEntityUser);

        CUserDto userToReturn = new CUserDto();
        BeanUtils.copyProperties(storeUserDetails, userToReturn);


        return userToReturn;
    }
}
