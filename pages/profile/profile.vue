<template>

		

		<!-- <t-navbar4 ></t-navbar4> -->
		<view class="prof"  @touchstart="touchStart" @touchend="touchEnd" @touchmove="touchMove">
			<t-tabbar  :currentPage="page"></t-tabbar>
			<image  style="position: fixed; top: 0;left: 0; height: 30%; width: 100%;filter: blur(10px);z-index: -1;min-height: 35%;" :style="'height:'+scaleImage+'%;+' + trans" :src="backgroundImage"  >
			<view class="block1" >
				<view class="" style="color: rgba(0,0,0,0);">
					1
				</view>
				
<!-- 				<view class="block2" :style="'margin-top:'+ statusBarHeight + 'px;'">
					<view class="userphoto">
						<image class="" style="width: 75px; height: 75px; margin-top: 2.5px; border-radius:50%;" src="../../static/avatar.jpg"  >						
					</view>

					<view class="userName">
						<text class="name">{{username}}</text>
						<robby-tags class="userTag" v-model="tagList"  :enable-del="enableDel"   ></robby-tags>
						<view class="personInfoEditor">
							编辑个人信息
						</view>
					</view>
					
				</view> -->
				
				
<!-- 				<view class="saying">
					<text >{{saying}}</text>
				</view> -->
<!-- 				<view class="toplist" style="display: flex; flex-direction: row;align-content: center; justify-content:center; margin-bottom: 20upx;margin-top: 20upx;">
					<text class="topcelect">组局</text>
					<view class="line"></view>
					<text class="topcelect">委托</text>
					<view class="line"></view>
					<text class="topcelect">收藏</text>
					<view class="line"></view>
					<text class="topcelect">消息</text>
				</view> -->
			</view>	
			<view class="block2" :style="'margin-top:'+ (statusBarHeight*1 + 30) + 'px;'">
				<view class="userphoto">
					<image class="" style="width: 150upx; height: 150upx; margin-top: 6upx; border-radius:50%;" :src="avatarUrl"  >						
				</view>
			
				<view v-if="hadLogin" class="userName">
					<text class="name">{{nickName}}</text>
					<robby-tags class="userTag" v-model="tagList"  :enable-del="enableDel"   ></robby-tags>
					<view class="personInfoEditor" @click="navTo('/pages/userinformation/userinformation')">
						编辑个人信息
					</view>
				</view>
				<view v-else  @tap="login" class="askLogin" style=" width: 8em;  align-self: center; display: flex; align-items: center; height: 3.5em; border-radius: 1em;  margin-left: 30px;" >
					<view   style="margin: auto;   width: 5em; text-align: center; color: #0575ff; background-color: rgba(181, 229, 255, 0.7);  padding-left: 20upx; padding-right: 20upx; padding-top: 15upx;padding-bottom: 15upx; border-radius: 25upx; border: 4px solid #FFFFFF;">
						授权登陆
					</view>
				</view>

				
			</view>
			<view class="" style="margin-top: 10%;color: rgba(0,0,0,0);">
				1
			</view>
			<view class="block3">
				<view class="toolcard">
					<view class="personalinformation item" >
						<view class="" style="width: 1.3em; height: 1.3em;align-self: center; margin-right: 30upx;">
							<image src="../../static/profile/settings3.svg" style="width: 100%;height: 100%; margin-right: 20upx;padding-top: 0;" mode=""></image>
						</view>
						
						<text class="text1" >设置</text>
					</view>
					<view class="divider "></view>
					<view class="connectus item">
						<view class="" style="width: 1.3em; height: 1.3em;align-self: center; margin-right: 30upx;">
							<image src="../../static/profile/help-desk.svg" style="width: 100%;height: 100%; margin-right: 20upx;padding-top: 0;" mode=""></image>
						</view>
						<text class="text1">客服</text>
					</view>

					<view class="divider"></view>
					<view class="bugupdate item">
						<view class="" style="width: 1.3em; height: 1.3em;align-self: center; margin-right: 30upx;">
							<image src="../../static/profile/help.svg" style="width: 100%;height: 100%; margin-right: 20upx;padding-top: 0;" mode=""></image>
						</view>
						<text class="text1">问题反馈</text>
					</view>
					<view class="divider"></view>
					<view class="agreement item" @click="navTo('/pages/agreement/agreement')" >
						<view class="" style="width: 1.3em; height: 1.3em;align-self: center; margin-right: 30upx;">
							<image src="../../static/profile/information2.svg" style="width: 100%;height: 100%; margin-right: 20upx;padding-top: 0;" mode=""></image>
						</view>
						<text class="text1">关于</text>
					</view>
				</view>
			</view>
					
		<t-dialog dialogTitle="请求授权" dialogContent="您尚未登陆, 授权登陆需要您授权用户信息" :dialog-show="dialogShow" @changeCancel="dialogCancel" @changeconfirm="confirmLogin"></t-dialog>			
		</view>

