<template>
  <el-card class="w-100">
    <div class="app-container">
      <el-row class="mb-3">
        <span>Revenue Breakdown</span>
        <el-button v-waves :loading="downloadLoading" class="filter-item float-right" type="primary" icon="el-icon-download" @click="handleDownload">
          Export
        </el-button>
      </el-row>
      <el-table
        v-loading="loading"
        :data="revenueBrakdown"
        style="width: 100%;"
        border
        show-summary
        sum-text="Totals"
        :summary-method="getSummaries"
        :default-sort="{prop: 'date', order: 'descending'}"
      >
        <el-table-column label="Date" width="120px" align="center" prop="date" sortable />
        <el-table-column label="Orders" width="120px" align="center" prop="order" sortable />
        <el-table-column label="Gross Sales" width="140px" align="center" prop="grossSale" sortable />
        <el-table-column label="Taxes" width="120px" align="center" prop="tax" sortable />
        <el-table-column label="Shipping" width="120px" align="center" prop="shipping" sortable />
        <el-table-column label="Fees" width="130px" align="center" prop="fee" sortable />
        <el-table-column label="Refunds" width="130px" align="center" prop="refund" sortable />
        <el-table-column label="Net" align="center" prop="net" sortable />
      </el-table>
    </div>
  </el-card>
</template>

<script>
import { fetchList, fetchPv, createArticle, updateArticle } from '@/api/article'
import waves from '@/directive/waves' // waves directive
import { parseTime } from '@/utils'

const calendarTypeOptions = [
  { key: 'CN', display_name: 'China' },
  { key: 'US', display_name: 'USA' },
  { key: 'JP', display_name: 'Japan' },
  { key: 'EU', display_name: 'Eurozone' }
]

// arr to obj, such as { CN : "China", US : "USA" }
const calendarTypeKeyValue = calendarTypeOptions.reduce((acc, cur) => {
  acc[cur.key] = cur.display_name
  return acc
}, {})

