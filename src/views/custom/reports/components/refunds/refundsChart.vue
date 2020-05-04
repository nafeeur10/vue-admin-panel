<template>
  <el-card class="w-100">
    <div class="chart-container">
      <refunds-chart height="470px" width="100%" />
    </div>
  </el-card>
</template>
<script>
import refundsChart from '@/components/Charts/refundsChart'

export default {
  name: 'LineChart',
  components: { refundsChart }
}
</script>

<style scoped>
.chart-container{
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
}
</style>

<style>
.w-100 {
    width: 100%;
}
</style>

