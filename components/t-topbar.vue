<template>
	<view class="topbar">
<!-- 		<view class="welcome">
			<text >Hi, {{username}}</text>
		</view> -->
		
		<view class="saying">
			<text >Say Something</text>
		</view>
		
		<view class="topTaplist">
			<view :class="{active:index===currentTab}" class="item" v-for="(item,index) in tablist" :key="index">
				<view @click="clickToptab(index)">
					<text>{{item.text}}</text>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"t-topbar",
		props:['tablist','currentTab'],
		data() {
			return {
				username:'HJQ',
			};
		},
		computed:{

		},
		mounted() {
			console.log('current'+this.current)

		},
		methods:{
			clickToptab: function(clickIndex){
				this.current = clickIndex
				this.$emit('changeTab',clickIndex)
			},
			setDx: function(x){
				
			}

		}
	}
</script>

<style>
.topbar{
	background-color: #FFFFFF;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 1000;
	border-bottom: 1upx solid #BFBEC3;
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
