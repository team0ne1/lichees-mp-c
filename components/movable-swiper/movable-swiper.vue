<template>
	<view class="mov-area-all" :style="{height: height}" @touchstart="onTouchstart" @touchmove="onTouchmove" @touchend="onTouchend">
		<view v-for="(item,index) in movList" class="mov-view-list" 
		:class="item.indexClass" :style="{left: item.x + 'rpx'}" :key="index">
			<view class="mov-area-con" :class="item.conClass">
				<slot :movSlotData="item.data"></slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'MovableSwiper',
		props: {
			/**
			 * 传入的数据数组
			 */
			dataList: {
				type: Array,
				default: function(){
					return []
				}
			},
			/**
			 * 卡片高度
			 */
			height: {
				type: String,
				default: '360rpx'
			},
		},
		data() {
			return {
				canMove: true,
				movType: 0,
				touchIndex: 0,
				clientX: 0,
				moveX:0,
				movList:[
					{id: 0,indexClass: 'one',conClass: '',x: 0,data:null},
					{id: 1,indexClass: 'two',conClass: '',x: 0,data:null},
					{id: 2,indexClass: 'three',conClass: '',x: 0,data:null},
					{id: 3,indexClass: 'four',conClass: '',x: 0,data:null},
					{id: 4,indexClass: 'left',conClass: '',x: -750,data:null}
				],
				dataIndex: 0,
			};
		},
		mounted() {
			// this.movInit();
		},
		watch: {
			dataList: {
			    handler(newDataList,oldDataList) {
					this.movInit();
				},
			    deep: true,
			    immediate: true
			} 
		},
		methods:{
			movInit(){
				let _nowId = this.movList.filter(item => item.indexClass.indexOf('four') != -1)[0].id;
				if(this.dataList.length == 0){
					uni.showToast({
						icon:'none',
						title:'无数据',
					})
				}else{
					this.dataIndex = 0;
					this.movList[_nowId].data = this.dataList[this.dataIndex];
				}
			},
			onTouchstart(e){
				if(!this.canMove || this.dataList.length==0){
					return;
				}
				this.clientX=parseInt(e.touches[0].clientX);
			},
			onTouchmove(e){
				if(!this.canMove || this.dataList.length==0){
					return;
				}
				this.moveX=parseInt(e.touches[0].clientX);
				if(this.movType == 0){
					if(this.moveX>(this.clientX + 20)){
						if(this.dataIndex == 0){
							// uni.showToast({
							// 	icon:'none',
							// 	title:'已经到头了！'
							// })
							return;
						}
						this.movType = 1;
						this.touchIndex = this.movList.filter(item => item.indexClass.indexOf('left') != -1)[0].id;
						this.movList[this.touchIndex].data = this.dataList[this.dataIndex-1];
					}else if(this.moveX<(this.clientX - 20)){
						if(this.dataIndex == (this.dataList.length-1)){
							// uni.showToast({
							// 	icon:'none',
							// 	title:'已经到头了！'
							// })
							return;
						}
						this.movType = 2;
						this.touchIndex = this.movList.filter(item => item.indexClass.indexOf('four') != -1)[0].id;
						let _nextId = this.movList.filter(item => item.indexClass.indexOf('three') != -1)[0].id;
						this.movList[_nextId].data = this.dataList[this.dataIndex+1];
					}
					
				}else if(this.movType == 1){
					this.movList[this.touchIndex].x = (this.moveX-this.clientX-750)<=0 ? (this.moveX-this.clientX-750) : 0;
				}else if(this.movType == 2){
					this.movList[this.touchIndex].x =(this.moveX-this.clientX)<=0 ? (this.moveX-this.clientX) : 0;
				}
			},
			onTouchend(e){
				if(this.movType == 1){
					if((this.moveX-this.clientX) < 50){
						this.movList[this.touchIndex].x = -750;
						this.movType = 0;
					}else{
						this.switchCard();
					}
				}else if(this.movType == 2){
					if((this.moveX-this.clientX) > -50){
						this.movList[this.touchIndex].x = 0;
						this.movType = 0;
					}else{
						this.switchCard();
					}
				}
			},
			switchCard(){
				this.canMove = false;
				if(this.movType==1){
					for(let i=0;i<this.movList.length;i++){
						let _thisClass=this.movList[i].indexClass.split(' ')[0];
						switch (_thisClass){
							case 'one':
								setTimeout(()=>{
									this.movList[i].conClass = '';
									this.movList[i].indexClass = 'left';
									this.movList[i].x = -750;
									this.dataIndex-=1;
									this.canMove = true;
								},1000) 
								break;
							case 'two':
								setTimeout(()=>{
									this.movList[i].conClass = 'animate';
									this.movList[i].indexClass = 'one';
								},500)
								break;
							case 'three':
								setTimeout(()=>{
									this.movList[i].conClass = 'animate';
									this.movList[i].indexClass = 'two';
								},500)
								break;
							case 'four':
								setTimeout(()=>{
									this.movList[i].conClass = 'animate';
									this.movList[i].indexClass = 'three';
								},500)
								break;
							case 'left':
								this.movList[i].conClass = '';
								this.movList[i].indexClass = 'four animate';
								this.movList[i].x = 0;
								setTimeout(()=>{
									this.movList[i].indexClass = 'four';
								},500)
								break;
							default:
								break;
						}
					}
				}else if(this.movType==2){
					for(let i=0;i<this.movList.length;i++){
						let _thisClass=this.movList[i].indexClass.split(' ')[0];
						switch (_thisClass){
							case 'one':
								setTimeout(()=>{
									this.movList[i].conClass = 'animate';
									this.movList[i].indexClass = 'two';
								},500)
								break;
							case 'two':
								setTimeout(()=>{
									this.movList[i].conClass = 'animate';
									this.movList[i].indexClass = 'three';
								},500)
								break;
							case 'three':
								setTimeout(()=>{
									this.movList[i].conClass = 'animate';
									this.movList[i].indexClass = 'four';
								},500)
								break;
							case 'four':
								this.movList[i].conClass = '';
								this.movList[i].indexClass = 'left animate';
								this.movList[i].x = -750;
								setTimeout(()=>{
									this.movList[i].indexClass = 'left';
									this.dataIndex+=1;
									this.canMove = true;
								},1000)
								break;
							case 'left':
								this.movList[i].conClass = '';
								this.movList[i].indexClass = 'one';
								this.movList[i].x = 0;
								break;
							default:
								break;
						}
					}
				}
				this.movType = 0;
			},
		}
	}
