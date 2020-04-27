<template>
  <a-modal
    v-model="visible"
    title="选择模板"
    @ok="doExcel"
    width="800px"
    height="785px"
    cancelText="关闭"
    okText="保存">
    <a-list :grid="{ gutter: 16, column: 3 }" :dataSource="data">
      <a-list-item slot="renderItem" slot-scope="item, index">
        <a-card hoverable @click="doExcel(item)">
          <img
            class="ant-card-actions"
            slot="cover"
            alt="example"
            :src="item.image"
            :title="item.name"
          />
        </a-card>
      </a-list-item>
    </a-list>
  </a-modal>

</template>

<script>
  let labelCol = { span: 24 }, wrapperCol= {span: 24};
  const data = [
    {
      name: '空白',
      image: '//docs.idqqimg.com/tim/docs/desktop/img/img/black_sheet_template@2x-fe5077.png',
      json: {}
    },
    {
      name: '开发排期表',
      image: '//pub.idqqimg.com/pc/misc/files/20181224/700c124a2eaf7e8b50d12cc507381beajq25v4mf.png',
      json: {"name":"sheet1","freeze":"A1","styles":[{"font":{"size":36}},{"font":{"size":36,"bold":true}},{"font":{"size":36,"bold":false}},{"bgcolor":"#4371c6"},{"bgcolor":"#d0cecf"},{"bgcolor":"#e7e5e6"},{"bgcolor":"#d0cecf","align":"center"},{"bgcolor":"#e7e5e6","align":"center"},{"align":"center"},{"bgcolor":"#4371c6","align":"center"},{"bgcolor":"#4371c6","align":"center","color":"#ffffff"},{"align":"center","bgcolor":"#bdd7ee"},{"bgcolor":"#deeaf6"},{"bgcolor":"#ededed"},{"align":"center","bgcolor":"#a7d08c"},{"align":"center","bgcolor":"#c5e0b3"},{"align":"center","bgcolor":"#e3efd9"},{"bgcolor":"#e3efd9"}],"merges":["A4:A5","B4:B5","C4:C5","A1:K1","A2:K2","A3:K3","D4:K4","A6:A7","A9:A13","A14:A15","C6:C7","C9:C13","H6:I13"],"rows":{"0":{"cells":{"0":{"merge":[0,10],"text":"开发排期表","style":2}},"height":70},"1":{"cells":{"0":{"merge":[0,10],"text":"（v1.9.0 web版本）"}}},"2":{"cells":{"0":{"merge":[0,10],"text":"团队：车塔云项目组      开发周期：（12月01日—12月31日）"}}},"3":{"cells":{"0":{"merge":[1,0],"style":10,"text":"部门"},"1":{"merge":[1,0],"style":10,"text":"工作细节"},"2":{"merge":[1,0],"style":10,"text":"相关负责人"},"3":{"merge":[0,7],"style":10,"text":"12月"},"4":{"style":10},"5":{"style":10},"6":{"style":10},"7":{"style":10},"8":{"style":10},"9":{"style":10},"10":{"style":10}}},"4":{"cells":{"0":{"style":10},"1":{"style":10},"2":{"style":10},"3":{"text":"11日","style":8},"4":{"text":"12日","style":8},"5":{"text":"13日","style":8},"6":{"text":"14日","style":8},"7":{"text":"15日","style":8},"8":{"text":"16日","style":8},"9":{"text":"17日","style":8},"10":{"text":"18日","style":8}}},"5":{"cells":{"0":{"style":6,"merge":[1,0],"text":"UI"},"1":{"style":7,"text":"整体UI风格调整"},"2":{"merge":[1,0],"text":"张嘉","style":8},"3":{"style":13},"7":{"merge":[7,1],"text":"放假","style":8},"8":{"style":8}}},"6":{"cells":{"0":{"style":8},"1":{"style":7,"text":"H5动画（外包制作）"},"2":{"style":8},"3":{"style":13},"4":{"style":13},"7":{"style":8},"8":{"style":8}}},"7":{"cells":{"0":{"text":"服务端","style":11},"1":{"text":"完成相关功能接口及后台优化","style":12},"2":{"text":"王超","style":8},"3":{"style":12},"4":{"style":12},"7":{"style":8},"8":{"style":8}},"height":33},"8":{"cells":{"0":{"merge":[4,0],"text":"客户端","style":15},"1":{"text":"接入SDK功能","style":16},"2":{"merge":[4,0],"text":"李静","style":8},"4":{"style":17},"7":{"style":8},"8":{"style":8}}},"9":{"cells":{"0":{"style":15},"1":{"text":"产品性能/体验优化","style":16},"2":{"style":8},"5":{"style":17},"6":{"style":17},"7":{"style":8},"8":{"style":8}}},"10":{"cells":{"0":{"style":15},"1":{"text":"功能权限获取优化","style":16},"2":{"style":8},"7":{"style":8},"8":{"style":8}}},"11":{"cells":{"0":{"style":15},"1":{"text":"通知显示优化","style":16},"2":{"style":8},"7":{"style":8},"8":{"style":8}}},"12":{"cells":{"0":{"style":15},"1":{"text":"产品整体UI交互优化","style":16},"2":{"style":8},"7":{"style":8},"8":{"style":8}}},"13":{"cells":{"0":{"merge":[1,0],"text":"测试","style":8}}},"14":{"cells":{"0":{"style":8}}},"len":100},"cols":{"1":{"width":190},"len":26},"validations":[],"autofilter":{}}
    },
    {
      name: '工作日程表',
      image: '//pub.idqqimg.com/pc/misc/files/20180808/700c124a2eaf7e8b50d12cc507381beajkl1j34h.png',
      json: {"name":"sheet1","freeze":"A1","styles":[{"font":{"size":16}},{"font":{"size":18}},{"font":{"size":18,"bold":true}},{"font":{"size":18,"bold":false}},{"bgcolor":"#f4b184"},{"bgcolor":"#fdc101"},{"bgcolor":"#ed7d31"},{"bgcolor":"#fce5d5"},{"bgcolor":"#f2f2f2"},{"bgcolor":"#e7e5e6"},{"bgcolor":"#ededed"},{"format":"datetime"},{"bgcolor":"#fce5d5","align":"center"},{"align":"center"},{"format":"datetime","align":"center"},{"bgcolor":"#ededed","align":"center"},{"bgcolor":"#ed7d31","color":"#ffffff"},{"color":"#ffffff"}],"merges":["A3:K3","A2:K2","A1:K1"],"rows":{"0":{"cells":{"0":{"text":"工作日程表","merge":[0,10],"style":3}},"height":57},"1":{"cells":{"0":{"merge":[0,10],"text":"2017年12月1日 - 2018年1月1日"}}},"2":{"cells":{"0":{"merge":[0,10],"style":16,"text":" 1.  重要且紧急：马上做。"},"1":{"style":17},"2":{"style":17},"3":{"style":17},"4":{"style":17},"5":{"style":17},"6":{"style":17},"7":{"style":17},"8":{"style":17},"9":{"style":17},"10":{"style":17}}},"3":{"cells":{"0":{"text":"NO.","style":12},"1":{"text":"启动日期","style":12},"2":{"text":"周","style":12},"3":{"text":"星期","style":12},"4":{"text":"时间","style":12},"5":{"text":"事项","style":12},"6":{"text":"联络人","style":12},"7":{"text":"联络人电话","style":12},"8":{"text":"需结案时间","style":12},"9":{"text":"处理进度","style":12},"10":{"text":"备注","style":12},"11":{}}},"4":{"cells":{"0":{"text":"1","style":13},"1":{"text":"2017年12月1日","style":13},"2":{"text":"第一周","style":13},"3":{"text":"五","style":13},"4":{"text":"14:00","style":13},"5":{"text":"打印工作证明","style":13},"6":{"text":"胡老师","style":13},"7":{"text":"63438478","style":13},"8":{"text":"2017年12月3日","style":14},"9":{"text":"进行中","style":13},"10":{"text":"需两份","style":13},"11":{}}},"5":{"cells":{"0":{"text":"2","style":15},"1":{"text":"2017年12月1日","style":15},"2":{"text":"第一周","style":15},"3":{"text":"六","style":15},"4":{"text":"14:00","style":15},"5":{"text":"收入证明","style":15},"6":{"text":"张勇","style":15},"7":{"text":"63438478","style":15},"8":{"text":"2017年12月8日","style":15},"9":{"text":"进行中","style":15},"10":{"text":"盖章/评语","style":15},"11":{}}},"6":{"cells":{"0":{"text":"3","style":13},"1":{"text":"2017年12月1日","style":13},"2":{"text":"第二周","style":13},"3":{"text":"一","style":13},"4":{"text":"14:00","style":13},"5":{"text":"考证时间公布","style":13},"6":{"text":"王老师","style":13},"7":{"text":"63438478","style":13},"8":{"text":"2017年12月8日","style":13},"9":{"text":"进行中","style":13},"10":{"text":"需两份","style":13},"11":{}}},"7":{"cells":{"0":{"text":"4","style":15},"1":{"text":"2017年12月1日","style":15},"2":{"text":"第二周","style":15},"3":{"text":"二","style":15},"4":{"text":"14:00","style":15},"5":{"text":"学生会活动报告","style":15},"6":{"text":"李老师","style":15},"7":{"text":"63438478","style":15},"8":{"text":"2017年12月8日","style":15},"9":{"text":"进行中","style":15},"10":{"text":"需两份","style":15},"11":{}}},"14":{"cells":{"2":{"text":""}}},"len":100},"cols":{"0":{"width":60},"1":{"width":143},"5":{"width":155},"8":{"width":153},"11":{"width":105},"len":26},"validations":[],"autofilter":{}}
    },
    {
      name: '设计走查根据表',
      image: '//pub.idqqimg.com/pc/misc/files/20190711/f1eb46028ae21e0e4f8d650c8daa750d.png',
      json: {}
    },
  ];

  export default {
    name: 'Tpl',
    data () {
      return {
        visible: false,
        labelCol,
        wrapperCol,
        data
      }
    },
    methods:{
      showModel () {
        this.visible = true
      },
      doExcel (param) {
        this.$emit('doExcel', param);
      }
    }
  }
</script>