<template>
	<view class="releasePage">
		<button @click="open">打开弹窗</button>


		<view class="inputblock">
			<view class="information_card">
				<uni-forms >
					<view class="activityname" style="display: flex; margin-bottom: 20upx; border-bottom: 2upx soild black;flex-direction: row;">
						<text class="uni-list-cell-left" >局子名：</text>
						<input type="text" class="inputer1" placeholder="请输入组局名称" style="flex-grow: 1; ">
					</view>
					<view class="initiator_name" style="display: flex; margin-bottom: 20upx;">
						<text class="uni-list-cell-left" >发起人：</text>
						<input type="text" class="inputer1" placeholder="请输入发起人姓名" style="flex-grow: 1;">		
					</view>
					    <view class="uni-list" >
					            <view class="uni-list-cell">
					                <view class="uni-list-cell-left">
					                    开始时间：
					                </view>
					                <view class="uni-list-cell-db">
										<view class="inputlist">
											<picker mode="time" :value="time" start="09:01" end="21:01" @change="bindTimeChange" style="flex-grow: 1;">
												<view>{{time}}</view>
											</picker>
										</view>
					                </view>
					            </view>
								<view class="uni-list-cell" style="display: flex;">
								    <view class="uni-list-cell-left" >
								        结束时间：
								    </view>
								    <view class="uni-list-cell-db" >
										<view class="inputlist" style="flex-grow: 1;">
											<picker mode="time" :value="time" start="09:01" end="21:01" @change="bindTimeChange2" style="flex-grow: 1;">
												<view>{{time2}}</view>
											</picker>
										</view>
								    </view>
								</view>
					        </view>
					    <view class="uni-list">
					            <view class="uni-list-cell">
					                <view class="uni-list-cell-left" >
					                    活动日期:
					                </view>
					                <view class="uni-list-cell-db">
										<view class="inputlist" style="flex-grow: 1;">
											<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
												<view>{{date}}</view> 
											</picker>
										</view>
					                </view>
					            </view>
					        </view>
						<view class="location">
							<view class="block1">
								<text class="uni-list-cell-left" >活动地点：</text>
								<uni-icons type="location-filled" size="18"  bindchange="locationtab" style="padding: 2upx;"></uni-icons>
								<input type="text" class="inputer1" disabled="true" placeholder="不能输入的区域" style="flex-grow: 1;">
							</view>
							<view>
								<input type="text" class="inputer1" placeholder="请输入详细活动地点" style="flex-grow: 1;">								
							</view>
						</view>
				</uni-forms>
			</view>
		</view>
		<view class="briefingcard">
			<scroll-view scroll-y="true" class="scroll-y">
				<view class="briefing">
					<textarea type="text" style="word-break: break-all; " placeholder="请详细描述活动内容" class="inputer2"></textarea>
				</view>
				<view class="filepicker">
				<uni-file-picker 
				    v-model="imageValue" 
				    fileMediatype="image":image-styles="imageStyles" 
				    mode="grid"
					file-extname="png,jpg"
					:limit="3"
				    @select="select" 
				    @progress="progress" 
				    @success="success" 
				    @fail="fail"
				/>
				</view>
			</scroll-view>
			
		</view>
		<view class="confirmbutton" @click="confirmRelease">
			<view style="padding: 20upx;text-align: center;align-content: center;font-size: 1.35em;">发起组局</view>
		</view>
<!-- 		<uni-popup ref="popup" type="dialog" :mask-click="false" style="backdrop-filter: blur(2px); z-index: 1000;">
			
			<view class="" style="height: 200rpx; width: 500rpx; background-color: #fff; border-radius: 15px; z-index: 2000;">

			</view>
		</uni-popup> -->
<!-- 		<uni-popup ref="popup" type="message">
			<uni-popup-message style="background-color: #007AFF;" type="success" message="成功消息" :duration="2000"></uni-popup-message>
		</uni-popup> -->
		<t-dialog :dialog-show="configuration.dialogShow" @changeCancel="cancel" @changeconfirm="confirm"></t-dialog>
	</view>
</template>

