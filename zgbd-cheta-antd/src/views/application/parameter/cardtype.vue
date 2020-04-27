<template>
	<div class="cardtype">
	    <a-spin :spinning="spinning">
    	    <a-row>
        		<a-list
                    itemLayout="vertical"
                    size="large"
                    :pagination="pagination"
                    :dataSource="listData"
                  >
                    <a-col :lg="24" :xl="12" :xxl="8" slot="renderItem" slot-scope="item,index" key="item.title">
                        <div class="gutter-box">
                          <div class="gutter-box-icon">
                            <div  class="imgWrap-qrcode">
                              <a-icon type="qrcode"/>
                              <img :src="item.qrImage || '/image/car/welcomeCheta.png'" alt="" class="handle-box-welcomeCheta">
                            </div>
                          </div>
                            <div class="imgWrap" @click="enterDetail(item)">
                                  <img src="../../../assets/image/parameter/car.png" alt="" />
                                <i class="cheta-bg" v-if="item.sinceNumber">自编号：{{item.sinceNumber}}</i>
                                <i class="cheta-bg" v-else>车牌号：{{item.registrationNo}}</i>
                            </div>
                            <div class="info">
                              <p><span>车牌号：</span><em>{{item.registrationNo}}</em></p>
                              <p><span>自编号：</span><em>{{item.sinceNumber}}</em></p>
                              <p><span>车辆类型：</span><em>{{item.carType}}</em></p>
                                <p><span>所       属：</span><em><ellipsis :length ="18" tooltip class="cheta-ellipsis cheta-event"> {{item.organId}}</ellipsis></em></p>
                              <p><span>状       态：</span><i class="cheta-color">{{item.statusNormal}}</i></p>
                              <p><span>入网日期：</span><em>{{item.regTime}}</em></p>
                                <!--<a href="javascript:;" @click="enterDetail(item)" class="cheta-color">查看详细信息>></a>-->
                            </div>
                            <div class="edit">
                                <a-dropdown>
                                  <a-menu slot="overlay">
                                    <a-menu-item key="1" @click="enterDetail(item)">详情</a-menu-item>
                                    <a-menu-item key="2" @click="editInfo(item.id)">编辑</a-menu-item>
                                    <a-menu-item key="3" >视频</a-menu-item>
                                    <a-menu-item key="4" >轨迹</a-menu-item>
                                  </a-menu>
                                  <a-button style="margin-left: 8px">
                                    ···
                                  </a-button>
                                </a-dropdown>
                            </div>
                        </div>
                    </a-col>
                </a-list>
    	    </a-row>
	    </a-spin>
	</div>
</template>

<script>
    import moment from 'moment'
    import { getAction } from '@/api/manage';
    import Ellipsis from '@/components/Ellipsis'
	export default {
		name: "",
		props:{
            listUrl: {
                type: String
            },
            param: {
              type: Object,
              default: () => {
                return {}
              }
            }
		},
    components: {Ellipsis},
		data() {
			return {
        previewVisible: false,
        previewImage: '',
        fileList: [
          {
            uid: '-1',
            name: 'xxx.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          },
        ],
        headers: {
          authorization: 'authorization-text',
        },
        spinning: true,
				listData: [],
				pagination: {
				onChange: (page) => {
            this.pagination.current = page;
            this.param.pageNo = page;
            this.getData();
          },
          current: 1,
          pageSize: 9,
          total: 0
        }
			}
		},
		created() {
      this.getData();
		},
		methods: {
		  moment,
      handleCancel() {
        this.previewVisible = false;
      },
      handlePreview(file) {
        this.previewImage = file.url || file.thumbUrl;
        this.previewVisible = true;
      },
      handleChange({ fileList }) {
        this.fileList = fileList;
      },
      handleChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          this.$message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          this.$message.error(`${info.file.name} file upload failed.`);
        }
      },
      editInfo(id){
        getAction('/application/car/account/getCarDetail',{id}).then((res)=>{
          this.$emit('stateInfoData',res.result);
        })
        this.$router.push({path:`/xinzengcheliang/${id}`})
      },
      getData(){
        this.spinning = true;
        if(this.listUrl){
          var $this = this
          getAction(this.listUrl,this.param).then((res)=>{
            $this.listData = res.result.data;
            var that =this
            $this.listData.forEach(item=>{
              item.regTime = that.moment(item.regTime).format("YYYY-MM-DD")
            })
            $this.pagination.total = res.result.count;
            $this.spinning = false;

          })
        }
        else{
          this.spinning = false;
        }
      },
			enterDetail(item){
        this.$emit('cardtypeData',item.id);
      }
		}
	}
