<template>
  <a-modal 
    v-model="eventdetails" 
    @ok="close" 
    title="粤A888 - 黄世杰 - 2020年03月12日三检" 
    width="1294px" 
    :bodyStyle="{padding:0}"
    okText="审核"	>
    <div class="box">
      <a-table
        :columns="details"
        :dataSource="data"
        :rowSelection="rowSelection"
        :pagination="{ pageSize: 10 }"
        class="lefttable"
      />
      <div class="rightsize">
        <span class="title">检查情况</span>
        <div class="photo">
          <span class="photosize">{{handleName}}</span>
          <div class="img">
            <span class="imgsize">反馈照片 <span>(4)</span></span>
            <div class="imgbox">
              <img :src="imgOne" alt="">
              <img :src="imgTwo" alt="">
              <img :src="imgThree" alt="">
              <img :src="imgFour" alt="">
            </div>
          </div>
        </div>
        <div class="ycbz">
          <span>异常备注情况</span>
          <textarea placeholder="异常备注情况" :value="abnormalRemarks"></textarea>
        </div>
      </div>
    </div>
  </a-modal>
</template>

<script>
  import { getAction,postAction } from '@/api/manage'
  export default {
    data(){
      return {
        eventdetails:false,
        current:1,
        handleName: "",
        imgOne: null,
        imgTwo: null,
        imgThree: null,
        imgFour: null,
        abnormalRemarks:'',
        rowSelection:{
          onChange: (selectedRowKeys, selectedRows) => {
            
          },
          onSelect: (record, selected, selectedRows) => {
            
          },
          onSelectAll: (selected, selectedRows, changeRows) => {
            
          },
        },
        details:[
          {title: '序号', dataIndex: '', key: '', align: 'center', customRender: function(t, r, index) {return parseInt(index) + 1}},
          { title: '状态', dataIndex: 'carnum', key: 'carnum', align: 'left' },
          { title: '检查项目',dataIndex: 'inspectTypefatherName', key: 'inspectTypefatherName',align: 'left'},
          { title: '分项目', dataIndex: 'inspectTypeName', key: 'inspectTypeName', align: 'left' },
          { title: '检测内容', dataIndex: 'contentName', key: 'contentName', align: 'left', width:'400px' },
        ],
        data:[
          {
            carnum:"已反馈",
            inspectTypefatherName:"发动机部分",
            inspectTypeName:"发动机",
            contentName:"应迅速查看事故造成危害情况，...",
          }
        ]
      }
    },
    methods:{
      open(inspectCarId,examines){
        this.eventdetails = true
        getAction('/application/car/inspect/Project/getCtInspectCarProjec', {pageSize:10, pageNo:1, id:inspectCarId}).then(res => {
          this.data = res.data
          for(var event of res.data){
            this.id = event.id
            this.handleName = event.handleName
            this.imgOne = event.imgOne
            this.imgTwo = event.imgTwo
            this.imgThree = event.imgThree
            this.imgFour = event.imgFour
            this.abnormalRemarks = event.abnormalRemarks
          }
          console.log(res)
        })
      },
      close(){
        this.eventdetails = false
      }
    }
  }
</script>

<style lang="scss" scpend>
.box{
   width:100%;
   display: flex;
   justify-content: space-between;
   .lefttable{width:818px;}
   .rightsize{
     width:385px;
     margin-right:34px;
     .title{
       line-height: 47px;
       padding:0 10px;
     }
     .photo{
       padding:10px 33px;
       border:1px solid #eee;
       .img{
         margin-top:47px;
         border-top: 1px solid #e8e8e8;
         .imgsize{
           line-height: 44px;
         }
         .imgbox{
            display: flex;
            flex-wrap: wrap;
            img{
              width:116px;
              height:116px;
              margin:0 16px 16px 0;
            }
         }
       }
     }
     .ycbz{
       margin-bottom:12px;
       span{
         padding-left:10px;
         line-height: 42px;
       }
       textarea{
         width:100%;
         height:80px;
         padding:10px;
         border:1px solid #eee;
       }
       textarea::-webkit-input-placeholder {color: #ccc;}
       textarea:-moz-placeholder {color: #ccc;}
       textarea::-moz-placeholder {color: #ccc;}
       textarea::-ms-input-placeholder {color: #ccc;}
     }
   }
}  
</style>
