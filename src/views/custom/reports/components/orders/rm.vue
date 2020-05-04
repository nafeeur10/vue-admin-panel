<template>
  <el-row :span="24" :gutter="20" class="reportRow">
    <el-col v-for="item in items" :key="item.id" :span="4">
      <el-card class="cardBody" shadow="never" :style="{ 'border-top': '5px solid ' + item.cardColor }">
        <p><b>{{ item.title }}</b></p>
        <p>{{ item.subtitle }}</p>
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
          title: 'RM107.32',
          subtitle: 'Gross Sales ',
          cardColor: 'blue'
        },
        {
          title: 'RM0.00',
          subtitle: 'Refunds',
          cardColor: 'black'
        },
        {
          title: 'RM0.00',
          subtitle: 'Discounts',
          cardColor: 'green'
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
p {
    margin-top: 5px;
    margin-bottom: 5px;
}
</style>

<style>
.el-card__body{
  padding: 10px 20px!important;
}
</style>
