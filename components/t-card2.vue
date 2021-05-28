<template>
	<view class="cardView" :animation="animationData" :class="{press:isPressed}"  @touchstart="touchstart" @click="navTo('/pages/reserve_detail/reserve_detail')" @touchend="touchend"  >
<!-- 		<view class="cardImg">
			
		</view> -->
		<view class="cardContain" >
		<view  class="cardTop" >
			<view class="startDate" >
			
					<view class="" style="display: flex;flex-direction: column; margin-right: 10upx;">
						<view class="startDateMon">
							<text>{{('0' + (new Date(cardData.res_starttime).getMonth()+1)).slice(-2)}}</text>	
						</view>
						<view class="" style=" height: 15upx; width: 0.5em;  border-right: 1px solid #989898; ">
						</view>
						<view class="startDateDay">
							<text>{{('0' + new Date(cardData.res_starttime).getDate()).slice(-2) }}</text>
						</view>							
					</view>
					<view class="startDateWeek" style="margin: auto; margin-right: 8upx;">
						<view style="text-align:center;margin-bottom: 0.4em;">周</view>
						<view>{{dateCn}}</view>
					</view>				
			</view>
			<view class="colorBar" :style="'background-color:'+ randomColor"></view>
			<view class="mainInfo" >
				<view class="" style="display: flex; width: 100%;">
					<view class="cardTitle nowrap" style="width: 90%;">
						 {{cardData.title}}
					</view>
					<view class="chevron" style="margin-left: auto;margin-right: 10upx;">
						<image src="../static/card/chevron.svg" mode="aspectFit" style="width: 1em; height: 100%;"></image>		
					</view>
				</view>
				<view class="location" style="display: flex; width: 100%;">
					<image src="../static/card/location.svg" style="width: 0.8em; height: 0.8em;margin-top: 0.3em;margin-right: 0.2em;"></image>
					<view class="locationText nowrap" style="width: 85%;">
						{{cardData.loca_text}}
					</view>					
				</view>
				<view class="time" style="display: flex; width: 100%;">
					<image src="../static/card/time.svg"     style="width: 0.8em; height: 0.8em;margin-top: 0.3em; margin-right: 0.2em;"></image>
					<view class="timeText nowrap" style="width: 88%;">
						{{new Date(cardData.res_starttime).toLocaleTimeString() + ' - ' 
						+ new Date(cardData.res_endtime).toLocaleTimeString() + 
						' (' + Math.floor((new Date(cardData.res_endtime).getTime() - new Date(cardData.res_starttime).getTime()) / (24*3600000)) + ')' }}
					</view>
				</view>

			
			</view>

		</view>
		<view class="divider">
			
		</view>
		<view class="cardBottom ">

			<view class="ddlTime">
				{{new Date(cardData.join_deadline).toLocaleDateString()}}截止
			</view>
			<view  style="width: 10%;align-self:center;margin-right: 5upx;">
				<progress :percent="(cardData.joined_num/cardData.person_num)*100" active activeColor="#1B97F5" border-radius="2"  stroke-width="4"/>
	
			</view>
			<view class="memberNum" style="align-self:center;">
					<text style="letter-spacing:2upx; font-size: 0.9em;color: #808080;">{{cardData.joined_num+'/'+cardData.person_num}}</text>
			
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
	import tIcon from './t-icon'
	export default {
		name:"t-card",
		props:['cardData'],
		components:{
			tIcon
		},
		computed: {
			dateCn(){
				let dateCn = ''
				switch(new Date(this.cardData.res_starttime).getDay()){
					case 0 :  
							dateCn = "日";  
							break;  
					case 1 :  
							dateCn= "一";  
							break;  
					case 2 :  
							dateCn= "二";  
							break;  
					case 3 :  
							dateCn= "三";  
							break;  
					case 4 :  
							dateCn= "四";  
							break;  
					case 5 :  
							dateCn= "五";  
							break;  
					case 6 :  
							dateCn= "六";  
							break; 
				}
				return dateCn
			},
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
			    duration: 300,
			    timingFunction: 'ease-in',
			})
			this.animation = animation
			this.animationData = animation.export()
		},
		methods:{
			joinIn: function(e){
				console.log("press addIn")
				
			},
			navTo: function(url){
				console.log('nav to detailpage')
				
				uni.navigateTo({
					url:url
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
	/* margin-bottom: 0.5em; */
	padding:  30upx 30upx 15upx 30upx;
	background-color: #FFFFFF;
}
.press{
	background-color: #e8e8ee;
}

.cardView .cardTop .mainInfo .cardTitle{
	font-size: 1.15em;
	margin-bottom: 8upx;
	width: 90%;
	
	/* height: 1.3em; */

}
.cardView .cardTop {
	display: flex;
	align-self:center;

}
.cardView .cardTop  .colorBar{
	background-color: #007AFF;

	margin-top: 16upx;
	margin-bottom: 10upx;
	width: 10upx;
	border-radius: 6upx;
	margin-right: 18upx;
}
.cardView .cardTop .startDate{
	display: flex;
	flex-direction: row;
	/* justify-content: space-between; */
	/* margin-top: 20upx; */
	margin-right: 10upx;
	/* align-content:center; */
	align-self:center
}

.cardView .cardTop .startDate text{
	font-weight: 1.5rpx;
}

.cardView .cardTop .mainInfo{
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
.cardView .cardTop .mainInfo .location{
	margin-bottom: 8upx;
}

.cardView .cardTop .mainInfo .location .locationText,
.timeText{
	color: #9B9B9F; 
	font-size: 0.9em;
}
.cardView .cardBottom{
	display: flex;
	margin-bottom: 10upx;
	/* margin-right:8%; */
	/* flex-direction: row-reverse; */
	/* justify-content:flex-end; */
}

.cardView .cardBottom .memberNum{
	/* background-color: #d9d9df; */
	display: flex;
	/* height: 50upx; */
	/* width: 150upx; */
	
}

.cardView .cardBottom .memberNum .joinNum{
	padding: 5upx 10upx;
	color: #1b97f5;
	border-radius: 15upx;
	border:1rpx solid #1b97f5;
}

.cardView .cardBottom .memberNum .tolNum{
	padding: 5upx 8upx;
	border-radius: 0 15upx 15upx 0;
	color: white;
	
	/* background-color: #1b97f5; */
	/* border:1rpx solid #1b97f5; */
}

.cardView .ddlTime{
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
