<template>
  <div>
    <a-form :form="form" class="ant-advanced-search-form cheta-mt-16">
      <a-row :gutter="16">
        <a-col v-bind="colLayout">
          <a-form-item label="兴趣点名称：" v-bind="formItemLayout">
            <a-input placeholder="请输入兴趣点名称" class="width-long" v-decorator="['name', {rules: [{required: true,message: '请输入兴趣点名称'}]}]">
            </a-input>
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout">
          <a-form-item label="兴趣点类型：" v-bind="formItemLayout">
            <a-select
              class="width-long"
              v-decorator="[
                'type',
                { rules: [{ required: true, message: '请选择兴趣点类型' }] },
              ]"
              placeholder="请选择类型"
              @change="handleSelectChange"
            >
              <a-select-option :value="type.id" v-for="type in areaType">
                {{type.data}}
              </a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout">
          <a-form-item label="范围半径（米）：" v-bind="formItemLayout">
            <a-input-number
              @change="doRadiu"
              class="width-long"
              v-decorator="[
                'radius',
                { rules: [{ required: true, message: '请输入半径' }] },
              ]"
              placeholder="请选择数值"
              :min="0" />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout">
          <a-form-item label="经度：" v-bind="formItemLayout">
            <a-input
              readonly
              class="width-long"
              v-decorator="[
                'longitude',
                { rules: [{ required: true, message: '请选择兴趣点' }] },
              ]"
              placeholder="请选择兴趣点"/>
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout">
          <a-form-item label="纬度：" v-bind="formItemLayout">
            <a-input
              readonly
              class="width-long"
                   v-decorator="[
                'latitude',
                { rules: [{ required: true, message: '请选择兴趣点' }] },
              ]"
              placeholder="请选择兴趣点"/>
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout">
          <a-form-item label="选中地址：" v-bind="formItemLayout">
            <a-textarea readonly class="width-long" v-decorator="['address']"placeholder="请输入地址" autosize/>
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout">
          <a-form-item label="备注：" v-bind="formItemLayout">
            <a-textarea class="width-long" v-decorator="['comment']"placeholder="请输入备注" :rows="4" />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout">
          <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
            <a-button type="primary" @click="submit" html-type="submit">
              提交
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
    name: 'AreaDetail',
    data() {
      return {
        //编辑的id
        id : '',

        checkNick: false,
        form: this.$form.createForm(this, { name: 'area_detail' }),

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
          span: 24,
          xs: 24,
          sm: 24,
          md: 24,
          xl: 24
        },
        areaType: [
          {
            'code': '',
            'data': '默认',
            'level': 0,
            'titleid': 'map_point_type',
            'orderNum': 1,
            'id': '2a2f71a7ffa801031e5d729a99384000'
          },
          {
            'code': '',
            'data': '收集点',
            'level': 0,
            'titleid': 'map_point_type',
            'orderNum': 2,
            'id': '2a32a226ffa801031e5d729a04b05cbe'
          },
          {
            'code': '',
            'data': '加油站',
            'level': 0,
            'titleid': 'map_point_type',
            'orderNum': 4,
            'id': '6e238a5effffffc95bdcd801cb04b04e'
          },
          {
            'code': '',
            'data': '停车场',
            'level': 0,
            'titleid': 'map_point_type',
            'orderNum': 5,
            'id': '6e2b4ea7ffffffc95bdcd801e6138c25'
          },
          {
            'code': 'http://vocsystem.cn/webfiles/zgbd_voc/images/marker/gc.png',
            'data': '公厕',
            'level': 0,
            'titleid': 'map_point_type',
            'orderNum': 8,
            'id': '8635bb08ffffffc90783d164dc2fea68'
          },
          {
            'code': 'http://vocsystem.cn/webfiles/zgbd_voc/images/marker/zzz.png',
            'data': '垃圾中转站',
            'level': 0,
            'titleid': 'map_point_type',
            'orderNum': 9,
            'id': '86374457ffffffc90783d164d96fb9db'
          },
          {
            'code': '',
            'data': '站点',
            'level': 0,
            'titleid': 'map_point_type',
            'orderNum': 7,
            'id': 'a993fc41ffffffc951a9ff38dad10e4f'
          },
          {
            'code': '',
            'data': '停靠点',
            'level': 0,
            'titleid': 'map_point_type',
            'orderNum': 200,
            'id': 'bb5b54920a000042727b4e03ceea3ff0'
          },
          {
            'code': '',
            'data': '维修点',
            'level': 0,
            'titleid': 'map_point_type',
            'orderNum': 6,
            'id': 'd11c50cdffa801031144a3a48ec72dff'
          },
          {
            'code': '',
            'data': '运输点',
            'level': 0,
            'titleid': 'map_point_type',
            'orderNum': 10,
            'id': 'd11c50cdffa801031144a3a48ec72dfg'
          },
          {
            'code': '',
            'data': '网点',
            'level': 0,
            'titleid': 'map_point_type',
            'orderNum': 11,
            'id': 'd11c50cdffa801031144a3a48ec72dpm'
          }
        ]
      }
    },
    methods: {
      doRadiu(e){
        this.$emit('doradiu',e)
      },
      setLoLa(lo,la,address){
        this.form.setFieldsValue({longitude:lo,latitude:la,address:address});
      },
      submit(e) {
        //提交信息
        var that = this;
        that.form.validateFields((err, values) => {
          if (!err) {
            //访问后台
            /*if(that.id){
              values.id = that.id;
            }*/
            var url = '/application/car/area/edit';
            postAction(url, values).then(res => {
              if (res.success) {
                that.form.resetFields();
                that.$notification.success({
                  message: res.message,
                  description: ``,
                });
                that.$emit('initArea');
              }
            });
          }
        });
      },
    }
  }
</script>

<style scoped>
.width-long{
  width: 78%;
}
</style>