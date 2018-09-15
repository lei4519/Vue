<template>
  <div class="cmt-container">
  	<h3>发表评论</h3>
	<hr>
	<textarea placeholder="请输入要BB的内容(最多吐槽120字)" maxlength="120" v-model="comment"></textarea>
	<mt-button type="primary" size="large" @click="commitComment">发表评论</mt-button>

	<div class="cmt-list">
		<div class="cmt-item" v-for="(item, i) in commentsList" :key="i">
			<div class="cmt-title">
				第{{ i + 1 }}楼&nbsp;&nbsp;{{ item.user_name }}&nbsp;&nbsp;发表时间: {{ item.add_time | dateFormat }}
			</div>
			<div class="cmt-body">
				{{ item.content }}
			</div>
		</div>
	</div>

	<mt-button type="danger" size="large" plain>加载更多</mt-button>
  </div>
</template>

<script>
export default {
	props: ['id'],
	data: () => ({
		comment: '',
		commentsList: []
	}),
	methods: {
		getCommentsList() {
			this.$http.get(`api/getcomments/${this.id}?pageindex=1`)
			.then(result => {
				if (result.body.status === 0) {
					this.commentsList = result.body.message
				}
			})
		},
		commitComment() {
			this.$http.post(`api/getcomments/${this.id}`)
			.then(result => {
				if (result.body.status === 0) {
				}
			})
		}
	},
	created() {
		this.getCommentsList()
	}
}
</script>

<style lang="scss" scoped>
.cmt-container{
	h3{
		font-size: 18px;
	}
	textarea{
		font-size: 14px;
		height: 85px;
		margin-bottom: 0;
	}
	.cmt-list{
		margin: 5px 0;
		.cmt-item{
			font-size: 13px;
			.cmt-title{
				line-height: 30px;
				background-color: #ccc;
			}
			.cmt-body{
				line-height: 35px;
				text-indent: 2em;
			}
		}
	}

}
</style>