<template>
	<view class="resDet">
		<t-navbar2 :navTitle="'学习局'"></t-navbar2>
		<text style="color:#FFFFFF;">别再拉啦</text>
		<view class="resDetContent" :style="'margin-top:' + navBarHeight +'px;'">
			<view class="resDetTop">
				<!-- top -->
				<!-- <view class="" style="display: flex;margin-right: 20upx;"> -->
					<view class="resDetTitle"> 
						<view class="resDetCard">
							{{title}}
						</view>
					</view>					
				<!-- </view> -->
				<view class="resDetInfo">
					<scroll-view 
						 class="scroll-view_H" 
						 scroll-x="true" 
						 :scroll-with-animation="true" 
						  scroll-left="0">
							<view  class="scroll-view-item" >
							   <view class="scrollCard card1" @click="useMap">
									<view class="">
										{{loca_text}}
									</view>
									
							   </view>
							   <!-- <view class="title_level1">地点{{resBriefData.loca_text}}</view> -->
							   <view class="title_level2">集合地点</view>
							</view>
							<view  class="scroll-view-item" >
							   <view class="scrollCard card2" style="">
								   {{resStartTime.getFullYear() + '/' +  ('0' +(resStartTime.getMonth() + 1)).slice(-2) + '/' + ('0' + resStartTime.getDate()).slice(-2) + ' ' + ('0' + resStartTime.getHours()).slice(-2) + ':' + ('0' + resStartTime.getMinutes()).slice(-2)}}
							   </view>
							   <!-- <view class="title_level1">开始时间{{resBriefData.res_starttime}}</view> -->
							   <view class="title_level2">开始时间</view>
							</view>
							<view  class="scroll-view-item" >
							   <view class="scrollCard card3" >
								   {{resEndTime.getFullYear()  + '/' +   ('0' +(resEndTime.getMonth() + 1)).slice(-2)   + '/' + ('0' + resEndTime.getDate()).slice(-2) + ' ' + ('0' + resEndTime.getHours()).slice(-2) + ':' + ('0' + resEndTime.getMinutes()).slice(-2)}}
							   </view>
							   <!-- <view class="title_level1">结束时间{{resBriefData.res_endtime}}</view> -->
							   <view class="title_level2">结束时间 </view>
							</view>
							<view  class="scroll-view-item" >
							   <view class="scrollCard card4" >
								   {{person_num}}
							   </view>
							   <!-- <view class="title_level1">人数上限{{resBriefData.person_num}}</view> -->
							   <view class="title_level2">人数上限</view>
							</view>
					</scroll-view>					
				</view>


				
			</view>	
			<view class="resDetBot">
				<text class="resOwnerTitle">局长</text>
				
				<view class="resOwner">
					
					<view class="resOwnerAvatar">
						<image   :src="ownerAvatar" :class="{'userMark': ownerOpenid == userOpenid}" style="width: 60px; height: 60px;border-radius: 20px;"></image>
						
					</view>
					
					<view class="resOwnerInfo">
						
						<view class="resOwnerName">					
							<view class="" style="margin-left: 10upx;font-size: 1.03em;margin-bottom: 5upx;">
								{{ownerName}}
							</view>
						</view>
						<view class="resOwnerPhone" @click="makePhoneCall">
							<view class="resOwnerNameHelper">
								手机号
							</view>
							<view class="resOwnerNameText" :class="{'resOwnerNameTextPress':press }" @touchstart="press = true" @touchend="press = false">
								{{ownerPhoneNumber}}
							</view>
							
						</view>
						<view class="resOwnerWxid">
							<view class="resOwnerWxidHelper">
								微信号
							</view>
							<view class="resOwnerWxidText">
								{{ownerWxid}}
							</view>
							
						</view>
					</view>
				</view>
				<text class="resMembersTitle">成员</text>
				<view class="resMembers grid-container">
					<view class="grid-item" v-for="(item, index) in resMembers" :key="index" >
						<image :src="item.avatar" :class="{'userMark': item.openid == userOpenid}" style="width: 60px; height: 60px;border-radius: 20px; margin: auto;"></image>
						<text class="resMemberHelper">{{item.nickName}}</text>
					</view>
