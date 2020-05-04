<template>
  <el-card class="w-100">
    <div class="app-container">
      <el-row class="mb-3">
        <h4>New vs. Returning Customers</h4>
      </el-row>
      <el-table
        v-loading="loading"
        :data="customers"
        style="width: 100%;"
        border
      >
        <el-table-column label="Type" align="center" prop="type" />
        <el-table-column label="Customers" align="center">
          <template slot-scope="{row}">
            <p class="p"><b>{{ row.customers }}</b></p> <span class="span">{{ row.percentageCustomers.toFixed(2) }}%</span>
          </template>
        </el-table-column>
        <el-table-column label="Orders" align="center">
          <template slot-scope="{row}">
            <p class="p"><b>{{ row.orders }}</b></p> <span class="span">{{ row.percentageOrders.toFixed(2) }}%</span>
          </template>
        </el-table-column>
        <el-table-column label="Net Sales" align="center">
          <template slot-scope="{row}">
            <p class="p"><b>{{ row.netSales }}</b></p> <span class="span">{{ row.percentageNetSales.toFixed(2) }}%</span>
          </template>
        </el-table-column>
        <el-table-column label="Average Net" align="center" prop="averageNet" />
        <el-table-column label="Gross Sales" align="center">
          <template slot-scope="{row}">
            <p class="p"><b>{{ row.grossSales }}</b></p> <span class="span">{{ row.percentageGrossSales.toFixed(2) }}%</span>
          </template>
        </el-table-column>
        <el-table-column label="Average Gross" align="center" prop="averageGross" />
      </el-table>
    </div>
  </el-card>
</template>

<script>

export default {
  name: 'ComplexTable',
  data() {
    return {
      listLoading: true,
      customers: [{
        type: 'New',
        customers: 1,
        percentageCustomers: 0.0,
        orders: 1,
        percentageOrders: 0.0,
        netSales: 'RM' + 107.32,
        percentageNetSales: 0.0,
        averageNet: 'RM' + 107.32,
        grossSales: 'RM' + 107.32,
        percentageGrossSales: 0.0,
        averageGross: 'RM' + 107.32
      }]
    }
  }
}
</script>

<style scoped>
.p {
    margin-top: 5px;
    margin-bottom: 5px;
    display: inline-block;
}
.span {
    font-size: 12px;
    color: #afb2bb;
}
</style>

