<template>
	<view class="publishBtn" @click="navTo()">
		<view class="publishBtnShape" :class="{}">
			<image src="../static/publish-btn/plus.svg"  mode="center" style=" width: 100% ;height: 100%"></image>
		</view>
	</view>
</template>

<script>
	export default {
		name:"t-publish-btn",
		data() {
			return {
				
			};
		},
		methods:{
			navTo: function(url){
				console.log('nav to publish page')
				uni.navigateTo({
					url:url
				})
			},
		}
	}
</script>

<style>
.publishBtn {
	z-index: 1000;
	position:fixed;
	right: 6%;
	bottom: 100upx;
	/* width: 90%; */
	height: 150upx;
	
	
	
}
.publishBtn .publishBtnShape {
	
	background-color: #1b97f5;
	width: 90upx;
	height: 90upx;
	border-radius: 45upx;
	box-shadow: 1upx 3upx 10upx #747474;
	
}

.publishBtn .publishBtnShapePress {	
	background-color: #1477bd;
	
}

</style>