export default {
  name: 'ComplexTable',
  directives: { waves },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    },
    typeFilter(type) {
      return calendarTypeKeyValue[type]
    }
  },
  data() {
    return {
      tableKey: 0,
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 5,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: '+id'
      },
      revenueBrakdown: [{
        date: 'Jan 3',
        order: 1,
        grossSale: 'RM' + 107.32,
        tax: 'RM' + 0.00,
        shipping: 'RM' + 0.00,
        fee: 'RM' + 0.00,
        refund: 'RM' + 0.00,
        net: 'RM' + 107.32
      },
      {
        date: 'Jan 4',
        order: 0,
        grossSale: 'RM' + 0.00,
        tax: 'RM' + 0.00,
        shipping: 'RM' + 0.00,
        fee: 'RM' + 0.00,
        refund: 'RM' + 0.00,
        net: 'RM' + 0.00
      },
      {
        date: 'Jan 5',
        order: 0,
        grossSale: 'RM' + 0.00,
        tax: 'RM' + 0.00,
        shipping: 'RM' + 0.00,
        fee: 'RM' + 0.00,
        refund: 'RM' + 0.00,
        net: 'RM' + 0.00
      },
      {
        date: 'Jan 6',
        order: 0,
        grossSale: 'RM' + 0.00,
        tax: 'RM' + 0.00,
        shipping: 'RM' + 0.00,
        fee: 'RM' + 0.00,
        refund: 'RM' + 0.00,
        net: 'RM' + 0.00
      },
      {
        date: 'Jan 7',
        order: 0,
        grossSale: 'RM' + 0.00,
        tax: 'RM' + 0.00,
        shipping: 'RM' + 0.00,
        fee: 'RM' + 0.00,
        refund: 'RM' + 0.00,
        net: 'RM' + 0.00
      }
      ],
      importanceOptions: [1, 2, 3],
      calendarTypeOptions,
      sortOptions: [{ label: 'ID Ascending', key: '+id' }, { label: 'ID Descending', key: '-id' }],
      statusOptions: ['published', 'draft', 'deleted'],
      showReviewer: false,
      temp: {
        id: undefined,
        importance: 1,
        remark: '',
        timestamp: new Date(),
        title: '',
        type: '',
        status: 'published'
      },
      dialogFormVisible: false,
      dialogStatus: '',
      textMap: {
        update: 'Edit',
        create: 'Create'
      },
      dialogPvVisible: false,
      pvData: [],
      rules: {
        type: [{ required: true, message: 'type is required', trigger: 'change' }],
        timestamp: [{ type: 'date', required: true, message: 'timestamp is required', trigger: 'change' }],
        title: [{ required: true, message: 'title is required', trigger: 'blur' }]
      },
      downloadLoading: false
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items
        this.total = response.data.total

        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false
        }, 1.5 * 1000)
      })
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    handleModifyStatus(row, status) {
      this.$message({
        message: '操作Success',
        type: 'success'
      })
      row.status = status
    },
    sortChange(data) {
      const { prop, order } = data
      if (prop === 'id') {
        this.sortByID(order)
      }
    },
    sortByID(order) {
      if (order === 'ascending') {
        this.listQuery.sort = '+id'
      } else {
        this.listQuery.sort = '-id'
      }
      this.handleFilter()
    },
    resetTemp() {
      this.temp = {
        id: undefined,
        importance: 1,
        remark: '',
        timestamp: new Date(),
        title: '',
        status: 'published',
        type: ''
      }
    },
    handleCreate() {
      this.resetTemp()
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    createData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          this.temp.id = parseInt(Math.random() * 100) + 1024 // mock a id
          this.temp.author = 'vue-element-admin'
          createArticle(this.temp).then(() => {
            this.list.unshift(this.temp)
            this.dialogFormVisible = false
            this.$notify({
              title: 'Success',
              message: 'Created Successfully',
              type: 'success',
              duration: 2000
            })
          })
        }
      })
    },
    handleUpdate(row) {
      this.temp = Object.assign({}, row) // copy obj
      this.temp.timestamp = new Date(this.temp.timestamp)
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    updateData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          const tempData = Object.assign({}, this.temp)
          tempData.timestamp = +new Date(tempData.timestamp) // change Thu Nov 30 2017 16:41:05 GMT+0800 (CST) to 1512031311464
          updateArticle(tempData).then(() => {
            for (const v of this.list) {
              if (v.id === this.temp.id) {
                const index = this.list.indexOf(v)
                this.list.splice(index, 1, this.temp)
                break
              }
            }
            this.dialogFormVisible = false
            this.$notify({
              title: 'Success',
              message: 'Update Successfully',
              type: 'success',
              duration: 2000
            })
          })
        }
      })
    },
    handleDelete(row) {
      this.$notify({
        title: 'Success',
        message: 'Delete Successfully',
        type: 'success',
        duration: 2000
      })
      const index = this.list.indexOf(row)
      this.list.splice(index, 1)
    },
    handleFetchPv(pv) {
      fetchPv(pv).then(response => {
        this.pvData = response.data.pvData
        this.dialogPvVisible = true
      })
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
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    },
    getSortClass: function(key) {
      const sort = this.listQuery.sort
      return sort === `+${key}`
        ? 'ascending'
        : sort === `-${key}`
          ? 'descending'
          : ''
    },
    getSummaries(param) {
      const { columns, data } = param
      const sums = []
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = 'Totals'
          return
        }
        const values = data.map(item => Number(item[column.property]))
        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr)
            if (!isNaN(value)) {
              return prev + curr
            } else {
              return prev
            }
          }, 0)
        } else {
          const values = data.map(item => Number(item[column.property].replace(/[^\d.-]/g, '')))
          if (!values.every(value => isNaN(value))) {
            sums[index] = 'RM' + values.reduce((prev, curr) => {
              const value = Number(curr)
              if (!isNaN(value)) {
                return prev + curr
              } else {
                return prev
              }
            }, 0)
          }
        }
      })

      return sums
    }
  }
}
</script>

<style>
.float-right {
    float: right;
}
.mb-3 {
  margin-bottom: 1.3rem;
}
</style>

