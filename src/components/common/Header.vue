<template>
	<div class="header">
		<el-row :gutter="10">
			<!-- logo area -->
			<el-col :xs="12" :sm="12" :md="4">
				<div class='logo'>
					<span class="prefix-logo">lizhazha</span>
					<span class="suffix-logo">Admin</span>
				</div>
			</el-col>
			<!-- search area -->
			<el-col :xs="12" :sm='12' :md="8">
				<div class="search">
					<el-input placeholder="Search for..." size="small">
						<el-button slot="append" class="el-icon-search"></el-button>
					</el-input>
				</div>
			</el-col>
			<!-- website area -->
			<el-col :xs="12" :sm="12" :md="4">
				<div class="website">
					<span>Website:</span>
					<span>www.lizhazha.com</span>
				</div>
			</el-col>
			<!-- dropdown area -->
			<el-col :xs="8" :sm="8" :md="{span:2, offset:4}">
				<div class="header-right">
					<el-col :span="10">
						<el-dropdown>
							<span>
								<el-badge :value="5" class="item">
									<i class="el-icon-message"></i>
								</el-badge>
							</span>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item class="pop-title">You have new Message!</el-dropdown-item>
								<el-dropdown-item v-for="dialog in dialogs" divided>
									<div class="pop-div">
										<span class="pop-image">
											<img :src="dialog.header" alt="头像">
										</span>
										<span class="pop-content">
											{{dialog.content}}
										</span>
										<span class="pop-time">
											{{dialog.time}}分钟前
										</span>
									</div>
								</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</el-col>
					<el-col :span="8">
						<el-dropdown>
							<span>
								<el-badge :value="3" class="item">
									<i class="el-icon-date"></i>
								</el-badge>
							</span>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item class="pop-title">You have new task!</el-dropdown-item>
								<el-dropdown-item v-for="task in tasks" divided :key="task.id">
									<div class="task-div">
										<span class="task-span task-tag">
											<el-tag type="danger" v-if="task.rank === 1">紧急</el-tag>
											<el-tag type="warning" v-if="task.rank === 2">重要</el-tag>
											<el-tag type="success" v-if="task.rank === 3">正常</el-tag>
										</span>
										<span class="task-span task-content">
											{{task.content}}
											<br>
											<span class="task-time">
												截止：{{task.overTime}}
											</span>
										</span>
										<span class="task-span task-btn">
											<el-button type="primary" size="mini">完成</el-button>
										</span>
									</div>
								</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</el-col>
				</div>
			</el-col>
			<!-- setting area -->
			<el-col :xs="8" :sm="8" :md="2">
				<div class="user-header">
					<el-dropdown trigger="click">
						<span>
							<img src="../../../static/images/b_header.jpg" alt="头像" width="50px">
						</span>

						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item>
								<div class="setting-div">
									<span class="setting-icon">
										<i class="material-icons">account_box</i>
									</span>
									<span class="setting-string">Profile  个人</span>
								</div>
							</el-dropdown-item>
							<el-dropdown-item divided>
								<div class="setting-div">
									<span class="setting-icon">
										<i class="material-icons">settings</i>
									</span>
									<span class="setting-string">Settings 设置</span>
								</div>
							</el-dropdown-item>
							<el-dropdown-item divided>
								<div class="setting-div">
									<span class="setting-icon">
										<i class="material-icons">assignment_return</i>
									</span>
									<span class="setting-string">Sign out 退出</span>
								</div>
							</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</div>
			</el-col>
		</el-row>
	</div>
</template>
<script>
	export default{
		name: 'Header',
		data(){
			return {
				dialogs:[
                    {header:'../../static/images/b_header2.jpg',content:'我有一个Style样式需要您帮忙处理以下。',time:'3'},
                    {header:'../../static/images/b_header3.jpg',content:'中午一起吃个饭吧，我请客。',time:'15'},
                    {header:'../../static/images/b_header.jpg',content:'需要处理一下POP展示的白边样式。',time:'18'},
                    {header:'../../static/images/b_header2.jpg',content:'下午3点开需求会议，准时参加。',time:'24'},
                    {header:'../../static/images/b_header3.jpg',content:'晚上我开车送你回家，你请我吃晚饭。',time:'45'},
                ],
                 tasks:[
                    {id:1,rank:1,content:'完成lizhazhaAdmin头部头部组件的编写。',overTime:'2017/3/9'},
                    {id:2,rank:2,content:'完成GitHub仓库的初始化工作。',overTime:'2017/3/15'},
                    {id:3,rank:3,content:'在阿里云进行网站备案，完成后通知组长。',overTime:'2017/3/20'}
                    
                ]
			}
		 
            }
		}
</script>
<style scoped>
.header {
	height: 66px;
	line-height: 66px;
	width: 100%;
	background-color:#324157;
	box-sizing: border-box;
	font-size: 14px;
	box-shadow: 2px 0 3px rgba(0, 0, 0 , .5);
	overflow: hidden;
	padding: 0 32px 0 40px;
	position: fixed;
	z-index: 1000;
}
.header .logo {
	font-size: 22px;
	cursor: pointer;
	float: left;
}
.header .logo .prefix-logo {
	color: #209e91;
}
.header .logo .suffix-logo {
	color: #fff;
}
.header .search {
	float: left;
	color: #fff;
	font-size: 14px;
}
.header .website span {
	color: #209e91;
}
.header .website span:first-child {
	color: #fff;
}
.header .header-right {
	padding-top:25px;
    line-height:10px;
}
.header .header-right span {
	line-height: 1px;
	font-size: 18px;
	cursor: pointer;
	height: 18px;
	display: inline-block;
	color: #fff;
	margin-left:14px;
}
.header .header-right span:hover {
	color: #209e91;
}
.pop-title {
	color: #209e91;
	font-size: 12px;
}
.pop-div {
	height: 55px;
	clear: both;
}
.pop-image {
	display: block;
	float: left;
}
.pop-image img {
	border-radius: 50%;
}
.pop-content {
	margin-left: 60px;
	display: block;
	font-size: 12px;
	line-height: 14px;
	padding-top: 15px;
}
.pop-time {
	display: block;
	float: right;

}
.task-div {
    clear:both;
    height:55px;
}
.task-span {
    display:block;
    float:left;
    font-size:12px;
}
    
.task-content {  
  	width:160px;
    line-height:16px;
    margin-left:10px;
    padding:5px;
}
.task-time {
    /*clear:both;*/
    float:right;
    color:#ccc;
        
}
.user-header {
	font-size: 12px;
	line-height: 10px;
	padding-top: 7px;
}
.user-header img {
	border-radius: 50%;
	cursor: pointer;
}
.setting-div {
	height: 30px;
	line-height: 30px;
}
.setting-div span {
	display: block;
	float: left;
	font-size: 12px;
}
.setting-div .setting-icon {
	padding-top: 3px;
	padding-right: 3px;
}
</style> 