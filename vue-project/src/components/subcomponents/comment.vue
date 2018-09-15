<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要BB的内容(最多吐槽120字)" maxlength="120" v-model="comment"></textarea>
        <mt-button type="primary" size="large" @click="commitComment">发表评论</mt-button>

        <div class="cmt-list">
            <div class="cmt-item" v-for="(item, i) in commentsList" :key="i">
                <div class="cmt-title">
                    第{{ i + 1 }}楼&nbsp;&nbsp;{{item.user_name }}&nbsp;&nbsp;发表时间: {{ item.add_time | dateFormat }}
                </div>
                <div class="cmt-body">
                    {{ item.content === 'undefined' ? '此用户很懒,还没有评论' : item.content}}
                </div>
            </div>
        </div>

        <mt-button type="danger" size="large" plain @click="getCommentsList" v-show="flag">加载更多</mt-button>
        <p class="noMore" v-if="!flag">没有更多数据了</p>
    </div>
</template>

<script>
  import { Toast } from 'mint-ui'
  export default {
    props: ['id'],
    data: () => ({
      comment: '',
      commentsList: [],
      pageIndex: 0,
      flag: true
    }),
    methods: {
      getCommentsList() {
        this.pageIndex++
        this.$http.get(`api/getcomments/${this.id}?pageindex=${this.pageIndex}`)
          .then(result => {
            if (result.body.status === 0) {
              if (result.body.message) {
                this.commentsList = this.commentsList.concat(result.body.message)
              } else {
                this.flag = false
              }
            } else {
              Toast('加载评论数据失败')
            }
          })
      },
      commitComment() {
        if (!this.comment.trim()) return Toast('评论不能为空')

        this.$http.post(`api/postcomment/${this.id}`, { content: this.comment.trim() })
          .then(result => {
            if (result.body.status === 0) {
                let cmt = {
                  user_name: '匿名用户',
                  add_time: Date.now(),
                  content: this.comment.trim()
                }
                this.commentsList.unshift(cmt)
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
    .cmt-container {
        h3 {
            font-size: 18px;
        }
        textarea {
            font-size: 14px;
            height: 85px;
            margin-bottom: 0;
        }
        .cmt-list {
            margin: 5px 0;
            .cmt-item {
                font-size: 13px;
                .cmt-title {
                    line-height: 30px;
                    background-color: #ccc;
                }
                .cmt-body {
                    line-height: 35px;
                    text-indent: 2em;
                }
            }
        }
        .noMore{
            text-align: center;
            font-size: 16px;
            line-height: 30px;
            color: #ccc;
        }
    }
</style>