package com.example.tax.model

import jakarta.persistence.Entity
import jakarta.persistence.Id

@Entity
data class UserData(
    @Id
    val username: String = "",
    var password: String = "",
    val email: String = ""
)
