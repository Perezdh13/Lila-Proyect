package com.app.lilaProject.service;

import com.app.lilaProject.DTO.LoginDto;
import com.app.lilaProject.DTO.UserDto;
import com.app.lilaProject.entity.User;
import com.app.lilaProject.repository.UserRepository;
import com.app.lilaProject.repository.UserService;
import com.app.lilaProject.response.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public String addUser(UserDto userDto) {
        User user = new User(
                userDto.getId(),
                userDto.getUserName(),
                userDto.getEmail(),
                this.passwordEncoder.encode(userDto.getPassword())
        );
        userRepository.save(user);
        return user.getUserName();
    }
    private LoginDto loginDto;
    @Override
    public LoginResponse loginUser(LoginDto loginDto) {
        String message = "";
        User loggedUser = userRepository.findByEmail(loginDto.getEmail());
        if (loggedUser != null) {
            String password = loginDto.getPassword();
            String dbPassword = loggedUser.getPassword();
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