</script>

<style lang="scss">
@charset "UTF-8";
.mov-area-all{
	width: 750rpx;
	position: relative;
	top: -66rpx;
	box-sizing: border-box;
	.mov-view-list{
		position: absolute;
		left: 0;
		top: 0;
		width: 750rpx;
		height: 100%;
		transform: translateX(0rpx);
		.mov-area-con{
			height: 100%;
			position: absolute;
			background: #fff;
			border-radius: 10px;
			border: 1px solid #ccc;
		}
		&.one{
			z-index: 1;
			.mov-area-con{
				width: 678rpx;
				left: 36rpx;
				top: 2rpx;
				&.animate{
					transition: all 0.5s;
				}
			}
		}
		&.two{
			z-index: 2;
			.mov-area-con{
				width: 686rpx;
				left: 32rpx;
				top: 10rpx;
				&.animate{
					transition: all 0.5s;
				}
			}
		}
		&.three{
			z-index: 3;
			.mov-area-con{
				width: 694rpx;
				left: 28rpx;
				top: 20rpx;
				&.animate{
					transition: all 0.5s;
				}
			}
		}
		&.four{
			z-index: 4;
			.mov-area-con{
				width: 702rpx;
				left: 24rpx;
				top: 30rpx;
				&.animate{
					transition: all 0.5s;
				}
			}
		}
		&.left{
			left: -750rpx;
			z-index: 5;
			.mov-area-con{
				width: 702rpx;
				left: 24rpx;
				top: 30rpx;
				&.animate{
					transition: all 0.5s;
				}
			}
		}
		&.animate{
			z-index: 5;
			transition: all 0.5s;
		}
	}
}
</style>
