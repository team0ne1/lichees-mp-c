<template>
	<view class="input">
		<view>
			<input type='text'  placeholder="City"  :value="value" @input="handleInput($event)"/>
		</view>
		
		<view>
			<text>{{value}}</text>
		</view>
		
	
	 </view>
</template>

<script>
	export default {
		name:"c-input",
		props:{
			value:{
				type: String,
				default : ''
			}
		},
		methods:{

			handleInput: function(event){
				this.$emit('input',event.target.value)
			},

		}
		
	}
</script>