<!-- 					<view class="grid-item">
						<image src="../../static/avatar.jpg"  style="width: 60px; height: 60px;border-radius: 20px; margin: auto;"></image>
						<text class="resMemberHelper">张子扬。张子扬张子扬</text>
					</view>
					<view class="grid-item">
						<image src="../../static/avatar.jpg"  style="width: 60px; height: 60px;border-radius: 20px; margin: auto;"></image>
						<text class="resMemberHelper">方靖宇</text>
					</view>
					<view class="grid-item">
						<image src="../../static/avatar.jpg"  style="width: 60px; height: 60px;border-radius: 20px; margin: auto;"></image>
						<text class="resMemberHelper">hjq</text>
					</view>
					<view class="grid-item">
						<image src="../../static/avatar.jpg"  style="width: 60px; height: 60px;border-radius: 20px; margin: auto;"></image>
						<text class="resMemberHelper">hjq</text>
					</view> -->
					<view class=" grid-item" v-if="hadNotJoinIn" >
						<image @click="joinRes"  src="../../static/publish-btn/plusBlue.svg" class="joinBtn" mode="center" style="width: 60px; height: 60px;border-radius: 20px; margin: auto;"></image>
						<text class="resMemberHelper" style="background-color: unset;"></text>
					</view>
				</view>
				
				<text class="resOwnerTitle">备注</text>
				
				<view class="resRemarkContent">
					<text>{{remarks}}</text>
					
				</view>
				
			</view>		
		</view>
		<t-dialog dialogTitle="请求授权" dialogContent="您尚未登陆, 授权登陆以加入局子" :dialog-show="dialogShow" @changeCancel="dialogCancel" @changeconfirm="confirmLogin"></t-dialog>
		<t-action-sheet :show="actionSheetShow"  @close="closeActionSheet" :setASheetBottom="setASheetBottom" :setASheetPadBot="setASheetPadBot" >
			<view class="" style="color: #FFFFFF;  display: flex; flex-direction: column; "  >
				<view class="" style="margin: auto; margin-bottom: 20upx;font-size: 1.2em;">
					联系方式
				</view>
<!-- 				<view class=""   style="margin-bottom: 20upx;">
		
					<input class="uni-input" @focus="focus" @blur="blur"   type="text" :value="userName" style="font-size: 1.2em; background-color: #d0d0d0; width: 60%; height: 1.5em; margin: auto; border-radius: 15upx;padding-left: 20upx;padding-right: 20upx;" placeholder="姓名" /> 
				</view> -->
				<view class="" style="margin-bottom: 40upx;">							
					<input class="uni-input"  cursor-spacing="70" type="number" :value="userPhoneNum" @input="phoneNumInput" style="font-size: 1.2em;color: #000000; font-weight:lighter ; background-color: #dddddd; width: 60%; height: 1.5em;margin: auto; border-radius: 15upx;padding-left: 20upx;padding-right: 20upx;" placeholder="手机" />
			
				</view>				
				<view @tap="confirmJoin" style="text-align: center; align-items: center; width: 30%; margin: auto; background-color: #007AFF; color: #FFFFFF; font-size: 1.2em; border-radius: 15upx;">
					加入
				</view>
			</view>

		</t-action-sheet>
	</view>
</template>

