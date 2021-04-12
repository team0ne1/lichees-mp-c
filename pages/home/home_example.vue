<template>
	<view class="content">
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<c-input v-model="city"></c-input>
		<view>
			<button  @click="getValue" style="background-color: #007AFF;">Send</button>	
		</view>
		<view class="text-area">
			<view>
				<text class="title">{{city}}</text>	
			</view>
			<view>
				<text class="title">temp now:{{resResult}}</text>	
			</view>
			
		</view>
	</view>
</template>

<script>
	import cInput from '../../components/c-input.vue' 
	export default {
		components:{
			cInput
		},
		data() {
			return {
				title: 'Weather',
				city : 'shenzhen',
				resResult : '123',
			}
		},
		onLoad() {

		},
		methods: {
			getValue: function(){
				console.log(this.city)
				this.getWeather(this.city)
				.then((res)=>{
					this.resResult = res.data.current.temp_c
					console.log(res.data)
				})
				
			},
			getWeather: function(city){
				return new Promise((resolve, reject)=>{
					wx.request({
						url:'https://weatherapi-com.p.rapidapi.com/forecast.json',
						// method:'GET',
						data:{q:city,days:2},
						header:{
							"x-rapidapi-key": "7e638a15ecmsh02c5e9ec5e8832cp174ef0jsnf9a016fe21b0",
							"x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
							"useQueryString": "true"
						},
						dataType: 'json',
						
						success:(res)=> {
							console.log(res)
						    resolve(res)
						},
						fail: (err)=>{
							uni.showToast({
								"title": "获取数据失败",

							})
							reject(err);
						}					
					})
				})
			}

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
