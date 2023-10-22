package com.example.tax.controller

import com.example.tax.model.User
import com.example.tax.service.LoginService
import org.springframework.web.bind.annotation.*

@RestController
class LoginController(
    private val userService: LoginService
) {

    @PostMapping("/register")
    fun register(@RequestBody user: User) {
        userService.register(user)
    }

    @PostMapping("/login")
    fun login(@RequestBody user: User): String {
        return if (userService.login(user.username, user.password)) {
            "Login successful"
        } else {
            "Login failed"
        }
    }

    @PostMapping("/forgot-pin")
    fun forgotPin(@RequestBody user: User, @RequestParam newPassword: String): String {
        return if (userService.forgotPin(user.username, newPassword)) {
            "Password updated successfully"
        } else {
            "Password update failed"
        }
    }

}