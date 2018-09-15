<template>
    <div>
        <div id="slider" class="mui-slider">
            <div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a @click="getPhotoListByCateId(item.id)" :class="['mui-control-item', item.id === 0 ? ' mui-active' : '']" href="javascrpt:;" v-for="item in imgCategory" :key="item.id">
                        {{ item.title }}
                    </a>
                </div>
            </div>
        </div>

        <ul>
            <li v-for="(item, i) in imgList" :key="item.id">
                <img v-lazy="`/src/img/1 (${i+1}).jpg`">
            </li>
        </ul>
    </div>
</template>

<script>
  import mui from '../../lib/mui/dist/js/mui.min.js'
  import { Toast } from 'mint-ui'

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
            if (result.body.status === 0){
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
    img[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
    }
</style>