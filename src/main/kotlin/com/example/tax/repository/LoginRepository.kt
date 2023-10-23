package com.example.tax.repository

import com.example.tax.model.UserData
import org.springframework.data.repository.CrudRepository

interface LoginRepository : CrudRepository<UserData, String> {
}