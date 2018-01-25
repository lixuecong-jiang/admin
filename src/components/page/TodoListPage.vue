<template>
	<div>
		<v-pageTitle vTitle="To Do List"></v-pageTitle>
		<el-row :gutter="20">
            <el-col :span="12" :offset="6">
                <el-card class="box-card">
                   <v-todoList></v-todoList> 
                </el-card>
            </el-col>
           
            
        </el-row>
	</div>

</template>
<script>
import vPageTitle from '../common/pageTitle.vue';
import vTodoList from '../todoList/TodoList.vue'
	export default{
		name: 'TodoList',
		components: {
			vPageTitle, vTodoList
		}
	}
</script>
<style scoped>
	
</style>