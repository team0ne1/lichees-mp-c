<template>
	<view>
		<text>property</text>
		<t-tabbar :currentPage="page"></t-tabbar>
	</view>
</template>

<script>
	export default {
		onShow:function(){
			// this.page = null
			// this.$nextTick(function(){
			// 	this.page = 2
			// })
			uni.showLoading({
			    title: '加载中'
			});
			setTimeout(function () {
			    uni.hideLoading();
			}, 1200);
			console.log("pro show")
		},

		data() {
			return {
				page:2
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
