<template>
	<div>
		<vPageTitle vTitle="FormInput"></vPageTitle>
		<el-row :gutter="20">
			<el-col :xs="24" :sm="24" :md="12" :lg="12">
				<el-card class="box-card input-margin">
					STANDARD FIELDS
					<hr>
					Text
					<el-input placeholder="请输入内容"></el-input>
					With Icon
					<el-input placeholder="带图标的文本框" suffix-icon="el-icon-search"></el-input>
					Disabled Input
					<el-input placeholder="请输入内容" disabled></el-input>
					Textarea
					<el-input type="textarea" placeholder="请输入内容" :rows="4"></el-input>
					Small Input
					<el-input size="small" placeholder="请输入内容"></el-input>
					Large Input
					<el-input size="large" placeholder="请输入内容"></el-input>
					Autosize textarea
					<el-input placeholder="请输入内容" autosize type="textarea"></el-input>
					Button Input
					<el-input placeholder="请输入内容">
						<span slot="prepend">Http://</span>
						<el-button slot="append">.com</el-button>
					</el-input>
					Clearable Input
					<el-input placeholder="请输入内容" clearable></el-input>
				</el-card>
			</el-col>
				<el-col :xs="24" :sm="24" :md="12" :lg="12">
					<el-row>
						<el-col :span="24">
                			<el-card class="box-card">
			                    EXAMPLE FORM
			                  <hr>
			                  <el-form ref="form" label-width="80px">
			                  	<el-form-item label="活动名称">
			                  		<el-input placeholder="请输入活动名称"></el-input>
			                  	</el-form-item>
			                  	<el-form-item label="活动时间">
			                  		<el-col :span="12">
			                  			<el-date-picker type="date" placeholder="请输入日期" style="width:99%"></el-date-picker>
			                  		</el-col>
			                  		<el-col :span="12">
			                  			<el-time-picker placeholder="请输入时间" style="width:100%"></el-time-picker>
			                  		</el-col>
			                  	</el-form-item>
			                  	<el-form-item label="活动性质">
			                  		<el-checkbox-group>
			                  			<el-checkbox label="美食/餐厅上线活动"></el-checkbox>
			                  			<el-checkbox label="地推活动"></el-checkbox>
			                  		</el-checkbox-group>
			                  	</el-form-item>
			                  	<el-form-item>
			                  		<el-button>立即创建</el-button>
			                  		<el-button>取消</el-button>
			                  	</el-form-item>
			                  </el-form>
                			</el-card>
                		</el-col>
                	</el-row>
                	<el-row>
                		<el-col :span="24">
                			<el-card class="box-card">
                				Time Picker
                				<hr>
                				固定时间点: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                				<el-time-select v-model="time1" :picker-options="{start: '08:30', step: '00:15', end: '18:30'}" style="width: 80%" placeholder="输入时间"></el-time-select>
                				<br>
                				<br>
                				固定时间范围: &nbsp;&nbsp;
                				<el-time-select v-model="startTime" :picker-options="{start: '08:30', step: '00:15', end: '18:30', maxTime: endTime}" style="width: 39%"  placeholder="输入起始时间"></el-time-select>
                				<el-time-select v-model="endTime" :picker-options="{start: '08:30', step: '00:15', end: '18:30', minTime: startTime}" style="width: 40%" placeholder="输入结束时间"></el-time-select>
                			</el-card>
                		</el-col>
                	</el-row>
            	</el-col>
		</el-row>
		<el-row :gutter="20">
			<el-col :xs="24" :sm="24" :md="12" :lg="12">
				<el-card class="box-card">
					SELECTS
					<hr>
					正常的下拉框
					<el-select v-model="select1" placeholder="请选择" style="width:100%">
						<el-option v-for=" item in options1" :key="item.value" :label="item.label" :value="item.value"></el-option>
					</el-select>
					有禁用项的下拉框
					<el-select v-model="select1" placeholder="请选择" style="width:100%">
						<el-option v-for=" item in options2" :key="item.value" :label="item.label" :value="item.value" :disabled="item.disabled"></el-option>
					</el-select>
					禁用的下拉列表
					<el-select v-model="select1" placeholder="请选择" style="width:100%" disabled>
						<el-option v-for=" item in options1" :key="item.value" :label="item.label" :value="item.value"></el-option>
					</el-select>
					多选的下拉列表
					<el-select v-model="select1" placeholder="请选择" style="width:100%" multiple>
						<el-option v-for=" item in options1" :key="item.value" :label="item.label" :value="item.value" ></el-option>
					</el-select>
					分组的下拉列表
					<el-select v-model="select1" placeholder="请选择" style="width:100%">
					    <el-option-group
					      v-for="group in options3"
					      :key="group.label"
					      :label="group.label">
					      <el-option
					        v-for="item in group.options"
					        :key="item.value"
					        :label="item.label"
					        :value="item.value">
					      </el-option>
					   </el-option-group>
					</el-select>
				</el-card>
			</el-col>
			<el-col :xs="24" :sm="24" :md="12" :lg="12">
				<el-row>
					<el-col :span="24">
						<el-card class="box-card">
							INPUT GROUPS
							<hr>
							<el-input placeholder="请输入内容">
								<span slot="prepend">Http://</span>
							</el-input>
							<br>
							<br>
							<el-input placeholder="请输入内容">
								<span slot="append">.com</span>
							</el-input>
							<br>
							<br>
							<el-input placeholder="请输入内容">
								<el-select slot="prepend">
									<el-option v-for="item in options1" :label="item.label"></el-option>
								</el-select>
								<el-button slot="append" icon="el-icon-search"></el-button>
							</el-input>
						</el-card>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="24">
						<el-card class="box-card">
							RATE
							<hr>
							用户打分
							<el-rate></el-rate>
							区分颜色
							<el-rate :colors="['red', 'green', 'orange']" show-text></el-rate>
							只读
							<el-rate disabled show-score show-text v-model="value"></el-rate>
						</el-card>
					</el-col>
				</el-row>
			</el-col>
		</el-row>
	</div>
