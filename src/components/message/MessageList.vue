<template>
	<div>
		<ul class="messageList">
			<li v-for="message in messages">
				<span>
					<img :src="message.header" alt="头像">
				</span>
				<span class="ms-name">{{message.name}}</span>
				<span class="ms-content">{{message.content}}</span>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		name: 'MessageList',
		data(){
			return {
				 messages:[
                    {header:'../../static/images/b_header2.jpg',name:'JSPang',content:'我有一个Style样式需要您帮忙处理以下。',time:'3'},
                    {header:'../../static/images/b_header3.jpg',name:'Panda',content:'中午一起吃个饭吧，我请客。',time:'15'},
                    {header:'../../static/images/b_header.jpg',name:'LinDa',content:'需要处理一下POP展示的白边样式。',time:'18'},
                    {header:'../../static/images/b_header2.jpg',name:'JSPang',content:'下午3点开需求会议，准时参加。',time:'24'},
                    {header:'../../static/images/b_header3.jpg',name:'JSPang',content:'晚上我开车送你回家，你请我吃晚饭。',time:'45'}
                ]
			}
		}
	}
</script>
<style scoped>
	.messageList{
		list-style: none;
	}
	.messageList li{
		border-bottom: 1px solid #ccc;
		padding: 10px;
		overflow: hidden;
		cursor: pointer;
		height: auto;
	}
	.messageList li span {
		float: left;
		display: block;
		margin-right: 5px;
		height: auto;
	}
	.messageList li span img {
		border-radius: 50%;
		transition: all .5s;
		-webkit-transition: all .5s;
		-moz-transition: all .5s;
		-ms-transition: all .5s;
		-o-transition: all .5;
		width: 50px;
	}
	.messageList li:hover img {
		width: 55px;
	}
	.messageList .ms-name {
		color: #4cb1a7;;
	}
	.messageList .ms-content {
		width: 70%;
		font-size: 12px;
		margin-top: 6px;
	}
</style>