<template>
	<view class="tabbar">
		<block>
			<!-- <text>{{currentTab}}</text> --> <!--debug -->
			<view  v-for="(item,index) in tabList" :key="index" class="tab-item" >
				<view @click="clickTab(index)" :animation="{animationData:index==currentTab}">
					<view class="icon" :class="{click:index==currentTab}" >
					<!-- <image :src="item.icon"></image> --> 
						<t-icon  :imgsrc="index==currentTab?item.iconAc:item.icon" size="100%"></t-icon>
					</view>
					<view class="text" :class="{activedTabText:index==currentTab}">
						<text>{{item.text}}</text>	
					</view>
				</view>				
			</view>			
		</block>
	</view>	

</template>

<script>
	import tIcon from './t-icon'
	export default {
		name:"t-tabbar",
		props:['currentPage'],
		components:{
			tIcon
		},
		mounted: function(){
			var animation = uni.createAnimation({
			    duration: 1000,
			    timingFunction: 'ease-in-out',
			})
			this.animation = animation
			this.animationData = animation.export()
		},
		
		computed:{
			// currentTab: function(){
			// 	return this.currentPage
			// }
		},
		data() {
			return {
				tabList: [  
					{  
						icon: '/static/tabbar/app.svg',  
						iconAc: '/static/tabbar/appAc.svg',  
						text: '局子', 
						path:'/pages/home/home'
						  
					},  
					{  
						icon: '/static/tabbar/file-post.svg',  
						iconAc: '/static/tabbar/file-postAc.svg', 
						text: '委托',  
						path:'/pages/assignment/assignment'
					},
					  
					{  
						icon: '/static/tabbar/cone.svg',  
						iconAc: '/static/tabbar/coneAc.svg', 
						text: '物业', 
						path:'/pages/property/property'
					},
					{
						icon: '/static/tabbar/profile.svg',  
						iconAc: '/static/tabbar/profileAc.svg', 
						text: '个人', 
						path:'/pages/profile/profile'
					}
				],  
				currentTab: this.currentPage,
				

				
			};
		},
		methods:{
			
			clickTab: function(clickIndex){
				console.log(clickIndex)
				this.currentTab = null
				// if(clickIndex==this.currentPage){
					this.$nextTick(function(){
					this.currentTab = this.currentPage
					})
				// }
				uni.vibrateShort();
				uni.switchTab({
					url: this.tabList[clickIndex].path,

				})

			},

		}
	}

</script>

<style lang="scss">
.tabbar{
	// border-style: solid;
	// border-color: #007AFF;
	// border-width: 5upx;
	z-index: 1000;
	background-color: #FFFFFF;
	position:fixed;
	right: 5%;
	left: 5%;
	bottom: 35upx;
	/* width: 90%; */
	height: 100upx;
	border-radius: 50upx;
	box-shadow: 0 0 5px #c8c8c8; 
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 3upx;
}

.tabbar .tab-item{  
	width: 30%;  
	height: 40upx;  
	display: flex; 
	flex-direction: column;  
	justify-content: center;  
	align-items: center;
	text-align: center;  
}
.tabbar .tab-item .icon{
	width: 40upx;  
	height: 40upx;  
	padding: 5upx;
}
// .tabbar .tab-item .icon  image{
// 	width: 100%;  
// 	height: 100%;  
// }
.tabbar .tab-item .text{
	font-size: 25upx;
	width: 100%;
}

.tabbar .tab-item .click{
	animation: scaleDraw 400ms ease-in-out;
}
.tabbar .tab-item .activedTabText{
	color: #007AFF;
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
