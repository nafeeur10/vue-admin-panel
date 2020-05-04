<template>
  <div class="dashboard-container">
    <date-range />
    <!-- Report on Date -->
    <el-container class="revenue-container">
      <report-message />
    </el-container>

    <!-- Orders Chart -->
    <el-container class="revenue-container">
      <el-row :gutter="20" class="charrow">
        <el-col :span="16" class="heightOfChart">
          <orders-chart class="heightOfChart" />
        </el-col>
        <el-col :span="8">
          <net-info />
        </el-col>
      </el-row>
    </el-container>

    <!-- RM Values in Box -->
    <el-container class="revenue-container">
      <rm />
    </el-container>

    <!-- Summary Box -->
    <el-container class="revenue-container">
      <summary-box />
    </el-container>

    <!-- New vs Returning Customers -->
    <el-container class="revenue-container">
      <customer />
    </el-container>

    <!-- Orders Group By Status -->
    <el-container class="revenue-container">
      <orders-group-by-status />
    </el-container>

    <!-- Orders Group By Payment ID or Title -->
    <el-container class="revenue-container">
      <orders-group-by-payment />
    </el-container>

    <!-- Orders Group By Currency -->
    <el-container class="revenue-container">
      <orders-group-by-currency />
    </el-container>

    <!-- Orders Group By Billing -->
    <el-container class="revenue-container">
      <orders-group-by-billing />
    </el-container>

    <!-- Orders Group By Shipping -->
    <el-container class="revenue-container">
      <orders-group-by-shipping />
    </el-container>

    <!-- Chart -->
    <el-container class="revenue-container">
      <el-row :gutter="20" class="charrow">
        <el-col :span="12" class="heightOfChart">
          <!-- Item Distribution Chart -->
          <item-count-distribution-chart class="heightOfChart" />
        </el-col>
        <el-col :span="12">
          <!-- Order value distribution -->
          <order-value-distribution-chart class="heightOfChart" />
        </el-col>
      </el-row>
    </el-container>

    <el-container class="revenue-container">
      <el-row :gutter="20" class="charrow">
        <el-col :span="12" class="heightOfChart">
          <!-- Spend By Day Chart -->
          <spend-by-day-chart class="heightOfChart" />
        </el-col>
        <el-col :span="12">
          <!-- Order value distribution -->
          <spend-by-hour-chart class="heightOfChart" />
        </el-col>
      </el-row>
    </el-container>
  </div>
</template>
<script>
import dateRange from '../dateRange'
import reportMessage from '../reportMessage'
import ordersChart from './ordersChart'
import netInfo from './netInfo'
import rm from './rm'
import summaryBox from './summaryBox'
import customer from './customer'
import ordersGroupByStatus from './ordersGroupByStatus'
import ordersGroupByPayment from './ordersGroupByPayment'
import ordersGroupByCurrency from './ordersGroupByCurrency'
import ordersGroupByBilling from './ordersGroupByBilling'
import ordersGroupByShipping from './ordersGroupByShipping'
import itemCountDistributionChart from './itemCountDistribution'
import orderValueDistributionChart from './orderValueDistribution'
import spendByDayChart from './spendByDay'
import spendByHourChart from './spendByHour'
export default {
  components: {
    dateRange,
    reportMessage,
    ordersChart,
    netInfo,
    rm,
    summaryBox,
    customer,
    ordersGroupByStatus,
    ordersGroupByPayment,
    ordersGroupByCurrency,
    ordersGroupByBilling,
    ordersGroupByShipping,
    itemCountDistributionChart,
    orderValueDistributionChart,
    spendByDayChart,
    spendByHourChart
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
