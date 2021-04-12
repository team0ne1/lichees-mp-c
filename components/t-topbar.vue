<template>
	<view class="topbar">
		<view class="welcome">
			<text >Hi, {{username}}</text>
		</view>
		
		<view class="saying">
			<text >Say Something</text>
		</view>
		
		<view class="topTaplist">
			<view :class="{active:index==currentTab}" class="item" v-for="(item,index) in tablist">
				<view @click="clickToptab(index)" >
					<text>{{item.text}}</text>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"t-topbar",
		props:['tablist'],
		data() {
			return {
				username:'HJQ',
				currentTab:0
			};
		},
		methods:{
			clickToptab(clickIndex){
				this.currentTab = clickIndex
			}
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
</style>
