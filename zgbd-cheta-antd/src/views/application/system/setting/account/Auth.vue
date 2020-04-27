<template>
  <div>
    <span>职位:</span>
    <a-cascader
      :options="options"
      placeholder="Please select"
      style="height: 32px;margin-left: 10px"
      :value="list"
    />
    <a-input-search
      placeholder="请输入要搜索的关键词"
      style="width: 260px;height: 32px;margin-left: 10px"
      @search="onSearch"
    />
    <template>
      <a-spin :spinning="spinning">
        <a-tabs>
          <a-tab-pane tab="平台权限" key="1">
            <div>
              <div class="gutter-example">
                <a-row :gutter="16" class="contain" v-if="isShow">
                  <div v-if="isData">
                    <a-col class="gutter-row left" style="padding-right: 0;" :span="4">
                      <div>
                        <div class="gutter-box" style="">
                          <div v-for="(item,index) in firstMenu">
                            <div>
                              <div class="nav" v-if="item.id != currentFirstMenu.id" @click="onchange(index)">
                                <div class="clearfix">
                                  <div class="wisdoml inner"><span class="wisdom_title">{{item.name}}</span></div>
                                  <div class="wisdomr">
                                    <a-switch
                                      :checked="item.status=='Y'"
                                      checkedChildren="开"
                                      unCheckedChildren="关"
                                      class="switch_size1"
                                      @click="switchchange(item)"/>
                                  </div>
                                </div>
                              </div>
                              <div class="left_total" v-else>
                                <div class="clearfix">
                                  <div class="wisdoml"><span class="wisdom_title">{{ item.name }}</span></div>
                                  <div class="wisdomr">
                                    <a-switch
                                      :checked="item.status=='Y'"
                                      checkedChildren="开"
                                      unCheckedChildren="关"
                                      class="switch_size"
                                      @click="switchchange(item)"/>
                                  </div>
                                </div>
                                <div class="title_describe">当加载/渲染所有的数据将花费很多时间时,展示总共有多少条数据</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a-col>
                    <!--项目大数据-->
                    <a-col>
                      <div class="right_total">
                        <a-col class="gutter-row right" :span="20" v-for="firstitem in currentFirstMenu.children">
                          <div class="gutter-box outer">
                            <a-checkbox class="first" :checked="firstitem.status=='Y'" @click="changeChildren(firstitem)" :indeterminate="firstitem.indeterminate">
                              {{firstitem.name}}
                            </a-checkbox>
                            <hr>
                            <div v-if="firstitem.children.length!==0">
                              <a-row v-for="seconditem in firstitem.children">
                                <div v-if="seconditem.menuType==1">
                                  <div class="gutter-box filed">
                                    <div>
                                      <a-checkbox class="second" :checked="seconditem.status=='Y'" @click="changeChildren(seconditem)" @change="checkchange">
                                        {{seconditem.name}}
                                      </a-checkbox>
                                    </div>
                                  </div>
                                  <div class="last" v-if="seconditem.children.length!==0">
                                    <a-row v-for="thirditem in seconditem.children" v-if="thirditem.menuType==2">
                                      <div class="gutter-box filed">
                                        <div>
                                          <a-checkbox class="third" :checked="thirditem.status=='Y'" @click="switchchange1(thirditem)" @change="checkchange">
                                            {{thirditem.name}}22
                                          </a-checkbox>
                                        </div>
                                      </div>
                                      <div class="last" v-if="thirditem.children.length!==0">
                                        <a-row>
                                          <a-col :span="3" v-for="fourditem in thirditem.children" v-if="fourditem.menuType==3">
                                            <div class="gutter-box filed">
                                              <div>
                                                <a-checkbox class="four" :checked="fourditem.status=='Y'" @click="switchchange1(fourditem)" @change="checkchange">
                                                  {{fourditem.name}}33
                                                </a-checkbox>
                                              </div>
                                            </div>
                                          </a-col>
                                        </a-row>
                                      </div>
                                    </a-row>
                                  </div>
                                </div>
                                <div v-else-if="seconditem.menuType==2">
                                  <div class="gutter-box filed">
                                    <div>
                                      <a-checkbox class="second" :checked="seconditem.status=='Y'" @click="switchchange1(seconditem)" @change="checkchange">
                                        {{seconditem.name}}
                                      </a-checkbox>
                                    </div>
                                  </div>
                                  <div class="last" v-if="seconditem.children.length!==0">
                                    <a-row>
                                      <a-col :span="3" v-for="thirditem in seconditem.children" v-if="thirditem.menuType==3">
                                        <div class="gutter-box filed">
                                          <div>
                                            <a-checkbox class="third" :checked="thirditem.status=='Y'" @click="switchchange1(thirditem)" @change="checkchange">
                                              {{thirditem.name}}
                                            </a-checkbox>
                                          </div>
                                        </div>
                                      </a-col>
                                    </a-row>
                                  </div>
                                </div>
                                <div v-else-if="seconditem.menuType==3">
                                  <a-row>
                                    <a-col :span="3">
                                      <div class="gutter-box filed">
                                        <div>
                                          <a-checkbox class="second" :checked="seconditem.status=='N'" @click="switchchange1(seconditem)" @change="checkchange">
                                            {{seconditem.name}}
                                          </a-checkbox>
                                        </div>
                                      </div>
                                    </a-col>
                                  </a-row>
                                </div>
                              </a-row>
                            </div>

                          </div>
                        </a-col>
                      </div>
                    </a-col>
                  </div>
                  <div v-else>
                    <NoData style="margin-top: 200px"></NoData>
                  </div>
                </a-row>
                <a-row :gutter="16" v-else>
                  <a-col class="gutter-row left" style="padding-right: 0;" :span="4">
                    <div class="gutter-box">
                      <div v-for="(item,index) in firstMenu">
                        <div class="nav">
                          <div class="clearfix">
                            <div class="wisdoml inner"><span class="wisdom_title">{{item.name}}</span></div>
                            <div class="wisdomr">
                              <div v-if="item.hidden==true">
                                <spin @click="checkMenu(item)">
                                  <a-icon type="check-circle"/>
                                </spin>
                              </div>
                              <div v-else>
                                <spin @click="checkMenu(item)">
                                  <a-icon type="check-circle" theme="twoTone" twoToneColor="#52c41a"/>
                                </spin>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a-col>
                </a-row>
              </div>
            </div>
          </a-tab-pane>
          <a-tab-pane tab="APP权限" key="2" style="min-height: 600px;">
            <NoData style="margin-top: 200px;"></NoData>
          </a-tab-pane>
          <a-tab-pane tab="公告发布权" key="3" style="min-height: 600px;">
            <NoData style="margin-top: 200px;"></NoData>
          </a-tab-pane>
          <div slot="tabBarExtraContent">
            <a-dropdown-button @click="determine">
              <a-icon type="save"/>保存
              <a-menu slot="overlay">
                <a-menu-item key="1" @click="save">保存通用</a-menu-item>
                <a-menu-item key="2" @click="reset">复位</a-menu-item>
              </a-menu>
            </a-dropdown-button><!--
            <a-button class="cheta-mr-10" style="width: 80px;height: 32px;" type="primary" @click="determine">确定</a-button>
            <a-button icon="setting" style="width: 80px;height: 32px;">设置</a-button>-->
          </div>
        </a-tabs>
      </a-spin>
    </template>
  </div>
