package com.app.lilaProject.repository;

import com.app.lilaProject.DTO.LoginDto;
import com.app.lilaProject.DTO.UserDto;
import com.app.lilaProject.response.LoginResponse;

public interface IUserService {
    public String addUser(UserDto userDto);

    LoginResponse loginUser(LoginDto loginDto);
}
