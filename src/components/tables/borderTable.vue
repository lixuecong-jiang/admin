<template>
	<div>
		<el-table :data="tableData" style="width: 100%" border stripe>
			<el-table-column prop="id" label="ID" width="80" fixed></el-table-column>
			<el-table-column prop="userName" label="NAME" width="180" fixed></el-table-column>
			<el-table-column prop="age" label="AGE" width="80"></el-table-column>
			<el-table-column prop="ability" label="ABILITY"></el-table-column>
			<el-table-column prop="value" label="VALUE" align="right"></el-table-column>
		</el-table>
	</div>
</template>
<script>
	export default {
		name: 'BorderTable',
		data(){
			return {
				tableData:[{
		            id:1,
		            userName: 'Lizhazha',
		            age: '20',
		            ability: 'HTML5,PHP',
		            value:'80%'
		          }, {
		            id:2,
		            userName: 'King',
		            age: '28',
		            ability: 'Web,PHP',
		            value:'70%'
		          }, {
		            id:3,
		            userName: 'Panda',
		            age: '30',
		            ability: 'PHP,MySql',
		            value:'60%'
		          }, {
		            id:4,
		            userName: 'HaiPu',
		            age: '35',
		            ability: 'Web,DB',
		            value:'80%'
		          }, {
		            id:3,
		            userName: 'Panda',
		            age: '30',
		            ability: 'PHP,MySql',
		            value:'60%'
		          }, {
		            id:4,
		            userName: 'HaiPu',
		            age: '35',
		            ability: 'Web,DB',
		            value:'80%'
		          }, {
		            id:3,
		            userName: 'Panda',
		            age: '30',
		            ability: 'PHP,MySql',
		            value:'60%'
		          }]
			}
		}
	}
</script>
<style scoped>
	
</style>