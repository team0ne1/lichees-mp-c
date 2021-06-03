<template>
	<view class="weatherCard">
		<!-- <view class="condition"> -->
			<!-- {{condition}}: -->
			
			<!-- Outside Temp -->
		<!-- </view> -->
		<view v-if="weatherShow" class="currentTemp">
			{{condition+' '}}{{currentTemp}}℃
		</view>
	</view>
</template>

<script>
	import cloud1 from '../helper/cloudbase.js'
	export default {
		name:"t-weather-card",
		created:function(){
			let that = this
			uni.request({
			    url: 'https://pv.sohu.com/cityjson?ie=utf-8', //仅为示例，并非真实接口地址。
				method: 'GET',
				// header:{
					
				// },
			    success: (res) => {
					const reg = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;
					// let userIp = res.data.query;
					let ip = reg.exec(res.data);
					let userIp = ip[0]
					
					// let userIp = res.data.query;
					
			        console.log(userIp);
					let query = {
						ip:userIp
					}
			        cloud1.getCloud('/weather',query)
					.then((res) => {
						console.log(res.data)
						const weatherInfo  = res.data
						that.weatherShow = true
						that.condition = weatherInfo.condition
						that.currentTemp = weatherInfo.currentTemp
					})
			    }
			});
		},
		data() {
			return {
				// weatherInfo:{},
				weatherShow:false,
				condition:'',
				currentTemp:'',
			};
		}
	}
</script>

<style>
.weatherCard{
	background-color: rgba(152, 152, 152, 0.8);
	border-radius: 20upx;
	/* min-height: 1.4em; */
	min-width: 2.5em;
	backdrop-filter: blur(20px);
	color: #FFFFFF;
/* 	display: flex;
	flex-direction: column; */
	
	
}
.weatherCard .condition, .currentTemp{
	font-size: 25rpx;
}
.weatherCard .currentTemp{
	/* margin: auto; */
	padding-top: 8rpx;
	padding-bottom: 8rpx;
	padding-left: 15rpx;
	padding-right: 15rpx;
}
</style>
