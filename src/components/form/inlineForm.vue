<template>
	<div>
		<el-form :inline="true" label-width="80px">
			<el-form-item label="审批人">
				<el-input></el-input>
			</el-form-item>
			<el-form-item label="审批事项">
				<el-input></el-input>
			</el-form-item>
			<el-form-item label="活动区域">
				<el-select v-model="select">
					<el-option v-for="option in options" :label="option.label" :value="option.value" :key="option.label"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit">查询</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>
<script>
	export default {
		name: 'inlineForm',
		data(){
			return {
				select: '',
				options: [{
					label: '区域一',
					value: '区域一'
				},{
					label: '区域二',
					value: '区域二'
				}]
			}
		},
		methods: {
			onSubmit(){
				console.log('submit!!!!!');
			}
		}
	}
</script>
<style scoped>

</style>