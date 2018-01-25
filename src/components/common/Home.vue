<template>
	<div class="wrapper">
		<v-head></v-head>
		<v-slidebar></v-slidebar>
		<div class="content">
			<transition name="move" mode="out-in">
				<router-view />
			</transition>
		</div>
	</div>
</template>
<script>
import vHead from './Header.vue'
import vSlidebar from './Slidebar.vue'
	export default {
		components: {
			vHead, vSlidebar
		}
	}
</script>
<style>
	
</style>