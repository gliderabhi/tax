package com.example.tax.service

import com.example.tax.model.MonthlyReport
import com.example.tax.repository.MonthlyReportRepository
import org.springframework.stereotype.Service
import java.time.LocalDate

@Service
class MontlyReportsService(
    private val reportRepository: MonthlyReportRepository
) {

    fun insertMonthlyReport(report: MonthlyReport) {
        reportRepository.save(report)
    }

    fun getMonthlyReportsByDateRange(
        startDate: String,
        endDate: String
    ): List<MonthlyReport> {
        val startLocalDate = LocalDate.parse(startDate)
        val endLocalDate = LocalDate.parse(endDate)
        return reportRepository.findByReportDateBetween(startLocalDate, endLocalDate)
    }
}