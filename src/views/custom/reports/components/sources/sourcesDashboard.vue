<template>
  <div class="dashboard-container">
    <date-range />

    <!-- Browsers of Matching Orders -->
    <el-container class="revenue-container">
      <el-row :gutter="20" class="charrow">
        <el-col :span="24">
          <h5>ALL SOURCES</h5>
          <source-table />
        </el-col>
      </el-row>
    </el-container>
  </div>
</template>
<script>
import dateRange from '../dateRange'
import sourceTable from './sourcesTable'
export default {
  components: {
    dateRange,
    sourceTable
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
