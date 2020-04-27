import T from "ant-design-vue/es/table/Table";
import { getAction } from '@/api/manage';
export default {
  props: Object.assign({}, T.props, {
    url: {
      type: String
    },
    param: {
      type: Object,
      default: () => {
        return {}
      }
    },
    pagination: {
      type: Object,
      default: () => {
        return {
          current: 1,
          pageSize: 10,
          total: 0,
          showTotal (total) {
            return '共 ' + total + '条 数据';
          },
          showQuickJumper: true,
        }
      }
    },
    pageSize: {
      type: Number,
      default: 10
    },
  }),
  data() {
    return {
      spinning: true
    }
  },
  created() {
    this.getData();
  },
  mounted() {

  },
  methods: {
    getData(){
      this.spinning = true;
      if(this.url){
        getAction(this.url,this.param)
          .then((res)=>{
            console.log(res);
            this.dataSource = res.result.data;
            this.pagination.total = res.result.count;
            this.spinning = false;
          })
      }
      else{
        this.dataSource = this.dataSource;
        this.spinning = false;
        this.pagination.pageSize = this.pageSize;
      }
    },
    handleChange (pagination) {
      this.pagination.current = pagination.current;
      this.param.pageNo = pagination.current;
      this.getData();
    }
  },
  render(h) {
    const _vm = this;

    let props = {},
      localKeys = Object.keys(this.$data);

    Object.keys(T.props).forEach(k => {
      let localKey = `local${k.substring(0,1).toUpperCase()}${k.substring(1)}`;
      if(localKeys.includes(localKey)) {
        return props[k] = _vm[localKey];
      }
      return props[k] = _vm[k];
    })

    return h('a-spin',{
      attrs:{
        spinning: this.spinning
      }
    },[
      h("a-table", {
        tag: "component",
        attrs: props,
        on: {
          change: _vm.handleChange
        },
        scopedSlots: this.$scopedSlots
      }, this.$slots.default)
    ])
  }
}