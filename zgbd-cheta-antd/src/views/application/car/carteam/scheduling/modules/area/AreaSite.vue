<template>
  <div class="cheta-height-full cheta-width-full cheta-box-flex">
    <div class="cheta-list cheta-height-full cheta-block" style="width: 360px;">
      <a-tabs class="cheta-height-full" defaultActiveKey="1" @change="areaCallBack">
        <a-tab-pane key="1">
          <span slot="tab">
            <span>新增兴趣点</span>
          </span>
          <area-detail @doradiu="doradiu" @initArea="loadHository" ref="areadetail"></area-detail>
        </a-tab-pane>
        <a-tab-pane key="2">
          <span slot="tab">
            <span>兴趣点列表</span>
          </span>
          <area-hository  @look="lookTemp" ref="areahository"></area-hository>
        </a-tab-pane>
      </a-tabs>
    </div>
    <Map ref="Map" @getLoLa="getLoLa" class="cheta-map cheta-block" style="width: calc(100% - 360px)"></Map>
  </div>
</template>
<script>
  import Map from './Map'
  import AreaDetail from './modules/AreaDetail'
  import AreaHository from './modules/AreaHository'

  export default {
    components: { AreaDetail,AreaHository, Map},
    data() {
      return {

      }
    },
    created () {
    },
    methods: {
      loadHository(){
        this.$refs.areahository.init();
      },
      lookTemp(){

      },
      //编辑与查看 上面调用了lookTemp 改回这个就好了  还有id未处理（因为查看之后可以编辑）
      look(item){
        //map处理
        this.$refs.Map.dohository(item);
        //form处理
        this.$refs.areadetail.form.setFieldsValue(
          {longitude:item.longitude,latitude:item.latitude,address:item.latitude
            ,radius : item.radius,name:item.name,comment:item.comment,type : item.type}
          );
        this.$refs.areadetail.id = item.id;
      },
      doradiu(value){
        this.$refs.Map.doradiu(value);
      },
      //新增数据
      getLoLa(param){
        this.$refs.areadetail.setLoLa(param.lo,param.la,param.address);
      }
    }
  }
</script>
<style lang="scss">

</style>


<style lang="scss" scoped>
  .cheta-list{
    background: white;
    z-index: 1;
  }
  /*.cheta-map{*/
  /*calc(100% - 360px)*/
  /*}*/
</style>

