<template>
	<view class="cardView" :animation="animationData" :class="{press:isPressed}"  @touchstart="touchstart" @click="navTo('/pages/reserve_detail/reserve_detail')" @touchend="touchend" >
<!-- 		<view class="cardImg">
		
		</view> -->
		<view class="cardContain" >
		<view  class="cardTop" >
			<view class="" style="display: flex; margin-top: 5upx;margin-bottom: 5upx;">
				<view class="colorBar" :style="'background-color:'+ randomColor"></view>
				<view class="classTime" >

					<view class="">
						<text>05</text>	
					</view>
					<view class="" style=" height: 20upx; width: 0.5em;  border-right: 1px solid #989898; ">
						
					</view>
					<view class="">
						<text>12</text>
					</view>				
				</view>	
				
			</view>

			<view class="mainInfo" >
				<view class="" style="display: flex; ">
					<view class="cardTitle nowrap" style="width: 85%;">
						 {{cardDate.title}}
					</view>
					<view class="chevron" style="margin-left: auto;margin-right: 10upx;">
						<image src="../static/card/chevron.svg" mode="aspectFit" style="width: 1em; height: 100%;"></image>		
					</view>
				</view>
				<view class="location" style="display: flex;">
					<image src="../static/card/location.svg" style="width: 0.8em; height: 0.8em;margin-top: 0.3em;margin-right: 0.2em;"></image>
					<view class="locationText nowrap" style="width: 85%;">
						{{cardDate.text}}
					</view>					
				</view>
				<view class="time" style="display: flex; ">
					<image src="../static/card/time.svg"     style="width: 0.8em; height: 0.8em;margin-top: 0.3em; margin-right: 0.2em;"></image>
					<view class="timeText nowrap" style="width: 88%;">
						16:00-20:20 星期六 2021.05.22
					</view>
				</view>

			
			</view>

		</view>
		<view class="divider">
			
		</view>
		<view class="cardBottom ">
			<view class="postTime">
				1分钟前
			</view>
			<view class="member" >
				<image src="cloud://cloud1-0gcmjje1d9bf828c.636c-cloud1-0gcmjje1d9bf828c-1305469619/avatar/Thranduil-mio.jpg"  style="width: 100%; height: 100%;border-radius: 40upx;"></image>
			</view>
			<view class="member">
				<image src="../static/avatar.jpg"  style="width: 100%; height: 100%;border-radius: 40upx;"></image>
			</view>
			<view class="member">
				<image src="../static/avatar.jpg"  style="width: 100%; height: 100%;border-radius: 40upx;"></image>
			</view>
			<view class="member">

			</view>
			<view class="member">

			</view>

<!-- 			<view class="chevron" style="margin-left: auto;">
				<image src="../static/card/chevron.svg" mode="aspectFit" style="width: 1em; height: 100%; margin-right: 0.4em;"></image>				
			</view> -->
<!-- 			<view @click="joinIn" class="member plus" style="margin-right:10upx; background-color: #1ab7ff;">
				<image src="../static/card/plus.svg" mode="center" style=" width: 100% ;height: 100%"></image>				
			</view> -->

		</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"t-card3",
		data() {
			return {
				
			};
		}
	}
</script>

<style >
.card3View{
	display: flex;
	flex-direction: column;
	border-radius: 30upx;
	/* height: 200upx; */
	/* margin-bottom: 0.5em; */
	padding:  30upx 30upx 15upx 30upx;
	background-color: #FFFFFF;
}
.press{
	background-color: #e8e8ee;
}

.card3View .cardTop .mainInfo .cardTitle{
	font-size: 1.15em;
	margin-bottom: 8upx;
	width: 90%;
	
	/* height: 1.3em; */

}
.card3View .cardTop {
	display: flex;
	align-self:center;

}
.card3View .cardTop  .colorBar{
	background-color: #007AFF;

	margin-top: 16upx;
	margin-bottom: 10upx;
	width: 10upx;
	border-radius: 6upx;
	margin-right: 18upx;
}
.card3View .cardTop .startDate{
	display: flex;
	flex-direction: row;
	/* justify-content: space-between; */
	/* margin-top: 20upx; */
	margin-right: 10upx;
	/* align-content:center; */
	align-self:center
}

.card3View .cardTop .startDate text{
	font-weight: 1.5rpx;
}

.card3View .cardTop .mainInfo{
	display: flex;
	flex-direction: column;

	width: 80%;
	max-width: 80%;
	/* height: 3em; */
}

/* .cardView .cardTop .mainInfo .cardText{
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: space-between;
	height: 1em;
	width: 100%;

} */
.card3View .cardTop .mainInfo .location{
	margin-bottom: 8upx;
}

.card3View .cardTop .mainInfo .location .locationText,
.timeText{
	color: #9B9B9F; 
	font-size: 0.9em;
}
.card3View .cardBottom{
	display: flex;
	margin-bottom: 10upx;
	/* margin-right:8%; */
	/* flex-direction: row-reverse; */
	/* justify-content:flex-end; */
}

.card3View .cardBottom .memberNum{
	/* background-color: #d9d9df; */
	display: flex;
	/* height: 50upx; */
	/* width: 150upx; */
	
}

.card3View .cardBottom .memberNum .joinNum{
	padding: 5upx 10upx;
	color: #1b97f5;
	border-radius: 15upx;
	border:1rpx solid #1b97f5;
}

.card3View .cardBottom .memberNum .tolNum{
	padding: 5upx 8upx;
	border-radius: 0 15upx 15upx 0;
	color: white;
	
	/* background-color: #1b97f5; */
	/* border:1rpx solid #1b97f5; */
}

.card3View .ddlTime{
	color: #838383; 
	font-size: 0.9em;
	margin-right: auto; 
	align-self: center;
}

.nowrap{
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
}
.divider{
	width: 100%;
	border-bottom: 1upx solid #BFBEC3; 
	margin-top: 20upx; 
	margin-bottom: 15upx;
}
</style>
