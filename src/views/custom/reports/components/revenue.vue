<template>
  <div class="dashboard-container">
    <date-range />
    <el-container class="revenue-container">
      <report-message />
    </el-container>

    <el-container class="revenue-container">
      <r-m />
    </el-container>

    <el-container class="revenue-container">
      <revenue-chart class="heightOfChart" />
    </el-container>

    <el-container class="revenue-container">
      <revenue-breakdown />
    </el-container>

    <el-container class="revenue-container">
      <revenue-grouped-by />
    </el-container>
  </div>
</template>

<script>

import dateRange from '@/views/custom/reports/components/dateRange'
import reportMessage from '@/views/custom/reports/components/reportMessage'
import rM from '@/views/custom/reports/components/rm'
import revenueChart from '@/views/custom/reports/components/revenueChart'
import revenueBreakdown from '@/views/custom/reports/components/revenueBreakdown'
import revenueGroupedBy from '@/views/custom/reports/components/revenueGroupedBy'

export default {
  components: {
    dateRange,
    reportMessage,
    rM,
    revenueChart,
    revenueBreakdown,
    revenueGroupedBy
  }
}
</script>

<style>
.revenue-container {
  padding: 1em;
}
</style>

<style scoped>
.heightOfChart {
  height: 500px;
}
</style>
