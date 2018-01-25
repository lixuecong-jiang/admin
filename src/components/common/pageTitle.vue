<template>
	<div class="pageTitle">
		<div class="pt-left">
			<h2>{{vTitle.toUpperCase()}}</h2>
		</div>
		<div class="pt-right">
			<el-breadcrumb separator="/" class="pt">
				<el-breadcrumb-item :to="{path: '/'}" class="home">Home</el-breadcrumb-item>
				<el-breadcrumb-item class="pt-content">{{vTitle}}</el-breadcrumb-item>
			</el-breadcrumb> 

		</div>
	</div>
</template>
<script>
	export default {
		name: 'PageTitle',
		props: ['vTitle']
	}
</script>
<style>
	.pageTitle {
		height: 55px;
	}
	.pt-left {
		float: left;
	}
	.pt-right {
		float: right;
	}
</style>