</script>
<style lang="less" scoped>
  .cardtype > .ant-popover-inner-content{
    padding: 2px;
  }
    @import url("../../../../public/theme/override/reset.css");
    .ant-row{
        .gutter-box {
           dl,ul,p{
               margin: 0;
           }
           display: flex;
           display: -webkit-flex;
           height: 220px;
           margin: 10px;
           padding: 20px 15px;
           border: 1px solid #E8E8E8;
           &:hover{
               box-shadow: 2px 2px 5px #E8E8E8;/*opera或ie9*/
               -moz-box-shadow: 2px 2px 5px #E8E8E8;/*firefox*/
               -webkit-box-shadow: 2px 2px 5px #E8E8E8;/*webkit*/
           }
           .imgWrap{
               position: relative;
               height: 180px;
               width: 150px;
               margin-right: 20px;
               i{
                   position: absolute;
                   left: 0;
                   bottom: 0;
                   height: 30px;
                   line-height: 30px;
                   text-align: center;
                   width: 150px;
                   color: #fff;
                   font-size: 14px;
                   opacity: 0.7;
               }
           }
          .imgWrap{
            cursor:pointer;
          }
           .info{
               flex: 1;
               padding-top: 2px;
             font-size:14px;
             font-family:MicrosoftYaHei;
               p{
                   font-size: 14px;
                   line-height: 28px;
                   span{
                       color: #999;
                   }
                   em{
                       color: #666;
                     .cheta-ellipsis{
                       color: #666;
                     }
                   }
                   i{

                   }
               }
               a{
                   display: block;

               }
           }
           .edit{
               width: 38px;
               .ant-btn{
                   float: right;
                   box-shadow: none;/*opera或ie9*/
                   -moz-box-shadow: none;/*firefox*/
                   -webkit-box-shadow: none;/*webkit*/
                   border: none;
               }
           }
        }
    }
  .ant-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
  }

  .ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
  }

</style>
<style scoped>
  .imgWrap-redo-tips{
    visibility: hidden;
    position: absolute;
    width: 130px;
    height: 25px;
    top: -20px;
    margin-left: -50px;
    font-size: 14px;
    color: #999;
    text-align: center;
    border-radius: 4px;
    border: 1px solid #3333;
    background-color: white;
  }
  .gutter-box-icon{
    display: flex;
    position: absolute;
    justify-content: space-between;
    width: 150px;
    height: 30px;
    z-index: 2!important;
  }
  .imgWrap-qrcode{
    z-index: 5!important;
    cursor:pointer;
    padding: 3px 5px;
    font-size: 18px;
    background: rgb(229,229,229,0.5);
    color: white;
  }
  .imgWrap-redo:hover .imgWrap-redo-tips{
    visibility: visible;
  }
  .imgWrap-redo{
    cursor:pointer;
    margin: 0px 5px;
    z-index: 1;
    font-size: 20px;
  }
  .imgWrap-qrcode:hover  .handle-box-welcomeCheta{
    visibility: visible;
  }
  .handle-box-welcomeCheta{
    visibility: hidden;
    position: absolute;
    z-index: 5;
    width: 140px;
    height: 140px;
    margin-left: -18px;
    margin-top: 2px;
    padding: 10px;
    border-radius: 2px;
    border: 2px solid #E2E2E2;
    background-color: #ffffff;
  }
</style>