</template>

<script>
	import robbyTags from '@/components/robby-tags/robby-tags.vue'
	import tNavbar4 from '../../components/t-navbar4.vue'
	import tDialog from '../../components/t-dialog.vue'
	import cloud1 from '../../helper/cloudbase.js'
	export default {
		components:{
			robbyTags,
			tNavbar4,
			tDialog
		},
		onShow: function() {
			const userInfo = uni.getStorageSync('userInfo');
			if(userInfo){
				this.hadLogin = true
				console.log('userInfo existed')
				this.avatarUrl = userInfo.avatarUrl
				this.nickName = userInfo.nickName
				this.backgroundImage = userInfo.avatarUrl
			}
		},
		data() {
			return {
				statusBarHeight: getApp().globalData.statusBarHeight,
				page:2,
				tagList: ['♂', '斋区人民'],
				startTime:0,
				startPosition:0,
				endPosition:0,
				scaleImage:35,
				oldClientY:0,
				avatarUrl:'../../static/profile/avatar.jpg',
				nickName:'',
				hadLogin:false,
				backgroundImage: '../../static/profile/avatar.jpg',
				ownerOpenid:'',
				ownerUserInfo:'',
				dialogShow:false
			}
		},
		computed:{
			// scaleImage(){
				
			// }
		},
		methods: {

			navTo: function(url){
				console.log('nav to detailpage')
				
				uni.navigateTo({
					url:url
				})
			},
			touchStart: function(e){
				this.startTime = Date.now()
				this.startPosition = e.changedTouches[0].clientY
				// console.log('startPosition'+e.changedTouches[0].clientY)
				this.oldClientY = e.changedTouches[0].clientY
				this.trans = ''
				
			},
			touchMove: function(e){
				this.trans = ''
				// console.log( e)
				let diff = e.changedTouches[0].clientY - this.oldClientY
				// console.log(e.changedTouches[0].clientY - this.oldClientY)
				this.oldClientY = e.changedTouches[0].clientY
				if(this.scaleImage>85 || this.scaleImage<35){
					return
				}
				if(diff>0 && Math.abs(diff)>5){
					this.scaleImage += Math.sqrt(0.005 * diff) 
					// console.log('biger' + this.scaleImage )
				}
				else if(diff<0 && Math.abs(diff)>5){
					this.scaleImage -= (0.005 * (-diff))
				}

				
			},
			touchEnd: function(e){
				// console.log(e)
				this.oldClientY = e.changedTouches[0].clientY
				this.scaleImage = 35

			},
			login: function(){
				let that = this
				uni.showLoading({
					title: '登陆中..'
				})
				try {

					const userInfo = uni.getStorageSync('userInfo');
					if(userInfo){
						uni.hideLoading()
						that.hadLogin = true
						console.log('userInfo existed')
						this.avatarUrl = userInfo.avatarUrl
						this.nickName = userInfo.nickName
						this.backgroundImage = userInfo.avatarUrl
				    }
					else{
						
						wx.login({
							success:function(codeRes) {
								console.log('/wxuser/code/'+codeRes.code)
								cloud1.getCloud('/wxuser/code/'+codeRes.code)
								.then((res)=>{
									console.log(res.data)
									const resData = res.data
									if(resData.code == '101'){
										const userInfo = resData.userInfo
										const openid = resData.openid
										
										that.avatarUrl = userInfo.avatarUrl
										that.nickName = userInfo.nickName
										that.backgroundImage = userInfo.avatarUrl
										uni.hideLoading();
										that.hadLogin = true
										
										try {
										    uni.setStorageSync('userInfo', userInfo);
											uni.setStorageSync('openid', openid);
											console.log('saved userInfo openid in localStorage');
							
										} catch (e) {
										    console.log(e)
										}
									}
									else if (resData.code == '-101'){
										const openid = resData.openid
										uni.setStorageSync('openid', openid);
										uni.hideLoading();
										that.dialogShow = true
				
									}
						
								})
								.catch((err) => {
									console.log(err)
								})
							}
						})
					}
				} 
				catch (e) {
					console.log(e)
				}
			},
			askUserInfo: function(){
				let that = this
				wx.getUserProfile({
					// lang:'zh_CN',
					desc:'用于发布信息',
					success:(res) => {
						console.log(res)
						// console.log(res.userInfo.avatarUrl)
						const userInfo = res.userInfo
						
						that.avatarUrl = userInfo.avatarUrl
						that.nickName = userInfo.nickName
						that.backgroundImage = userInfo.avatarUrl
						this.hadLogin = true
						
						uni.setStorage({
						    key: 'userInfo',
						    data: res.rawData,
						    success: function () {
						        console.log('success saved userinfo');
								const openid = uni.getStorageSync('openid');
								if(openid){
									console.log(openid)
										
									cloud1.postCloud('/wxuser/openid/' + openid, res.userInfo)
									.then((res) => {
										console.log(res.data)
										console.log('登陆成功')
										uni.showToast({
										    title: '登陆成功',
										    duration: 2000,
											position:'bottom',
											icon:'none'
										});
										
									})
									
								}
								else{
									console.log('err')
								}
								
						    }
						});
					},
					fail:(err)=>{
						console.log(err)
						
					}
				})
			},
			dialogCancel: function(){
				this.dialogShow = false
			},
			confirmLogin: function(){
				this.dialogShow = false
				this.askUserInfo()
			}

		
		},

		// onPageScroll: function(e){
		// 	let that = this;
		// 	// console.log('scroll '+ that.scroll)
		// 	console.log('scrollTop '+ e.scrollTop)
		// 	if(e.scrollTop < -40){
		// 		console.log('biger')
		// 		that.scaleImage = '50%'
		// 	}
		// 	else{
		// 		that.scaleImage = '30%'
		// 	}
		// }
	}
