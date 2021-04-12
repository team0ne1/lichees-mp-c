
<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			uni.hideTabBar()//隐藏原生tabbar
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	page {
			background-color: #F2F1F6;
		}
</style>
