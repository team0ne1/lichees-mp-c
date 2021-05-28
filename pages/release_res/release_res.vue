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
					<input type="text" :value="resTitle"/>
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
				<view class="resInput">
					<picker mode="time" :value="resSTimeText" @change="getresSTime">
						<view class="">
							{{resSTimeText}}
						</view>
					</picker>
				</view>	
				<view class="resInput">
					<picker mode="time" :value="resETimeText" @change="getresSTime">
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
					<view class="">
						点击选择集合地点
					</view>
				</view>				
			</view>
			<view class="divider"/>
			<view class="resLocaDet resLayout">
				<view class="resHelper">
					详细地址
				</view>
				<view class="resInput">
					<input type="text" placeholder=" eg: 南体羽毛球C3场"/>
				</view>				
			</view>
			<view class="divider"/>
			<view class="resRemark resLayout">
				<view class="resHelper">
					备注
				</view>
				<view class="resInput">
	
					<textarea type="text"/>
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
					<input type="text"/>
				</view>				
			</view>
			<view class="divider"/>
			<view class="resTitle resLayout">
				<view class="resHelper">
					手机
				</view>
				<view class="resInput">
					<input type="text"/>
				</view>				
			</view>
			<view class="divider"/>
			<view class="resTitle resLayout">
				<view class="resHelper">
					微信号
				</view>
				<view class="resInput">
					<input type="text"/>
				</view>				
			</view>
		</view>	
		<view class="resBtnGroup">
			<view class="resBtn1">
				<view class="resBtnText">
					保存
				</view>					
			</view>
			<view class="resBtn2">
				<view class="resBtnText" @click="comfireBtn">
					发布
				</view>				
			</view>

		</view>
		<t-dialog :dialog-show="dialogShow" @changeCancel="dialogCancel" @changeconfirm="confirm"></t-dialog>
	</view>

</template>

<script>
import tDialog from '../../components/t-dialog.vue'
export default {
	name:'releaseRes',
	components:{
		tDialog
	},
	data() {
		return {
			resTitle:'',
			// resDate:'',
			resDateText:'2021-06-01',
			// resTime:'',
			resSTimeText:'08:00',
			resETimeText:'09:00',
			resSTime:'',
			resETime:'',
			resLoca:'',
			resLocaDet:'',
			resRemark:'',
			dialogShow:false
		}
	},
	computed: {

	},
	methods: {
		getResDate: function(e){
			console.log(e.target.value)

		},
		getresSTime: function(e){
			console.log(e.target.value)
			
		},
		getresETime: function(e){
			console.log(e.target.value)
		},
		comfireBtn: function(){
			let date = this.dateHelper(this.resDateText)
			let startTime = this.timeHelper(this.resSTimeText)
			let endTime = this.timeHelper(this.resETimeText)
			// console.log(date)
			// console.log(startTime)
			// console.log(endTime)
			this.resSTime = new Date (date.year,date.month,date.day,startTime.hour,startTime.minute)
			this.resETime = new Date (date.year,date.month,date.day,endTime.hour,endTime.minute)
			console.log(this.resSTime)
			console.log(this.resETime)
			this.dialogShow = true
			
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
	border-left: 10upx solid #d54ebf;
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
	width: 20%;
}

.divider{
	width: 100%;
	border-bottom: 1upx solid #eae9ee; 
	margin-top: 5upx; 
	margin-bottom: 5upx;
}

.releaseRes .resBtnGroup{
	
	
	margin: 15upx 20upx;
	margin-top: 100upx;
	
	display: flex;
	align-content: center;
	justify-content: center;
	
}

.releaseRes .resBtnGroup .resBtn1 {
	background-color: #797979;
	margin-left: 10upx;
	margin-right: 10upx;
	padding: 10upx 20upx;
	border-radius: 10upx;
}

.releaseRes .resBtnGroup .resBtn2 {
	
	background-color: #0091ff;
	margin-left: 10upx;
	margin-right: 10upx;
	padding: 10upx 20upx;
	border-radius: 10upx;
}

.releaseRes .resBtnGroup .resBtnText{
	color: #FFF;
	font-size: 1.2em;
	align-self: center;
	
}
	
</style>
