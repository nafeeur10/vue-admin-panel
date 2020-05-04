<template>
  <el-row :gutter="20" class="charrow">
    <el-col :span="16">
      <el-card class="w-100">
        <div class="app-container">
          <el-row class="mb-3">
            <h4>Browsers of matching orders</h4>
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
      <browser-pie-chart />
    </el-col>
  </el-row>
</template>

<script>
import browserPieChart from './browserPie'
export default {
  name: 'ComplexTable',
  components: { browserPieChart },
  data() {
    return {
      listLoading: true,
      operatingSystemMatching: [{
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAABmJLR0QA/wD/AP+gvaeTAAACDUlEQVQokaWST0hUcRDHP/PbZx1ad1Pon0TQauHaBlFrIFJtUkQQEaZBlyAWlg566RIE1dZBiqAiPNTTCoIuPvIQ3ZK0UhfEbp02d7vYH7KiAml33743HZaVSulQXxgYZubDDDMD/yFZKtjQo+2i7MYg+KgKz9/1y8Rf4S1JbZIAp1QYafnCE8cRL5FW6+Nb9mPoMMqtV7bkFsFtSW3C48T6eS46jnh/dkmk1Sq84YIV4N74XckDWJWUSugH/RhOVkCVA8fpFCGqEAS+k8VbphSMcAM4vND5WKe2+4YGUWIYLonSF+5gtnYbkfmX5D8/Y0Msxpl0WvyuLj0owlfHkYwFEHTZY63jqv8Bz1eurd3HTF0LNykBW2FVmZ7ZUY4Aw/X1jHjvOQ1kDMBKF7VtcQcfyXDYZWOsmUhDCaoWjdEYctkEYNvihtzKxAYgWKScTqgFEC5w350i/yvsTZILFskCpHZoTW0Rb2FhdWUmURLACGMMfyrRt6ZEb2Q7jflpcnNjxM0ESYDm5eyVIuO/ncKO65Whbg0AKCp2XI8OxPXsQKs+uLNT2wCGujUw2KqXq4ypOqECtr7mXBo1gmhqWh6Ga7geKpFLTklmqFsDfpbzoSK3l/ywx5s1YgVI+crT1SsYnZun11g4XpmoETrKHvahbOVBFsFVTTRpm1F2+RA28M0XXrTPSGap2n/WT7dYz/jr5hEnAAAAAElFTkSuQmCC',
        type: 'Chrome',
        orders: 3,
        grossSales: 120.02,
        averageOrder: 43.51
      },
      {
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAABmJLR0QA/wD/AP+gvaeTAAACJ0lEQVQokaWSS08TYRSGn2/mG662YGzpgK3GC8HSBEhKZCeamCDRuPOCLrwkunDpWn+CW5aNxERZS0hEF8KCRWOKl6S0BIyxFmyZGKXQVtpxPhfYESFu9CzPOU/ek/O+8B8ldjaSyeSeiqwfQalBlAggVB4hZurszSeRSGTjr/DcwtKwYzP2Kuv1p/JN2MpAiirdgRL9wcKq0LkWPXb02S54bmFp+FvRmIjFTb29TbK4ohE54JD7KpA6lIpVbg7k7L0NlXN94c4pAK12qu2Ih7G4qUeOSJIfNYpliC9oZCyBlV2j5/UosbgpbUc8SqfTHheuyPqRRMbT1tpi8PKdRsUG9eui6OoU919Emd8/jOmXJLJef1nol1wYpU6m8k2sl0E5W1ADVe6+vcXt2fNMH7xBtqGLxRWN+XwTKG3wN4zm+4FBxz7lKt4ZMmi/cpH3zWEmw/dQQDjkYCNRKP822LF0qqQ+aQhg4DB0eT5gtYYYPT3rfnbli8AQNgJhAcitiZjpDpSu1jc3klnVuBBZZjLp4WnqkOuH0MDTCGFfCYUz7Spr34uP+4OFfM6yOR4s8mC6jYmUz1Wsk3Cqx2GtUCUaWv+sb5bG//A5kV46UygbE7G4KVu8ButlCPoUyYxGZ4dDzrJrPp/tC3c+35WwN6nFIdsRY4llb2A+ty1hZpFoaOOzxLleA3fBtcBUZN1locQJJZQplMg5qBl9szTe29tb3Ln/z/UTBrLg/frN/7YAAAAASUVORK5CYII=',
        type: 'Safari',
        orders: 1,
        grossSales: 130.54,
        averageOrder: 46.15
      },
      {
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAABmJLR0QA/wD/AP+gvaeTAAABHUlEQVQokXXTMU5CQRAG4A9DY0mAXiOewEQTO7HUO3AH7yBaGilIvIICdzCRaGEtaEFjJ0ZtsCHRgnm44GOSl9md/5+Zf9/sFuRbFXuoYIwHvK3gzm0bPUzxk3xTdFFblXiIryAPcIl++GHEP1HP65glnqIY8Y3wRTSTAgsKegGcYzdHVRn7gf+gkwHVONMg6ZgqauMdpcCHwa/AcVRrLSVe4DuwdhJvRewIGrHpYzPpOAm5k9gL/C74jbWQBI8YxfoE63jFFV4iPsJtrMd5Zy5FwXbSMbMinoJfzoLdkNI0u1ll/20HZ8G7SYGa2fyyceXNORvTB7aWK9eTAkOzv9oP/5wkHuSomivoyL/b18sdCyuKVCy+qnt/U5nbL02XWIGKO7Z9AAAAAElFTkSuQmCC',
        type: 'Other',
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
    left: 23%;
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
