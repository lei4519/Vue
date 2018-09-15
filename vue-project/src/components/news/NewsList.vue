<template>
  <div>
  	<ul class="mui-table-view">
		<li class="mui-table-view-cell mui-media" v-for="(item, i) in newsList" :key="item.id">
			<router-link :to="`/home/newsinfo/${item.id}`">
				<img class="mui-media-object mui-pull-left" :src="`/src/img/1 (${i+1}).jpg`" height="280" width="280">
				<div class="mui-media-body">
					<h1>{{ item.title }}</h1>
					<p class="mui-ellipsis">
						<span>发表时间: {{ item.add_time | dateFormat }}</span>
						<span>点击: {{ item.click }}次</span>
					</p>
				</div>
			</router-link>
		</li>
	</ul>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
	data: () => ({
		newsList: []
	}),
	methods: {
		getNewsList() {
			this.$http.get('api/getnewslist')
			.then(result => {
				if (result.body.status === 0) {
					this.newsList = result.body.message
				}
			}, (err) => {
				Toast('加载数据失败')
			})
		}
	},
	created() {
		this.getNewsList()
	}
}
</script>

<style lang="scss" scoped>
.mui-table-view{
	.mui-media-body{
		h1{
			font-size: 14px;
		}
		.mui-ellipsis{
			font-size: 12px;
			color: #226aff;
			display: flex;
			justify-content: space-between;
		}
	}
}
</style>