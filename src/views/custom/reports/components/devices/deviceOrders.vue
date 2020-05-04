<template>
  <el-row :gutter="20" class="charrow" :span="24">
    <el-col :span="8">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>Desktop</span>
          <i style="float: right;" class="el-icon-upload" />
        </div>
        <div class="text item">
          {{ desktopOrderNo }} orders for {{ desktopOrderMoney }}
        </div>
      </el-card>
    </el-col>
    <el-col :span="8">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>Mobile</span>
          <i style="float: right;" class="el-icon-mobile-phone" />
        </div>
        <div class="text item">
          {{ mobileOrderNo }}  orders for {{ mobileOrderMoney }}
        </div>
      </el-card>
    </el-col>
    <el-col :span="8" class="percentage">
      <span style="float: left;">Desktop</span>
      <el-progress :text-inside="true" :stroke-width="36" :percentage="desktop" status="success" />

      <span style="float: left;">Mobile</span>
      <el-progress :text-inside="true" :stroke-width="36" :percentage="mobile" status="warning" />
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      desktop: 83.3,
      mobile: 16.7,
      desktopOrderNo: 5,
      desktopOrderMoney: 454,
      mobileOrderNo: 1,
      mobileOrderMoney: 107.70
    }
  }
}
</script>

<style scoped>
.percentage span{
    padding: 10px;
}
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .clearfix span {
      font-size: 20px;
      font-weight: 800;
  }

  .el-row {
    width: 100%;
    margin-bottom: 20px;
  }
</style>