<script>
	import cloud1 from '../../helper/cloudbase.js'
	import tNavbar2 from '../../components/t-navbar2.vue'
	import tDialog from '../../components/t-dialog.vue'
	import tActionSheet from '../../components/t-action-sheet.vue'
	
	const plugin = requirePlugin('routePlan');

	export default {
		name:'res_detail',
		
		components:{
			tNavbar2,
			tDialog,
			tActionSheet
		},
		onLoad: function(options) {
			console.log(options.detid)
			console.log(options.restype)
			console.log('/'+ options.restype + '/detail/' + options.detid.replace(/\"/g,"") )
			
			this.reqPath = '/'+ options.restype + '/detail/' + options.detid.replace(/\"/g,"")
			this.putMemberPath = '/'+ options.restype + '/detail/' + options.detid.replace(/\"/g,"") + '/members' 

			
		},
		onShow: function() {
			// this.resBriefData = 
			let that = this
			// console.log( uni.getStorageSync('res_data'))
			
			const resBriefData = uni.getStorageSync('res_data')
			console.log('resBriefData')
			console.log(resBriefData)
			this.title = resBriefData.title
			this.loca_text = resBriefData.loca_text
			this.person_num = resBriefData.person_num
			this.res_starttime = resBriefData.res_starttime
			this.res_endtime = resBriefData.res_endtime
				
				
			const userOpenid = uni.getStorageSync('openid')
			if(userOpenid) {
				console.log('openid' + userOpenid)
				this.userOpenid = userOpenid;
				//check if in the group
				
			}	
				
			cloud1.getCloud(this.reqPath)
			.then((res) => {
				console.log(res.data[0])
				const resDetailData = res.data[0];
				this.ownerOpenid = resDetailData.owner.openid
				this.ownerName = resDetailData.owner.name;
				this.ownerAvatar = resDetailData.owner.avatar
				this.ownerPhoneNumber = resDetailData.owner.phone_number
				this.ownerWxid = resDetailData.owner.wxid
				this.resMembers = resDetailData.members
				this.loca_latitude = resDetailData.loca_geo.coordinates[1]
				this.loca_longitude = resDetailData.loca_geo.coordinates[0]
				this.remarks = resDetailData.remarks
				
				if(this.userOpenid == resDetailData.owner.openid){
					this.hadNotJoinIn = false
				}
				

				for (const item of resDetailData.members) {
					console.log(item)
					if(item.openid == this.userOpenid){
						console.log('had join in')
						this.hadNotJoinIn = false
					}
				}
				
			})
			.catch((err) =>{
				console.log(err)
			})


			
			const userInfo = uni.getStorageSync('userInfo')
			if(userInfo){
				this.hadLogin = true
				
				this.userAvatar = userInfo.avatarUrl
				this.userNickName = userInfo.nickName				
			}
			

			
			
			
		},
		computed:{
			// resMembers(){
			// 	return this.resDetailData.members
			// },
			resStartTime(){
				return new Date(this.res_starttime)
			},
			resEndTime(){
				return new Date(this.res_endtime)
			},

		},
		watch:{
			resMembers: function(val, oldVal){

				for (const item of val) {
					console.log(item)
					if(item.openid == this.userOpenid){
						console.log('had join in')
						this.hadNotJoinIn = false
					}
				}
			}
		},
		data() {
			return {
				navBarHeight: getApp().globalData.navBarHeight,
				press:false,
				reqPath:'',
				putMemberPath:'',
				// resDetailData:{},
				// resBriefData:{},
				title:'',
				loca_text:'',
				loca_latitude:0,
				loca_longitude:0,
				res_starttime:'',
				res_endtime:'',
				person_num:2,
				ownerOpenid:'',
				ownerName:' ',
				ownerAvatar:'../../static/profile/avatar.jpg',
				ownerPhoneNumber:'',
				ownerWxid:'',
				resMembers:[],
				remarks:'无',
				
				hadLogin:false,
				hadNotJoinIn:true,
				actionSheetShow:false,
				userOpenid:'',
				userAvatar:'',
				userNickName:'',
				
				userPhoneNum:'',
				userName:'',
				setASheetBottom:0,
				setASheetPadBot:0,
				FtimeStamp:0,
				BtimeStamp:0,
				FBtimeStamp:0
				
				
			}
		},
		methods: {
			phoneNumInput: function(e){
				this.userPhoneNum = e.detail.value
			},	
			confirmJoin: function(){
				
				console.log(this.userPhoneNum)
				let errMsgCheck = this.checkPhoneNum(this.userPhoneNum)
				if(errMsgCheck==''){
					console.log('passed check')
				}
				else
				{
					console.log(errMsgCheck)
					uni.showToast({
					    title: errMsgCheck,
					    duration: 2000,
						position:'bottom',
						icon:'none'
					});
					// uni.hideLoading();
					return
				}
				let putData = {
					push:[
							{
							  avatar: this.userAvatar,
							  name:this.userName,
							  nickName:this.userNickName,
							  openid:this.userOpenid,
							  phone_number:this.userPhoneNum,
				
							}
					]
				}
				console.log(putData)
				cloud1.putCloud(this.putMemberPath,putData)
				.then((res) => {
					console.log(res.data)
				})
				
				let that = this
				setTimeout(function(){
					cloud1.getCloud(that.reqPath)
					.then((res) => {
						console.log(res.data[0])
						const resDetailData = res.data[0];
						const resMembers = resDetailData.members
						
						that.resMembers.length = 0
						for(let i=0;i<resMembers.length;i++){
							that.resMembers.push(resMembers[i])							
						}
						
					})
				},3000)
				
				
			},
			checkPhoneNum: function(phoneNum){
				function trim(s){
				    return s.replace(/\s+/g, "");
				}
				let regPhoneNum = /^1[3-9]\d{9}$/
				let errMsg = ''
				if(trim(phoneNum) === '') {errMsg = '请输入手机号码'; return errMsg}
				if(!(regPhoneNum.test(phoneNum))){ errMsg = '手机号码格式错误'; return errMsg}
				return errMsg
			},
			// focus: function(e){
			// 	this.setASheetBottom = e.detail.height * 1	
			// 	this.setASheetPadBot = e.detail.height * 1
			// 	// if((e.timeStamp - this.FtimeStamp) > 1000){
			// 	// 	this.setASheetBottom = e.detail.height * 1
			// 	// }else{
			// 	// 	this.setASheetBottom = 0
			// 	// }
			// 	console.log(e)
				 
			// 	this.FBtimeStamp = e.timeStamp
			// },
			// blur: function(e){
			// 	// console.log(e)
			// 	// console.log(e.timeStamp+1000 - this.FBtimeStamp)
			// 	let that = this
			// 	// setTimeout(function(){
			// 	// 	console.log(e.timeStamp - that.FBtimeStamp)
			// 	// 	// console.log(e.timeStamp+1000 - that.FBtimeStamp)
			// 	// 	if((e.timeStamp - that.FBtimeStamp) == 0){
			// 			that.setASheetBottom = 0
			// 	// 	}					
			// 	// },700)

			// 	this.FBtimeStamp = e.timeStamp
			// },
			confirmLogin: function(){
				this.dialogShow = false
				wx.getUserProfile({
					// lang:'zh_CN',
					desc:'用于发布信息',
					success:(res) => {
						console.log(res)
						// console.log(res.userInfo.avatarUrl)
						// this.ownerUserInfo = res.rawData
						uni.setStorage({
						    key: 'userInfo',
						    data: res.rawData,
						    success: function () {
								this.hadLogin = true
						        console.log('success saved userinfo');
								const openid = uni.getStorageSync('openid');
								if(openid){
									console.log(openid)
										
									cloud1.postCloud('/wxuser/openid/' + openid, res.userInfo)
									.then((res) => {
										console.log(res.data)
										console.log('登陆成功，请再次点击加入')
										uni.showToast({
										    title: '登陆成功，请再次点击加入',
										    duration: 2000,
											position:'bottom',
											icon:'none'
										});
									})
									
								}
								
						    }
						});
					},
					fail:(err)=>{
						console.log(err)
						
					}
				})
			},
			closeActionSheet:function (e) {
				this.actionSheetShow = e
			},
			joinRes: function(){
				console.log('joinin')
				// cloud1.put()
				if(!this.hadLogin){
					this.dialogShow = true
				}
				this.actionSheetShow = true
				// let putData = {
				// 	push:[
				// 			{
				// 			  avatar: this.userAvatar,
				// 			  name:this.userName,
				// 			  nickName:this.userNickName,
				// 			  openid:this,userOpenid,
				// 			  phone_number:this.userPhoneNum,

				// 			}
				// 	]
				// }
				// cloud1.putCloud(this.putMemberPath,putData)
				// .then((res) => {
				// 	console.log(res.data)
				// })
			},
			makePhoneCall: function(){
				let that = this
				uni.makePhoneCall({
				    phoneNumber: that.ownerPhoneNumber
				});
			},
			useMap: function(){
				console.log('open map')
				const key = 'L6WBZ-SLZRO-RPOWQ-S4VCD-XB2MJ-4CB2O'; //使用在腾讯位置服务申请的key
				const referer = 'lichees-mp'; //调用插件的app的名称
				let endPoint = JSON.stringify({  //终点
				  'name':this.loca_text,
				  'latitude': this.loca_latitude,
				  'longitude': this.loca_longitude
				});
				wx.navigateTo({
				  url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
				});
			}
		}
	}
</script>

<style>
page{
	background-color: #FFFFFF;
}
.resDet{
	background-color: #5dce9b;
}
.resDet .resDetContent{
	
}


.resDet .resDetTitle{
	display: inherit;
	background-color: #fff;
	/* margin-top: 30upx; */
	margin-bottom: 20upx;
	margin-left: 10%;
	margin-right: 10%;
	padding-top: 3upx;
	padding-bottom: 5upx;
	font-size: 1.2em;
	border-radius: 30upx;
	/* border: 3px solid #FB6F70; */
	box-shadow: none;
}

.resDet .resDetTitle .resDetCard{
	margin: 15upx;
	padding: 15upx;
	border-radius: 15upx;
	box-shadow: 2upx 5upx 10upx #e5e5e5;
	background-color:#ffffff ;
	color: #2b2b2b;
}

.resDet .resDetBot{
	background-color: #fff;
	border-radius: 50upx 50upx 0 0 ;
	padding-top: 60upx;
	padding-left: 7%;
	padding-right: 7%;
	/* width: 100%; */
	/* height: 1000upx; */
}

.resDet .resOwner{
	border-radius: 30upx;

	background-color: #fcfcfc;
	box-shadow: 2upx 5upx 10upx #e5e5e5;
	/* margin: 30upx; */
	padding-left: 10upx;
	padding-right: 10upx;
	padding-top: 15upx;
	padding-bottom: 10upx;
	margin-bottom: 40upx;
	/* height: 90upx; */
	display: flex;
}

.resDet .resOwnerTitle, .resMembersTitle{
	color: #242424;
	font-size: 1.1em;
	font-weight:500;
	letter-spacing: 2rpx;
	/* margin-left: 50upx; */
	margin-bottom: 20upx;
	margin-left: 10upx;
}


.resDet .resOwner .resOwnerAvatar{
	margin-right: 20upx;
	margin-left: 20upx;
	align-self:center;
}

.resDet  .resOwnerPhone, .resOwnerWxid {

	display: flex;
	flex-direction: row;
	justify-content:space-between;
}
.resDet  .resOwnerPhone .resOwnerNameTextPress{
	background-color: #dcdcdc;
	border-radius: 15upx;
}

.resDet .resOwnerNameHelper,.resOwnerWxidHelper{
	margin: 10upx 5upx;
	padding: 7upx;
	
	color: #0575ff;
	font-size: 0.9em;
	background-color: rgba(181, 229, 255, 0.5);
	border-radius: 10upx;
	/* width: 3.1em; */
}

.resDet .resOwnerNameText, .resOwnerWxidText{
	font-weight: 400;
	margin: 10upx 5upx;
	padding: 7upx;
}

.resDet .resMembers {
	border-radius: 30upx;
	/* background-color: #fcfcfc; */
	box-shadow: 2upx 5upx 10upx #e5e5e5;
	padding-left: 10upx;
	padding-right: 10upx;
	padding-top: 15upx;
	padding-bottom: 10upx;
	margin-bottom: 40upx;
}

.grid-container{
	display: grid;
	grid-template-columns: auto auto auto;
	/* background-color: #2196F3; */
	
	/* grid-column-gap: 50upx; */
}

.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  /* border: 1px solid rgba(0, 0, 0, 0.8); */
  padding: 20upx;
  font-size: 30upx;
  text-align: center;
  display: flex;
  flex-direction: column;
}

.resDet .resMemberHelper{
	
	margin: auto;
	margin-top: 20upx;
/* 	
	margin-right: 40upx;
	margin-left: 40upx; */
	min-width: 4em;
	max-width: 7em;
	max-height: 1.3em;
	min-height: 1.3em;
	overflow: hidden;
	text-overflow: ellipsis;
	padding: 7upx;
	padding-left: 5upx;
	padding-right: 5upx;
	
	color: #0575ff;
	font-size: 0.9em;
	background-color: rgba(181, 229, 255, 0.5);
	border-radius: 10upx;
}
.resDet .joinBtn {
/* 	width: 60px; 
	height: 60px;
	border-radius: 20px; */
	background-color: rgba(181, 229, 255, 0.5);
}

.resDet  .resDetInfo{
	/* margin: 30upx; */
	z-index: 2;
	margin-top: 35upx;
	margin-bottom: 35upx;
}

.resDet .userMark{
	border: 5px solid #51cbb3;
	/* margin: 10upx; */
}

scroll-view ::-webkit-scrollbar {
  width: 0;
  height: 0;
  background-color: transparent;
}
.scroll-view_H{
	
  white-space: nowrap;
  overflow: hidden;
}
.scroll-view-item{
  width: 240rpx;
  height: 160rpx;
  display: inline-block;
  white-space: normal;
  /* display: flex; */
  /* display: inline; */
  margin-left: 20upx;
  
  background-color: #FFF;
  border-radius: 20upx;
}

.scroll-view-item .card1{
	color: #FFFFFF;
	background-repeat:no-repeat;
	/* background-size: cover; */
	background-image:linear-gradient(to bottom right, rgba(113, 164, 214, 0.9), rgba(5, 130, 232, 0.9)), 
					url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTExLjk5OSA1MTEuOTk5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTEuOTk5IDUxMS45OTk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNDA5LjEyNCw2My40MjZDMzY4LjIyNCwyMi41MjUsMzEzLjg0MywwLDI1Ni4wMDEsMFMxNDMuNzc3LDIyLjUyNSwxMDIuODc3LDYzLjQyNg0KCQkJYy00MC45MDEsNDAuOTAyLTYzLjQyNiw5NS4yODItNjMuNDI2LDE1My4xMjNjMCwxMTcuMDEyLDExMC42MzgsMjE0LjMzNywxNzAuMDc3LDI2Ni42MjNjOC4yNiw3LjI2NiwxNS4zOTMsMTMuNTQxLDIxLjA3NiwxOC44NDkNCgkJCWM3LjEyLDYuNjUxLDE2LjI1OSw5Ljk3NywyNS4zOTYsOS45NzdjOS4xMzksMCwxOC4yNzYtMy4zMjYsMjUuMzk3LTkuOTc3YzUuNjgzLTUuMzA5LDEyLjgxNi0xMS41ODMsMjEuMDc2LTE4Ljg0OQ0KCQkJYzU5LjQzOS01Mi4yODcsMTcwLjA3Ny0xNDkuNjExLDE3MC4wNzctMjY2LjYyM0M0NzIuNTQ5LDE1OC43MDgsNDUwLjAyNSwxMDQuMzI4LDQwOS4xMjQsNjMuNDI2eiBNMjgyLjY2Myw0NjAuNjU0DQoJCQljLTguNDQxLDcuNDI1LTE1LjczLDEzLjgzOC0yMS43NCwxOS40NTFjLTIuNzYxLDIuNTc3LTcuMDg1LDIuNTc4LTkuODQ3LDBjLTYuMDA5LTUuNjE1LTEzLjI5OS0xMi4wMjctMjEuNzQtMTkuNDUyDQoJCQljLTU1Ljg4LTQ5LjE1NS0xNTkuODk1LTE0MC42NTQtMTU5Ljg5NS0yNDQuMTAzYzAtMTAyLjg2OCw4My42ODktMTg2LjU1NywxODYuNTU4LTE4Ni41NTcNCgkJCWMxMDIuODY4LDAsMTg2LjU1Nyw4My42ODksMTg2LjU1NywxODYuNTU3QzQ0Mi41NTcsMzE5Ljk5OSwzMzguNTQzLDQxMS40OTgsMjgyLjY2Myw0NjAuNjU0eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMjU2LjAwMSwxMTIuOTM4Yy01Mi42MjEsMC05NS40MzEsNDIuODA5LTk1LjQzMSw5NS40M3M0Mi44MSw5NS40Myw5NS40MzEsOTUuNDNzOTUuNDMtNDIuODA5LDk1LjQzLTk1LjQzDQoJCQlTMzA4LjYyMiwxMTIuOTM4LDI1Ni4wMDEsMTEyLjkzOHogTTI1Ni4wMDEsMjczLjgwNWMtMzYuMDgzLDAtNjUuNDM5LTI5LjM1Ni02NS40MzktNjUuNDM4czI5LjM1Ni02NS40MzgsNjUuNDM5LTY1LjQzOA0KCQkJczY1LjQzOCwyOS4zNTYsNjUuNDM4LDY1LjQzOFMyOTIuMDg0LDI3My44MDUsMjU2LjAwMSwyNzMuODA1eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K");
	
}
.scroll-view-item .card2{
	color: #FFFFFF;
	font-size: 1.5em;
	background-repeat:no-repeat;
	background-size: cover;
	background-image:linear-gradient(to bottom right, rgba(201, 104, 227, 0.9), rgba(133, 11, 174, 0.9)), 
					url("data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjM4NHB0IiB2aWV3Qm94PSIwIDAgMzg0IDM4NCIgd2lkdGg9IjM4NHB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0zNDMuNTkzNzUgMTAxLjAzOTA2MmMtNy45NTMxMjUgMy44NDc2NTctMTEuMjgxMjUgMTMuNDE3OTY5LTcuNDMzNTk0IDIxLjM2NzE4OCAxMC41MTE3MTkgMjEuNzE0ODQ0IDE1LjgzOTg0NCA0NS4xMjEwOTQgMTUuODM5ODQ0IDY5LjU5Mzc1IDAgODguMjIyNjU2LTcxLjc3NzM0NCAxNjAtMTYwIDE2MHMtMTYwLTcxLjc3NzM0NC0xNjAtMTYwIDcxLjc3NzM0NC0xNjAgMTYwLTE2MGMzNi41NTg1OTQgMCA3MC45MDIzNDQgMTEuOTM3NSA5OS4zMjgxMjUgMzQuNTE5NTMxIDYuODk0NTMxIDUuNTAzOTA3IDE2Ljk3NjU2MyA0LjM1MTU2MyAyMi40ODA0NjktMi41NjY0MDYgNS41MDM5MDYtNi45MTQwNjMgNC4zNTE1NjItMTYuOTg0Mzc1LTIuNTcwMzEzLTIyLjQ4MDQ2OS0zMy42NTIzNDMtMjYuNzQ2MDk0LTc2LTQxLjQ3MjY1Ni0xMTkuMjM4MjgxLTQxLjQ3MjY1Ni0xMDUuODYzMjgxIDAtMTkyIDg2LjEzNjcxOS0xOTIgMTkyczg2LjEzNjcxOSAxOTIgMTkyIDE5MiAxOTItODYuMTM2NzE5IDE5Mi0xOTJjMC0yOS4zMzU5MzgtNi40MDYyNS01Ny40NDkyMTktMTkuMDM5MDYyLTgzLjUyNzM0NC0zLjgzOTg0NC03Ljk2ODc1LTEzLjQ0MTQwNy0xMS4yODkwNjItMjEuMzY3MTg4LTcuNDMzNTk0em0wIDAiLz48cGF0aCBkPSJtMTkyIDY0Yy04LjgzMjAzMSAwLTE2IDcuMTY3OTY5LTE2IDE2djExMmMwIDguODMyMDMxIDcuMTY3OTY5IDE2IDE2IDE2aDgwYzguODMyMDMxIDAgMTYtNy4xNjc5NjkgMTYtMTZzLTcuMTY3OTY5LTE2LTE2LTE2aC02NHYtOTZjMC04LjgzMjAzMS03LjE2Nzk2OS0xNi0xNi0xNnptMCAwIi8+PC9zdmc+"); 
	
}
.scroll-view-item .card3{
	color: #FFFFFF;
	font-size: 1.5em;
	background-repeat:no-repeat;
	background-size: cover;
	background-image:linear-gradient(to bottom right, rgba(231, 118, 71, 0.9), rgba(214, 41, 12, 0.9)), 
					url("data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjM4NHB0IiB2aWV3Qm94PSIwIDAgMzg0IDM4NCIgd2lkdGg9IjM4NHB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0zNDMuNTkzNzUgMTAxLjAzOTA2MmMtNy45NTMxMjUgMy44NDc2NTctMTEuMjgxMjUgMTMuNDE3OTY5LTcuNDMzNTk0IDIxLjM2NzE4OCAxMC41MTE3MTkgMjEuNzE0ODQ0IDE1LjgzOTg0NCA0NS4xMjEwOTQgMTUuODM5ODQ0IDY5LjU5Mzc1IDAgODguMjIyNjU2LTcxLjc3NzM0NCAxNjAtMTYwIDE2MHMtMTYwLTcxLjc3NzM0NC0xNjAtMTYwIDcxLjc3NzM0NC0xNjAgMTYwLTE2MGMzNi41NTg1OTQgMCA3MC45MDIzNDQgMTEuOTM3NSA5OS4zMjgxMjUgMzQuNTE5NTMxIDYuODk0NTMxIDUuNTAzOTA3IDE2Ljk3NjU2MyA0LjM1MTU2MyAyMi40ODA0NjktMi41NjY0MDYgNS41MDM5MDYtNi45MTQwNjMgNC4zNTE1NjItMTYuOTg0Mzc1LTIuNTcwMzEzLTIyLjQ4MDQ2OS0zMy42NTIzNDMtMjYuNzQ2MDk0LTc2LTQxLjQ3MjY1Ni0xMTkuMjM4MjgxLTQxLjQ3MjY1Ni0xMDUuODYzMjgxIDAtMTkyIDg2LjEzNjcxOS0xOTIgMTkyczg2LjEzNjcxOSAxOTIgMTkyIDE5MiAxOTItODYuMTM2NzE5IDE5Mi0xOTJjMC0yOS4zMzU5MzgtNi40MDYyNS01Ny40NDkyMTktMTkuMDM5MDYyLTgzLjUyNzM0NC0zLjgzOTg0NC03Ljk2ODc1LTEzLjQ0MTQwNy0xMS4yODkwNjItMjEuMzY3MTg4LTcuNDMzNTk0em0wIDAiLz48cGF0aCBkPSJtMTkyIDY0Yy04LjgzMjAzMSAwLTE2IDcuMTY3OTY5LTE2IDE2djExMmMwIDguODMyMDMxIDcuMTY3OTY5IDE2IDE2IDE2aDgwYzguODMyMDMxIDAgMTYtNy4xNjc5NjkgMTYtMTZzLTcuMTY3OTY5LTE2LTE2LTE2aC02NHYtOTZjMC04LjgzMjAzMS03LjE2Nzk2OS0xNi0xNi0xNnptMCAwIi8+PC9zdmc+");
	
}
.scroll-view-item .card4{
	color: #FFFFFF;
	font-size: 3em;
	background-repeat:no-repeat;
	background-size: cover;
	background-image:linear-gradient(to bottom right, rgba(83, 214, 216, 0.9), rgba(8, 156, 192, 0.9)),
					url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00MzcsMjY4LjE1MmgtNTAuMTE4Yy02LjgyMSwwLTEzLjQyNSwwLjkzMi0xOS43MSwyLjY0NmMtMTIuMzk4LTI0LjM3Mi0zNy43MS00MS4xMTgtNjYuODc3LTQxLjExOGgtODguNTkNCgkJCWMtMjkuMTY3LDAtNTQuNDc5LDE2Ljc0Ni02Ni44NzcsNDEuMTE4Yy02LjI4NS0xLjcxNC0xMi44ODktMi42NDYtMTkuNzEtMi42NDZINzVjLTQxLjM1NSwwLTc1LDMzLjY0NS03NSw3NXY4MC4xMTgNCgkJCWMwLDI0LjgxMywyMC4xODcsNDUsNDUsNDVoNDIyYzI0LjgxMywwLDQ1LTIwLjE4Nyw0NS00NXYtODAuMTE4QzUxMiwzMDEuNzk3LDQ3OC4zNTUsMjY4LjE1Miw0MzcsMjY4LjE1MnogTTEzNi43MDUsMzA0LjY4Mg0KCQkJdjEzMy41ODlINDVjLTguMjcxLDAtMTUtNi43MjktMTUtMTV2LTgwLjExOGMwLTI0LjgxMywyMC4xODctNDUsNDUtNDVoNTAuMTE4YzQuMDcyLDAsOC4wMTUsMC41NTMsMTEuNzY5LDEuNTcyDQoJCQlDMTM2Ljc3OSwzMDEuMzY2LDEzNi43MDUsMzAzLjAxNiwxMzYuNzA1LDMwNC42ODJ6IE0zNDUuMjk1LDQzOC4yNzFoLTE3OC41OVYzMDQuNjgxYzAtMjQuODEzLDIwLjE4Ny00NSw0NS00NWg4OC41OQ0KCQkJYzI0LjgxMywwLDQ1LDIwLjE4Nyw0NSw0NVY0MzguMjcxeiBNNDgyLDQyMy4yNzFjMCw4LjI3MS02LjcyOSwxNS0xNSwxNWgtOTEuNzA1di0xMzMuNTljMC0xLjY2Ny0wLjA3NC0zLjMxNy0wLjE4Mi00Ljk1Nw0KCQkJYzMuNzU0LTEuMDE4LDcuNjk3LTEuNTcyLDExLjc2OS0xLjU3Mkg0MzdjMjQuODEzLDAsNDUsMjAuMTg3LDQ1LDQ1VjQyMy4yNzF6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0xMDAuMDYsMTI2LjUwNGMtMzYuNzQ5LDAtNjYuNjQ2LDI5Ljg5Ny02Ni42NDYsNjYuNjQ2Yy0wLjAwMSwzNi43NDksMjkuODk3LDY2LjY0Niw2Ni42NDYsNjYuNjQ2DQoJCQljMzYuNzQ4LDAsNjYuNjQ2LTI5Ljg5Nyw2Ni42NDYtNjYuNjQ2QzE2Ni43MDYsMTU2LjQwMSwxMzYuODA5LDEyNi41MDQsMTAwLjA2LDEyNi41MDR6IE0xMDAuMDU5LDIyOS43OTYNCgkJCWMtMjAuMjA3LDAtMzYuNjQ2LTE2LjQzOS0zNi42NDYtMzYuNjQ2YzAtMjAuMjA3LDE2LjQzOS0zNi42NDYsMzYuNjQ2LTM2LjY0NmMyMC4yMDcsMCwzNi42NDYsMTYuNDM5LDM2LjY0NiwzNi42NDYNCgkJCUMxMzYuNzA1LDIxMy4zNTcsMTIwLjI2NiwyMjkuNzk2LDEwMC4wNTksMjI5Ljc5NnoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTI1Niw0My43MjljLTQ5LjA5NiwwLTg5LjAzOCwzOS45NDItODkuMDM4LDg5LjAzOGMwLDQ5LjA5NiwzOS45NDIsODkuMDM4LDg5LjAzOCw4OS4wMzhzODkuMDM4LTM5Ljk0Miw4OS4wMzgtODkuMDM4DQoJCQlDMzQ1LjAzOCw4My42NzIsMzA1LjA5Niw0My43MjksMjU2LDQzLjcyOXogTTI1NiwxOTEuODA1Yy0zMi41NTQsMC01OS4wMzgtMjYuNDg0LTU5LjAzOC01OS4wMzgNCgkJCWMwLTMyLjU1MywyNi40ODQtNTkuMDM4LDU5LjAzOC01OS4wMzhzNTkuMDM4LDI2LjQ4NCw1OS4wMzgsNTkuMDM4QzMxNS4wMzgsMTY1LjMyMSwyODguNTU0LDE5MS44MDUsMjU2LDE5MS44MDV6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00MTEuOTQsMTI2LjUwNGMtMzYuNzQ4LDAtNjYuNjQ2LDI5Ljg5Ny02Ni42NDYsNjYuNjQ2YzAuMDAxLDM2Ljc0OSwyOS44OTgsNjYuNjQ2LDY2LjY0Niw2Ni42NDYNCgkJCWMzNi43NDksMCw2Ni42NDYtMjkuODk3LDY2LjY0Ni02Ni42NDZDNDc4LjU4NiwxNTYuNDAxLDQ0OC42ODksMTI2LjUwNCw0MTEuOTQsMTI2LjUwNHogTTQxMS45NCwyMjkuNzk2DQoJCQljLTIwLjIwNiwwLTM2LjY0Ni0xNi40MzktMzYuNjQ2LTM2LjY0NmMwLjAwMS0yMC4yMDcsMTYuNDQtMzYuNjQ2LDM2LjY0Ni0zNi42NDZjMjAuMjA3LDAsMzYuNjQ2LDE2LjQzOSwzNi42NDYsMzYuNjQ2DQoJCQlDNDQ4LjU4NiwyMTMuMzU3LDQzMi4xNDcsMjI5Ljc5Niw0MTEuOTQsMjI5Ljc5NnoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==");
	
}

.scroll-view-item:last-child{
  margin-right: 0;
}
.scroll-view-item .scrollCard{
	/* padding: 10upx; */
  width: 100%;
  height: 100%;
  border-radius: 15upx;
  line-height: 90%;
}
.title_level1{
	margin: 5upx;
	font-size: 26rpx;
}
.title_level2{
  /* font-size: 24rpx; */
  color: #fbf9ff;
  height: 1.5em;
}

.resDet .resRemarkContent {
	
	border-radius: 30upx;
	
	background-color: #fcfcfc;
	box-shadow: 2upx 5upx 10upx #e5e5e5;
	/* margin: 30upx; */
	padding-left: 10%;
	padding-right: 10%;
	padding-top: 15upx;
	padding-bottom: 10upx;
	margin-bottom: 40upx;
	/* height: 90upx; */
	min-height: 200upx;
}

</style>
