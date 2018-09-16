<template>
    <div>
        <div class="photoInfo-container">
            <h3 class="title">{{ photoInfoList.title }}</h3>
            <p class="subtitle">
                <span>发表时间: {{ photoInfoList.add_time | dateFormat }}</span>
                <span>点击次数: {{ photoInfoList.click }}次</span>
            </p>
            <hr>

            <vue-preview :slides="slide1"></vue-preview>

            <div class="content" v-html="photoInfoList.content"></div>
            <comment :id="id"></comment>
        </div>
    </div>
</template>

<script>
  import {Toast} from 'mint-ui'
  import comment from '../subcomponents/comment.vue'

  export default {
    data() {
      return {
        id: this.$route.params.id,
        photoInfoList: [],
        preViewList: [], // 图片资源无效 使用slide1
        slide1: [
          {
            src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
            msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
            alt: 'picture1',
            title: 'Image Caption 1',
            w: 600,
            h: 400
          },
          {
            src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
            msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
            alt: 'picture2',
            title: 'Image Caption 2',
            w: 1200,
            h: 900
          }
        ]
      }
    },
    methods: {
      getPhotoInfoById() {
        this.$http.get(`api/getimageInfo/${this.id}`)
          .then(result => {
            if (result.body.status === 0) {
              this.photoInfoList = result.body.message[0]
            } else {
              Toast('加载数据失败')
            }
          })
      },
      getPreViewList() {
        this.$http.get(`api/getthumimages/${this.id}`)
          .then(result => {
            if (result.body.status === 0) {
              let size = {w: 1200, h: 900}
              this.preViewList = result.body.message.map(item => Object.assign(item, size))
            } else {
              Toast('加载数据失败')
            }
          })
      }
    },
    created() {
      this.getPhotoInfoById()
      this.getPreViewList()
    },
    components: {
      comment
    }
  }
</script>

<style lang="scss">
    .photoInfo-container {
        padding: 3px;
        .title {
            font-size: 15px;
            text-align: center;
            margin: 15px 0;
            color: #26a2ff;
        }
        .subtitle {
            font-size: 13px;
            display: flex;
            justify-content: space-between;
        }
        .content {
            font-size: 13px;
            line-height: 30px;
        }
        .my-gallery{
            figure{
                display: inline-block;
                margin: 10px;
                box-shadow: 0 0 9px #999;
            }
            img{
                vertical-align: top;
                width: 100px;
                height: 100px;
            }
        }
    }
</style>