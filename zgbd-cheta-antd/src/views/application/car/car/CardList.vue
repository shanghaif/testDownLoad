<template>
    <div>
      <!--<div class="" v-for="item in listData">-->
        <!--<a-row>-->
          <!--<a-col :lg="24" :xl="12" :xxl="8">-->
            <!--<div class="gutter-box">-->
              <!--<div class="imgWrap">-->
                <!--<img src="@/assets/image/parameter/car.png" alt="" />-->
                <!--<i class="cheta-bg" v-if="item.sinceNumber">自编号：{{item.sinceNumber}}</i>-->
                <!--<i class="cheta-bg" v-else>车牌号：{{item.registrationNO}}</i>-->
              <!--</div>-->
              <!--<div class="info">-->
                <!--<p><span>车牌号：</span><em>{{item.registrationNO}}</em></p>-->
                <!--<p><span>状       态：</span><i class="cheta-color">{{item.statusNormal}}</i></p>-->
                <!--<p><span>车辆类型：</span><em>{{item.carType}}</em></p>-->
                <!--<p><span>车架号：</span><em>{{item.frameNumber}}</em></p>-->
                <!--<p><span>发动机号：</span><em>{{item.engineNumber}}</em></p>-->
                <!--<p><span>所       属：</span><em>{{item.organId}}</em></p>-->
                <!--&lt;!&ndash;<a href="javascript:;" @click="enterDetail(item)" class="cheta-color">查看详细信息>></a>&ndash;&gt;-->

              <!--</div>-->
              <!--<div class="edit">-->
                <!--<a-dropdown>-->
                  <!--<a-menu slot="overlay" @click="handleMenuClick">-->
                    <!--<a-menu-item key="1" @click="enterDetail(item)">详情</a-menu-item>-->
                    <!--<a-menu-item key="2" @click="editInfo(item.id)">编辑</a-menu-item>-->
                  <!--</a-menu>-->
                  <!--<a-button style="margin-left: 8px">-->
                    <!--···-->
                  <!--</a-button>-->
                <!--</a-dropdown>-->
              <!--</div>-->
            <!--</div>-->
          <!--</a-col>-->
        <!--</a-row>-->
      <!--</div>-->
    </div>
</template>

<script>


  export default {
    name: "CardList",
    data () {
      return {
        listData:[],
      }

    },
    methods:{

    }
  }
</script>

<style scoped>

</style>