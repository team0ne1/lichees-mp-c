<template>
	<view class="home2" >
		
		<t-tabbar  :currentPage="page"></t-tabbar>
		
		<t-navbar3 :welcomeText="welcomeText"></t-navbar3>
		<text style="color:#FFFFFF;">别再拉啦</text>
		<view class="home2Content" :style="'margin-top:' + navBarHeight +'px;'">
			<view class="home2Top">
				
				<view class="motivation">
					<view class="movText" style="align-self:center">
						Things will get better,
						and you need to trust it.						
					</view>
					<image @click="likeChange" :src="likeIconSrc"  style="width: 1.5em; height: 1.5em;margin-right: 20upx;"></image>
				</view>
			</view>
			<view class="home2Bot">
				<view class="explore">
					<view class="titleL1" style="align-self:center; margin: 0;">
						探索
					</view>
					<view class="searchBar">
						<view class="searchicon" style="margin-left: 10upx; margin-right: 20upx;padding-top: 5upx;">
							<image src="../../static/searchBar/search.svg"  style="width: 0.9em; height: 0.9em;"></image>		
						</view>	
						<input type='text'  placeholder="Search"  :value="value" @input="handleInput"/>
					</view>
				</view>

				<view class="learnMore" @click="learnMore0">
					<view class="titleL2">
						学习
					</view>	
					<view class="chevron" style="margin-left: auto;margin-right: 10upx; display: flex; color: #989898;">
						<!-- <text style="align-self:center;" >more</text> -->
						<image src="../../static/card/chevron.svg" mode="aspectFit" style="align-self:center;width: 1em; height: 0.9em;margin-right: 20upx;"></image>		
					</view>				
				</view>
				<scroll-view class="scroll-view-content" scroll-x="true">

				    <view v-for="(item,index) in cardData0" :key="index" class="scroll-view-item">
						<t-card2 :cardData="item" @cardClick="cardClick(item)"></t-card2>					
				    </view>
				</scroll-view>
				<view class="learnMore" @click="learnMore1">
					<view class="titleL2">
						运动
					</view>	
					<view class="chevron" style="margin-left: auto;margin-right: 10upx;display: flex;color: #989898;">
						<!-- <text style="align-self:center;" >more</text> -->
						<image src="../../static/card/chevron.svg" mode="aspectFit" style="align-self:center;width: 1em; height: 0.9em;margin-right: 20upx;"></image>		
					</view>				
				</view>
				<scroll-view class="scroll-view-content" scroll-x="true">

				    <view v-for="(item,index) in cardData1" :key="index" class="scroll-view-item">
						<t-card2 :cardData="item" @cardClick="cardClick(item)"></t-card2>					
				    </view>
				</scroll-view>
				<view class="learnMore" @click="learnMore2">
					<view class="titleL2">
						玩乐
					</view>	
					<view class="chevron" style="margin-left: auto;margin-right: 10upx;display: flex;color: #989898;">
						<!-- <text style="align-self:center;" >more</text> -->
						<image src="../../static/card/chevron.svg" mode="aspectFit" style="align-self:center;width: 1em; height: 0.9em;margin-right: 20upx;"></image>		
					</view>				
				</view>
				<scroll-view class="scroll-view-content" scroll-x="true">
				
				    <view v-for="(item,index) in cardData2" :key="index" class="scroll-view-item">
						<t-card2 :cardData="item" @cardClick="cardClick(item)"></t-card2>					
				    </view>
				</scroll-view>
				<view class="learnMore" @click="learnMore2">
					<view class="titleL2">
						委托
					</view>	
					<view class="chevron" style="margin-left: auto;margin-right: 10upx;display: flex;color: #989898;">
						<!-- <text style="align-self:center;" >more</text> -->
						<image src="../../static/card/chevron.svg" mode="aspectFit" style="align-self:center;width: 1em; height: 0.9em;margin-right: 20upx;"></image>		
					</view>				
				</view>
				<scroll-view class="scroll-view-content" scroll-x="true">
				
				    <view  class="scroll-view-item">
						<t-card-comingsoon ></t-card-comingsoon>					
				    </view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	import cloud1 from '../../helper/cloudbase.js'
	import tNavbar3 from '../../components/t-navbar3.vue'
	import tCardComingsoon from '../../components/t-card-comingsoon.vue'
	export default {
		name:'home2',
		components:{
			tNavbar3,
			tCardComingsoon
		},
		onShow:function(){
			// uni.showLoading({
			//     title: '加载中'
			// });
			// setTimeout(function () {
			//     uni.hideLoading();
			// }, 1200);
			console.log("home2 show")
		
			cloud1.getCloud('/learning')
			.then((res)=>{
				console.log(res)	
				this.cardData0.length = 0
				this.cardData0 = res.data

			})
			cloud1.getCloud('/sport')
			.then((res)=>{
				console.log(res)	
				this.cardData1 = res.data

			})
			cloud1.getCloud('/amuse')
			.then((res)=>{
				console.log(res)	
				this.cardData2 = res.data
	
			})
		
		},
		data() {
			return {
				navBarHeight: getApp().globalData.navBarHeight,
				page:0,
				welcomeText:'早上好'+ ' ' +'HJQ',
				likeStatu:false,
				cardData0:[
					{
						created_at: "2021-05-26T15:47:23.033Z",
						detail_id: "cbddf0af60ae6d740be1edd82846f7e4",
						join_deadline: "2021-05-27T01:30:00.000Z",
						joined_num: 5,
						loca_text: "深圳大学",
						person_num: 8,
						res_endtime: "2021-06-03T02:30:00.000Z",
						res_starttime: "2021-06-02T01:00:00.000Z",
						title: "学习局2",
						_id: "28ee4e3e60ae6d8d1ce32feb2f83f82f"
					},
				],
				cardData1:[
					{
						created_at: "2021-05-26T15:47:23.033Z",
						detail_id: "cbddf0af60ae6d740be1edd82846f7e4",
						join_deadline: "2021-05-27T01:30:00.000Z",
						joined_num: 5,
						loca_text: "深圳大学",
						person_num: 8,
						res_endtime: "2021-06-03T02:30:00.000Z",
						res_starttime: "2021-06-02T01:00:00.000Z",
						title: "学习局2",
						_id: "28ee4e3e60ae6d8d1ce32feb2f83f82f"
					},
				],
				cardData2:[
					{
						created_at: "2021-05-26T15:47:23.033Z",
						detail_id: "cbddf0af60ae6d740be1edd82846f7e4",
						join_deadline: "2021-05-27T01:30:00.000Z",
						joined_num: 5,
						loca_text: "深圳大学",
						person_num: 8,
						res_endtime: "2021-06-03T02:30:00.000Z",
						res_starttime: "2021-06-02T01:00:00.000Z",
						title: "学习局2",
						_id: "28ee4e3e60ae6d8d1ce32feb2f83f82f"
					},
				],
				cardData3:[
					{
						created_at: "2021-05-26T15:47:23.033Z",
						detail_id: "none",
						join_deadline: "2021-05-27T01:30:00.000Z",
						joined_num: 5,
						loca_text: "深圳大学",
						person_num: 8,
						res_endtime: "2021-06-03T02:30:00.000Z",
						res_starttime: "2021-06-02T01:00:00.000Z",
						title: "学习局2",
						_id: "28ee4e3e60ae6d8d1ce32feb2f83f82f"
					},
				]
			}
		},
		computed:{
			likeIconSrc(){
				return this.likeStatu?'../../static/sentence_card/heart.svg':'../../static/res_det/likegrey.svg' 
			}
		},
		methods: {
			learnMore0: function(){
				uni.navigateTo({
					url:'/pages/home/home?res_type=learning'
				})
			},
			learnMore1: function(){
				uni.navigateTo({
					url:'/pages/home/home?res_type=sport'
				})
			},
			learnMore2: function(){
				uni.navigateTo({
					url:'/pages/home/home?res_type=amuse'
				})
			},
			cardClick: function(resData){
				uni.setStorageSync('res_data', resData);
				console.log('/pages/res_detail/res_detail?detid='+ resData.detail_id)  
				const detid = JSON.stringify(resData.detail_id);
				uni.navigateTo({
					url:'/pages/res_detail/res_detail?detid='+ detid +'&restype=' + 'learning'
				})
				
			},
			likeChange: function(){
				this.likeStatu =!this.likeStatu
			}
		}
	}
