<template>
	<view class="home" >
		<!-- <text>home</text> -->
		
		<view>
			<t-tabbar  :currentPage="page"></t-tabbar>
		</view>
		<view>
			<t-publish-btn></t-publish-btn>
		</view>
		<view class="topTab">
			<t-topbar   ref="topTab" :tablist="tapList" :currentTab="currentTab" @changeTab="changeTab" ></t-topbar>	
		</view>
		
		<view class="content">
			<swiper @change="changeSwiper" @transition="transition" :current="currentTab" :style="'height: ' + swiperHeight +'px;'">
			<!-- <swiper @change="changeSwiper" @transition="transition" :current="currentTab" style="height: 500px;"> -->

				<swiper-item>
					
					<view class="cards" >
						<!-- <scroll-view scroll-y="true" :scroll-anchoring="true" :style="'height: ' + scrollHeight +'px;'"> -->
							<view v-for="(item,index) in cardDate0" :key="index" class="card">
								<t-card2 :cardDate="item" ></t-card2>
							</view>
							<!-- <view class="block"></view> -->
						<!-- </scroll-view> -->
					</view>
					
				</swiper-item>
				<swiper-item>
					<view class="cards">
						<view v-for="(item,index) in cardDate1" :key="index" class="card">
							<t-card :cardDate="item" ></t-card>
						</view>
						<!-- <view class="block"></view> -->
					</view>

				</swiper-item>
				<swiper-item>
					<view class="cards">
						<view v-for="(item,index) in cardDate2" :key="index" class="card">
							<t-card :cardDate="item" ></t-card>
						</view>
						<!-- <view class="block"></view> -->
					</view>

				</swiper-item>
			</swiper>

		</view>		

		
	</view>
</template>



<script>
	import cloud1 from '../../helper/cloudbase.js'
	import tPublishBtn from '../../components/t-publish-btn.vue'
	export default {
		// props:{},
		components:{
			tPublishBtn
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
			cloud1.getCloud('/learning')
			.then((res)=>{
				console.log(res)	
			})
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
				page:0,
				currentTab:0,
				swiperHeight:600,
				// scrollHeight:600,
				
				tapList:[
					{text:"学习"},
					{text:"运动"},
					{text:"玩乐"},
				],
				cardDate0:[
					{title:"南图自习局互相监督Hello来来来",text:"胡言乱语胡言乱语",},
					{title:"来个人救救孩子的高数111111111111",text:"胡言乱语L2-L1",},
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
	margin-top: 150upx;
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

</style>