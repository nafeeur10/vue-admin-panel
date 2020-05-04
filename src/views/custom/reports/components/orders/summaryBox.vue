<template>
  <el-row :span="24" :gutter="20" class="reportRow">
    <el-col v-for="item in items" :key="item.id" :span="6">
      <el-card class="cardBody" shadow="never">
        <p><b>{{ item.title }}</b> {{ item.subtitle }}</p>
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
          title: 'RM6',
          subtitle: 'Daily Net'
        },
        {
          title: 'RM6',
          subtitle: 'Daily Gross'
        },
        {
          title: '0',
          subtitle: 'Daily Orders'
        },
        {
          title: '0',
          subtitle: 'Daily Items'
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
