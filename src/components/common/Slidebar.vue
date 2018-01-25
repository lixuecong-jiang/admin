<template>
	<div class="slidebar" >
		<el-menu :default-active="onRoutes" background-color="rgb(50, 66, 82)"  unique-opened class="el-menu-demo" @select="hand" active-text-color="#ddd" text-color="rgb(191, 205, 214)" router>
			<el-menu-item index="DashBoard">
				<span  class="sb-icon">
					<i class="material-icons">home</i>
				</span>
				<span class="sb-cn">DashBoard</span>
			</el-menu-item>
			<el-submenu index="2">
				<template slot="title">
					<span class="sb-icon">
						<i  class="material-icons">perm_data_setting</i>
					</span>
					<span class="sb-cn">Components</span>
				</template>
				<el-menu-item index="Editor">Editor</el-menu-item>
				<el-menu-item index="Markdown">Markdown</el-menu-item>
				<el-menu-item index="TodoList">TodoList</el-menu-item>
			</el-submenu>
			<el-submenu index="3">
				<template slot="title">
					<span class="sb-icon">
						<i class="material-icons">pie_chart</i>
					</span>
					<span class="sb-cn">charts</span>
				</template>
				<el-menu-item index="BasicCharts">BasicCharts</el-menu-item>
			</el-submenu>
			<el-submenu index="4">
				<template slot="title">
					<span class="sb-icon">
						<i class="material-icons">content_paste</i>
					</span>
					<span class="sb-cn">Form Elements</span>
				</template>
				<el-menu-item index="FormInput">Form Input</el-menu-item>
				<el-menu-item index="FormLayouts">Form Layouts</el-menu-item>
			</el-submenu>
			<el-submenu index="5">
				<template slot="title">
					<span class="sb-icon">
						<i class="material-icons">border_all</i>
					</span>
					<span class="sb-cn">Tables</span>
				</template>
				<el-menu-item index="BasicTables">Basic Tables</el-menu-item>
			</el-submenu>
		</el-menu>
	</div>
</template>
<script>
	export default {
		name: 'slidebar',
		data(){
			return {
			}
		},
		computed: {
			onRoutes(){
				return this.$route.path.replace('/', '');
			}
		},
		methods: {
			hand(key, keyPath){
				console.log(keyPath);
			}
		}
	}
</script>
<style scoped>
	.slidebar {
		position: absolute;
		top: 66px;
		left: 0px;
		bottom: 0;
		background-color: #324157;
		width: 200px;
	}
	.slidebar ul {
		height: 100%;
		width: 200px;
	}
	.el-menu-item, .el-submenu__title  {
		font-size: 14px;
	}
	.material-icons {
		font-size: 12px;
	}

</style>