</template>

<script>
  import { getAction, httpAction } from '@/api/manage'
  import ARow from 'ant-design-vue/es/grid/Row'
  import NoData from '@/views/result/NoData'

  export default {
    name: 'Auth',
    components: { ARow, NoData },
    props: {
      pid: {
        type: String
      },
      id: {
        type: String
      },
      ptext: {
        type: String
      }
    },
    data() {
      return {
        firstMenu: [],
        currentFirstMenu: {},
        buttonMenu: [],
        checked: false,
        indeterminate: false,
        isShow: true,
        isData: false,
        spinning: false,
        options: [],
        list: []
      }
    },
    created() {
      this.spinning = true
      var $this = this
      // http://10.0.0.48:8080/system
      httpAction('/application/auth/menu/getUserData?userId=' + this.id, {}, 'get').then(res => {
        $this.spinning = false
        if (res.success) {
          res.result.forEach(item => item.children.forEach(inner => inner.indeterminate = false))
          $this.firstMenu = res.result
          $this.currentFirstMenu = res.result[0]
          $this.changeData()
        } else {
          this.$message.error(res.message)
        }
      })
      httpAction('/application/auth/base/getPosition', {}, 'get').then(res => {
        res.result.forEach(item => {
          var result = { 'value': item.id, 'title': item.name, 'label': item.name, children: [] }
          if (item.children) {
            item.children.forEach(item1 => {
              var result1 = { 'value': item1.id, 'title': item1.name, 'label': item1.name, children: [] }
              if (item1.children) {
                item1.children.forEach(item2 => {
                  result1.children.push({
                    'value': item2.id, 'title': item2.name, 'label': item2.name
                  })
                })
              }
              result.children.push(result1)
            })
          }
          this.options.push(result)
        })
        this.list = this.findParent(this.pid)
        console.log(this.list, '88888')
      })

    },
    methods: {
      onSearch(value) {
        console.log(value)
      },
      findParent(childrenId) {
        var list
        this.options.forEach(item => {
          if (item.children) {
            item.children.forEach(inner => {
              if (inner.children) {
                inner.children.forEach(root => {
                  if (root.value == childrenId) {
                    list = [item.value, inner.value, root.value]
                  }
                })
              }
              if (!list) {
                if (inner.value == childrenId) {
                  list = [item.value, inner.value]
                }
              }
            })
          }
          if (!list) {
            if (item.value == childrenId) {
              list = [item.value]
            }
          }
        })
        return list
      },
      changeData() {
        let $this = this
        $this.isData = false
        this.firstMenu.forEach(item => {
          if (item.hidden === false) {
            $this.isData = true
          }
        })
      },
      onchange(index) {
        this.currentFirstMenu = this.firstMenu[index]
        this.checkchange()
      },
      switchchange(item) {
        this.treeChange(item, item.status == 'Y' ? 'N' : 'Y')
      },
      treeChange(item, status) {
        item.status = status
        if (item.children) {
          item.children.forEach(inner => {
            this.treeChange(inner, status)
          })
        }
      },
      switchchange1(item){
        item.status = item.status == 'Y' ? 'N' : 'Y'
        item.indeterminate = false
        if (item.children) {
          item.children.forEach(inner => inner.status = item.status);
        }
      },
      changeChildren(item) {
        item.status = item.status == 'Y' ? 'N' : 'Y'
        item.indeterminate = false
        item.children.forEach(inner => {
          inner.status = item.status
          // this.changeChildren(inner)
          inner.children.forEach(inner1 => {
            inner1.status = inner.status
            inner1.children.forEach(inner2 => {
              inner2.status = inner1.status
            })
          })
        })
      },
      checkchange() {
        this.childrenCount(this.currentFirstMenu);
        this.currentFirstMenu.children.forEach(item => {
          let size = 0
          item.indeterminate = false
          if (item.children.length > 0) {
            item.children.forEach(inner => {
              if (inner.status === 'Y') {
                size += 1
              }
            })
            if (size === item.children.length) {
              item.status = 'Y'
              item.indeterminate = false
            } else if (size > 0) {
              item.status = 'N'
              item.indeterminate = true
            } else {
              item.status = 'N'
              item.indeterminate = false
            }
          }
        })
      },
      determine() {
        this.spinning = true
        var list = []
        this.getCheckMenu(list, this.firstMenu);
        httpAction('/application/auth/menu/saveData', {
          menus: list,
          positionId: this.pid,
          userId: this.id
        }, 'post').then(res => {
          if (res.success) {
            this.$message.success(res.message)
            this.spinning = false
          } else {
            this.$message.error(res.message)
          }
        })
      },
      reset(){
        var $this = this;
        $this.spinning = true
        getAction('/application/auth/menu/reseData', { positionId: this.pid}).then(res => {
          $this.spinning = false
          if (res.success) {
            $this.firstMenu = res.result
            $this.currentFirstMenu = res.result[0]
            $this.changeData()
          } else {
            this.$message.error(res.message)
          }
        })
      },
      save() {
        var list = []
        var $this = this
        $this.spinning = true
        this.getCheckMenu(list, this.firstMenu);
        httpAction('/application/auth/menu/saveCommondData', {
          menus: list,
          positionId: this.pid,
          userId: this.id
        }, 'post').then(res => {
          this.spinning = false
          if (res.success) {
            this.$message.success(res.message)
          } else {
            this.$message.error(res.message)
          }
        })
      },
      getCheckMenu (list, tree) {
        var $this = this;
        if (tree) {
          tree.forEach(item => {
            if (item.status === 'Y') {
              list.push({ menuId: item.id, status: item.status });
              $this.getCheckMenu(list, item.children);
            }
          })
        }
      },
      checkMenu(item) {
        item.hidden = !item.hidden
      }
    }
  }
