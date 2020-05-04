<template>
  <div class="dashboard-container">
    <date-range />
    <!-- Report on Date -->
    <el-container class="revenue-container">
      <report-message />
    </el-container>

    <!-- Refunds Chart -->
    <el-container class="revenue-container">
      <el-row :gutter="20" class="charrow">
        <el-col :span="16" class="heightOfChart">
          <refunds-chart class="heightOfChart" />
        </el-col>
        <el-col :span="8">
          <order-info />
        </el-col>
      </el-row>
    </el-container>

    <!-- Orders vs Refunds Chart -->
    <el-container class="revenue-container">
      <el-row :gutter="20" class="charrow">
        <el-col :span="12" class="heightOfChart">
          <orders-vs-refunds-chart class="heightOfChart" />
        </el-col>
      </el-row>
    </el-container>

    <!-- Refunds Grouped By Reason -->
    <el-container class="revenue-container">
      <el-row class="charrow">
        <refunds-grouped-by-reason />
      </el-row>
    </el-container>

    <!-- Refunds Grouped By Billing -->
    <el-container class="revenue-container">
      <el-row class="charrow">
        <refunds-grouped-by-billing />
      </el-row>
    </el-container>

    <!-- Refunds Grouped By Shipping -->
    <el-container class="revenue-container">
      <el-row class="charrow">
        <refunds-grouped-by-shipping />
      </el-row>
    </el-container>

  </div>
</template>
<script>
import dateRange from '../dateRange'
import reportMessage from '../reportMessage'
import refundsChart from './refundsChart'
import orderInfo from './orderInfo'
import ordersVsRefundsChart from './ordersVsRefunds'
import refundsGroupedByReason from './refundsGroupedByReason'
import refundsGroupedByBilling from './refundsGroupByBilling'
import refundsGroupedByShipping from './refundsGroupByShipping'
export default {
  components: {
    dateRange,
    reportMessage,
    refundsChart,
    orderInfo,
    ordersVsRefundsChart,
    refundsGroupedByReason,
    refundsGroupedByBilling,
    refundsGroupedByShipping
  }
}
</script>
<style scoped>
.el-row {
  width: 100%;
  margin-bottom: 20px;
}

.charrow {
  margin-left: -5px!important;
}
.revenue-container {
  padding: 0 15px;
  margin-top: 10px;
}
.heightOfChart {
  max-height: 500px;
}
</style>
