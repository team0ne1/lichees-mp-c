<template>
	<view class="container" v-show="hideModal">
		<view  :class="{'mask':show}" @touchmove.stop.prevent @click="close()" ></view>
		<view class="content bottom-pos"  :style="'bottom:' + setASheetBottom + 'rpx;padding-bottom:'+setASheetBottom + 'rpx;'"  :animation="animationData" @touchmove.stop.prevent>
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name:"t-action-sheet",
		props:{
			show:{
				type: Boolean,
				required: true
			},
			setASheetBottom:{
				type:Number,
				default:0
			},
			setASheetPadBot:{
				type:Number,
				default:0
			}
		},
		onShow:function(){
			this.setASheetBottom = 0
		},
		data() {
			return {
				hideModal: false, //模态框的状态  true-隐藏  false-显示
				animationData: {}, //
				val: 0,
			}
		},
		watch:{
			show(val) {
				if(val){
					this.showModal()
				}else{
					this.close()
				}
			}
		},
		methods:{
			
			// 显示遮罩层
			showModal: function() {
				var that = this;
				that.hideModal = true
				var animation = uni.createAnimation({
					duration: 600, //动画的持续时间 默认400ms   数值越大，动画越慢   数值越小，动画越快
					timingFunction: 'ease', //动画的效果 默认值是linear
				})
				this.animation = animation
				setTimeout(function() {
					that.fadeIn(); //调用显示动画
				}, 200)
			},
			// 隐藏遮罩层
			close: function() {
				var that = this;
				var animation = wx.createAnimation({
					duration: 500, //动画的持续时间 默认400ms   数值越大，动画越慢   数值越小，动画越快
					timingFunction: 'ease', //动画的效果 默认值是linear
				})
				this.animation = animation
				that.fadeDown(); //调用隐藏动画   
				setTimeout(function() {
					that.hideModal = false
					that.$emit('close',false)
				}, 500) //先执行下滑动画，再隐藏模块
			
			},
			//动画集
			fadeIn: function() {
				this.animation.translateY(0).step()
				this.animationData = this.animation.export() //动画实例的export方法导出动画数据传递给组件的animation属性
			},
			fadeDown: function() {
				this.animation.translateY(400).step() //移动的距离
				this.animationData = this.animation.export()
			},
		}
	}
</script>

<style lang="scss" scoped>
	.container{

		.mask{
			width: 100%;
			height: 100%;
			// background: rgba(106, 106, 106, 0.5);
			background: rgba(106, 106, 106, 0);
			z-index: 20;
			position: fixed;
			top: 0;
			left: 0;
			// @-webkit-keyframes blurIn 
			// {
			//   form{
			// 	backdrop-filter: blur(1px);
			//   }
			//   to{
			// 	backdrop-filter: blur(3px);
			//   }
			// }
			// animation: blurIn 500ms ease;
			// animation-fill-mode: forwards;

		}
		// .unmask{
		// 	background: rgba(106, 106, 106, 0.5);
		// 	@-webkit-keyframes blurOut
		// 	{
		// 	  form{
		// 		backdrop-filter: blur(10px);
		// 	  }
		// 	  to{
		// 		backdrop-filter: blur(0px);
		// 	  }
		// 	}
		// 	animation: blurOut 500ms ease;
		// 	animation-fill-mode: forwards;
		// }
		.content{
			// margin: auto;
			box-sizing: border-box;
			padding-top: 50upx;
			padding-left: 8%;
			padding-right: 8%;
			width: 100%;
			// transition: height 2s;
			height: 400rpx;
			position: fixed;
			bottom: 0;
			padding-bottom: 400rpx;
			// top:0;
			// right: 2%;
			// left: 2%;
			// background-color: #F8F8F8;
			background: rgba(109, 109, 109, 0.65);
			backdrop-filter: blur(15px);
			z-index: 21;
			border-radius: 50upx 50upx 0 0;
			overflow: hidden;
		}
		/*动画前初始位置*/
		.bottom-pos {
			-webkit-transform: translateY(100%);
			transform: translateY(100%);
		}
	}
</style>





