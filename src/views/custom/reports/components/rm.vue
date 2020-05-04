<template>
  <el-row :span="24" :gutter="20" class="reportRow">
    <el-col v-for="item in items" :key="item.id" :span="4">
      <el-card class="cardBody" shadow="never" :style="{ 'border-top': '5px solid ' + item.cardColor }">
        <p><b>{{ item.title }}</b></p>
        <p>{{ item.subtitle }} <el-checkbox v-model="item.checkValue" /></p>
      </el-card>
    </el-col>
  </el-row>

</template>
<script>
export default {
  data() {
    return {
      checked: true,
      items: [
        {
          title: 'RM0.00',
          subtitle: 'Net Revenue',
          cardColor: 'green',
          checkValue: true
        },
        {
          title: 'RM0.00',
          subtitle: 'Gross Sales ',
          cardColor: 'blue',
          checkValue: true
        },
        {
          title: 'RM0.00',
          subtitle: 'Refunds',
          cardColor: 'black',
          checkValue: false
        },
        {
          title: 'RM0.00',
          subtitle: 'Taxes',
          cardColor: 'orange',
          checkValue: false
        },
        {
          title: 'RM0.00',
          subtitle: 'Shipping',
          cardColor: 'purple',
          checkValue: true
        },
        {
          title: 'RM0.00',
          subtitle: 'Fees',
          cardColor: 'red',
          checkValue: false
        }
      ]
    }
  }
}
</script>
<style scoped>
.reportRow {
    width: 100%;
}
</style>

<style>
.el-card__body{
  padding: 10px 20px!important;
}
</style>
