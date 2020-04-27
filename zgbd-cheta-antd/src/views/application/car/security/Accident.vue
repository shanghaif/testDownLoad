<template>
  <div>
    <a-list itemLayout="vertical" class="cheta-ml-30" style="height: 300px;overflow-y: scroll" size="large"  :dataSource="listData">
      <a-list-item slot="renderItem" slot-scope="item, index" key="item.title">
        <a-list-item-meta>
          <a slot="title">{{ item.type }}</a>
          <div slot="description">{{ item.description }}</div>
          <div slot="description">{{ item.address }}</div>
        </a-list-item-meta>
        <img  :src="img" v-for="img in item.imgList" style="width: 40px;height: 40px;margin-right: 20px" @click="bigImage(img)"/>
        <div class="cheta-mt-20">{{ item.createTime}}</div>
      </a-list-item>

    </a-list>
    <div>
      <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
        <img alt="example" style="width: 100%" :src="currentImg" />
      </a-modal>
    </div>
  </div>
</template>
<script>
  import {getAction} from '@/api/manage'
  export default {
    name: 'Accident',
    data () {
      return {
        object:{
          imgList:[]
        },
        currentImg: '',
        previewVisible: false,
        listData:[],
        imgList:["http://file.ctayun.com/cheta/c719f1493703480caa59e320b95b2720.jpg", "http://file.ctayun.com/cheta/16df52ce9fc84ab8a210d147433c141f.jpg"],
        // pagination: {
        //   onChange: page => {
        //     console.log(page);
        //   },
        //   pageSize: 3,
        // },
      }
    },
    created () {
      var param = {
        pageNo:1,
        pageSize:10
      }
      var $this = this
      getAction('/application/car/vehicle/accident/getPage',param).then(res=>{
        $this.listData = res.data
        res.data.forEach(inner=>{
          if (inner.files) {
            inner.imgList = []
            // $this.object = inner
            inner.files.split(",").forEach(imgItem=>{
              inner.imgList.push(imgItem)
            })
          }
        })
      })
    },
    methods:{
      bigImage (img) {
        this.currentImg = img
        this.previewVisible = true
      },
      handleCancel() {
        this.previewVisible = false;
      },

    }
  }
</script>

<style scoped>

</style>