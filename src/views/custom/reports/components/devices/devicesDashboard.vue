<template>
  <div class="dashboard-container">
    <date-range />

    <!-- Device Orders -->
    <el-container class="revenue-container">
      <el-row :gutter="20" class="charrow">
        <el-col :span="24">
          <device-orders />
        </el-col>
      </el-row>
    </el-container>

    <!-- Operating Systems of Matching Orders -->
    <el-container class="revenue-container">
      <el-row :gutter="20" class="charrow">
        <el-col :span="24">
          <operating-system />
        </el-col>
      </el-row>
    </el-container>

    <!-- Browsers of Matching Orders -->
    <el-container class="revenue-container">
      <el-row :gutter="20" class="charrow">
        <el-col :span="24">
          <browsers />
        </el-col>
      </el-row>
    </el-container>
  </div>
</template>
<script>
import dateRange from '../dateRange'
import deviceOrders from './deviceOrders'
import operatingSystem from './operatingSystem'
import browsers from './browsers'
export default {
  components: {
    dateRange,
    deviceOrders,
    operatingSystem,
    browsers
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
