package com.app.lilaProject.controller;

import com.app.lilaProject.DTO.LoginDto;
import com.app.lilaProject.DTO.UserDto;

import com.app.lilaProject.repository.IUserService;
import com.app.lilaProject.response.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("user")
public class CUserController {
    @Autowired
    IUserService IUserService;

    @PostMapping(path = "/save")
    public String saveUser(@RequestBody UserDto userDto) {
        String id = IUserService.addUser(userDto);

        return id;

    }
    @PostMapping(path = "/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginDto loginDto) {
        LoginResponse loginResponse = IUserService.loginUser(loginDto);
                return ResponseEntity.ok(loginResponse);
    }
}
