<template>
  <div>
<el-table :data="tableData">
  <el-table-column label="日期" prop="date" width="180" fixed="left"></el-table-column>
  <el-table-column label="姓名" prop="name" width="180"></el-table-column>
  <el-table-column label="地址" prop="address" width="180"></el-table-column>
  <el-table-column label="省份" prop="province" width="180"></el-table-column>
  <el-table-column label="城市" prop="city" width="180" fixed="right"></el-table-column>
</el-table>
  </div>
</template>
<script>
export default {
  name: 'fixCol',
  data(){
      return {
          tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
  }
}
</script>
<style scoped>

</style>