</template>
<script>
import vPageTitle from '../common/pageTitle';
	export default{
		name: 'FormInput',
		components: {
			vPageTitle,
		},
		data(){
				return {
					value: 3.7,
					time1: '',
					startTime: '',
					endTime: '',
					select1: '',
					options1: [{value: '选项1',label: '黄金糕'},
                           {value: '选项2',label: '双皮奶'}, 
                           {value: '选项3',label: '蚵仔煎'}, 
                           {value: '选项4',label: '龙须面'},
                           {value: '选项5',label: '北京烤鸭'}],
                    options2: [{value: '选项1',label: '黄金糕'},
                           {value: '选项2',label: '双皮奶',disabled: true}, 
                           {value: '选项3',label: '蚵仔煎'}, 
                           {value: '选项4',label: '龙须面'},
                           {value: '选项5',label: '北京烤鸭'}],
                    options3: [{
				          label: '热门城市',
				          options: [{
				            value: 'Shanghai',
				            label: '上海'
				          }, {
				            value: 'Beijing',
				            label: '北京'
				          }]
				        }, {
				          label: '城市名',
				          options: [{
				            value: 'Chengdu',
				            label: '成都'
				          }, {
				            value: 'Shenzhen',
				            label: '深圳'
				          }, {
				            value: 'Guangzhou',
				            label: '广州'
				          }, {
				            value: 'Dalian',
				            label: '大连'
				          }]
				        }],
				}
			}
	}
</script>
<style scoped>
	.el-row {
		margin-bottom: 20px;
	}
	.box-card {
		font-size: 12px;
		line-height: 26px;
		color: rgb(119, 119, 119);
	}
	.box-card.input-margin .el-input:last-child {
		/*margin-bottom: 20px;*/
	}
	.box-card hr{
		border: none;
		height: 1px;
		border-bottom: 1px dashed #ccc;
		margin-bottom: 10px;
	}
</style>