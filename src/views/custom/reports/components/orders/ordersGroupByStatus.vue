<template>
  <el-card class="w-100">
    <div class="app-container">
      <div class="filter-container">
        <p style="width: 200px; display: inline-block"><span>{{ mainTitle }}</span></p>
        <el-button v-waves :loading="downloadLoading" class="filter-item float-right" type="primary" icon="el-icon-download" @click="handleDownload">
          Export
        </el-button>
      </div>

      <el-table
        :key="tableKey"
        v-loading="listLoading"
        :data="ordersGroupedBy"
        border
        fit
        highlight-current-row
        style="width: 100%;"
        @sort-change="sortChange"
      >
        <el-table-column label="Status" width="140px" align="center" prop="status" sortable />
        <el-table-column label="Orders" align="center" prop="orders" sortable />
        <el-table-column label="Items" align="center" prop="items" sortable />
        <el-table-column label="Net Sales" align="center" prop="netSales" sortable />
        <el-table-column label="Average Net" align="center" prop="averageNet" sortable />
        <el-table-column label="Gross Sales" align="center" prop="grossSales" sortable />
        <el-table-column label="Average Gross" align="center" prop="averageGross" sortable />
      </el-table>

    </div>
  </el-card>
</template>

<script>

export default {
  name: 'ComplexTable',
  data() {
    return {
      mainTitle: 'Orders grouped by Status',
      list: null,
      value: '',
      ordersGroupedBy: [{
        status: 'Processing',
        orders: 'Other',
        items: 1,
        netSales: 'RM' + 107.32,
        averageNet: 'RM' + 107.32,
        grossSales: 'RM' + 107.32,
        averageGross: 'RM' + 107.32
      }]
    }
  }
}
</script>

<style>
.float-right {
    float: right;
}
</style>
