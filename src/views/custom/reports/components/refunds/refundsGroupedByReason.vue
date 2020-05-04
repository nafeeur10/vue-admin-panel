<template>
  <el-card class="w-100">
    <div class="app-container">
      <div class="filter-container">
        <p style="display: inline-block"><span>{{ mainTitle }}</span></p>
        <el-button v-waves :loading="downloadLoading" class="filter-item float-right" type="primary" icon="el-icon-download" @click="handleDownload">
          Export
        </el-button>
      </div>

      <el-table
        :key="tableKey"
        v-loading="listLoading"
        :data="refundsGroupedByReason"
        border
        fit
        highlight-current-row
        style="width: 100%;"
        @sort-change="sortChange"
      >
        <el-table-column label="Reason" align="center" prop="reason" sortable />
        <el-table-column label="Refunds" align="center" prop="refunds" sortable />
        <el-table-column label="Refunded Amount" align="center" prop="refundedAmount" sortable />
        <el-table-column label="Average Refund" align="center" prop="averageRefund" sortable />
      </el-table>

    </div>
  </el-card>
</template>

<script>

export default {
  name: 'ComplexTable',
  data() {
    return {
      mainTitle: 'Refunds grouped by Reason',
      list: null,
      value: '',
      refundsGroupedByReason: [{
        reason: 'Sipariş Durumu Iade Edildi Olarak Belirlendi. Müşteriye Para Iade Etmek Için Ödeme Ağ Geçidiniz Üzerinden Geri Ödeme Yapmanız Gerekecektir.',
        refunds: '1',
        refundedAmount: 1,
        averageRefund: 107.32
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
