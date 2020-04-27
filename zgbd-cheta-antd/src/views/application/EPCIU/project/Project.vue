<template>
  <div>
    <a-row>
      <a-col :span="12">
        <div class="top-boeder">
          <div>
            <div style="display: inline-block;margin-left: 20px;margin-bottom: 35px">
              <p class="top-hei">CheTa-management</p>
              <span>车塔-管理后台</span>
            </div>
            <div style="display: inline-block;margin-right: 20px;float: right">
              <a-button class="cheta-color">核心应用</a-button>
            </div>
          </div>
          <div>
            <a-row>
              <a-col :span="12" class="top-car">
                <div class="top-center top-hei">
                  IOS
                  <span class="top-ca">3434/s</span>
                </div>
              </a-col>
              <a-col :span="12">
                <div class="top-center top-hei">
                  机器数
                  <span class="top-ca">676755</span>
                </div>
              </a-col>
            </a-row>
          </div>
        </div>
      </a-col>
      <a-col :span="12">
        <div class="top-boeder">
          <div>
            <div style="display: inline-block;margin-left: 20px;margin-bottom: 35px">
              <p class="top-hei">YunFuWu-managemen</p>
              <span>管理后台</span>
            </div>
          </div>
          <div>
            <a-row>
              <a-col :span="12" class="top-car">
                <div class="top-center top-hei">
                  AAA运行
                  <span class="top-ca">3434/s</span>
                </div>
              </a-col>
              <a-col :span="12">
                <div class="top-center top-hei">
                  机器数
                  <span class="top-ca">56656</span>
                </div>
              </a-col>
            </a-row>
          </div>
        </div>
      </a-col>
      <a-row>
        <a-col :span="16">
          <a-col :span="12">
            <div class="ba">
              <a-row>
                <a-col :span="24">
                  <h3>
                    平均发布时常
                  </h3>
                </a-col>
                <a-col class="zun">
                  <div style="padding: 6px 45px">
                    <a-row>
                      <a-col :span="12" class="cheta-color" style="font-size: 32px;line-height:90px;text-align: center;">
                        346s
                      </a-col>
                      <a-col :span="12">
                        <p>
                          <span class="heione"> XXX机型</span>
                          <span class="hei">35s</span>
                        </p>
                        <p>
                          <span class="heione"> 其他机型</span>
                          <span class="hei">34s</span>
                        </p>
                        <p>
                          <span class="heione">周环比</span>
                          <span class="hei">0s</span>
                        </p>
                      </a-col>
                    </a-row>
                  </div>

                </a-col>
              </a-row>

            </div>
          </a-col>
          <a-col :span="12">
            <div class="ba">
              <a-row>
                <a-col :span="24">
                  <h3>
                    准确率
                  </h3>

                </a-col>
                <a-col :span="12" class="zun">
                  <a-progress type="circle" :percent="100" />

                </a-col>
                <a-col :span="12" class="zun">
                  <p>
                    <span class="heione"> 准确率</span>
                    <span class="hei">100%</span>
                  </p>
                  <p>
                    <span class="heione">准确率</span>
                    <span class="hei">100%</span>
                  </p>
                  <p>
                    <span class="heione"> 周环比</span>
                    <span class="hei">10%</span>
                  </p>
                </a-col>
              </a-row>

            </div>
          </a-col>
          <a-col :span="24">
            <div class="top-boeder baa">
              <ProjectTwo ref="ProjectTwo"></ProjectTwo>
            </div>
          </a-col>
        </a-col>
        <a-col :spn="8">
          <a-col :span="8">
            <div class="ba">
              <a-row>
                <a-col :span="24">
                  <h3>
                    周发布工单次数
                  </h3>
                </a-col>
                <a-col class="zun zunn">
                  <ProjectOne ref="ProjectOne"></ProjectOne>
                </a-col>
              </a-row>
            </div>
          </a-col>
        </a-col>
      </a-row>
    </a-row>
  </div>
</template>

<script>
  import ProjectOne from './modules/ProjectOne'
  import ProjectTwo from './modules/ProjectTwo'
  export default {
    name: 'Project',
    components: {
      ProjectOne,
      ProjectTwo,
    }
  }
</script>

<style scoped>
  .top-boeder {
    padding-top: 20px;
    margin: 10px;
    border-radius: 6px;
    box-shadow: 1px 1px 5px #F2F3F7;
  }

  .top-car {
    border-right: #F0F0F0 1px solid;
  }

  .top-center {
    text-align: center;
    border-top: #F0F0F0 1px solid;
    line-height: 20px;
    /*margin: 0px;*/
    /*padding: 0px;*/
    line-height: 56px;
  }

  .top-hei {
    color: #333333;
    font-size: 16px;
  }

  .top-ca {
    margin-left: 8px;
  }

  h3 {
    height: 16px;
    line-height: 16px;
    font-size: 16px;
    color: rgb(51, 51, 51);
    font-weight: bold;
    margin: 0px 0px 40px;
    padding: 0px;
  }

  .ba {
    padding: 20px;
    margin: 10px;
    border-radius: 6px;
    box-shadow: 1px 1px 5px #F2F3F7;
  }

  .baa {
    padding: 0px 20px;
    margin: 10px;
    border-radius: 6px;
    box-shadow: 1px 1px 5px #F2F3F7;
  }

  .zun {
    text-align: center;
  }

  .hei {
    color: #333;
    font-weight: 500;
    font-size: 16px;
  }

  .heione {
    display: inline-block;
    min-width: 80px;
    margin-right: 10px;
    color: #666;
    font-size: 14px;
  }
</style>