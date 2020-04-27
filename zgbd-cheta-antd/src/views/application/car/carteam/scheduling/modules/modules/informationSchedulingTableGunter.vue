<template>
  <a-row class="scheduling-gunter" style="margin: 10px 0px 0px 10px;">
    <a-table :columns="columns" :dataSource="data" :pagination="pagination" @change="lineChange" bordered>
    </a-table>
  </a-row>
</template>

<script>
  const renderContent = (text, row, index) => {
    var work = row.work, obj = {
      children: <a-row><a-col span="24" class="cheta-gunter-row cheta-row-blue">12:00 - 19:00 晚班</a-col></a-row>,
      attrs: {
        colSpan: work[1],
      }
    };
    return obj;
  };

  const data = [
    {
      key: '1',
      day1: {sum: 1},
      day2: {sum: 1},
      day3: {sum: 1},
      day4: {sum: 1},
      day5: {sum: 1},
      day6: {sum: 1},
      day7: {sum: 1},
    },
    {
      key: '2',
      day1: {sum: 7, text: '12:00 - 19:00 晚班', color: 'blue'},
      day2: {sum: 0},
      day3: {sum: 0},
      day4: {sum: 0},
      day5: {sum: 0},
      day6: {sum: 0},
      day7: {sum: 0},
    },
    {
      key: '3',
      day1: {sum: 1},
      day2: {sum: 1},
      day3: {sum: 4, text: '12:00 - 19:00 晚班', color: 'green'},
      day4: {sum: 0},
      day5: {sum: 0},
      day6: {sum: 0},
      day7: {sum: 1},
    },{
      key: '4',
      day1: {sum: 1},
      day2: {sum: 1},
      day3: {sum: 1},
      day4: {sum: 1},
      day5: {sum: 1},
      day6: {sum: 1},
      day7: {sum: 1},
    },
    {
      key: '5',
      day1: {sum: 1, text: '12:00 - 19:00 晚班', color: 'purple'},
      day2: {sum: 1},
      day3: {sum: 3, text: '12:00 - 19:00 中班', color: 'red'},
      day4: {sum: 0},
      day5: {sum: 0},
      day6: {sum: 1},
      day7: {sum: 1},
    },
    {
      key: '6',
      day1: {sum: 1},
      day2: {sum: 1},
      day3: {sum: 1},
      day4: {sum: 1},
      day5: {sum: 1},
      day6: {sum: 1},
      day7: {sum: 1},
    },
    {
      key: '7',
      day1: {sum: 1},
      day2: {sum: 6, text: '12:00 - 19:00 晚班', color: 'orange'},
      day3: {sum: 0},
      day4: {sum: 0},
      day5: {sum: 0},
      day6: {sum: 0},
      day7: {sum: 0},
    }
  ];

  export default {
    props: {
      list: {
        type: Object,
        default: () => []
      },
      listCount: {
        type: Object,
        default: () => 0
      },
    },
    created(){
      var that = this;
      that.init(that.list);
    },
    watch: {
      list(){
        this.init(this.list)
      }
    },
    methods:{
      lineChange(pagination) {
        console.log(pagination);
        const pager = { ...this.pagination };
        pager.current = pagination.current;
        this.pagination = pager;
        this.$emit('reLoad',{pageNo:this.pagination.current ,pageSize : this.pagination.pageSize});
      },
      init(list){
        var that = this;
        that.pagination.total = that.listCount
        if(list && list.length){
          //初始化数据未完成
          that.data = []
          var isSame = 1;
          list.forEach(item =>{
            var d = {
              key: new Date().format("yyyyMMddhhmmSS"),
              day1: {sum: 0},
              day2: {sum: 0},
              day3: {sum: 0},
              day4: {sum: 0},
              day5: {sum: 0},
              day6: {sum: 0},
              day7: {sum: 0},
            }
            if(item.complete){
              var arrs = item.complete.split(',');
              //上一个
              var pro = 0;
              arrs.forEach((arr,ind) =>{
                let index = arr;
                if(ind != 0){
                  pro = arrs[ind-1]-0;
                }
                //如果有周二，周三,周四这几天
                //那么周一sum就是1，周二sum就是3，后面的全是0

                //如果不是最后一个 处理
                /*if(arrs.length !== (ind +1)){
                  isSame += 1;
                  d['day'+(index-1)] = {sum:0}
                }*/
                //如果相差一天的话 那么就在第一个+1，后面给0
                if(index - pro == 1){
                  d['day'+arrs[0]].sum += 1;
                }

                d['day'+index].sum = isSame;
                d['day'+index].color = 'blue'; //item.color
                d['day'+index].text = item.startTime +" - "+ item.endTime + " " + item.property;
              })
              //前面的全部给1
              for (var i = (arrs[0]-0);i > 0;i--){
                d['day'+i].sum = {sum:1};
              }
              //后面的全给0
              for (var j = arrs.length+1;j < 8;j++){
                d['day'+j].sum = {sum:1};
              }

              //处理只要隔着的就合并
            }
            isSame = 1;
            that.data.push(d);
          })
        }else{
          that.data = []
        }
      },
    },
    data() {
      // 接口数据
      var result = [
        {title: '周一', colSpan: 2},
        {title: '周一', colSpan: 2},
        {title: '周一', colSpan: 2},
        {title: '周一', colSpan: 2},
      ]
      const columns = [
        {
          title: '周一',
          dataIndex: 'name',
          width: '14.28%',
          align:'center',
          customRender: (text, row, index) => {
            var day = row.day1;
            var text = day.text;
            var color = `cheta-gunter-row cheta-row-${day.color}`;
            var work = row.work, obj = {
              children: <a-row><a-col span="24" class={ color }>{ day.text }</a-col></a-row>,
              attrs: {
                colSpan: day.sum,
              }
            };
            return obj;
          },
        },
        {
          title: '周二',
          dataIndex: 'age',
          width: '14.28%',
          align:'center',
          customRender: (text, row, index) => {
            var day = row.day2;
            var text = day.text;
            var color = `cheta-gunter-row cheta-row-${day.color}`;
            var work = row.work, obj = {
              children: <a-row><a-col span="24" class={ color }>{ day.text }</a-col></a-row>,
              attrs: {
              colSpan: day.sum,
            }
          };
            return obj;
          },
        },
        {
          title: '周三',
          dataIndex: 'name1',
          width: '14.28%',
          align:'center',
          customRender: (text, row, index) => {
            var day = row.day3;
            var text = day.text;
            var color = `cheta-gunter-row cheta-row-${day.color}`;
            var work = row.work, obj = {
              children: <a-row><a-col span="24" class={ color }>{ day.text }</a-col></a-row>,
              attrs: {
              colSpan: day.sum,
            }
          };
            return obj;
          },
        },
        {
          title: '周四',
          dataIndex: 'key1',
          width: '14.28%',
          align:'center',
          customRender: (text, row, index) => {
            var day = row.day4;
            var text = day.text;
            var color = `cheta-gunter-row cheta-row-${day.color}`;
            var work = row.work, obj = {
              children: <a-row><a-col span="24" class={ color }>{ day.text }</a-col></a-row>,
              attrs: {
              colSpan: day.sum,
            }
          };
            return obj;
          },
        },
        {
          title: '周五',
          dataIndex: 'key2',
          width: '14.28%',
          align:'center',
          customRender: (text, row, index) => {
            var day = row.day5;
            var text = day.text;
            var color = `cheta-gunter-row cheta-row-${day.color}`;
            var work = row.work, obj = {
              children: <a-row><a-col span="24" class={ color }>{ day.text }</a-col></a-row>,
              attrs: {
              colSpan: day.sum,
            }
          };
            return obj;
          },
        },
        {
          title: '周六',
          dataIndex: 'key3',
          width: '14.28%',
          align:'center',
          customRender: (text, row, index) => {
            var day = row.day6;
            var text = day.text;
            var color = `cheta-gunter-row cheta-row-${day.color}`;
            var work = row.work, obj = {
              children: <a-row><a-col span="24" class={ color }>{ day.text }</a-col></a-row>,
              attrs: {
              colSpan: day.sum,
            }
          };
            return obj;
          },
        },
        {
          title: '周日',
          dataIndex: 'key4',
          width: '14.28%',
          align:'center',
          customRender: (text, row, index) => {
            var day = row.day7;
            var text = day.text;
            var color = `cheta-gunter-row cheta-row-${day.color}`;
            var work = row.work, obj = {
              children: <a-row><a-col span="24" class={ color }>{ day.text }</a-col></a-row>,
              attrs: {
              colSpan: day.sum,
            }
          };
            return obj;
          },
        },
      ];
      return {
        pagination: {
          current : 0,
          pageSize : 7,
          total : 0,
        },
        data,
        columns,
        text: 'ces'
      };
    },
  };
</script>
<style>
  .scheduling-gunter .ant-table-thead > tr > th, .ant-table-tbody > tr > td {
    margin-left: 10px;
    padding: 5px 0px;
    height: 44px;
    line-height: 44px;
  }


</style>
<style lang="less" scoped>
  @import url("../../color.less");
</style>