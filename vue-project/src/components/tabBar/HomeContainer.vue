<template>
  <mt-swipe :auto="4000">
    <mt-swipe-item>1</mt-swipe-item>
    <mt-swipe-item>2</mt-swipe-item>
    <mt-swipe-item>3</mt-swipe-item>
  </mt-swipe>
</template>

<script>
export default {
	data: () => ({
		
	}),
	methods: {
		getSwipe () {
			this.$http.get('http://47.89.21.179:8080/api/getlunbo')
			.then(result => {
				console.log(result.body);
			})
		}
	},
	created () {
		this.getSwipe()
	}
}
</script>

<style lang="scss" scoped>
.mint-swipe{
	height: 200px;
	.mint-swipe-item{
		&:nth-child(1){
			background-color: #f00;
		}
		&:nth-child(2){
			background-color: #0f0;
		}
		&:nth-child(3){
			background-color: #f0f;
		}
	}
}
</style>