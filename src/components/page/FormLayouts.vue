<template>
	<div>
		<v-pageTitle vTitle="FormLayouts"></v-pageTitle>
		<el-row>
			<el-col :xs="24" :sm="24" :md="24" :lg="24">
				<el-card class="box-card">
					InlineForm-行布局
					<hr>
					<v-inlineForm></v-inlineForm>
				</el-card>
			</el-col>
		</el-row>
		<el-row :gutter="20">
			<el-col :xs="24" :sm="24" :md="8" :lg="8">
				<el-card class="box-card">
					Right Layout Form
					<hr>
					<v-rightForm></v-rightForm>
				</el-card>
			</el-col>
			<el-col :xs="24" :sm="24" :md="8" :lg="8">
				<el-card class="box-card">
					Left Layout Form
					<hr>
					<v-leftForm></v-leftForm>
				</el-card>
			</el-col>
			<el-col :xs="24" :sm="24" :md="8" :lg="8">
				<el-card class="box-card">
					Top Layout Form
					<hr>
					<v-topForm></v-topForm>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>
<script>
	import vPageTitle from '../common/pageTitle';
	import vInlineForm from '../form/inlineForm';
	import vRightForm from '../form/rightForm';
	import vLeftForm from '../form/leftForm';
	import vTopForm from '../form/topForm';
	export default {
		name: 'FormLayout',
		components: {
			vPageTitle,
			vInlineForm,
			vRightForm,
			vLeftForm,
			vTopForm
		}
	}
</script>
<style scoped>
	.box-card {
		line-height: 16px;
		font-size: 12px;
		color: rgb(119, 119, 119);
	}
	.box-card hr {
		height: 1px;
		border: none;
		border-bottom: 1px dashed #ccc;
		margin-top: 10px;
		margin-bottom: 10px;
	}
	.el-row {
		margin-bottom: 16px;
	}
</style>