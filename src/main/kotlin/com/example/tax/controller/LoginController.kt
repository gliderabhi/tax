package com.example.tax.controller

import com.example.tax.model.UserData
import com.example.tax.service.LoginService
import org.springframework.web.bind.annotation.*

@RestController
class LoginController(
    val userService: LoginService
) {

    @PostMapping("/register")
    fun register(@RequestBody userData: UserData): Boolean {
        return userService.register(userData)
    }

    @PostMapping("/login")
    fun login(@RequestBody userData: UserData): String {
        return if (userService.login(userData.username, userData.password)) {
            "Login successful"
        } else {
            "Login failed"
        }
    }

    @PostMapping("/forgot-pin")
    fun forgotPin(@RequestBody userData: UserData, @RequestParam newPassword: String): String {
        return if (userService.forgotPin(userData.username, newPassword)) {
            "Password updated successfully"
        } else {
            "Password update failed"
        }
    }

}