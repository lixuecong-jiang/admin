<template>
	<div> 
		<v-pageTitle vTitle="BasicCharts"></v-pageTitle>
		<el-row :gutter="20">
			<el-col :xs="24" :sm="24" :md="8" :lg="8">
				<el-card class="box-list">
					<bar-chart></bar-chart>
				</el-card>
			</el-col>
			<el-col :xs="24" :sm="24" :md="8" :lg="8">
				<el-card>
					<line-chart></line-chart>
				</el-card>
			</el-col>
			<el-col :xs="24" :sm="24" :md="8" :lg="8">
				<el-card>
					<radar-chart></radar-chart>
				</el-card>
			</el-col>
		</el-row>
		<el-row :gutter="20">
			<el-col :xs="24" :sm="24" :md="12" :lg="12">
				<el-card>
					<pie-chart></pie-chart>
				</el-card>
			</el-col>
			<el-col :xs="24" :sm="24" :md="12" :lg="12">
				<el-card>
					<funnel-chart></funnel-chart>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>
<script>
import vPageTitle from '../common/pageTitle';
import barChart from '../charts/barChart';
import lineChart from '../charts/lineChart';
import radarChart from '../charts/radarChart';
import pieChart from '../charts/pieChart';
import funnelChart from '../charts/funnelChart';
	export default {
		name: 'BasicCharts',
		components: {
			vPageTitle, barChart, lineChart, radarChart, pieChart, funnelChart
		}
	}
</script>
<style scoped>
	.el-row {
		margin-bottom: 16px;
	}
</style>