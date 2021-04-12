<template>
	<view>
		<text>ass</text>
		<t-topbar :tablist="tapList"></t-topbar>
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
			console.log("ass show")
		},
		
		data() {
			return {
				page:1,
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
