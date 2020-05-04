<template>
  <el-card class="w-100">
    <div class="app-container">
      <div class="filter-container">
        <el-row>
          <p style="width: 200px; display: inline-block"><span>{{ mainTitle }}</span></p>
          <ul class="ulOrder">
            <li
              v-for="(btnMenu, index) in buttonMenu"
              :key="index"
              class="filter-item float-left"
              :class="{ 'active-class' : btnMenu.id == isActive }"
              @click="changeActive(btnMenu.id)"
            >
              {{ btnMenu.title }}
            </li>
          </ul>
          <el-button class="filter-item float-right" type="primary" icon="el-icon-download" @click="handleDownload">
            Export
          </el-button>
        </el-row>
      </div>

      <el-table
        :key="tableKey"
        v-loading="listLoading"
        :data="ordersGroupedByPayment"
        border
        fit
        highlight-current-row
        style="width: 100%;"
      >
        <el-table-column :label="subTitle" align="center" prop="calculationSummary" />
        <el-table-column label="Orders" align="center" prop="order" sortable />
        <el-table-column label="Items" align="center" prop="item" sortable />
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
      mainTitle: 'Revenue Grouped By',
      subTitle: '',
      isActive: 1,
      tableKey: 0,
      list: null,
      buttonMenu: [{
        id: 1,
        isActive: true,
        title: 'Shipping Country'
      }, {
        id: 2,
        isActive: false,
        title: 'Shipping State'
      }, {
        id: 3,
        isActive: false,
        title: 'Shipping City'
      }, {
        id: 4,
        isActive: false,
        title: 'Shipping ZIP'
      }
      ],
      listLoading: true,
      value: '',
      ordersGroupedByPayment: [{
        calculationSummary: 'Other',
        order: 1,
        item: 1,
        netSales: 'RM' + 107.32,
        averageNet: 'RM' + 107.32,
        grossSales: 'RM' + 107.32,
        averageGross: 'RM' + 107.32
      }],
      downloadLoading: false
    }
  },
  computed: {

  },
  created() {
    this.getList()
    this.getTitle()
  },
  methods: {
    getTitle() {
      const item = this.buttonMenu.find((item) => item.id == 1)
      this.subTitle = item.title
    },
    getList() {
      setTimeout(() => {
        this.listLoading = false
      }, 1.5 * 1000)
    },
    changeActive(id) {
      // console.log(id)
      this.isActive = id

      const item = this.buttonMenu.find((item) => item.id == id)
      this.subTitle = item.title
    },
    handleDownload() {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['timestamp', 'title', 'type', 'importance', 'status']
        const filterVal = ['timestamp', 'title', 'type', 'importance', 'status']
        const data = this.formatJson(filterVal, this.list)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: 'table-list'
        })
        this.downloadLoading = false
      })
    }
  }
}
</script>

<style>
.float-right {
    float: right;
}
.active-class {
  background-color: blue;
  color: white;
}
.ulOrder {
  padding-left: 0;
  display: inline-block;
}
.ulOrder li {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid #DEE0E9;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
</style>
