<template>
    <div>
        <div id="slider" class="mui-slider">
            <div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a @click="getPhotoListByCateId(item.id)"
                       :class="['mui-control-item', item.id === 0 ? ' mui-active' : '']" href="javascrpt:;"
                       v-for="item in imgCategory" :key="item.id">
                        {{ item.title }}
                    </a>
                </div>
            </div>
        </div>

        <ul class="photo-list">
            <router-link tag="li" v-for="(item, i) in imgList" :key="item.id" :to="`/home/shareinfo/${item.id}`">
                <img v-lazy="`/src/img/1 (${i+1}).jpg`">
                <div class="info">
                    <h1 class="info-title">{{ item.title }}</h1>
                    <div class="info-body">{{ item.zhaiyao }}</div>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
  import mui from '../../lib/mui/dist/js/mui.min.js'
  import {Toast} from 'mint-ui'

  export default {
    data: () => ({
      imgCategory: [],
      imgList: []
    }),
    methods: {
      getImgCategory() {
        this.$http.get('api/getimgcategory')
          .then(result => {
            if (result.body.status === 0) {
              result.body.message.unshift({title: '全部', id: 0})
              this.imgCategory = result.body.message
            } else {
              Toast('加载数据失败')
            }
          })
      },
      getPhotoListByCateId(cateId) {
        this.$http.get(`api/getimages/${cateId}`)
          .then(result => {
            if (result.body.status === 0) {
              this.imgList = result.body.message
            } else {
              Toast('加载图片失败')
            }
          })
      }
    },
    created() {
      this.getImgCategory()
      this.getPhotoListByCateId(0)
    },
    mounted() {
      mui('.mui-scroll-wrapper').scroll()
    }
  }
</script>

<style lang="scss" scoped>
    * {
        touch-action: pan-y;
    }

    .photo-list {
        list-style: none;
        margin: 0;
        padding: 10px;
        li {
            background-color: #ccc;
            text-align: center;
            margin-bottom: 10px;
            box-shadow: 0 0 9px #999;
            position: relative;
            img {
                height: 100%;
                width: 100%;
                vertical-align: top;
            }
            img[lazy=loading] {
                width: 40px;
                height: 300px;
                margin: auto;
            }
            .info {
                padding: 5px;
                text-align: left;
                position: absolute;
                bottom: 0;
                color: #fff;
                background-color: rgba(0, 0, 0, 0.4);
                max-height: 90px;
                .info-title {
                    font-size: 14px;
                }
                .info-body {
                    font-size: 13px;
                }
            }
        }
    }
</style>