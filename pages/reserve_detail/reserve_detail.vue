<template>
	<view>
		<view class="carddetail">
		
			<view class="saying">
				<text >欢迎来到{{username_initiator}}的{{activityname}}局</text>
			</view>
		
			<view class="time_and_site">
				<text>时间:{{activitytime}} 地点:{{activitysite}} 人数:{{peoplenumber}}</text>	
			</view>	
		</view>
		<!-- 
		personal_introduction: 局子发起人头像，联系方式，介绍
		initiator_head：发起人头像
		introduction：发起人介绍
		anotherusers：其他用户头像
		name_of_anotherusers：在“其他用户头像”的右边，xxxx已加入组局
		-->
		<view class="carddetail">
			<view class="personal_introduction">
				<view class="initiator_head">
					等待一个头像
					<text class="initiator_name">{{initiator_name}}</text>
				</view>
				<view class="introduction">
					<text>{{introduction}}</text>
				</view>
			</view>
			<view class="anotherusers">
				<view class="heads">
					等待头像
				</view>
				<view class="name_of_anotherusers">
					{{name_of_anotherusers}}已经加入组局
				</view>
			</view>
		</view>
		<!--
			briefing:备注，写发起人想写的内容
		-->
		<!-- <view class="progress-box"> -->
			
		<!-- </view> -->
		<view>
			<view class="briefing">
				<scroll-view scroll-y="true" class="scoll-h">
					<text>备注。。。。。。fgasdfghajhdgfakshjdgf uksd agjh fa siudfu jd fjas h dfjsa gd yfj ags dfdh gdjh sfg hsg dhj agfyu大幅压低统一发司法改革复印给娃也发给
					ftas d fgtuf gafd fgausdfgyaa dfayusdgfyuadf</text>
				</scroll-view>
			</view>		
		</view>
		<view class="confirmbutton" :style="{background:'rgb(27,151,245)' }">
			<button type="default" >加入组局</button>
		</view>

	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				username:'HJQ',
				username_initiator:'FJY',
				activityname:'学习',
				activitytime:'16:00-20:20',
				activitysite:'南图',
				peoplenumber:'3',
				initiator_name:'FJY',
				introduction:'我想摸鱼'
			};
		},
		methods:{
			clickToptab(clickIndex){
				this.currentTab = clickIndex
			},
			}
		}
	
</script>

<style>
	.topbar{
		background-color: #FFFFFF;
		border-radius: 0 0 40upx 40upx;
		/* height: 100upx; */
	}
		
	.topbar .welcome{
		font-size: 1.79em;
		margin-left: 10%;
	}
	.topbar .saying{
		margin-left: 10%;
		margin-bottom: 10upx;
		font-size: 0.8em;
		letter-spacing: 1upx;
	}
	.topbar .topTaplist{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: start;
		/* margin-left: 20upx; */
	}
	.topbar .topTaplist .item{
		margin-top: 20upx;
		margin-bottom: 30upx;
		margin-left: 2%;
		margin-right: 2%;
		/* margin-right: auto; */
		padding: 10upx 30upx;
		width: 13%;
		background-color: #FFFFFF;
		border-radius: 1.5em;
		font-size: 1.2em;
		text-align:center;
		color: grey;
	}
	.topbar .topTaplist .active{
		background-color: #1b97f5;
		color: #FFFFFF;
	}
	.time_and_site{
		margin-top: 10upx;
		margin-bottom: 20upx;
		margin-left: 10%;
		margin-right: 10%;
		background-color: #1b97f5;
		color: #FFFFFF;
		font-size: 0.9em;
		letter-spacing: 2rpx;
		border-radius:0.4em;
		padding: 15upx 10upx 15upx 10upx;
		text-align: center;
	}
	.carddetail{
		background-color: #FFFFFF;
		border-radius: 40upx 40upx 40upx 40upx;
		margin-left: 2%;
		margin-right: 2%;
		margin-bottom: 2%;
		padding: 10upx 10upx 15upx 5upx;
		height:250upx;
	}
	.briefing{
		border-radius: 40upx 40upx 40upx 40upx;
		padding: 0upx 10upx 15upx 10upx;
		margin-left: 2%;
		margin-right: 2%;
		margin-bottom: 2%;
		text-align: center;
		background-color: #FFFFFF;
		height: 400upx;
	}
	.confirmbutton{
		border-radius: 40upx 40upx 40upx 40upx;
		margin-left: 2%;
		margin-right: 2%;
		background-color: #1b97f5;
		color: #FFFFFF;
		font-size: 0.9em;
		letter-spacing: 2upx;
	}
	
</style>