<template>
    <div style="height:805px;overflow-y: scroll">
      <a-form :form="form" @submit="lineSubmit" class="ant-advanced-search-form cheta-mt-16">
        <a-row :gutter="16">
          <a-col  v-bind="colLayout">
            <a-form-item label="线路名称：" v-bind="formItemLayout">
              <a-input placeholder="请输入线路名称" style="width: 200px" v-decorator="['name', {rules: [{required: true,message: '请输入线路名称!'}]}]">
              </a-input>
            </a-form-item>
          </a-col>
          <a-col  v-bind="colLayout">
            <a-form-item label="线路限速：" v-bind="formItemLayout">
              <a-input-number v-decorator="['speed']" id="inputNumber" placeholder="请选择数值" :min="1" :max="100"  @change="onChange" />
              <a-checkbox class="cheta-ml-10">严格限速</a-checkbox>
            </a-form-item>
          </a-col>
          <a-col  v-bind="colLayout">
            <a-form-item label="颜色标志：" v-bind="formItemLayout">
              <colorPicker value="#ccc" style="z-index: 2;" v-model="colour"/>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col  v-bind="colLayout">
            <a-form-item label="请选择起点：" v-bind="formItemLayout">
              <a-input readonly placeholder="请选择起点" style="width: 200px" v-decorator="['startSite', {rules: [{required: true,message: '请选择起点!'}]}]"></a-input>
            </a-form-item>
          </a-col>
          <a-col  v-bind="colLayout">
            <a-form-item label="请选择途径点：" v-bind="formItemLayout">
              <div v-if="ops.length" v-for="(op,index) in ops">
                <a-input placeholder="请选择途径点" :value="op.address"  style="width: 200px" ></a-input>
                <a-icon v-if="newLine" style="margin-left: 10px" type="minus-circle" @click="cleanOpts(index)"/>
              </div>
              <div v-if="!ops.length">
                <a-input readonly placeholder="请选择途径点"   style="width: 200px" ></a-input>
              </div>
            </a-form-item>
          </a-col>
          <a-col  v-bind="colLayout">
            <a-form-item label="请选择终点：" v-bind="formItemLayout">
              <a-input readonly placeholder="请输入终点" style="width: 200px" v-decorator="['endSite', {rules: [{required: true,message: '请选择终点!'}]}]"></a-input>
            </a-form-item>
          </a-col>
          <a-col  v-bind="colLayout">
            <a-form-item :wrapper-col="{ span: 18, offset: 5 }">
              <a-button type="primary" html-type="submit">
                保存
              </a-button>
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </div>
</template>

<script>
  import { postAction } from '@/api/manage'
  export default {
    name: 'LineInfo',
    data () {
      return {
        distance : 0,
        time : 0,

        newLine : false,
        url : {
          addLine : '/application/car/line/edit'
        },
        userName : '',
        //起始经度度
        beginLo : [],
        //结束经纬度
        endLo : [],
        //沿途经纬度
        centerLo : [],
        //沿途地址
        ops : [],
        geocoder : new AMap.Geocoder({
          // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
          city: '010'
        }),

        colour : '#000000',
        formItemLayout: {
          labelCol: {
            xs: { span: 24 },
            sm: { span: 7 }
          },
          wrapperCol: {
            xs: { span: 24 },
            sm: { span: 17 }
          }
        },
        colLayout: {
          span:24,
          xs:24,
          sm:24,
          md:24,
          xl:24,
        },
        form: this.$form.createForm(this),
      }
      },
    methods:{
      clean(){
          this.beginLo = [];
          //结束经纬度
          this.endLo = [];
          //沿途经纬度
          this.centerLo = [];
          //沿途地址
          this.ops = [];
      },
      lineSubmit(e){
        var that = this;
        e.preventDefault();
        that.form.validateFields((err, values) => {
          if(that.beginLo && that.endLo){
            if (!err) {
              values.start = that.beginLo[0]+','+that.beginLo[1];
              values.end = that.endLo[0]+','+that.endLo[1];
              var centerPath = '';
              var i = 0
              that.centerLo.forEach(item =>{
                if(i > 0){
                  centerPath = centerPath + ';';
                }
                centerPath = centerPath + item
                i++;
              })
              values.pathway = centerPath;
              values.colour = that.colour;
              values.distance = that.distance;
              values.time = that.time;
              values.pathwaySite = JSON.stringify(that.ops);
              //对接接口
              postAction(that.url.addLine,values).then(res =>{
                if(res.success){
                  that.form.setFieldsValue({name:''})
                  that.$message.success(res.message);
                  that.$emit("loadLine");
                }
              })
            }
          }
        });
      },
      cleanOpts(index){
        this.$emit('del',index)
        this.ops.splice(index,1)
        this.centerLo.splice(index,1)
      },
      centers(lnglat){
        var that = this;
        that.centerLo = lnglat;
        that.geocoder.getAddress(lnglat, function(status, result) {
          if (status === 'complete' && result.info === 'OK') {
            // result为对应的地理位置详细信息
            var list = [];
            result.regeocodes.forEach(item =>{
              list.push({
                address:
                  item.addressComponent.district+
                  item.addressComponent.street+
                  item.addressComponent.streetNumber
              })
            })
            that.ops = list
          }
        })
      },
      end(id){
        var that = this;
        that.newLine = false;
        that.endLo = [id.id.lng,id.id.lat];
        that.geocoder.getAddress(that.endLo, function(status, result) {
          if (status === 'complete' && result.info === 'OK') {
            // result为对应的地理位置详细信息
              let address =
              result.regeocode.addressComponent.city+
              result.regeocode.addressComponent.district+
              result.regeocode.addressComponent.street+
              result.regeocode.addressComponent.streetNumber
              that.form.setFieldsValue({endSite:address});
          }
        })
      },
      start(id){
        var that=this;
        if(!that.newLine){
            //结束经纬度
          that.endLo = [];
            //沿途经纬度
          that.centerLo = [];
            //沿途地址
          that.ops = [];
          that.form.setFieldsValue({endSite:''})
        }
        that.newLine = true;
        that.beginLo = [id.id.lng,id.id.lat];
        that.geocoder.getAddress(that.beginLo, function(status, result) {
          if (status === 'complete' && result.info === 'OK') {
            let address =
              result.regeocode.addressComponent.city+
              result.regeocode.addressComponent.district+
              result.regeocode.addressComponent.street+
              result.regeocode.addressComponent.streetNumber;
            that.form.setFieldsValue({startSite:address})
            // result为对应的地理位置详细信息
          }
        })
      }
    },

  }
</script>

<style scoped>
</style>