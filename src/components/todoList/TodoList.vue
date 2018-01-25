<template>
	<div>
		<el-input placeholder="Take to do" v-model="inputContent" v-on:keyup.enter.native="onEnter"></el-input>
		<ul class="todoList">
			<li v-for="list in listContents">{{list.content}}</li>
		</ul>
	</div>
</template>
<script>
	export default {
		name: 'TodoList',
		data(){
			return {
				inputContent: '',
				 listContents:[
                    {content:'What do you think?',isDone:false},
                    {content:'Have fun with blue admin',isDone:false},
                    {content:'Write email to business cat',isDone:false},
                    {content:'Get in touch with jspang team',isDone:false},
                    {content:'Ei cum soleet appareat,ex est graeci medioc',isDone:false},
                    {content:'Simaul erroribus ad usu',isDone:false},
                    {content:'Vim an eius ocurreret abhorreant,id name a',isDone:false}  
                ]
			}
		},
		methods: {
			  onEnter:function(){
				if(this.inputContent!=''){
					this.listContents.push({content: this.inputContent, isDone: false});
					this.inputContent = '';
				}
				
			}
		}
	}
</script>
<style scoped>
	.todoList {
		margin-top: 5px;
		list-style: none;
		border: 1px solid #ccc;
		border-radius: 6px;
	}
	.todoList li {
		line-height: 20px;
		padding: 10px;
		border-bottom: 1px solid #ccc;
		border-left: 5px solid #209e91;
		cursor: pointer;
		text-align: left;
		transition: all .5s;
		-webkit-transition: all .5s;
		-moz-transition: all .5s;
		-o-transition: all .5s;
	}
	.todoList li:nth-child(2n){
		border-left: 5px solid #0e8174;
	}
	.todoList li:hover{
		border-left:30px solid #209e91;
		background-color: #eee;
	}
</style>