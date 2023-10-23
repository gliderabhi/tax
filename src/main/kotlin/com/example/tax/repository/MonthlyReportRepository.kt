package com.example.tax.repository

import com.example.tax.model.MonthlyReport
import org.springframework.data.repository.CrudRepository
import java.time.LocalDate

interface MonthlyReportRepository : CrudRepository<MonthlyReport, Long?> {
    fun findByReportDateBetween(startDate: LocalDate, endDate: LocalDate): List<MonthlyReport>
}