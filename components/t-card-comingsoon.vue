<template>
	<view class="cardView" :class="{press:isPressed}" @touchstart="isPressed=true"  @touchend="isPressed=false">
		<view class="comingSoonText">
			coming soon...
		</view>
	</view>
</template>

<script>
	export default {
		name:"t-card-comingsoon",
		data() {
			return {
				isPressed:false,
			};
		}
	}
</script>

<style>
.cardView{
	display: flex;
	
	border-radius: 30upx;
	/* height: 200upx; */
	/* margin-bottom: 0.5em; */
	padding:  30upx 30upx 30upx 30upx;
	background-color: #FFFFFF;
	box-shadow: 5upx 5upx 15upx #e5e5e5;
	height: 210upx;
	margin-bottom: 100upx;
	
}
.press{
	background-color: #e8e8ee;
}
.cardView .comingSoonText{
	margin: auto;
	text-align: center;
	align-self: center;
	font-size: 2em;
	font-weight: lighter;
	
}
</style>
