<template>
	<view>
		<view class="information_card">
			<view class="information_block">
				<view class="userrealname" >
					<text class="uni-list-cell-left" >姓名：</text>
					<input type="text" class="inputer1" placeholder="选填" style="flex-grow: 1; ">
				</view>
				<view class="username" >
					<text class="uni-list-cell-left" >昵称：</text>
					<input type="text" class="inputer1" placeholder="选填" style="flex-grow: 1; ">
				</view>
				<view class="userphone" >
					<text class="uni-list-cell-left" >电话：</text>
					<input type="text" class="inputer1" placeholder="选填" style="flex-grow: 1; ">
				</view>
				<view class="gradepicker">
						<view class="uni-list">
							<view class="uni-list-cell">
								<view class="uni-list-cell-left">
									年级:
								</view>
								<view class="uni-list-cell-db">
									<picker mode="selector" @change="bindPickerChange" :value="index" :range="array">
										<view class="uni-input">{{array[index]}}</view>
									</picker>
								</view>
							</view>
						</view>
				</view>
				<view class="genderpicker">
						<view class="uni-list">
							<view class="uni-list-cell">
								<view class="uni-list-cell-left">
									性别:
								</view>
								<view class="uni-list-cell-db">
									<picker @change="bindPickerChange2" :value="index2" :range="gender">
										<view class="uni-input">{{gender[index2]}}</view>
									</picker>
								</view>
							</view>
						</view>
				</view>
			</view>
		</view>
		<view class="sayingcard">
			<view class="sayingblock">
				<view class="saying" >
					<text class="uni-list-cell-left" >个性签名：</text>
					<input type="text" class="inputer2" placeholder="用一句简短的话展现个性吧" style="flex-grow: 1; ">
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {

			return {
				// array:["带饭","带包裹","帮忙"],
				array:["大一","大二","大三","大四","研一","研二","研三","教工","其他"],
				index:0,
				index2:0,
				gender:["男","女","其他"],
				
			}
		},
		methods: {
			bindPickerChange: function(e) {
			    console.log('picker发送选择改变，携带值为', e.target.value)
			    this.index = e.target.value
			},
			bindPickerChange2: function(e) {
			    console.log('picker发送选择改变，携带值为', e.target.value)
			    this.index = e.target.value
			},
		}
	}
</script>

<style>
.genderpicker{
	display: flex;
	margin-bottom: 50upx;
	padding-bottom: 20upx;
	border-bottom: 2upx solid black;
	border-color: #c7c7c7;
	background-color: #ffffff;
}
.gradepicker{
	display: flex;
	margin-bottom: 20upx;
	padding-bottom: 20upx;
	border-bottom: 2upx solid black;
	border-color: #c7c7c7;
	background-color: #ffffff;
}
.information_card {
	background-color: #FFFFFF;
	border-radius: 40upx 40upx 40upx 40upx;
	margin: 2% 2% 2% 2%;
}
.sayingcard{
	background-color: #FFFFFF;
	border-radius: 40upx 40upx 40upx 40upx;
	margin: 2% 2% 2% 2%;
}
.information_block {
	margin-left: 4%;
	margin-right: 4%;
	padding-top: 10upx;
	padding-bottom: 10upx;
	
}
.sayingblock{
	margin-left: 4%;
	margin-right: 4%;
	padding-top: 10upx;
	padding-bottom: 10upx;
	min-height: 250upx;
}
.username{
	padding-bottom: 20upx;
	margin-bottom: 20upx;
	/* border-bottom: #000000 solid 1rpx; */
	border-bottom:  solid 2upx   #000000 ;
	border-color: #c7c7c7;	
	display: flex;
	margin-top: 30upx;
}
.userrealname{
	padding-bottom: 20upx;
	margin-bottom: 20upx;
	/* border-bottom: #000000 solid 1rpx; */
	border-bottom:  solid 2upx   #000000 ;
	border-color: #c7c7c7;	
	display: flex;
	margin-top: 50upx;
}
.userphone{
	padding-bottom: 20upx;
	margin-bottom: 20upx;
	/* border-bottom: #000000 solid 1rpx; */
	border-bottom:  solid 2upx   #000000 ;
	border-color: #c7c7c7;	
	display: flex;
	margin-top: 30upx;
}
.uni-list-cell-db{
	flex-grow: 1;
	white-space: nowrap;
	margin-left: 30upx;
}
.uni-list-cell-left{
	font-size: 1em;
	letter-spacing: 1upx;
	white-space: nowrap;
}
.uni-list-cell{
	display: flex;

}
.uni-input{
	white-space: nowrap;
	margin-left: 5%;
}
</style>

