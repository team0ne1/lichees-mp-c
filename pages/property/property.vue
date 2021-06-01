<!-- 物业 -->
<template>
	<view class="home" >
		<view class="" style="font-size: 1.4em;font-weight: 500;margin-left: 6%;margin-top: 30upx; margin-bottom: 25upx;">
			公告
		</view>
		<t-tabbar  :currentPage="page"></t-tabbar>
		<!-- <text>home</text> -->
		<view class="content" >
			<swiper @change="changeSwiper" @transition="transition" :current="currentTab" :style="'height: ' + swiperHeight +'px;'">
			<!-- <swiper @change="changeSwiper" @transition="transition" :current="currentTab" style="height: 500px;"> -->
		
				<swiper-item>
					
					<view class="cards" >
						<!-- <scroll-view scroll-y="true" :scroll-anchoring="true" :style="'height: ' + scrollHeight +'px;'"> -->
							<view v-for="(item,index) in cardDate0" :key="index" class="card">
								<t-card4 :cardDate="item" ></t-card4>
							</view>
							<!-- <view class="block"></view> -->
						<!-- </scroll-view> -->
					</view>
					
				</swiper-item>
				
			</swiper>
		
		</view>		
		
	</view>
</template>



<script>
	import movableSwiper from '@/components/movable-swiper/movable-swiper.vue'
	import tCard4 from '../../components/t-card4.vue'
	export default {
		// props:{},
		components:{
			movableSwiper,
			tCard4
		},
		onShow:function(){
			
			// uni.showLoading({
			//     title: '加载中'
			// });
			// setTimeout(function () {
			//     uni.hideLoading();
			// }, 1200);
			console.log("home show")
			console.log(this.page)
			
		},
		// onHide:function(){
		// 	// this.page = null
			
		// 	console.log("home hide")
		// 	console.log(this.page)
		// },
		computed:{
			cardsLenght(){
				let cardsLenght = 1
				switch(this.currentTab){
				  case 0:
					cardsLenght = this.cardDate0.length
				    break;
				  case 1:
					cardsLenght = this.cardDate1.length
					break;
				  case 2:
				    cardsLenght = this.cardDate2.length
				    break;
				  default:
				    cardsLenght = 1
				}
				return cardsLenght
			}
		},
		mounted() {
			this.setHeight();
			
			// cloud1.getCloud('/sport')
			// .then((res)=>{
			// 	console.log(res)	
			// })
			

		},
		data() {
			return {
				
				movHeight: '360rpx',
				page:1,
				currentTab:0,
				swiperHeight:600,
				scrollHeight:600,
				
				tapList:[
					{text:"水电"},
					{text:"网络"},
					{text:"其他"},
				],
				lastDataList:[
							{title:"南区冬筑因施工紧急停水",text:"胡言乱语胡言乱语",},
							{title:"红豆斋五楼部分房间因跳闸断电",text:"胡言乱语L2-L1",},
							{title:"5.26晚开展寝室卫生检查活动",text:"胡言乱语",},
				        ],
				cardDate0:[
					{title:"南区冬筑因施工紧急停水",text:"胡言乱语胡言乱语",},
					{title:"红豆斋五楼部分房间因跳闸断电",text:"胡言乱语L2-L1",},
					{title:"南区部分宿舍网络设备升级",text:"胡言乱语",},
					{title:"5.26晚开展寝室卫生检查活动",text:"胡言乱语",},
					{title:"周六晚11点部分宿舍可能停水",text:"胡言乱语",},
					{title:"5.26晚开展寝室卫生检查活动",text:"胡言乱语",},
					{title:"标题4",text:"胡言乱语",},
					{title:"标题5",text:"胡言乱语",},
					{title:"标题6",text:"胡言乱语",},
					{title:"标题7",text:"胡言乱语",},
					{title:"标题8",text:"胡言乱语",},
					{title:"标题9",text:"胡言乱语",},
					{title:"标题10",text:"胡言乱语",},
					{title:"标题11",text:"胡言乱语",},
					{title:"标题12",text:"胡言乱语",},
				],
				cardDate1:[
					{title:"南图自习局互相监督Hello来来来",text:"胡言乱语胡言乱语",},
					{title:"来个人救救孩子的高数",text:"胡言乱语L2-L1",},
					{title:"高数期中考突击局",text:"胡言乱语",},
					{title:"标题4",text:"胡言乱语",},
					{title:"标题5",text:"胡言乱语",},
					{title:"标题6",text:"胡言乱语",},
					{title:"标题7",text:"胡言乱语",},
					{title:"标题8",text:"胡言乱语",},
					{title:"标题9",text:"胡言乱语",},

				],
				cardDate2:[
					{title:"南图自习局互相监督Hello来来来",text:"胡言乱语胡言乱语",},
					{title:"来个人救救孩子的高数",text:"胡言乱语L2-L1",},
					{title:"高数期中考突击局",text:"胡言乱语",},
					{title:"标题4",text:"胡言乱语",},
					{title:"标题5",text:"胡言乱语",},
					{title:"标题6",text:"胡言乱语",},
					{title:"标题7",text:"胡言乱语",},
					{title:"标题8",text:"胡言乱语",},
					{title:"标题9",text:"胡言乱语",},
					{title:"标题10",text:"胡言乱语",},
					{title:"标题11",text:"胡言乱语",},
					{title:"标题12",text:"胡言乱语",},
					{title:"标题13",text:"胡言乱语",},
					{title:"标题14",text:"胡言乱语",},
					{title:"标题15",text:"胡言乱语",},
					{title:"标题16",text:"胡言乱语",},
					{title:"标题17",text:"胡言乱语",},
				]
			}
		},
		methods: {
			changeTab:function(tabIndex){
				this.currentTab = tabIndex;
			},
			changeSwiper: function(e){
				console.log(e.target.current)
				this.currentTab = e.target.current
				this.setHeight();
			},
			transition:function(e){
				let dx = e.detail.dx;
				this.$refs.topTab.setDx(dx);
			},
			onreachBottom: function() {
				console.log("loading more...")
			},
			setHeight: function() {
				let windowHeight = uni.getSystemInfoSync().windowHeight;//页面可见区域
				console.log("windowHeight = "+windowHeight)
				let query1 = uni.createSelectorQuery().in(this);
				query1.select('.card').boundingClientRect(rect => {
					if (rect) {						
						this.swiperHeight =  ((rect.height+8) * (this.cardsLenght+0.8) );
						console.log("rect.height:"+rect.height)
						// console.log("swiperHeight1: "+this.swiperHeight)
					}
				}).exec();

				// this.swiperHeight = windowHeight - 20
				// this.scrollHeight = this.swiperHeight
					// windowHeight = windowHeight - 10;//页面可见区域 - 在线购物条高度					
					// console.log("windowHeight = "+windowHeight)
					// let query = uni.createSelectorQuery();
							
			}

		}
	}