<script>
	import uniPop from '../../components/uni-popup/uni-popup.vue'
	import uniPopupDialog from '../../components/uni-popup/uni-popup-dialog.vue'
	import uniPopupMessage from '../../components/uni-popup/uni-popup-message.vue'
	import tDialog from '../../components/t-dialog.vue'
	export default {
		components:{
			uniPop,
			// uniPopupDialog,
			// uniPopupMessage,
			tDialog
		},
	    data() {
	        const currentDate = this.getDate({
	            format: true
	        })
			
	        return {
	            title: 'picker',
	            index: 0,
	            date: currentDate,
	            time: '12:00',
				time2:'12:00',
				imageValue:[],
				imageStyles:{
				    width:96,
				    height:96,
				    border:{
						color:"#e6e6e6",
						width:"2upx",
						style:'dashed',
						radius:'40upx'
				    },
				},
				configuration: {
					dialogShow: false,
					title: '标题',
					content: '内容区域'
				}
	        }
	    },
		
	    computed: {
	        startDate() {
	            return this.getDate('start');
	        },
	        endDate() {
	            return this.getDate('end');
	        }
	    },
	    methods: {
	        bindPickerChange: function(e) {
	            console.log('picker发送选择改变，携带值为', e.target.value)
	            this.index = e.target.value
	        },
	        bindDateChange: function(e) {
	            this.date = e.target.value
	        },
	        bindTimeChange: function(e) {
	            this.time = e.target.value
	        },
			bindTimeChange2: function(e) {
			    this.time2 = e.target.value
			},
			locationtab: function(){
				
			},
			select(e){
			    console.log('选择文件：',e)
			},
			            // 获取上传进度
			progress(e){
			    console.log('上传进度：',e)
			},
			
			            // 上传成功
			success(e){
			    console.log('上传成功')
			},
			
			            // 上传失败
			fail(e){
			    console.log('上传失败：',e)
			},
	        getDate(type) {
	            const date = new Date();
				let year = date.getFullYear();
	            let month = date.getMonth() + 1;
	            let day = date.getDate();
				
				if (type === 'start') {
				    year = year - 60;
			    } else if (type === 'end') {
				    year = year + 2;
				    }
	
	            month = month > 9 ? month : '0' + month;;
	            day = day > 9 ? day : '0' + day;
	            return `${year}-${month}-${day}`;
	        },
			confirmRelease: function(){
				let storage_key =  uni.getStorageSync("storage_key")
				if(storage_key){
					console.log(storage_key)
				}
				else{
					console.log("no storage_key")
					this.open()
				}
			},
			open: function(){
				this.configuration.dialogShow = !this.configuration.dialogShow;
			}

	    }
	}
</script>

<style>
.releasePage{
	/* padding: 20upx; */
}
.inputblock{
	background-color: #FFFFFF;
	border-radius: 40upx 40upx 40upx 40upx;
	margin: 2%;
}
.information_card{

	padding: 6%;
}
.inputer1{
	letter-spacing: 2upx;
	font-size: 1em;
}
.inputer2{
	letter-spacing: 2upx;
	font-size: 1em;
	align-items: center;
	justify-content: center;
}
.block2{
	font-size: 1.0em;
	letter-spacing: 1upx;

}
.inputlist{
	letter-spacing: 2upx;
	font-size: 1em;
}
.uni-list-cell{
	display: flex;
	margin-bottom: 20upx;
	padding-bottom: 20upx;
	border-bottom: 1upx solid #c7c7c7;
	background-color: #ffffff;
}
.uni-list-cell-db{
	flex-grow: 1;
	margin-left: 50upx;
}
.uni-list-cell-left{
	color: #5b5b5b;
	font-size: 1em;
	letter-spacing: 1upx;
}
.block1{
	display: flex;
}
.briefingcard{
	background-color: #FFFFFF;
	border-radius: 40upx 40upx 40upx 40upx;
	margin: 2%;

}
.briefing{
	padding: 6%;
}
.confirmbutton{
		height: 100upx;
		border-radius: 50upx;
		margin-top: 30upx;
		margin-left: 10%;
		margin-right: 10%;
		background-color: #1b97f5;
		color: #FFFFFF;
		
		letter-spacing: 2upx;
	}
.filepicker{
	display: flex;
	margin-bottom: 5%;
	align-items: center;
	justify-content: center;
}
</style>
