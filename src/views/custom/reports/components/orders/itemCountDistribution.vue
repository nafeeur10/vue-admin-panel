<template>
  <el-card class="w-100">
    <div class="chart-container">
      <item-chart height="470px" width="100%" />
    </div>
  </el-card>
</template>
<script>
import itemChart from '@/components/Charts/itemCountChart'

export default {
  name: 'LineChart',
  components: { itemChart }
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

