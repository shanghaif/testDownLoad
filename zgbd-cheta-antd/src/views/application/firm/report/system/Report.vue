<template>
  <div class="cheta-report-detail">
    <a-form layout="inline">
      <standard-form-row :title="titleList[index]" block style="padding-bottom: 11px;"  v-if="array.length>0" v-for="(array, index) in arrays">
        <a-form-item>
          <tag-select @change="change" :hideCheckAll="true">
            <tag-select-option :value="item.key" :checked="item.checked" @click.native="getTitle(item,index)" :index="index" :array="array" v-for="item in array">
              <span style="font-size: 14px;">{{item.name}}</span>
            </tag-select-option>
          </tag-select>
        </a-form-item>
      </standard-form-row>
    </a-form>
  </div>
</template>

<script>
  import TagSelect from '@/views/example/list/components/TagSelect'
  import StandardFormRow from '@/views/example/list/components/StandardFormRow'
  const TagSelectOption = TagSelect.Option
  import store from '@/store'
  import { getPermissionList } from '@/api/api'


  export default {
    name: 'report',
    data () {
      return {
        arrays: [],
        titleList: ['所属类目'],
      }
    },
    components: {
      TagSelect,
      TagSelectOption,
      StandardFormRow,
      store,
    },
    created () {
      let $this = this;
      getPermissionList().then(res => {
        $this.arrays = [$this.initChildren(res.result)];
      });
    },
    methods: {
      initChildren (menus) {
        var array = [];
        var $this = this;
        menus.forEach((menu, index) => {
          if (menu.status === 'Y') {
            array.push({
              name: menu.name,
              key: index,
              id: menu.id,
              checked: false,
              children: $this.initChildren(menu.children)
            })
          }

        })
        return array;
      },
      change (tag) {
        var $this = this
        tag.array.forEach(item=>{
          item.checked = false
          if (item.key == tag.value) {
            item.checked = true
            $this.reload(tag.index)
            $this.$emit('change',item)
            if(item.children){
              $this.arrays.push(item.children)
            }
          }
        })
      },
      reload (index) {
        var aindex = index + 1
        var length = this.arrays.length -  aindex
        this.arrays.splice(aindex ,length)
      },
      getTitle (item,index) {
        this.titleList.splice(index+1,this.titleList.length - (index+1))
        if (item.checked) {
          if (item.children.length>0) {
            this.titleList.push(item.name)
          }

        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .ant-pro-components-tag-select {
    /deep/ .ant-pro-tag-select .ant-tag {
      margin-right: 24px;
      padding: 0 8px;
      font-size: 16px;
    }
  }

</style>