<template>
	<view :class="{'msb_dialog':dialogShow}"  v-show="dialogShow" v-if="dialogShow" :style="fullHeight" @touchmove.stop.prevent="moveHandle">
		<view class="dialog_1" >
			<view class="dialog_title">
				{{dialogTitle}}
			</view>
			<view class="dialog_content">
				{{dialogContent}}
			</view>
			<view class="dialog_btn">
				<button @click="btnCancel" class="btn btn1">取消</button>
				<button @tap="getUserProfile" class="btn btn2">确定</button>
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
				default: false
			},
			dialogCancel:{
				type:Boolean,
				default:() =>{
				}
			},
			dialogTitle:{
				type:String,
				default:"Title"
			},
			dialogContent:{
				type:String,
				default:"Content"
			}
			
	   },

	   data(){
		   return{
			   fullHeight:'',
			   msgShow:true,

		   }
	   },
	   methods:{
		   btnCancel(){
			   this.$emit('changeCancel',false)
		   },
		   getUserProfile(e){
			    this.$emit('changeconfirm',false)
				this.msgShow = false
				// wx.getUserProfile({
				// 	// lang:'zh_CN',
				// 	desc:'获取微信号',
				// 	success:(res) => {
				// 		console.log(res)
				// 		this.userProfile = res.userInfo
				// 	},
				// 	fail:(err)=>{
				// 		console.log(err)
				// 	}
				// })
				
		   },
		   moveHandle(){
			   return
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
		background: rgba(112, 112, 112, 0.5);
		// backdrop-filter: blur(15px);
		@-webkit-keyframes changeblur /* Safari and Chrome */
		{
		  form{
			backdrop-filter: blur(1px);
		  }
		  to{
			backdrop-filter: blur(10px);
		  }
		}
		animation: changeblur 400ms ease;
		animation-fill-mode: forwards;

		
		.dialog_1{
			@-webkit-keyframes fadein /* Safari and Chrome */
			{
			  form{ background: rgba(255, 255, 255, 0.6)}
			  to{ background: rgba(255, 255, 255, 1)}
			}
			animation: fadein 400ms;
			animation-fill-mode: forwards;
			margin-left: 10%;
			margin-right: 10%;
			border-radius:30rpx;
			// background: #fff;
			 position: relative;
			 top: 50%; /*偏移*/
			 transform: translateY(calc(-50% - 60rpx));
			 
			 // animation-fill-mode: forwards;
			.dialog_title{
				color: #004188;
				font-size: 32rpx;
				font-weight: 600;
				padding-top: 40rpx;
				text-align: center;
			}
			.dialog_content{
				padding:50rpx;
				padding-bottom: 60upx;
				color: #555555;
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
