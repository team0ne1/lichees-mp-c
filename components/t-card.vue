<template>
	<view class="cardView">
		<view class="cardImg">
			
		</view>
		<view class="card">
			<view class="cardTitle">
				{{cardDate.title}}
			</view>
			<view class="cardText">
				{{cardDate.text}}
			</view>
		</view>
			
		<view></view>
	</view>
</template>

<script>
	export default {
		name:"t-card",
		props:['cardDate'],
		data() {
			return {
				data:[
					{title:"标题一",text:"胡言乱语",}
				]
			};
		}
	}
</script>

<style>
.cardView{
	display: flex;
	flex-direction: row;
	border-radius: 30upx;
	height: 200upx;
	margin-bottom: 0.5em;
	padding: 10upx 30upx;
	background-color: #FFFFFF;
}
.cardView .cardTitle{
	font-size: 1.2em;
}
</style>
