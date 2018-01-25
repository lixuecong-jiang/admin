<template>
	<div>
		<v-pageTitle vTitle="DashBoard"></v-pageTitle>
		<el-row :gutter="20">
			<el-col :xs="12" :sm="12" :md="12" :lg="6" v-for="card in cards">
				<el-card class="box-card">
					<el-row :gutter="6">
						<el-col :xs="24" :sm="8" :md="8" :lg="8">
							<el-progress type="circle" :percentage="card.percentage" :width="80"></el-progress>
						</el-col>
						<el-col :xs="24" :sm="11" :md="12" :lg="12">
							<div class="card-string">
								<span>{{ card.title }}</span>
								<span>
									<h2>
										{{ card.content | number  }}
									</h2>
								</span>
							</div>
						</el-col>
						<el-col :xs="24" :sm="5" :md="4" :lg="4">
							<div class="card-icon">
								<i class="material-icons">{{ card.icon }}</i>
							</div>
						</el-col>
					</el-row>
				</el-card>
			</el-col>
		</el-row>
		<el-row :gutter="20">
			<el-col :xs="24" :sm="24" :md="12" :lg="12">
				<el-card class="box-charts">
					<v-pieChart></v-pieChart>
				</el-card>
			</el-col>
			<el-col :xs="24" :sm="24" :md="12" :lg="12">
				<el-card class="box-charts">
					<v-lineChart></v-lineChart>
				</el-card>
			</el-col>
		</el-row>
		<el-row :gutter="20">
			<el-col :xs="24" :sm="24" :md="24" :lg="8">
				<el-card class="box-list">
					To Do List
					<hr>
					<TodoList></TodoList>
				</el-card>
			</el-col>
			<el-col :xs="24" :sm="24" :md="12" :lg="10">
				<el-card class="box-list">
					BORDERED TABLE
					<hr>
					<BorderTable></BorderTable>
				</el-card>
			</el-col>
			<el-col :xs="24" :sm="24" :md="24" :lg="6">
				<el-card class="box-list">
					Message List
					<hr>
					<MessageList></MessageList>
				</el-card>
			</el-col>
		</el-row>
	</div>
	
</template>
<script>
import vPageTitle from '../common/pageTitle.vue';
import vLineChart from '../charts/lineChart.vue';
import vPieChart from '../charts/pieChart.vue';
import TodoList from '../todoList/TodoList.vue';
import BorderTable from '../tables/BorderTable.vue';
import MessageList from '../message/MessageList.vue';
	export default {
		name: 'DashBoard',
		components: {
			vPageTitle, vLineChart,vPieChart,TodoList,BorderTable,MessageList
		},
		data(){
			return {
				cards: [
				{
					percentage: 67,
					title: 'New Visits',
					content: 57820,
					icon: 'person_outline'
				},
				{
					percentage: 81,
					title: 'Purchases',
					content: 1680,
					icon: 'attach_money'
				},
				{
					percentage: 30,
					title: 'Active Users',
					content: 157820,
					icon: 'touch_app'
				},
				{
					percentage: 88,
					title: 'Returned',
					content: 32645,
					icon: 'replay'
				},
				]
			}
		},
		filters: {
			number(value){
				if(!value){
					return ;
				}
				value = value.toString().split('');
				
				var length = value.reverse().length;
				var numLength = Math.ceil((length/3-1));
				// if(numLength % 1 === 0){
				// 	numLength = numLength - 1;
				// }else{
				// 	numLength = parseInt(numLength)
				// }
				var j = 3;
				for(var i = 0; i < numLength; i++){
					value.splice(j, 0 , ',');
					j = j+4;

				}	
				return value.reverse().join('');	


			}
		}
	}
</script>
<style scoped>
	.el-col {
		margin-bottom: 16px;
		text-align: center;
	}
	.box-card {
		height: 110px;
	}
	.card-string {
		height: 100px;
		padding-top: 10px;
		font-size: 1.1rem;
		color: rgb(119,119,119);
	}
	.material-icons {
		font-size: 80px;
		color: #ddd;
	}
	.box-charts {
		height: 420px;
	}
	.box-list {
		height: auto;
		text-align: left;
		color: rgb(119,119,119);
	}
	.box-list hr {
		height: 1px; 
		border: none;
		border-top: 1px dashed #ccc;
		margin-top: 6px;
		margin-bottom: 5px;
	}
</style>