package com.app.lilaProject.controller;

import com.app.lilaProject.model.request.UserDetailRequestModel;
import com.app.lilaProject.model.response.CModelUserInfo;
import com.app.lilaProject.repository.UserRepositoryInterface;
import com.app.lilaProject.share.Dto.CUserDto;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    UserRepositoryInterface userService;
    @GetMapping
    public String getUser() {
        return "Get user data";
    }
    @PostMapping
    public CModelUserInfo createUser(@RequestBody UserDetailRequestModel userDetails) {

        CModelUserInfo userToReturn = new CModelUserInfo();

        CUserDto cUserDto = new CUserDto();

        BeanUtils.copyProperties(userDetails, cUserDto);

        CUserDto createUser = userService.createUser(cUserDto);

        BeanUtils.copyProperties(createUser, userToReturn);

        return userToReturn;
    }
}
