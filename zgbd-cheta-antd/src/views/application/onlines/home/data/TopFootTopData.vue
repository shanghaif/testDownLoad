<template>
    <a-row>
      <a-card title="模块一">
       <a-col span="24">
          <a-form-item label="标题1" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
            <a-input  v-model="config[0].title1"/>
          </a-form-item>
        </a-col>
        <a-col span="24">
          <a-form-item label="文本1" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
            <a-textarea v-model="config[0].text11" autosize="true" placeholder="请输入文本" :rows="6"/>
          </a-form-item>
        </a-col>
        <a-col span="24">
          <a-form-item label="文本2" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
            <a-textarea v-model="config[0].text22" autosize="true" placeholder="请输入文本" :rows="6"/>
          </a-form-item>
        </a-col>
        <a-col span="24">
          <a-form-item label="文本3" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
            <a-textarea v-model="config[0].text33" autosize="true" placeholder="请输入文本" :rows="6"/>
          </a-form-item>
        </a-col>
        <a-col span="24">
          <a-form-item label="文本4" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
            <a-textarea v-model="config[0].text44" autosize="true" placeholder="请输入文本" :rows="6"/>
          </a-form-item>
        </a-col>
      </a-card>

      <a-card title="模块二">
        <a-col span="24">
          <a-form-item label="标题2" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
            <a-input  v-model="config[0].title2"/>
          </a-form-item>
        </a-col>
        <a-col span="24">
          <a-form-item label="文本1" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
            <a-textarea v-model="config[0].text55" autosize="true" placeholder="请输入文本" :rows="6"/>
          </a-form-item>
        </a-col>
        <a-col span="24">
          <a-form-item label="文本2" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
            <a-textarea v-model="config[0].text66" autosize="true" placeholder="请输入文本" :rows="6"/>
          </a-form-item>
        </a-col>
        <a-col span="24">
          <a-form-item label="文本3" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
            <a-textarea v-model="config[0].text77" autosize="true" placeholder="请输入文本" :rows="6"/>
          </a-form-item>
        </a-col>
        <a-col span="24">
          <a-form-item label="文本4" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
            <a-textarea v-model="config[0].text88" autosize="true" placeholder="请输入文本" :rows="6"/>
          </a-form-item>
        </a-col>
        <a-col span="24">
          <a-form-item label="文本5" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
            <a-textarea v-model="config[0].text99" autosize="true" placeholder="请输入文本" :rows="6"/>
          </a-form-item>
        </a-col>
      </a-card>

      <a-card title="模块一右边" class="cheta-color">
        <a-col span="24">
          <a-form-item label="标题" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
            <a-input  v-model="config[0].titleOne"/>
          </a-form-item>
        </a-col>
        <a-col span="24">
          <a-form-item label="图片" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
            <a-textarea v-model="config[0].imgOne" autosize="true" placeholder="请输入图片地址" :rows="6"/>
          </a-form-item>
        </a-col>
        <a-col span="24">
          <a-form-item label="文本" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
            <a-textarea v-model="config[0].textOne" autosize="true" placeholder="请输入文本" :rows="6"/>
          </a-form-item>
        </a-col>
        <a-col span="24">
          <a-form-item label="图片" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
            <a-textarea v-model="config[0].imgTwo" autosize="true" placeholder="请输入图片地址" :rows="6"/>
          </a-form-item>
        </a-col>
        <a-col span="24">
          <a-form-item label="文本" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
            <a-textarea v-model="config[0].textTwo" autosize="true" placeholder="请输入文本" :rows="6"/>
          </a-form-item>
        </a-col>
      </a-card>

      <a-col span="24">
        <a-form-item label="标题" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input  v-model="config[0].title"/>
        </a-form-item>
      </a-col>
      <a-col span="24">
        <a-form-item label="图片1" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-textarea v-model="config[0].img1" autosize="true" placeholder="请输入图片地址" :rows="6"/>
        </a-form-item>
      </a-col>
      <a-col span="24">
        <a-form-item label="文本1" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-textarea v-model="config[0].text1" autosize="true" placeholder="请输入文本" :rows="6"/>
        </a-form-item>
      </a-col>
      <a-col span="24">
        <a-form-item label="图片2" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-textarea v-model="config[0].img2" autosize="true" placeholder="请输入图片地址" :rows="6"/>
        </a-form-item>
      </a-col>
      <a-col span="24">
        <a-form-item label="文本2" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-textarea v-model="config[0].text2" autosize="true" placeholder="请输入文本" :rows="6"/>
        </a-form-item>
      </a-col>
      <a-col span="24">
        <a-form-item label="图片3" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-textarea v-model="config[0].img3" autosize="true" placeholder="请输入图片地址" :rows="6"/>
        </a-form-item>
      </a-col>
      <a-col span="24">
        <a-form-item label="文本3" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-textarea v-model="config[0].text3" autosize="true" placeholder="请输入文本" :rows="6"/>
        </a-form-item>
      </a-col>

      <a-card title="模块二">
        <a-col span="24">
          <a-form-item label="标题" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
            <a-input  v-model="config[0].titleTwo"/>
          </a-form-item>
        </a-col>
        <a-col span="24">
          <a-form-item label="文本1" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
            <a-textarea v-model="config[0].text11" autosize="true" placeholder="请输入文本" :rows="6"/>
          </a-form-item>
        </a-col>
        <a-col span="24">
          <a-form-item label="文本2" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
            <a-textarea v-model="config[0].text22" autosize="true" placeholder="请输入文本" :rows="6"/>
          </a-form-item>
        </a-col>
        <a-col span="24">
          <a-form-item label="文本3" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
            <a-textarea v-model="config[0].text33" autosize="true" placeholder="请输入文本" :rows="6"/>
          </a-form-item>
        </a-col>
        <a-col span="24">
          <a-form-item label="文本4" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
            <a-textarea v-model="config[0].text44" autosize="true" placeholder="请输入文本" :rows="6"/>
          </a-form-item>
        </a-col>
        <a-col span="24">
          <a-form-item label="文本5" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
            <a-textarea v-model="config[0].text55" autosize="true" placeholder="请输入文本" :rows="6"/>
          </a-form-item>
        </a-col>
        <a-col span="24">
          <a-form-item label="文本6" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
            <a-textarea v-model="config[0].text66" autosize="true" placeholder="请输入文本" :rows="6"/>
          </a-form-item>
        </a-col>
        <a-col span="24">
          <a-form-item label="文本7" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
            <a-textarea v-model="config[0].text77" autosize="true" placeholder="请输入文本" :rows="6"/>
          </a-form-item>
        </a-col>
        <a-col span="24">
          <a-form-item label="文本8" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
            <a-textarea v-model="config[0].text88" autosize="true" placeholder="请输入文本" :rows="6"/>
          </a-form-item>
        </a-col>
        <a-col span="24">
          <a-form-item label="文本9" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
            <a-textarea v-model="config[0].text99" autosize="true" placeholder="请输入文本" :rows="6"/>
          </a-form-item>
        </a-col>
        <a-col span="24">
          <a-form-item label="文本10" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
            <a-textarea v-model="config[0].textOne" autosize="true" placeholder="请输入文本" :rows="6"/>
          </a-form-item>
        </a-col>
      </a-card>



    </a-row>
</template>

<script>
  export default {
    name: 'TopFootTopSonOneData',
      data () {
        return {
        }
      },
      props: {
        config: {
          type: Array,
          default: () => []
        },
      },
      created () {
        // debugger;
      },
      methods : {}
  }
</script>

<style scoped>

</style>