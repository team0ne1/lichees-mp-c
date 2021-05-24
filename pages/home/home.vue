<template>
	<view class="home" >
		<!-- <text>home</text> -->
		
		<view >
			<t-tabbar :currentPage="page"></t-tabbar>
		</view>


		<t-topbar class="view_head"  ref="topTab" :tablist="tapList" :currentTab="currentTab" @changeTab="changeTab" ></t-topbar>
		<view class="content">
			 <swiper @change="changeSwiper" @transition="transition" :current="currentTab" :style="'height: ' + swiperHeight +'px;'">
				<swiper-item>
					<view class="cards">
						<view v-for="(item,index) in cardDate1" :key="index" class="card">
							<t-card :cardDate="item" ></t-card>
						</view>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="cards">
						<view v-for="(item,index) in cardDate1" :key="index" class="card">
							<t-card :cardDate="item" ></t-card>
						</view>
					</view>

				</swiper-item>
				<swiper-item>
					<view class="cards">
						<view v-for="(item,index) in cardDate1" :key="index" class="card">
							<t-card :cardDate="item" ></t-card>
						</view>
					</view>

				</swiper-item>
			</swiper>

		</view>		

		
	</view>
</template>



<script>
	import cloud1 from '../../helper/cloudbase.js'
	export default {
		// props:{},
		components:{},
		onShow:function(){
			
			uni.showLoading({
			    title: '加载中'
			});
			setTimeout(function () {
			    uni.hideLoading();
			}, 1200);
			console.log("home show")
			console.log(this.page)
		},
		// onHide:function(){
		// 	// this.page = null
			
		// 	console.log("home hide")
		// 	console.log(this.page)
		// },
		computed:{

		},
		mounted() {
			this.setHeight();
			cloud1.getCloud('/learning')
			.then((res)=>{
				console.log(res)	
			})
			

		},
		data() {
			return {
				page:0,
				currentTab:0,
				swiperHeight:750,
				tapList:[
					{text:"学习"},
					{text:"运动"},
					{text:"玩乐"},
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
					{title:"标题10",text:"胡言乱语",},
					{title:"标题11",text:"胡言乱语",},
					{title:"标题12",text:"胡言乱语",},
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
				let query = uni.createSelectorQuery();
				query.select('.card').boundingClientRect(rect => {
					if (rect) {
						console.log(rect.height)
						this.swiperHeight = rect.height * (this.cardDate1.length +1.7) ;
					}
				}).exec();
				
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
}
.home .cards{
	margin: 15upx 20upx;
	
}
.home .cards .card{
	/* height: 100upx; */
}

swiper{
	width: 100%;
	height: 2000rpx;
}
</style>