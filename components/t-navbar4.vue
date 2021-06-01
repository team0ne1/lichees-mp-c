<template>
	<view class="nav-bar" :style="'height:'+ navBarHeight + 'px;'">
<!-- 		<view class="navTitle" :style="'height:' + menuHeight + 'px; min-height:' + menuHeight + 'px; line-height:' + menuHeight + 'px; left:' + menuRight + 'px; bottom:' + menuBotton + 'px;'">		
			
		</view> -->
	</view>

</template>

<script>
	export default {
		name:"t-navbar4",
		// mounted() {
		// 	console.log(getApp().globalData.navBarHeight)
		// 	console.log(getApp().globalData.menuRight)
		// 	console.log(getApp().globalData.menuBotton)
		// 	console.log(getApp().globalData.menuHeight)
		// },
		props:['welcomeText'],
		data() {
			return {
				navBarHeight: getApp().globalData.navBarHeight,
				menuRight: getApp().globalData.menuRight,
				menuBotton: getApp().globalData.menuBotton,
				menuHeight: getApp().globalData.menuHeight,
				
			};
		},
		methods:{

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
	opacity: 0;

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
