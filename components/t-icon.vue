<template>
	<view style="width: 100%; height: 100%;">
		<image :src="imgSrc" ></image>
	</view>
</template>

<script>
	export default {
		name:"t-icon",
		props:['imgSrc','size'],
		data() {
			return {
				width:this.size,
				height:this.size,
			};
		}
	}
</script>
<style lang="scss" scoped>
	image{
		// width: 20rpx;
		// height: 20rpx;
		width: 100%;
		height: 100%;
		
	}
	image path{
		fill: blue;
	}

</style>


