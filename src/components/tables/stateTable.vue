<template>
    <div class="state">
        <el-table :data="tableData" style="width:100%" border :row-class-name="tableRowClassName" >
            <el-table-column label="日期" prop="date" width="180"></el-table-column>
            <el-table-column label="姓名" prop="name" width="180"></el-table-column>
            <el-table-column label="地址" prop="address" width="180"></el-table-column>
        </el-table>
    </div>
</template>
<script>
    export default {
        name: 'stateTable',
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金 1518 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }]
            }
        },
        methods: {
            tableRowClassName({row, rowIndex}){
                if(rowIndex === 1){
                    return 'warning-row';
                }else if(rowIndex === 3){
                    return 'success-row';
                }else {
                    return '';
                }
            }
        }
    }
</script>
<style>
</style>


