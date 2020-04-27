<template>
  <a-row>
    <a-card >
      <!--top-->
      <a-col span="12" >
        <a-form-item label="左标题" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].top.leftTitle"/>
        </a-form-item>
      </a-col>
      <a-col span="12" >
        <a-form-item label="右标题" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].top.rightTitle"/>
        </a-form-item>
      </a-col>

      <!--center-->
      <a-col span="20" >
        <a-form-item label="内容" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-textarea v-model="config[0].center.title" autosize="true"/>
        </a-form-item>
      </a-col>
      <a-col span="24" >
        <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-textarea v-model="config[0].center.contentOne" autosize="true"/>
        </a-form-item>
        <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-textarea v-model="config[0].center.contentTwo" autosize="true"/>
        </a-form-item>
        <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-textarea v-model="config[0].center.contentThree" autosize="true"/>
        </a-form-item>
      </a-col>
    </a-card>
    <!--buttom-->

    <a-card  v-for="(item,index) in config[0].footer" :title="`图` + (index + 1)">

      <a-col span="12">
        <a-form-item label="左标题" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="item.basicInfo"/>
        </a-form-item>
      </a-col>
      <a-col span="12" >
        <a-form-item label="右标题" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="item.headline"/>
        </a-form-item>
      </a-col>

      <a-col span="23" >
        <a-form-item label="右标题" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-textarea v-model="item.title" autosize="true"/>
          <a-textarea v-model="item.contentOne" autosize="true"/>
          <a-textarea v-model="item.contentTwo" autosize="true"/>
        </a-form-item>
      </a-col>

      <a-col span="12">
        <a-form-item label="金额" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="item.price"/>
        </a-form-item>
      </a-col>
      <a-col span="12">
        <a-form-item label="描述" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="item.priceDesc"/>
        </a-form-item>
      </a-col>
      <a-col span="23">
        <a-form-item label="" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-input v-model="item.lookMore" align="center"/>
        </a-form-item>
      </a-col>
    </a-card>
  <a-row>
  </a-row>
    <a-card >
      <!--top-->
      <a-col span="12" >
        <a-form-item label="左标题" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].top.leftTitle"/>
        </a-form-item>
      </a-col>
      <a-col span="12" >
        <a-form-item label="标题" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].top.rightTitle"/>
        </a-form-item>
      </a-col>

      <!--center-->
      <a-col span="20" >
        <a-form-item label="内容" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-textarea v-model="config[0].center.title" autosize="true"/>
        </a-form-item>
      </a-col>
      <a-col span="24" >
        <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-textarea v-model="config[0].center.contentOne" autosize="true"/>
        </a-form-item>
        <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-textarea v-model="config[0].center.contentTwo" autosize="true"/>
        </a-form-item>
        <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-textarea v-model="config[0].center.contentThree" autosize="true"/>
        </a-form-item>
      </a-col>
    </a-card>

    <!--buttom-->
    <a-card  v-for="(item,index) in config[0].footer" :title="`图` + (index + 1)">

      <a-col span="12">
        <a-form-item label="左标题" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="item.basicInfo"/>
        </a-form-item>
      </a-col>
      <a-col span="12" >
        <a-form-item label="右标题" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="item.headline"/>
        </a-form-item>
      </a-col>

      <a-col span="23" >
        <a-form-item label="右标题" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-textarea v-model="item.title" autosize="true"/>
          <a-textarea v-model="item.contentOne" autosize="true"/>
          <a-textarea v-model="item.contentTwo" autosize="true"/>
        </a-form-item>
      </a-col>

      <a-col span="12">
        <a-form-item label="金额" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="item.price"/>
        </a-form-item>
      </a-col>
      <a-col span="12">
        <a-form-item label="描述" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="item.priceDesc"/>
        </a-form-item>
      </a-col>
      <a-col span="23">
        <a-form-item label="" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-input v-model="item.lookMore" align="center"/>
        </a-form-item>
      </a-col>
    </a-card>
    </a-row>

</template>

<script>
    export default {
      name: "TopBodyBodyData",
      props: {
        config: {
          type: Array,
          default: () => []
        },
      },
    }
</script>

<style scoped>

</style>