<template>
  <el-card>
    <el-row :gutter="20">
      <el-col :span="24">
        <span>FROM THE ORDERS MADE IN THIS PERIOD</span>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <h3 class="h3">RM0</h3><a class="apercentage" href="javascript:void(0)">0%</a>
        <br>
        <span>Refunded</span>
      </el-col>
      <el-col :span="12">
        <h3 class="h3">0</h3><a class="apercentage" href="javascript:void(0)">0%</a>
        <br>
        <span>Refunds</span>
      </el-col>
    </el-row>
    <hr>
    <el-row :gutter="20">
      <el-col :span="12">
        <h3 class="h3">RM0</h3>
        <br>
        <span>Average Amount</span>
      </el-col>
      <el-col :span="12">
        <h3 class="h3">0</h3>
        <br>
        <span>Average Items</span>
      </el-col>
    </el-row>
    <hr>
    <el-row :gutter="10">
      <el-col :span="12">
        <h3 class="h3 mt-0">0.00%</h3>
        <br>
        <span>Refund Rate</span>
      </el-col>
      <el-col :span="12">
        <h3 class="h3 mt-0">0.00%</h3>
        <br>
        <span>% Of Sales</span>
      </el-col>
    </el-row>
  </el-card>
</template>
<script>
export default {
  data() {
    return {
      isGrossStatus: false
    }
  },
  methods: {
    grossStatus: function() {
      if (this.isGrossStatus) {
        this.isGrossStatus = false
      } else {
        this.isGrossStatus = true
      }
    }
  }
}
</script>
<style scoped>
a {
    color: blue;
}
.h3 {
    margin-bottom: 5px;
    display: inline-block;
}
.apercentage {
  color: black;
  margin-left: 10px;
}
hr {
  margin-top: 15px;
  margin-bottom: 15px;
}
.mt-0 {
  margin-top: 0;
}
</style>
