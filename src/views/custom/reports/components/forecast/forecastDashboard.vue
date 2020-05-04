<template>
  <div class="dashboard-container">
    <title-forecast />
    <!-- Forebast Dashboard -->
    <el-container class="revenue-container">
      <el-row :gutter="20" class="charrow">
        <el-col :span="24" />
      </el-row>
    </el-container>
  </div>
</template>
<script>
import dateRange from '../dateRange'
import titleForecast from './titleForecast'
export default {
  components: {
    dateRange,
    titleForecast
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
