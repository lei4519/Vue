<template>
  <div class="newsinfo-container">
	<h3 class="title" v-text="newsInfo.title"></h3>
	<p class="subtitle">
	  <span>发表时间: {{ newsInfo.add_time | dateFormat }}</span>
	  <span>点击次数: {{ newsInfo.click }}次</span>
	</p>
	<hr>
	<div class="content" v-html="newsInfo.content"></div>
	<comment :id="id"></comment>
  </div>
</template>

<script>
import comment from '../subcomponents/comment.vue'
import { Toast } from 'mint-ui'
export default {
	data() {
		return {
			id: this.$route.params.id,
			newsInfo: {}
		}
	},
	methods: {
		getNewsInfoById () {
			this.$http.get(`api/getnew/${ this.id }`)
			.then(result => {
				if (result.body.status === 0) {
					this.newsInfo = result.body.message[0]
				} else {
					Toast('加载数据失败')
				}
			})
		}
	},
	created () {
		this.getNewsInfoById()
	},
	components: {
		comment
	}
}
</script>

<style lang="scss">
.newsinfo-container{
	padding: 0 4px;
	
	.title{
		font-size: 16px;
		text-align: center;
		margin: 15px 0;
		color: red;
	}
	.subtitle{
		font-size: 13px;
		color: #26a2ff;
		display: flex;
		justify-content: space-between;
	}
	.content{
		img{
			height: 100%;
			width: 100%;
		}
	}
}
</style>