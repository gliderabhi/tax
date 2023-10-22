package com.example.tax.repository

import com.example.tax.model.User
import org.springframework.data.repository.CrudRepository

interface LoginRepository : CrudRepository<User, String> {
}