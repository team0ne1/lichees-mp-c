<template>
	<view class="nav-bar" :style="'height:'+ navBarHeight + 'px;'">
		<input class="search" placeholder="输入关键词！" :style="'height:' + menuHeight + 'px; min-height:' + menuHeight + 'px; line-height:' + menuHeight + 'px; left:' + menuRight + 'px; bottom:' + menuBotton + 'px;'"></input>
	</view>

</template>

<script>
	export default {
		name:"t-navbar1",
		// mounted() {
		// 	console.log(getApp().globalData.navBarHeight)
		// 	console.log(getApp().globalData.menuRight)
		// 	console.log(getApp().globalData.menuBotton)
		// 	console.log(getApp().globalData.menuHeight)
		// },
		data() {
			return {
				navBarHeight: getApp().globalData.navBarHeight,
				menuRight: getApp().globalData.menuRight,
				menuBotton: getApp().globalData.menuBotton,
				menuHeight: getApp().globalData.menuHeight,
				
			};
		}
	}
</script>

<style>
.nav-bar{ 
	position: fixed; 
	width: 100%;
	top: 0; 
	color: #fff; 
	background-color:  rgba(0, 218, 171, 0.5);

	z-index: 1000;
	backdrop-filter: blur(10px);
}
.nav-bar .search{ 
	
	width: 60%; 
	color: #333; 
	font-size: 14px; 
	background-color:  rgba(255, 255, 255, 0.8);
	backdrop-filter: blur(20px);
	position: absolute; 
	border-radius: 50px; 

	padding-left: 14px;
}


</style>