</script>

<style>
page{
	/* background-color: #51cbb3; */
	background-color: #f3f3f3;
	min-height: 100%;
}

.prof{
	min-height: 100%;
/* 	margin-top: 0;
	background-image: url(https://ftp.bmp.ovh/imgs/2021/05/9994ea31cfaa7088.jpg);
	background-size: cover;
	background-repeat: no-repeat; */
}

.prof .block1{
/* 	background-image: url(https://ftp.bmp.ovh/imgs/2021/05/9994ea31cfaa7088.jpg);
	background-size: cover;
	background-repeat: no-repeat; */
	position: fixed;
	top:0;
	left: 0;
	width: 100%;
	background: inherit;
	background-color: rgba(249, 249, 249, 0.7);
	backdrop-filter:  blur(10px);
	z-index: 1000;
	color: #fff;
	height: 100%;
	z-index: -1;
	/* min-height: 800upx; */



}
.prof  .block2{
	display: flex;
	flex-direction: row;
	/* margin-top: 50upx; */
	/* margin-bottom: 20upx; */
	/* color: #FFF; */
	z-index: 1000;

}

/* .block1{
	background-color: #FFFFFF;
	padding-top: 40upx;
} */

.prof .block3{
	/* color: #FFFFFF; */
	background-color: #FFF;

	/* margin: 4%; */
	margin: 30upx;
	margin-top: 0;
	padding-top: 35upx; 
	padding-bottom: 30upx;
	border-radius: 50upx;
	color: #0575ff;


}
.text1{
	font-size: 1.25em;
	letter-spacing: 2upx;
}
.userName{
	color: #434343;
	margin-top: 12upx;
	margin-left: 5%;
	font-size: 1.2em;
	letter-spacing: 1upx;
	font-weight: bold;
	flex-grow: 1;
	max-height: 27upx;
}

.userphoto{
	height: 174upx;
	width: 174upx;
	border-radius: 87upx;
	margin-left: 8%;

	border: 4px solid #007e54;
	overflow: hidden;
	text-align: center;
	/* padding-left: 1upx; */
	box-sizing: border-box;
	
}
.name{
	padding-left: 20upx;
}
.userTag{
	flex-grow: 1;
	font-size: 0.6em;
	max-width: 60%;
}
.saying{
	color: #fff;
	flex-grow: 1;
	text-align: center;
	font-size: 1.2em;
	letter-spacing: 1upx;
	padding-bottom: 60upx;
}

.line{
	background: #c7c7c7;
	width: 4upx;
	height:50upx;
	position: relative;
	display: flex;
	flex-direction: column;
	margin-left: 40upx;
	margin-right: 40upx;
}
.toplist{
/* 	justify-content: center;
	align-items: start; */
	font-size: 1.2em;
	letter-spacing: 2upx;
	padding-bottom: 20upx;
}

.userName .personInfoEditor{
	display: inline;
	color: #0575ff;
	font-size: 16px;
	font-weight: lighter;
	padding-top: 4px;
	padding-bottom: 4px;
	padding-left: 10px;
	padding-right: 10px;
	border-radius: 0.8em ;
	height: 1em;
	box-sizing: border-box;
	background-color: rgba(181, 229, 255, 0.8);
}

.toolcard {
	background-color: #FFFFFF;
	border-radius: 20upx;
	margin: 20upx;
	margin-top: 0;
	
}
.divider{
	width: 100%;
	border-bottom: 2upx solid #f5f5f5; 
	margin-top: 25upx; 
	margin-bottom: 25upx;
}

.item{
	margin-left: 30upx;
	display: flex;
	
}
</style>