</script>

<style>
	
.home2{
	background-color: #51cbb3;
	overflow:hidden;
}

.home2 .home2Content{
	
}

.home2 .home2Content .home2Top{
	min-height: 350upx;
	/* margin-top: 30upx; */
	margin-bottom: 30upx;
}

.home2 .home2Content .motivation {
	margin: 20upx;
	padding: 33upx;
	background-color: #FFF;
	border-radius: 40upx;
	font-size: 1.3em;
	font-weight: 200;
	text-align: center;
	min-height: 230upx;
	max-height: 400upx;
	display: flex;
	/* flex-direction: column; */
	/* align-content:center; */
	align-items: center;
	/* padding: 0 ; */
	
}

.home2 .home2Content .home2Bot{
	margin-left: 1upx;
	margin-left: 1upx;
	
	background-color: #fff;
	border-radius: 50upx 50upx 0 0 ;
	padding-top: 60upx;
	padding-left: 0;
	padding-right: 0;
	padding-bottom: 100upx;
}

.home2Bot .titleL1 {
	font-size: 1.5em;
	font-weight: 400;
	/* margin-top: 0.5em; */

}

.home2Bot .learnMore{
	display: flex;
	margin-left: 7%;
}

.home2Bot .learnMore .titleL2 {
	font-size: 1.12em;
	font-weight: 500;
	margin-top: 20upx;
	margin-bottom: 5upx;
	flex-grow: 1;
}

.home2Bot .searchBar{
	height: 1.7em;
	width: 70%;
	background-color: #eeeeee;
	padding: 10upx;
	border-radius: 20upx;
	backdrop-filter: blur(15px);
	display: flex;
	align-items: center;
	text-align: center;
	margin: auto;
	
}

.home2Bot .explore{
	display: flex;
	margin-bottom: 30upx;
	margin-left: 7%;
}

.home2Bot .scroll-view-content{
    white-space: nowrap;  //1、scroll-view元素添加此行代码，意思是规定段落中的文本不进行换行
	padding: 15upx;
	padding-top: 5upx;
	padding-left: 0;
	margin-left: 0;
	margin-bottom: 20upx;

}
.home2Bot .scroll-view-content .scroll-view-item{
	display: inline-block;  //2、滚动区域里的每一个子元素设置为行内块元素
	white-space: normal;
/* 	width: 300rpx;
	height: 80rpx; */
	/* background-color: #ccc; */
	width: 87%;
	margin: 15upx;
	margin-right: 30rpx;
}

.home2Bot .scroll-view-item:first-child{
  margin-left: 7%;
}

::-webkit-scrollbar {  
    display: none;  
    width: 0 !important;  
    height: 0 !important;  
    -webkit-appearance: none;  
    background: transparent;  
}

</style>
