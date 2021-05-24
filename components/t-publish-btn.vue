<template>
	<view class="publishBtn">
		<view class="publishBtnShape">
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
		}
	}
</script>

<style>
.publishBtn {
	z-index: 1000;
	position:fixed;
	right: 8%;
	bottom: 100upx;
	/* width: 90%; */
	height: 150upx;
	
	
	
}
.publishBtn .publishBtnShape {
	
	background-color: #1b97f5;
	width: 80upx;
	height: 80upx;
	border-radius: 40upx;
	box-shadow: 0 0 5px #c8c8c8;
	
}

</style>