</script>
<style lang="less" scoped>
  hr {
    border: 0.3px solid rgba(232, 232, 232, 1);
  }

  .contain {
    height: 600px;
  }

  .left {
    height: 600px;
    overflow-y: scroll;
    border-right: 0.3px solid #d9d9d9;
  }

  ::-webkit-scrollbar {
    width: 0.3px !important;
  }

  .right_total {
    max-height: 600px;
    overflow-y: scroll;
    padding-left: 16px;
  }

  .right {
    min-height: 100px;
  }

  .total {
    width: 240px;
  }

  .left_total {
    background: rgba(248, 248, 248, 1);
    border: 1px solid rgba(232, 232, 232, 1);
  }

  .clearfix, .title_font {
    margin-top: 20px;
    padding-left: 20px
  }

  .title_describe {
    margin-top: 5px;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 10px;
  }

  .title_font {
    font-size: 12px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    line-height: 18px;
  }

  .wisdoml {
    float: left;
  }

  .wisdomr {
    float: right;
    margin-right: 20px;
    width: 60px;
    height: 24px;
  }

  .wisdom_title {
    font-size: 14px;
    font-family: MicrosoftYaHei-Bold;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    line-height: 24px;
  }

  .nav {
    height: 64px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(232, 232, 232, 1);
  }

  .nav1 {
    height: 64px;
    background: #ffffff;
    border: 1px solid #e8e8e8;
    line-height: 64px;
    text-align: center;
  }

  .inner {
    font-family: MicrosoftYaHei-Bold;
    font-weight: bold;
    color: rgba(102, 102, 102, 1);
  }

  .switch_size {
    width: 60px;
    height: 24px;
  }

  .switch_size1 {
    width: 62px;
    height: 24px;
  }

  /*平台权限智慧AI样式*/
  .outer {
    margin-top: 20px;
    min-height: 50px;
  }

  .filed {
    margin-top: 21px;
    margin-left: 20px;
  }

  .ant-checkbox-wrapper {
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
  }

  .first {
    font-family: MicrosoftYaHei-Bold;
    font-weight: bold;
    color: #666;
  }

  .middle {
    margin-top: 20px;
    margin-left: 20px;
  }

  .last {
    margin-left: 20px;
  }
</style>