package com.example.tax.repository

import com.example.tax.model.MonthlyReport
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.CrudRepository
import org.springframework.data.repository.query.Param
import java.time.LocalDate
import java.time.Month

interface MonthlyReportRepository : JpaRepository<MonthlyReport, Long?> {
    @Query("SELECT e FROM MonthlyReport e WHERE e.reportDate BETWEEN :startDate AND :endDate ORDER BY e.reportDate DESC")
    fun findByDateBetween(
        @Param("startDate") startDate: LocalDate,
        @Param("endDate") endDate: LocalDate
    ): List<MonthlyReport>
}