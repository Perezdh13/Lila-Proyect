package com.app.lilaProject.service;

import com.app.lilaProject.DTO.LoginDto;
import com.app.lilaProject.DTO.UserDto;
import com.app.lilaProject.entity.CUserModel;
import com.app.lilaProject.repository.IUserRepository;
import com.app.lilaProject.repository.IUserService;
import com.app.lilaProject.response.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class IUserServiceImpl implements IUserService {

    @Autowired
    private IUserRepository IUserRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public String addUser(UserDto userDto) {
        CUserModel CUserModel = new CUserModel(
                userDto.getId(),
                userDto.getUserName(),
                userDto.getEmail(),
                this.passwordEncoder.encode(userDto.getPassword())
        );
        IUserRepository.save(CUserModel);
        return CUserModel.getUserName();
    }
    private LoginDto loginDto;
    @Override
    public LoginResponse loginUser(LoginDto loginDto) {
        String message = "";
        CUserModel loggedCUserModel = IUserRepository.findByEmail(loginDto.getEmail());
        if (loggedCUserModel != null) {
            String password = loginDto.getPassword();
            String dbPassword = loggedCUserModel.getPassword();
            Boolean passwordIsCorrect = passwordEncoder.matches(password, dbPassword);

            if (passwordIsCorrect){
                return new LoginResponse("logged Successfully", true);
            }else {
                return new LoginResponse("Password is not correct", false);
            }
        }else {
            return new LoginResponse("Email incorrect",false);
        }
    }
}