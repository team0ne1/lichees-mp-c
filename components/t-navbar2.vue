<template>
	<view class="nav-bar" :style="'height:'+ navBarHeight + 'px;'">
		<view @click="navBack" class="navTitle" :style="'height:' + menuHeight + 'px; min-height:' + menuHeight + 'px; line-height:' + menuHeight + 'px; left:' + menuRight + 'px; bottom:' + menuBotton + 'px;'">
				<image  src="../static/navBar/arrowLeft.svg" style="width: 35upx;height: 35upx; padding-left: 10upx;padding-top: 20upx;"></image> 	
				{{navTitle}}
		</view>
	</view>

</template>

<script>
	export default {
		name:"t-navbar2",
		// mounted() {
		// 	console.log(getApp().globalData.navBarHeight)
		// 	console.log(getApp().globalData.menuRight)
		// 	console.log(getApp().globalData.menuBotton)
		// 	console.log(getApp().globalData.menuHeight)
		// },
		props:['navTitle'],
		data() {
			return {
				navBarHeight: getApp().globalData.navBarHeight,
				menuRight: getApp().globalData.menuRight,
				menuBotton: getApp().globalData.menuBotton,
				menuHeight: getApp().globalData.menuHeight,
				
			};
		},
		methods:{
			navBack(){
				uni.navigateBack({
					
				})
			}
		}
	}
</script>

<style>
.nav-bar{
	z-index: 1000;
	position: fixed;
	 width: 100%; 
	 top: 0; 
	 color: #fff; 
	 background: #5dce9b;
}
.nav-bar .navTitle{ 
	width: 60%;
	color: #fff; 
	font-size: 1.4em;
	font-weight: bold;
	position: absolute;
	padding-left: 2px;
	/* display: flex; */
}


</style>
