package com.example.tax.service

import com.example.tax.model.UserData
import com.example.tax.repository.LoginRepository
import org.springframework.stereotype.Service

@Service
class LoginService(
    val userRepository: LoginRepository
) {

    fun register(userData: UserData): Boolean {
        return try {
            val user = userRepository.findById(userData.username)
            if (user.isEmpty) {
                userRepository.save(userData)
                true
            } else {
                false
            }
        } catch (e: Exception) {
            e.printStackTrace()
            false
        }
    }

    fun login(username: String, password: String): Boolean {
        val storedUser = userRepository.findById(username)
        return storedUser.isPresent && storedUser.get().password == password
    }

    fun forgotPin(username: String, newPassword: String, oldPassword : String): Boolean {
        val storedUser = userRepository.findById(username)
        return if (storedUser.isPresent) {
            val user = storedUser.get()
            if (user.password == oldPassword) {
                user.password = newPassword
                userRepository.save(user)
                true
            } else {
                false
            }
        } else {
            false
        }
    }

    fun getUserByUsername(username: String): UserData? {
        val storedUser = userRepository.findById(username)
        return if (storedUser.isPresent) {
            storedUser.get()
        } else {
            null
        }
    }
}