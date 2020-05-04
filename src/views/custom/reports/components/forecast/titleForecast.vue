<template>
  <el-card>
    <el-container class="revenue-container">
      <el-row class="charrow">
        <el-col :span="24">

          <h4 style="display: inline-block" class="text-color mr-3 my-0"><b>Report</b> Forecast</h4>
          <h5 style="display: inline-block" class="text-color-8 my-0">About Report <sup><i class="el-icon-warning" @click="modalReport" /></sup></h5>

        </el-col>
      </el-row>
    </el-container>
  </el-card>
</template>
<script>
export default {
  data() {
    return {
      reportAlertMsg1: 'This report lets you forecast future activity for your store. It does that by looking at your growth rate over time and applying that either linearly or exponentially.',
      reportAlertMsg2: 'Currently, the growth rate is calculated by determining your growth in the most recent 12 months vs. the previous 12 months.',

      reportAlertMsg: ''
    }
  },
  mounted() {
    this.reportAlertMsg = this.reportAlertMsg1.split('\n') + this.reportAlertMsg2
  },
  methods: {
    modalReport() {
      this.$alert(this.reportAlertMsg, 'About This Report', {
        confirmButtonText: 'OK'
      })
    }
  }
}
</script>
<style scoped>
.my-0 {
    margin-top: 0;
    margin-bottom: 0;
}
.text-color {
    color: #68768c;
}

.text-color-8 {
    color: #828DA0;
}

.mr-3 {
    margin-right: 15px;
}

sup {
    vertical-align: super;
    font-size: smaller;
}

button {
    padding: 0;
    border: none;
}

button:hover {
    background-color: unset;
}

button:active {
    background-color: unset;
}

</style>
<style>
.el-message-box__header {
    border-bottom: 1px solid #EEF3F7;
}
</style>