</script>

<style>
.home .content{
	z-index: -200;
	/* margin-top: 150upx; */
}
.home .cards{
	margin: 15upx 20upx;
	
}
.home .cards .card{
	margin-bottom: 0.5em;
	/* height: 100upx; */
}
.home .cards .block{
	height: 300upx;
}
.carousel{
	margin-top: 60upx !important;
	padding-top: 60upx;
	overflow: unset;
}

.topbar{
	background-color: #FFFFFF;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 1000;
	/* border-radius: 0 0 40upx 40upx; */
	/* height: 150upx; */
}
	
.topbar .welcome{
	font-size: 1.3em;
	margin-left: 10%;
}
.topbar .saying{
	margin-left: 10%;
}
.topbar .topTaplist{
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: start;
	height: 100upx;
	/* margin-left: 20upx; */
}
.topbar .topTaplist .item{
	margin-top: 20upx;
	margin-bottom: 10upx;
	width: 100upx;
/* 	margin-left: 30upx;
	margin-right: 30upx; */
	/* margin-right: auto; */
	padding: 10upx 20upx;
	width: 13%;
	background-color: #FFFFFF;
	border-radius: 18upx;
	font-size: 1em;
	text-align:center;
	color: grey;
}
.topbar .topTaplist .active  {
	background-color: #1b97f5;
	/* border-bottom: 8upx solid #22A7F0; */
	color: #ffffff;
	transition: .5s ease;
}
</style>

