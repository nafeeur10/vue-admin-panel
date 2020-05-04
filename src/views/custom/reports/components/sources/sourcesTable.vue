<template>
  <el-row :gutter="20" class="charrow">
    <el-col :span="24">
      <el-table
        v-loading="loading"
        :data="allSources"
        style="width: 100%;"
        border
      >
        <el-table-column label="Reffering Site" align="center" prop="refferingSite">
          <template slot-scope="{row}">
            <p class="p-0"><b>{{ row.refferingSite }}</b></p>
          </template>
        </el-table-column>
        <el-table-column label="Orders" align="center">
          <template slot-scope="{row}">
            <p class="p"><b>{{ row.orders }}</b></p>
          </template>
        </el-table-column>
        <el-table-column label="Gross Sales" align="center">
          <template slot-scope="{row}">
            <p class="p"><b>{{ row.grossSales }}</b></p>
          </template>
        </el-table-column>
        <el-table-column label="Average Order" align="center" prop="averageGross">
          <template slot-scope="{row}">
            <p class="p"><b>{{ row.averageOrder }}</b></p>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: 'ComplexTable',
  data() {
    return {
      listLoading: true,
      allSources: [{
        refferingSite: 'Google',
        orders: 3,
        grossSales: 120.02,
        averageOrder: 43.51
      },
      {
        refferingSite: 'Apple',
        orders: 1,
        grossSales: 130.54,
        averageOrder: 46.15
      },
      {
        refferingSite: 'Samsung',
        orders: 1,
        grossSales: 180.0,
        averageOrder: 45.26
      }]
    }
  }
}
</script>

<style scoped>

.hr-1 {
    border-bottom: 1px solid #afb2bb;
}
.imgP{
    margin-right: 10px;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 20%;
    transform: translate(-50%, -50%);
}

.p-0 {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

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
