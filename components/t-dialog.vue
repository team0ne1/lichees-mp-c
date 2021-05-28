<template>
	<view class="msb_dialog" v-if="dialogShow" :style="fullHeight">
		<view class="dialog_1">
			<view class="dialog_title">
				标题
			</view>
			<view class="dialog_content">
				内容区域
			</view>
			<view class="dialog_btn">
				<button @click="btnCancel" class="btn btn1">取消</button>
				<button @click="btnSubmit" class="btn btn2">确定</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		name:'tDialog',
		props:{
			dialogShow:{
				type:Boolean,
				default:() =>{
				}
			},
			dialogCancel:{
				type:Boolean,
				default:() =>{
				}
			}
	   },
	   data(){
		   return{
			   fullHeight:''
		   }
	   },
	   methods:{
		   btnCancel(){
			   this.$emit('changeCancel',false)
		   },
		   btnSubmit(){
			    this.$emit('changeconfirm',false)
		   }
	   },
	   created() {
	   	let that = this
		// 获取当前设备屏幕高度
	   	uni.getSystemInfo({
	   		    success: function (res) {
					that.fullHeight ="height:" + res.windowHeight + "px";
	   		    }
	   		});
	   }
	}
</script>

<style lang="less" scoped>
	.msb_dialog{
		width: 100%;
		height: 100vh;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 9999;
		background: rgba(0, 0, 0, 0.8);
		.dialog_1{
			margin: 30rpx;
			border-radius: 20rpx;
			background: #fff;
			 position: relative;
			 top: 50%; /*偏移*/
			 transform: translateY(calc(-50% - 60rpx));
			.dialog_title{
				font-size: 32rpx;
				font-weight: 600;
				padding-top: 20rpx;
				text-align: center;
			}
			.dialog_content{
				padding:30rpx;
			}
			.dialog_btn{
				display: flex;
				flex-direction: row;
				align-items: center;
				.btn{
					flex: 1;
					border-radius:0;
					color: #000;
					background: none;
				}
				.btn::after{
				    border-radius:0;
				}
				.btn1{
					color: #666;
					}
				.btn2{
					color: #3183FF;
					}
			}
		}
	}
</style>
