<template>
	<view class="releaseRes">
		<view class="mainInfo">
			<view class="mainInfoTitle">
				局子信息
			</view>
			<view class="divider"/>
			<view class="resTitle resLayout">
				<view class="resHelper">
					标题
				</view>
				<view class="resInput">
					<input type="text" :value="resTitle" @input="resTitleInput" placeholder="请输入局子标题"/>
				</view>				
			</view>
			<view class="divider"/>
			<view class="resType resLayout">
				<view class="resHelper">
					类型
				</view>
				<view class="resInput">
					<uni-data-checkbox v-model="resTypeValue" :localdata="resTypeRange" @change="changeResType"></uni-data-checkbox>
				</view>				
			</view>
			<view class="divider"/>
			<view class="resTitle resLayout">
				<view class="resHelper">
					人数
				</view>
				<view class="resInput">
					<picker mode="selector" :value="resPersonNumArrIndex" :range="resPersonNumArr" @change="resPersonNumInput" >
						<view class="">
							{{resPersonNumArr[resPersonNumArrIndex]}}
						</view>
					</picker>
				</view>				
			</view>
			<view class="divider"/>
			<view class="resDate resLayout">
				<view class="resHelper">
					日期
				</view>
				<view class="resInput">
					<picker mode="date" :value="resDateText" @change="getResDate" start="2021-01-01" end="2025-01-01">
						<view class="">
							{{resDateText}}
						</view>
					</picker>
				</view>				
			</view>
			<view class="divider"/>
			<view class="resTime resLayout">
				<view class="resHelper">
					时间 
				</view>
				<view style="color: #797979;margin-right: 20upx;">
					开始
				</view>
				<view class="resInput">
					<picker mode="time" :value="resSTimeText" @change="getresSTime">
						<view class="">
							{{resSTimeText}}
						</view>
					</picker>
				</view>	
				<view style="color: #797979;margin-right: 20upx;">
					结束
				</view>
				<view class="resInput">
					<picker mode="time" :value="resETimeText" :start="resSTimeText" @change="getresETime">
						<view class="">
							{{resETimeText}}
						</view>
					</picker>
				</view>	
			</view>
			<view class="divider"/>
			<view class="resLoca resLayout">
				<view class="resHelper">
					地址
				</view>
				<view class="resInput">
					<view class="" @click="chooseLoca">
						<view v-if="!hasLoca">
							点击选择集合地点
						</view>
						<view else>
							{{resLocaName}}
						</view>
					</view>
				</view>				
			</view>
			<view class="divider"/>
			<view class="resLocaDet resLayout">
				<view class="resHelper">
					详细地址
				</view>
				<view class="resInput">
					<input type="text" :value="resLocaDet" @input="resLocaDetInput" placeholder=" eg: 南体羽毛球C3场(可选)"/>
				</view>				
			</view>
			<view class="divider"/>
			<view class="resDate resLayout">
				<view class="resHelper">
					截止加入
				</view>
				<view class="resInput">
					<picker mode="date" :value="joinDeadLineText" @change="getJoinDeadLine" start="2021-01-01" :end="resSTimeText">
						<view class="">
							{{joinDeadLineText}}
						</view>
					</picker>
				</view>				
			</view>
			<view class="divider"/>
			<view class="resRemark resLayout">
				<view class="resHelper" style="align-self:baseline">
					备注
				</view>
				<view class="resInput">
	
					<textarea type="text" :value="resRemark" @input="resRemarkInput" placeholder="(可选) 不超过300字"/>
				</view>				
			</view>
		</view>
		<view class="personInfo mainInfo">
			<view class="mainInfoTitle">
				发起人信息
			</view>
			<view class="divider"/>
			<view class="resTitle resLayout">
				<view class="resHelper">
					姓名
				</view>
				<view class="resInput">
					<input type="text" :value="userProfile.realName" @input="realNameInput" placeholder="请输入您的姓名"/>
				</view>				
			</view>
			<view class="divider"/>
			<view class="resTitle resLayout">
				<view class="resHelper">
					手机
				</view>
				<view class="resInput">
					<input type="number" :value="userProfile.phoneNum" @input="phoneNumInput" placeholder="请输入您的手机号码"/>
				</view>				
			</view>
			<view class="divider"/>
			<view class="resTitle resLayout">
				<view class="resHelper">
					微信号
				</view>
				<view class="resInput">
					<input type="text" :value="userProfile.wxid" @input="wxidInput" placeholder="请输入您的微信号"/>
				</view>				
			</view>
		</view>	
		<view class="resBtnGroup">
			<view class="resBtn2">
				<view class="resBtnText" @click="comfireBtn">
					发布
				</view>				
			</view>
			<view class="resBtn1">
				<view class="resBtnText" @click="saveRes">
					保存
				</view>					
			</view>


		</view>
		<t-dialog dialogTitle="请求授权" dialogContent="您尚未登陆, 授权登陆以获得发布功能" :dialog-show="dialogShow" @changeCancel="dialogCancel" @changeconfirm="confirmLogin"></t-dialog>
	</view>

