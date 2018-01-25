import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/common/Home';
import DashBoard from '@/components/page/DashBoard';
import Editor from '@/components/page/EditorPage';
import Markdown from '@/components/page/MarkdownPage';
import TodoList from '@/components/page/TodoListPage';
import BasicCharts from '@/components/page/BasicCharts';
import FormInput from '@/components/page/FormInput';
import FormLayouts from '@/components/page/FormLayouts';
import BasicTables from '@/components/page/BasicTables';

Vue.use(Router)

export default new Router({
	mode:'history',
  	routes: [
		{
	 		 path: '/',
	 		 component: Home,
	 		 children: [
	 			 {
	  				path: '/',
	  				component: DashBoard
	 			 },
	 			 {
	 			 	path: '/Editor',
	 			 	component: Editor
	 			 }, {
	 			 	path: '/Markdown',
	 			 	component: Markdown
	 			 },{
	 			 	path: '/TodoList',
	 			 	component: TodoList
	 			 },{
	 			 	path: '/BasicCharts',
	 			 	component: BasicCharts
	 			 },{
	 			 	path: '/DashBoard',
	 			 	component: DashBoard
	 			 },{
	 			 	path: '/FormInput',
	 			 	component: FormInput
	 			 },{
	 			 	path: '/FormLayouts',
	 			 	component: FormLayouts
	 			 },{
					  path: '/BasicTables',
					  component: BasicTables
				  }
	  			]
		}
 			 ]
	})
