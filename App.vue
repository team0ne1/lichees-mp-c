
<script>
	import cloud1 from 'helper/cloudbase.js'
	export default {
		onLaunch: async function() {
			console.log('App Launch')
			uni.hideTabBar()//隐藏原生tabbar
			cloud1.initCloud()
			const that = this;
			// 获取系统信息
			const systemInfo = wx.getSystemInfoSync();
			// 胶囊按钮位置信息
			const menuButtonInfo = wx.getMenuButtonBoundingClientRect();
			// 导航栏高度 = 状态栏到胶囊的间距（胶囊距上距离-状态栏高度） * 2 + 胶囊高度 + 状态栏高度
			that.globalData.navBarHeight = (menuButtonInfo.top - systemInfo.statusBarHeight) * 2 + menuButtonInfo.height + systemInfo.statusBarHeight;
			that.globalData.menuRight = systemInfo.screenWidth - menuButtonInfo.right;
			that.globalData.menuBotton = menuButtonInfo.top - systemInfo.statusBarHeight;
			that.globalData.menuHeight = menuButtonInfo.height;
			that.globalData.statusBarHeight = systemInfo.statusBarHeight; 
			
			try {
			    this.ownerOpenid = uni.getStorageSync('openid');
				this.ownerUserInfo = uni.getStorageSync('userInfo');
			    if (this.ownerOpenid && this.ownerUserInfo) {
			        console.log(this.ownerOpenid);
					console.log('openid and userinfo existed')
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

									} catch (e) {
									    console.log(e)
									}
								}
								else if (resData.code == '-101'){
									that.ownerOpenid = resData.openid
									uni.setStorageSync('openid', that.ownerOpenid);
									console.log('user never login')

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
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		data(){
			return {
				ownerOpenid:'',
				ownerUserInfo:''
			}
		},
		globalData:{
			navBarHeight: 0, // 导航栏高度
			menuRight: 0, // 胶囊距右方间距（方保持左、右间距一致）
			menuBotton: 0, // 胶囊距底部间距（保持底部间距一致）
			menuHeight: 0, // 胶囊高度（自定义内容可与胶囊高度保证一致）
			statusBarHeight:0

		}
	}
</script>

<style>
	/*每个页面公共css */
	page {
			background-color: #F2F1F6;
		}
</style>
