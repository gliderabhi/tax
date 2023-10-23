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
            userRepository.save(userData)
            true
        } catch (e: Exception) {
            e.printStackTrace()
            false
        }
    }

    fun login(username: String, password: String): Boolean {
        val storedUser = userRepository.findById(username)
        return storedUser.isPresent && storedUser.get().password == password
    }

    fun forgotPin(username: String, newPassword: String): Boolean {
        val storedUser = userRepository.findById(username)
        if (storedUser.isPresent) {
            val user = storedUser.get()
            user.password = newPassword
            userRepository.save(user)
            return true
        }
        return false
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