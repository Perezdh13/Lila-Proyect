package com.app.lilaProject.service;

import com.app.lilaProject.entities.UserEntity;
import com.app.lilaProject.repository.UserRepositoryInterface;
import com.app.lilaProject.repository.UserRepository;
import com.app.lilaProject.share.Dto.CUserDto;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class UserService implements UserRepositoryInterface {
    @Autowired
    UserRepository userRepository;
    @Autowired
    BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public void save(UserEntity userEntity) {

    }

    @Override
    public CUserDto createUser(CUserDto user) {

        if (userRepository.findByEmail(user.getEmail()) != null)
            throw new RuntimeException ("El correo electronico ya existe");

        UserEntity userEntity = new UserEntity();
        BeanUtils.copyProperties(user, userEntity);

        userEntity.setEncryptedPassword(
                bCryptPasswordEncoder.encode(user.getPassword()));

        UUID userId = UUID.randomUUID();
        userEntity.setUserId(userId.toString());

        UserEntity storeUserDetails = userRepository.save(userEntity);

        CUserDto userToReturn = new CUserDto();
        BeanUtils.copyProperties(storeUserDetails, userToReturn);


        return userToReturn;
    }
}
