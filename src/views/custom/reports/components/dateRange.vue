<template>
  <el-container class="bg-color sticky">
    <el-col :span="12" class="margin-block">
      <span class="reportDateHeading">Report Revenue by Date</span>
    </el-col>
    <el-col :span="12">
      <div class="block margin-block">
        <span class="demonstration">Compate To: </span>
        <el-date-picker
          v-model="value"
          type="daterange"
          align="right"
          start-placeholder="Start Date"
          end-placeholder="End Date"
          format="yyyy-MM-dd"
          value-format="MM dd, yyyy"
        />
      </div>
    </el-col>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      pickerOptions: {
        shortcuts: [{
          text: 'Last week',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: 'Last month',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: 'Last 3 months',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      value: ''
    }
  }
}
</script>
<style scoped>
.margin-block {
    margin-block-start: 1.67em;
    margin-block-end: 1.67em;
}
.reportDateHeading {
    margin-left: 1.5em;
    margin-top: 10px;
    width: 100%;
    height: 100%;
    display: block;
}
.bg-color {
    background-color: lavender;
}
</style>
<style>
.sticky {
  position: sticky;
  top: 0;
  position: -webkit-sticky;
}
</style>
