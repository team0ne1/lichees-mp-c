<template>
	<view>
		
		<t-topbar :tablist="tapList" :currentTab="currentTab2"></t-topbar>
		<t-tabbar :currentPage="page" ></t-tabbar>
		<t-coming-soon style="margin-top: 50%;"></t-coming-soon>
	</view>
</template>

<script>
	import tComingSoon from '../../components/t-coming-soon.vue'

	export default {
		components:{
			tComingSoon
		},
		onShow:function(){
			// this.page = null
			// this.$nextTick(function(){
			// 	this.page = 1
			// })
			console.log("ass show")
		},
		
		data() {
			return {
				page:1,
				currentTab2:0,
				tapList:[
					{text:"咨询"},
					{text:"带外卖"},
					{text:"带饭"},
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