</template>

<script>
import cloud1 from '../../helper/cloudbase.js'
import tDialog from '../../components/t-dialog.vue'
// import uniDataCheckbox from '../../components/uni-data-checkbox/uni-data-checkbox.vue'
const chooseLocation = requirePlugin('chooseLocation');

export default {
	name:'releaseRes',
	components:{
		tDialog,
		// uniDataCheckbox
	},
	data() {
		return {
			resTitle:'',
			resTypeValue: 0,
			resTypeRange: [{"value": 0,"text": "学习","apiPath":"/learning"},{"value": 1,"text": "运动","apiPath":"/sport"},{"value": 2,"text": "玩乐","apiPath":"/amuse"}],
			resPersonNum:2,
			resPersonNumArrIndex:0,
			resPersonNumArr:[2,3,4,5,6,7,8,9,10,11,12],
			// resDate:'',
			resDateText:'2021-06-01',
			// resTime:'',
			resSTimeText:'08:00',
			resETimeText:'10:00',
			joinDeadLineText:'2021-05-31',
			resSTime:'',
			resETime:'',
			joinDeadLine:'',
			hasLoca:false,
			resLoca:{},
			resLocaName:'',
			resLocaDet:'',
			resRemark:'',
			userProfile:{
				realName:'',
				phoneNum:'',
				wxid:'',
				avatar:''
			},
			ownerUserInfo:'',
			ownerOpenid:'',
			dialogShow:false
		}
	},
	onShow: function() {
		this.dialogShow = false
		var pages = getCurrentPages() // 获取栈实例
		// console.log(pages) // 打印如下
		var page = pages[pages.length - 1] // 获取当前页面的数据，包含页面路由
		// console.log(page) // 打印如下
		
		const location = chooseLocation.getLocation();
		// console.log(location)
		if(location){
			page.$vm.chooseLocation(location)

		}

	},
	computed: {

	},
	methods: {
		resTitleInput: function(e){
			this.resTitle = e.detail.value
		},
		changeResType: function(e){
			console.log(e.detail.value)
		},
		resPersonNumInput: function(e){
			this.resPersonNumArrIndex = e.target.value
			this.resPersonNum = this.resPersonNumArr[this.resPersonNumArrIndex]
			// console.log(this.resPersonNum)
		},
		resLocaDetInput: function(e){
			this.resLocaDet = e.detail.value
		},
		resRemarkInput: function(e){
			this.resRemark = e.detail.value
		},
		realNameInput: function(e){
			this.userProfile.realName = e.detail.value
		},
		phoneNumInput: function(e){
			this.userProfile.phoneNum = e.detail.value
		},
		wxidInput: function(e){
			this.userProfile.wxid = e.detail.value
		},
		getResDate: function(e){
			console.log(e.target.value)
			this.resDateText = e.target.value
		},
		getresSTime: function(e){
			this.resSTimeText = e.target.value
			console.log(e.target.value)
			
		},
		getresETime: function(e){
			this.resETimeText = e.target.value
			console.log(e.target.value)
		},
		getJoinDeadLine: function(e){
			this.joinDeadLineText = e.target.value
			console.log(e.target.value)
		},
		chooseLoca: function(){
			const key = 'L6WBZ-SLZRO-RPOWQ-S4VCD-XB2MJ-4CB2O'; //使用在腾讯位置服务申请的key
			const referer = 'lichees-mp'; //调用插件的app的名称
			const location = JSON.stringify({
				latitude: 22.532742,
				longitude: 113.936699
			});
			const category = '生活服务,娱乐休闲';
			
			wx.navigateTo({
			  url: `plugin://chooseLocation/index?key=${key}&referer=${referer}&location=${location}&category=${category}`
			});

		},
		saveRes: function(){
			console.log(this.resLocaName)
		},
		sendPost: function(){
			let postData = {
				"openid":this.ownerOpenid,
				
				detail:{
					"loca_geo":this.resLoca,
					"loca_text":this.resLocaName + this.resLocaDet,
					"owner":{
						"openid":this.ownerOpenid,
						"name":this.userProfile.realName,
						"nickName":this.userProfile.realName,
						"phone_number":this.userProfile.phoneNum,
						"wxid":this.userProfile.wxid,
						"avatar": 'cloud://cloud1-0gcmjje1d9bf828c.636c-cloud1-0gcmjje1d9bf828c-1305469619/avatar/avatar.jpg'
						
					},
					"members":[],
					"person_num":this.resPersonNum,
					"remarks": this.resRemark
					
				},
				brief:{
					"title":this.resTitle,
					"loca_text":this.resLocaName + ' ' +this.resLocaDet,
					"res_starttime":this.resSTime.toISOString(),
					"res_endtime":this.resETime.toISOString(),
					"person_num":this.resPersonNum,
					"joined_num":1,
					"join_deadline":this.joinDeadLine.toISOString()
					
				}
				
			}
			
			try{
				let userInfo = uni.getStorageSync('userInfo')
				if (userInfo){
					postData.detail.owner.avatar = userInfo.avatarUrl
					postData.detail.owner.nickName = userInfo.nickName
				}
				console.log(postData)
				this.postNewData(this.resTypeRange[this.resTypeValue].apiPath, postData)
				.then((res) => {
					console.log(res)
					if(res.data.code === '501'){
						uni.showToast({
						    title: '发布成功',
						    duration: 2000,
							position:'bottom',
							icon:'none'
						});
						setTimeout(function(){
							
							uni.navigateTo({
								url: '/pages/home/home'
							})						
						},2000)
							
				
				
					}
					else{
						uni.showToast({
							title: '发布失败',
							duration: 2000,
							position:'bottom',
							icon:'none'
						});	
					}
				})
			}catch(e){
				console.log(e)
				console.log(postData)
				this.postNewData(this.resTypeRange[this.resTypeValue].apiPath, postData)
				.then((res) => {
					console.log(res)
					if(res.data.code === '501'){
						uni.showToast({
						    title: '发布成功',
						    duration: 2000,
							position:'bottom',
							icon:'none'
						});
						setTimeout(function(){
							
							uni.navigateTo({
								url: '/pages/home/home'
							})						
						},2000)
							
				
				
					}
					else{
						uni.showToast({
							title: '发布失败',
							duration: 2000,
							position:'bottom',
							icon:'none'
						});	
					}
				})
			}


		},
		postNewData: function(path,newData){
			return new Promise((resolve,reject) => {
				cloud1.postCloud(path,newData)
				.then((res) => {
					resolve(res)
				})
				.catch((err) => {
					reject(err)
				})
			})
		
		},
		comfireBtn: function(){
			let date = this.dateHelper(this.resDateText)
			let date2 = this.dateHelper(this.joinDeadLineText)
			let startTime = this.timeHelper(this.resSTimeText)
			let endTime = this.timeHelper(this.resETimeText)
			// console.log(date)
			// console.log(startTime)
			// console.log(endTime)
			this.resSTime = new Date (date.year,date.month-1,date.day,startTime.hour,startTime.minute)
			this.resETime = new Date (date.year,date.month-1,date.day,endTime.hour,endTime.minute)
			this.joinDeadLine = new Date (date2.year,date2.month-1,date2.day)
			console.log(this.resSTime)
			console.log(this.resETime)
			console.log(this.joinDeadLine)

			let errMsgCheck = this.checkFormData()
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
			uni.showLoading({
			    title: '加载中'
			});
			
			try {
			    this.ownerOpenid = uni.getStorageSync('openid');
				this.ownerUserInfo = uni.getStorageSync('userInfo');
			    if (this.ownerOpenid && this.ownerUserInfo) {
			        console.log(this.ownerOpenid);
					uni.hideLoading();
					this.sendPost()
			    }
				else{
					let that = this
					wx.login({
						success:function(codeRes) {
							console.log('/wxuser/code/'+codeRes.code)
							cloud1.getCloud('/wxuser/code/'+codeRes.code)
							.then((res)=>{
								console.log(res.data)
								const resData = res.data
								if(resData.code == '101'){
									that.ownerUserInfo = resData.userInfo
									that.ownerOpenid = resData.openid
									
									try {
									    uni.setStorageSync('userInfo', that.ownerUserInfo);
										uni.setStorageSync('openid', that.ownerOpenid);
										console.log('saved userInfo openid in localStorage');
										that.sendPost()
										uni.hideLoading();
									} catch (e) {
									    console.log(e)
									}
								}
								else if (resData.code == '-101'){
									that.ownerOpenid = resData.openid
									uni.setStorageSync('openid', that.ownerOpenid);
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

		
		dialogCancel: function(){
			this.dialogShow = false
		},
		dateHelper: function(dateText){
			let dateArr = dateText.split('-')
			let year = dateArr[0] - 0
			let month = dateArr[1] - 0
			let day = dateArr[2] - 0
			let res = {
				year:year,
				month:month,
				day:day
			}
			return res
		},
		timeHelper: function(timeText){
			let timeArr = timeText.split(':')
			let hour = timeArr[0] - 0
			let minute = timeArr[1] - 0
			let res = {
				hour:hour,
				minute:minute
			}
			return res
		},
		checkFormData: function(){
			let mustInfo = [this.resTitle,this.hasLoca,this.userProfile.realName,this.userProfile.phoneNum,this.userProfile.wxid]
			console.log(mustInfo)
			let regNum = /^[0-9]+.?[0-9]*$/
			let regPhoneNum = /^1[3-9]\d{9}$/
			function trim(s){
			    return s.replace(/\s+/g, "");
			}
			let errMsg = ''
			// for(var i=0; i<mustInfo.length; i++) {
				// if(mustInfo[i]) {
				// 	continue
				// }
				// else{
					
				// switch(i){
					// case 0:
						if(regNum.test(trim(mustInfo[0]))) {errMsg = '局子标题不可为纯数字'; return errMsg} 
						if(trim(mustInfo[0]) === '') {errMsg = '局子标题不可为空'; return errMsg}
						// errMsg = '请输入局子标题'
						// break;
					// case 1:
						if(!mustInfo[1]){errMsg = '请选择集合地点'; return errMsg}
						
						// break;
					// case 2:
						if(trim(mustInfo[2]) === '') {errMsg = '请输入姓名'; return errMsg}
						
						// break;
					// case 3:
						if(trim(mustInfo[3]) === '') {errMsg = '请输入手机号码'; return errMsg}
						if(!(regPhoneNum.test(mustInfo[3]))){ errMsg = '手机号码格式错误'; return errMsg}
						
						// break;
					// case 4:
						
						if(trim(mustInfo[4]) === '') {errMsg = '请输入微信号'; return errMsg}
						// break;

				// }

					
				// }
			// }
			return errMsg
			// return 'passed'
		},
		confirmLogin: function(e){
			this.dialogShow = false
			wx.getUserProfile({
				// lang:'zh_CN',
				desc:'用于发布信息',
				success:(res) => {
					console.log(res)
					// console.log(res.userInfo.avatarUrl)
					this.ownerUserInfo = res.rawData
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
									console.log('登陆成功，请再次点击发布')
									uni.showToast({
									    title: '登陆成功，请再次点击发布',
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
		chooseLocation: function(loca){
			console.log(loca)
			this.resLoca = {
			  "type": "Point",
			  "coordinates": [loca.longitude, loca.latitude] // 数字数组：[经度, 纬度]
			}
			this.resLocaName = loca.name
			this.hasLoca = true
		}
	}

}
	
</script>

<style>
.releaseRes{
	
}	

.releaseRes .mainInfo {
	background-color: #FFFFFF;

	border-radius: 30upx;
	margin: 15upx 20upx;
	padding-top: 15upx;
	padding-bottom: 15upx;
	
}



.releaseRes .mainInfo .mainInfoTitle{
	border-left: 10upx solid #1B97F5;
	margin: 3% 5%;
	padding-left: 20upx;
}

.releaseRes .personInfo .mainInfoTitle {
	border-left: 10upx solid #dd1698;
}

.releaseRes .mainInfo .resLayout{
	padding: 3% 5%;
	display: flex;
	flex-wrap: nowrap;
	white-space: nowrap;
}

.releaseRes .mainInfo .resInput{
	flex-grow: 1;
}

.releaseRes .mainInfo .resHelper {
	color: #5B5B5B;
	/* margin-right: 30upx; */
	width: 25%;
	align-self:center;
}
.radio{
	color: #1B97F5;
}

.divider{
	width: 100%;
	border-bottom: 1upx solid #eae9ee; 
	margin-top: 5upx; 
	margin-bottom: 5upx;
}

.releaseRes .resBtnGroup{
	
	
	/* margin: 15upx 20upx; */
	margin-left: 5%;
	margin-right: 5%;
	margin-top: 50upx;
	/* margin-bottom: 200upx; */
	
	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: center;
	
}

.releaseRes .resBtnGroup .resBtn1 {
	background-color: #797979;
	margin-left: 20upx;
	margin-right: 20upx;
	margin-bottom: 280upx;
	padding: 10upx 20upx;
	border-radius: 10upx;
	text-align: center;
}

.releaseRes .resBtnGroup .resBtn2 {
	
	background-color: #0091ff;
	margin-left: 20upx;
	margin-right: 20upx;
	margin-bottom: 20upx;
	padding: 10upx 20upx;
	border-radius: 10upx;
	text-align: center;
}

.releaseRes .resBtnGroup .resBtnText{
	color: #FFF;
	font-size: 1.2em;
	align-self: center;
	
}


</style>
