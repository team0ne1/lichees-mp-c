<template>
	<view class="cardView" :class="{press:isPressed}" :animation="animationData" @touchstart="touchstart" @click="navTo()" @touchend="touchend"  >
		<view class="cardImg">
			
		</view>
		<view  class="card">
			<view class="" style="display: flex; margin-top: 5upx;margin-bottom: 5upx;">
				<view class="colorBar" :style="'background-color:'+ randomColor">
				</view>
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
		<view style="width: 100%;border-bottom: 1upx solid #BFBEC3; margin-top: 20upx; margin-bottom: 15upx;">
			
		</view>
		<view class="memberList ">
			<view class="postTime">
				1分钟前
			</view>
			<view class="member" >
				<image src="../static/avatar.jpg"  style="width: 100%; height: 100%;border-radius: 40upx;"></image>
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
</template>

<script>
	import tIcon from './t-icon'
	export default {
		name:"t-card",
		props:['cardDate'],
		components:{
			tIcon
		},
		computed: {

			randomColor(){
				let randomIndex = Math.round(Math.random() * this.colorTable.length);
				return this.colorTable[randomIndex];
			}
			
		},
		data() {
			return {
				// animation:{},
				isPressed:false,
				animationData: {},
				memberList:[
					{name:"hjq1",imgsrc:"胡言乱语",},
					{name:"hjq1",imgsrc:"胡言乱语",},
					{name:"hjq1",imgsrc:"胡言乱语",},
				],
				colorTable:[
					'#f1828d',
					'#48cbe2',
					'#a18eff',
					'#22a7f0',
					'#3dd3b5',
					'#44c1fa',
					'#f1828d',
				]
				// isLongLoca:true,
			};
		},
		mounted: function(){
			var animation = uni.createAnimation({
			    duration: 500,
			    timingFunction: 'ease',
			})
			this.animation = animation
			this.animationData = animation.export()
		},
		methods:{
			joinIn: function(e){
				console.log("press addIn")
				
			},
			navTo: function(){
				console.log('nav to detailpage')
				
				uni.navigateTo({
					url:'/pages/reserve_detail/reserve_detail'
				})
			},
			touchstart: function(){
				this.isPressed = true
				this.Scale97()
				
			},
			touchend: function(){
				this.isPressed = false
				this.Scale100()
				// this.navTo()
			},
			Scale97: function () {
			  // 放大
			  this.animation.scale(0.97+Number(Math.random() * 0.001)).step()
			  this.animationData = this.animation.export()

			 
			},
			Scale100: function () {
			  // 放大
			  this.animation.scale(1+Number(Math.random() * 0.001)).step()
			  this.animationData = this.animation.export()
			},
			

		}
	}
</script>

<style>
.cardView{
	display: flex;
	flex-direction: column;
	border-radius: 30upx;
	/* height: 200upx; */
	margin-bottom: 0.5em;
	padding:  30upx 30upx 15upx 30upx;
	background-color: #FFFFFF;
}
.press{

	background-color: #f5f5f5;
}

.cardView .card .mainInfo .cardTitle{
	font-size: 1.15em;
	margin-bottom: 5upx;
	/* height: 1.3em; */

}
.cardView .card {
	display: flex;
	align-self: stretch;

}
.cardView .card  .colorBar{
	background-color: #007AFF;

	margin-top: 13upx;
	margin-bottom: 13upx;
	width: 12upx;
	border-radius: 8upx;
	margin-right: 30upx;
}
.cardView .card .classTime{
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	/* margin-top: 20upx; */
	margin-right: 30upx;
}

.cardView .card .classTime text{
	font-weight: bold;
}

.cardView .card .mainInfo{
	display: flex;
	flex-direction: column;
	width: 85%;
	/* height: 3em; */
}

/* .cardView .card .mainInfo .cardText{
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: space-between;
	height: 1em;
	width: 100%;

} */
.cardView .card .mainInfo .location .locationText,
.timeText{
	color: #9B9B9F; 
	font-size: 0.9em;
}
.cardView .memberList{
	display: flex;
	margin-right:8%;
	/* flex-direction: row-reverse; */
	/* justify-content:flex-end; */
}

.cardView .memberList .member{
	background-color: #d9d9df;
	height: 60upx;
	width: 60upx;
	border-radius: 30upx;
	margin-right: -30upx;
	z-index: 1;
	box-shadow: 3upx 3upx 10upx #d0d0d0;
	border:1rpx solid #c3c3c3;
}

.cardView .postTime{
	color: #555555; 
	font-size: 0.9em;
	margin-right: auto; 
	align-self: center;
}

.nowrap{
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
}

.cardView  .longtap{
	animation: scaleDraw 1000ms ease-in-out;
}

@keyframes  scaleDraw {  /*定义关键帧、scaleDrew是需要绑定到选择器的关键帧名称*/
            0%{
                transform: scale(0.8);  /*开始为原始大小*/
            }
            50%{
                transform: scale(1.1);
            }
            75%{
                transform: scale(1);
            }
        }

</style>
