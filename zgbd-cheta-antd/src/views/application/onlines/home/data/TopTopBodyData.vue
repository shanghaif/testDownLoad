<template>
  <div>
    <a-row>
    <a-tabs defaultActiveKey="1" @change="callback">
      <a-tab-pane tab="一级菜单" key="1">
        <a-col span="12" >
          <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
            <a-input v-model="config[0].leftTitle"/>
          </a-form-item>
        </a-col>
        <!--top 遍历输出-->
        <a-col span="12"  v-for="(item,index) in config[0].top" >
          <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
            <a-input v-model="item.value"/>
          </a-form-item>
        </a-col>
      </a-tab-pane>
      <a-tab-pane tab="二级菜单" key="2" forceRender>
        <a-collapse v-model="activeKey" :bordered="false"  v-for="(item,index) in config[0].bodyLeft" >
          <a-collapse-panel :header="'悬浮框' + (index+1)" key="1">
            <a-card>
              <a-col span="21">
                <a-form-item label="二级菜单" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
                </a-form-item>
              </a-col>


              <a-col span="21">

                <a-form-item  :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
                  <a-input v-model="item.title.top"/>
                </a-form-item>
              </a-col>
              <a-col span="12">
                <a-form-item  :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
                  <a-input v-model="item.title.left"/>
                </a-form-item>
              </a-col>
              <a-col span="12">
                <a-form-item  :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
                  <a-input v-model="item.title.right"/>
                </a-form-item>
              </a-col>

              <!--二级菜单-->

              <a-col span="24">
                <a-form-item label="子菜单" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
                </a-form-item>
              </a-col>
              <a-col span="12">
                <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
                  <a-input v-model="item.second.allProduct"/>
                </a-form-item>
              </a-col>
              <a-col span="12">
                <a-form-item  :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
                  <a-input v-model="item.second.entry"/>
                </a-form-item>
              </a-col>
              <a-col span="12">
                <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
                  <a-input v-model="item.second.children1"/>
                </a-form-item>
              </a-col>

              <a-col span="12">
                <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
                  <a-input v-model="item.second.children2"/>
                </a-form-item>
              </a-col>
              <a-col span="12">
                <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
                  <a-input v-model="item.second.children3"/>
                </a-form-item>
              </a-col>

              <a-col span="12">
                <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
                  <a-input v-model="item.second.children4"/>
                </a-form-item>
              </a-col>
              <a-col span="12">
                <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
                  <a-input v-model="item.second.children5"/>
                </a-form-item>
              </a-col>

              <a-col span="12">
                <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
                  <a-input v-model="item.second.children7"/>
                </a-form-item>
              </a-col>
              <a-col span="12">
                <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
                  <a-input v-model="item.second.children8"/>
                </a-form-item>
              </a-col>

              <a-col span="12">
                <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
                  <a-input v-model="item.second.children9"/>
                </a-form-item>
              </a-col>
              <a-col span="12">
                <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
                  <a-input v-model="item.second.children10"/>
                </a-form-item>
              </a-col>

              <a-col span="12">
                <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
                  <a-input v-model="item.second.children11"/>
                </a-form-item>
              </a-col>
              <a-col span="12">
                <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
                  <a-input v-model="item.second.children12"/>
                </a-form-item>
              </a-col>



            </a-card>
          </a-collapse-panel>
        </a-collapse>
      </a-tab-pane>
    </a-tabs>

    </a-row>
  </div>
</template>

<script>
  import ACol from "ant-design-vue/es/grid/Col";
  export default {
    name: "Top_top_body_bata",
    components: {ACol},
    data () {
      return {}
    },
    /*created () {
      debugger;
    },*/
    props: {
      config: {
        type: Array,
        default: () => []
      },
    },
    methods : {
      callback (key) {
        console.log(key)
      },
    }
  }
</script>
<style scoped>

</style>