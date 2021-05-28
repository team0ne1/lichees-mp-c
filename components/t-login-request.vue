<template>
	<view class="loginRequest">
		<view class="title">
			使用该功能需要授权获取用户信息
		</view>
		<view class="">
			<view class="" @click="wxLogin">
				微信一键授权
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		name:"t-login-request",
		data() {
			return {
				
			}
		},
		methods:{
			wxLogin: function(){
				wx.login({
					success (res) {
						console.log('succeed'+ res)
					},
					fail (err){
						console.log('err'+ err)
					}
				})
			}
		}
	}
</script>

<style>
.loginRequest{
	position: absolute;
	top: 40%
	height: 8em;
	margin-left: 10%;
	margin-right: 10%;
	
}
</style>
