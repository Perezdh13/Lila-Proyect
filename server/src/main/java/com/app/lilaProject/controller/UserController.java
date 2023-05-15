package com.app.lilaProject.controller;

import com.app.lilaProject.DTO.LoginDto;
import com.app.lilaProject.DTO.UserDto;

import com.app.lilaProject.repository.UserService;
import com.app.lilaProject.response.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("user")
public class UserController {
    @Autowired
    UserService userService;

    @PostMapping(path = "/save")
    public String saveUser(@RequestBody UserDto userDto) {
        String id = userService.addUser(userDto);

        return id;

    }
    @PostMapping(path = "/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginDto loginDto) {
        LoginResponse loginResponse = userService.loginUser(loginDto);
                return ResponseEntity.ok(loginResponse);
    }
}
