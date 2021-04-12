<template>
	<view class="home">
		<!-- <text>home</text> -->
		<t-topbar :tablist="tapList"></t-topbar>
		<view >
			<t-tabbar :currentPage="page"></t-tabbar>
		</view>
		<view class="content">
			<view class="cards">
				<view v-for="(item,index) in cardDate" :key="index" class="card">
					<t-card :cardDate="item" ></t-card>
				</view>
			</view>
		</view>
		
	</view>
</template>



<script>
	export default {
		// props:{},
		components:{},
		onShow:function(){
			this.page = null
			this.$nextTick(function(){
				this.page = 0
			})
			console.log("home show")
			console.log(this.page)
		},
		// onHide:function(){
		// 	// this.page = null
			
		// 	console.log("home hide")
		// 	console.log(this.page)
		// },
		computed:{
			// page(){
			// 	return 0
			// }
		},
		data() {
			return {
				page:0,
				tapList:[
					{text:"学习"},
					{text:"运动"},
					{text:"玩乐"},
				],
				cardDate:[
					{title:"标题1",text:"胡言乱语",},
					{title:"标题2",text:"胡言乱语",},
					{title:"标题3",text:"胡言乱语",},
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
			
		}
	}
</script>

<style>
.home .cards{
	margin: 15upx 20upx;
	
}
.home .cards .card{
	/* height: 100upx; */
}
</style>