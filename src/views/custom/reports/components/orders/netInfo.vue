<template>
  <el-card>
    <el-row :gutter="20">
      <el-col :span="12">
        <span>In this period</span>
      </el-col>
      <el-col :span="12">
        <a v-show="!isGrossStatus" @click="grossStatus">See Gross Stats</a>
        <a v-show="isGrossStatus" @click="grossStatus">Hide Gross Stats</a>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <h3 class="h3">RM107</h3><a class="apercentage" href="javascript:void(0)">0%</a>
        <br>
        <span>Net Sales</span>
      </el-col>
      <el-col :span="12">
        <h3 class="h3">RM107</h3><a class="apercentage" href="javascript:void(0)">0%</a>
        <br>
        <span>Gross Sales</span>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <h3 class="h3">1</h3><a class="apercentage" href="javascript:void(0)">0%</a>
        <br>
        <span>Orders</span>
      </el-col>
      <el-col :span="12">
        <h3 class="h3">2</h3><a class="apercentage" href="javascript:void(0)">0%</a>
        <br>
        <span>Items</span>
      </el-col>
    </el-row>
    <hr>
    <el-row :gutter="10">
      <el-col :span="12">
        <h3 class="h3 mt-0">RM107</h3>
        <br>
        <span v-show="!isGrossStatus">Averate Order Net</span>
        <span v-show="isGrossStatus">Averate Order Gross</span>
      </el-col>
      <el-col :span="12">
        <h3 class="h3 mt-0">2</h3>
        <br>
        <span>Averate Order Items</span>
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
