package com.app.lilaProject.controller;

import com.app.lilaProject.model.request.CModelUser;
import com.app.lilaProject.model.response.CModelUserInfo;
import com.app.lilaProject.repository.IRepositoryUser;
import com.app.lilaProject.share.Dto.CUserDto;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/users")
public class CControllerUser {

    @Autowired
    IRepositoryUser CUserService;
    @GetMapping
    public String getUser() {
        return "Get user data";
    }
    @PostMapping
    public CModelUserInfo createUser(@RequestBody CModelUser userDetails) {

        CModelUserInfo userToReturn = new CModelUserInfo();

        CUserDto cUserDto = new CUserDto();

        BeanUtils.copyProperties(userDetails, cUserDto);

        CUserDto createUser = CUserService.createUser(cUserDto);

        BeanUtils.copyProperties(createUser, userToReturn);

        return userToReturn;
    }
}
