package com.example.tax.controller

import com.example.tax.model.MonthlyReport
import com.example.tax.repository.MonthlyReportRepository
import com.example.tax.service.MontlyReportsService
import org.springframework.web.bind.annotation.*
import java.time.LocalDate

@RestController
class MonthlyReportController(
    val monthlyReportsService: MontlyReportsService
) {

    @PostMapping("/insert")
    fun insertMonthlyReport(@RequestBody report: MonthlyReport) {
        monthlyReportsService.insertMonthlyReport(report)
    }

    @GetMapping("/filter")
    fun getMonthlyReportsByDateRange(
        @RequestParam startDate: String,
        @RequestParam endDate: String
    ): List<MonthlyReport> {
        return monthlyReportsService.getMonthlyReportsByDateRange(startDate, endDate)
    }
}