<template>
	<view :style="'width:'+ width+';' + 'height:' + height+';'">
		<image class="image" :src="imgsrc" ></image>
	</view>
</template>

<script>
	export default {
		name:"t-icon",
		props:['imgsrc','size'],
		data() {
			return {
				width:this.size,
				height:this.size,
			};
		}
	}
</script>
<style lang="scss" scoped>
	.image{
		width: 100%;
		height: 100%;
	}


</style>


