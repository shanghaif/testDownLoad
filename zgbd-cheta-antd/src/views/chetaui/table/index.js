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
    done: {
      type: Function,
      default: () => {}
    }
  }),
  data() {
    return {
      spinning: true
    }
  },
  created() {
    this.param = Object.assign({pageSize: this.pagination.pageSize, pageNo: this.pagination.current}, this.param)
    this.pagination.pageSize = this.param.pageSize;
    this.getData();
  },
  methods: {
    getData(filters, sorter){
      this.spinning = true;

      // 筛选过滤项
      let queryParam = Object.assign(this.param)
      if (filters) {
        queryParam.filter = filters
      }

      if (sorter) {
        if (sorter.field) {
          queryParam.sort[sorter.field] = sorter.order
        }
      }

      if(this.url){
        getAction(this.url, queryParam).then((res)=>{
          this.dataSource = res.data;
          this.pagination.total = res.count;
          this.spinning = false;
          this.done(res);
        })
      }
      else{
        this.dataSource = this.dataSource;
        this.spinning = false;
      }
    },
    reload (param) {
      this.spinning = true;

      // 筛选过滤项
      var that = this;
      let queryParam = Object.assign(this.param, param)
      if(this.url){
        getAction(that.url, queryParam).then((res)=>{
          that.dataSource = res.data;
          that.pagination.total = res.count;
          that.spinning = false;
          that.done(res);
        })
      }
      else{
        this.dataSource = this.dataSource;
        this.spinning = false;
      }
    },
    handleChange (pagination, filters, sorter) {
      this.pagination.current = pagination.current;
      this.param.pageNo = pagination.current;
      this.getData(filters, sorter);
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