<template>
  <el-row :gutter="20" class="charrow">
    <el-col :span="16">
      <el-card class="w-100">
        <div class="app-container">
          <el-row class="mb-3">
            <h4>Operating systems of matching orders</h4>
          </el-row>
          <el-table
            v-loading="loading"
            :data="operatingSystemMatching"
            style="width: 100%;"
            border
          >
            <el-table-column label="Operating System" align="center" prop="type">
              <template slot-scope="{row}">
                <img :src="row.icon" class="imgP">
                <p class="p-0"><b>{{ row.type }}</b></p>
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
        </div>
      </el-card>
    </el-col>
    <el-col :span="8">
      <pie-chart />
    </el-col>
  </el-row>
</template>

<script>
import pieChart from './pie'
export default {
  name: 'ComplexTable',
  components: { pieChart },
  data() {
    return {
      listLoading: true,
      operatingSystemMatching: [{
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAABmJLR0QA/wD/AP+gvaeTAAAA0klEQVQokcXSrU4DYRCF4efbbfiRJAgSwMByB9wBF8A6sFWoCq4Dg63BYXAYFAlJRRHIOgQoHARLSNhBdFvS0pD+CI6byXmTcybDAkpTO29i2YcduT3hWZl6jRHDVaxaUqCQeVRpUc+ftmUygXCKGr6OY+EMm8M0X5qSk7/CZKCyga2ZagzhObUQ3O8cbhnrF7q/dgMl9z9w7kA4H7M0Je2JcH3t/+s8gF/xNh98mC6VaV1YE/aFI7kH4QIdvEyCp3+Ku1jxrtCwq/KkTL1Zk47oG8+xMLtl3S/kAAAAAElFTkSuQmCC',
        type: 'Windows',
        orders: 3,
        grossSales: 120.02,
        averageOrder: 43.51
      },
      {
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAABmJLR0QA/wD/AP+gvaeTAAAAm0lEQVQokWNgGCjAGN68b4agoIAHqRrfv/+wg4WJmZlDWVlJnlTN585f5GAiVRMyGImaWWAMaRHiNT19g2azjCgDw6FjlxmOHL/EICPKwPDo0WOGFeuPMjx69JhBRpSBYcX6owwr1h9lkBHFYjMDAwMDE+N/hv+MjFhtk5XkY5AS50MRg6cwfQ1BAWKdffHG+w/v33/YQax66gMAcd0pLClzBugAAAAASUVORK5CYII=',
        type: 'Macintosh',
        orders: 1,
        grossSales: 130.54,
        averageOrder: 46.15
      },
      {
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAABmJLR0QA/wD/AP+gvaeTAAAAyklEQVQokZXPMU5CQRSF4U9ADRBDIi0ULoDCzoLSuAdDwwbcgmETVHYWdPQmsgwatDAm1FSaaDRCMybPyTzmeZKbyc29/z1nyKuGCxxW2P2jNhbY4OC/8AQfuE4N42stjNALjp/BfYgmZlimDvWxwrZQb/gp9F+4ScHzCEzVE85j8DhEzMFXRagW3i6OUnEivaTgTfhPTpdlg4dM5C3eMY6d4TYs7FMLZ2XDacb5GSdlcB13YfEV93jEN9YYZJKB03DoVx00qoCVtQMg3EFfMnuFgwAAAABJRU5ErkJggg==',
        type: 'iOS',
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
