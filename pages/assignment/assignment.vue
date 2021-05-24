<template>
	<view>
		<t-topbar :tablist="tapList" :currentTab="currentTab"></t-topbar>
		<t-tabbar :currentPage="page"></t-tabbar>
		
	</view>
</template>

<script>
	export default {
		onShow:function(){
			// this.page = null
			// this.$nextTick(function(){
			// 	this.page = 1
			// })
			uni.showLoading({
			    title: '加载中'
			});
			setTimeout(function () {
			    uni.hideLoading();
			}, 1200);
			console.log("ass show")
		},
		
		data() {
			return {
				page:1,
				currentTab:1,
				tapList:[
					{text:"tap1"},
					{text:"tap2"},
					{text:"tap3"},
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
