<template>
	<div>
		<v-pageTitle vTitle="EditorPage"></v-pageTitle>
		<quillEditor ref="myTextEditor" v-model="content" :options="editorOption" @change="onEditorChange($event)" @blur="onEditorBlur($event)"  @focus="onEditorFocus($event) " @ready="onEditorReady($event)">
        </quillEditor>
        <div class="ql-editor html" v-text="content">
        	
        </div>
	</div>
</template>
<script>
import vPageTitle from '../common/pageTitle.vue';
import {quillEditor} from 'vue-quill-editor';
import 'quill/dist/quill.snow.css';
	export default{
		name: 'Editor',
		components: {
			vPageTitle, quillEditor
		},
		data(){
			return {
				content:'<h2>lizhazhaAdmin 是一个由Vue2为框架开发的后台管理系统。</h2><h3>你可以随意的使用并编辑它，希望可以帮助前端开发者减轻开发步骤，让大家有时间享受生活。</h3>',
                editorOption: {}
			}
		},
		methods: {
			onEditorBlur(editor) {
                    console.log('editor blur!', editor)
                },
             onEditorFocus(editor) {
                    console.log('editor focus!', editor)
                },
             onEditorReady(editor) {
                    console.log('editor ready!', editor)
                } ,
             onEditorFocus(editor) {
                    console.log('editor focus!', editor)
                },
             onEditorChange(editor) {
                    console.log('editor change!', editor)
                } 
		},
		 computed: {
            editor() {
                console.log(this.$refs.myTextEditor.quillEditor) ;
            }
		}
	}
</script>
<style scoped>
	
    .html {
        border: 1px solid #ccc;
        background-color: #fff;
        resize: vertical;
        overflow-y: hidden;
        border-top: none;

    }
    .html {

    }
</style>