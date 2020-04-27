<template>
  <div style="background-color: #ececec; padding: 20px;">
    <a-form :form="form">
      <a-row :gutter="16">
        <a-col :span="12">
          <a-card title="java类" :bordered="false">
            <a-form-item label="选择项目" :label-col="{ span: 3 }" :wrapper-col="{ span: 21 }">
              <a-select :style="inputStyle" v-model="project">
                <a-select-option value="iot">物联网</a-select-option>
                <a-select-option value="mall">商城</a-select-option>
                <a-select-option value="system">后台</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item label="模块名" :label-col="{ span: 3 }" :wrapper-col="{ span: 21 }">
              <a-input :style="inputStyle" v-model="commons" @change="autocode"/>
            </a-form-item>
            <a-form-item label="entry" :label-col="{ span: 3 }" :wrapper-col="{ span: 21 }" help="遵循驼峰命名规范，默认生成ctrl,service，表名">
              <a-input :style="inputStyle" @change="change"/>
              <span>
                <a-tooltip title="驼峰命名规范">
                  <a-icon type="question-circle-o" />
                </a-tooltip>
              </span>
            </a-form-item>
            <a-form-item label="ctrl" :label-col="{ span: 3 }" :wrapper-col="{ span: 21 }">
              <a-input :style="inputStyle" v-model="ctrlName" @change="autocode"/>
            </a-form-item>
            <a-form-item label="service" :label-col="{ span: 3 }" :wrapper-col="{ span: 21 }">
              <a-input :style="inputStyle" v-model="serviceName" @change="autocode"/>
            </a-form-item>
            <a-form-item label="包路径" :label-col="{ span: 3 }" :wrapper-col="{ span: 21 }" help="遵循以com.zgbd.cheta.项目名.applicaton.模块。例如：com.zgbd.cheta.system.application.setting.menu">
              <a-input :style="inputStyle" v-model="packagePath" @change="autocode"/>
            </a-form-item>
            <a-button @click="doAutocode">生成代码</a-button>
          </a-card>
          <a-card title="java代码" :bordered="false">
            <a-tabs defaultActiveKey="1">
              <a-tab-pane :tab="entryName ? entryName + '.java' : '实体类'" key="1">
                <prism-editor :code="javaTemplate.entry" language="js"></prism-editor>
              </a-tab-pane>
              <a-tab-pane :tab="ctrlName ? ctrlName + '.java' : 'ctrl'" key="2">
                <prism-editor :code="javaTemplate.ctrl" language="js"></prism-editor>
              </a-tab-pane>
              <a-tab-pane :tab="serviceName ? serviceName + '.java' : 'service'" key="3">
                Content of tab 3
              </a-tab-pane>
            </a-tabs>
          </a-card>
        </a-col>
        <a-col :span="12">
          <a-card title="数据库" :bordered="false">
            <a-form-item label="表名" :label-col="{ span: 3 }" :wrapper-col="{ span: 21 }" help="默认追加id，create_time，create_by，update_time，update_by字段">
              <a-input :style="inputStyle" v-model="tableName" @change="autocode"/>
              <span>
                <a-tooltip title="数据库表名，以ct开头，不能驼峰命名，以下划线分开。例：ct_system_menu">
                  <a-icon type="question-circle-o" />
                </a-tooltip>
              </span>
            </a-form-item>
            <template v-for="(item, index) in tableFields" >
              <a-form-item :label="'字段' + (index + 1)" :label-col="{ span: 3 }" :wrapper-col="{ span: 21 }" style="margin-bottom:0;">
                <a-form-item :style="{ display: 'inline-block', width: 'calc(33% - 15px)', marginRight: '10px' }">
                  <a-input placeholder="字段名" v-model="item.fieldName" @change="autocode"/>
                </a-form-item>
                <a-form-item :style="{ display: 'inline-block', width: 'calc(33% - 15px)', marginRight: '10px' }">
                  <a-input placeholder="备注" v-model="item.fieldCommons" @change="autocode"/>
                </a-form-item>
                <a-select :style="{ display: 'inline-block', width: 'calc(33% - 15px)', marginRight: '10px' }" v-model="item.fieldType">
                  <a-select-option value="1-varchar(50)">文本（50字）</a-select-option>
                  <a-select-option value="2-varchar(500)">文本域 (500字)</a-select-option>
                  <a-select-option value="3-varchar(50)">下拉选择</a-select-option>
                  <a-select-option value="4-varchar(50)">附件上传</a-select-option>
                  <a-select-option value="5-mediumtext(0)">富文本</a-select-option>
                  <a-select-option value="6-mediumtext(0)">markdown</a-select-option>
                </a-select>
                <a-icon
                  class="dynamic-delete-button"
                  type="minus-circle-o"
                  @click="(function(index){removeTableField(index)})(index)"
                />
              </a-form-item>
            </template>
            <a-form-item label="新增" :label-col="{ span: 3 }" :wrapper-col="{ span: 21 }">
              <a-button
                type="dashed"
                :style="inputStyle"
                @click="addTableField"
              >
                <a-icon type="plus" /> Add field
              </a-button>
            </a-form-item>
          </a-card>
          <a-card title="建表语句" :bordered="false">
            <div>
              <prism-editor :code="sql" language="js"></prism-editor>
            </div>
          </a-card>
          <a-card title="前端项目" :bordered="false">
            <a-form-item label="预览地址：" :label-col="{ span: 3 }" :wrapper-col="{ span: 21 }">
              <a>{{ previewPath }}</a>
            </a-form-item>
            <div>
              <prism-editor :code="vueTemplate" language="html"></prism-editor>
            </div>
          </a-card>
        </a-col>
      </a-row>

    </a-form>
  </div>
</template>

<script>

  import "prismjs/themes/prism.css"
  import "vue-prism-editor/dist/VuePrismEditor.css";
  import AButton from "ant-design-vue/es/button/button";
  import Prism from 'prismjs';
  import moment from 'dayjs'
  import PrismEditor from 'vue-prism-editor'
  import { postAction } from '@/api/manage'


  import store from '@/store'
  import router from '@/router'

  export default {
    components: {AButton, PrismEditor},
    name: "Autocode",
    data(){
      return {
        inputStyle: {
          width: 'calc(100% - 30px)',
          marginRight: '10px'
        },

        project: 'iot',
        commons: '',

        entryName: '',
        ctrlName: '',
        serviceName: '',
        packagePath: '',

        tableName: '',
        tableFields: [],

        selectTemplate: 'entry',
        javaTemplateTitle: [{
          key: 'entry',
          tab: `${this.entryName}.java`
        },{
          key: 'ctrl',
          tab: `${this.ctrlName}.java`
        },{
          key: 'service',
          tab: `${this.serviceName}.java`
        }],
        javaTemplate:{},
        sql: ``,

        vueTemplate: '',
        vuePath: 'D:\\Java\\JavaEE\\Eclipse\\workspace-car\\zgbd-cheta-antd\\src\\views\\application\\iot\\sensor'
      }
    },
    created(){
      this.packagePath = 'com.zgbd.cheta.' + this.project + '.application';
    },
    methods: {
      change(e){
        this.entryName = e.target.value;
        this.ctrlName = e.target.value + 'Ctrl';
        this.serviceName = e.target.value + 'Service';
        this.tableName = 'ct_' + this.project + this.processField(e.target.value);
        this.autocode();
      },
      addTableField(){
        this.tableFields.push({fieldType: '1-varchar(50)'});
      },
      removeTableField(index){
        this.tableFields.splice(index,1);
        this.autocode();
      },
      processField(field){
        var result = '';
        var len = field.length;
        for (var i = 0; i < len;i++) {
          // 是否为大写
          if (/[A-Z]/.test(field.charAt(i))) {
            result += '_'
          }
          result += field.charAt(i).toLowerCase();
        }
        return result;
      },
      getDate(){
        return moment(new Date()).format('YYYY年MM月DD日')
      },
      doAutocode(){
        var json = {
          javaTemplate: [
            {packagePath: this.packagePath + '.entry', name: this.entryName, template: this.javaTemplate.entry},
            {packagePath: this.packagePath + '.ctrl', name: this.ctrlName, template: this.javaTemplate.ctrl},
            {packagePath: this.packagePath + '.service', name: this.serviceName, template: this.javaTemplate.service},
          ],
          sql: this.sql,
          packagePath: this.packagePath
        };
        var that = this;
        postAction('/application/online/autocode', json).then(res => {
          if(res.success){
            that.$message.success(res.message);
          }else{
            this.$message.warning(res.message);
          }
        })
        // this.addRouter();
      },
      addRouter(){
        var component = this.vueTemplate.replace(/\&lt;/g,"<").replace(/\&gt;/g,">");
        let menu = {
          path: '/testOnline',
          component: '<template><div>123</div></template>',
          meta: { title: '测试' },
          redirect: '/testOnline',
        }
        this.$router.push(menu);
        // 添加路由
        /*store.dispatch('UpdateAppRouter',  { constRoutes }).then(() => {
          router.addRoutes(store.getters.addRouters)
        })*/
        // this.$router.push(menu);
      },
      autocode(){
        this.javaTemplate = {
          entry: `package ${this.packagePath}.entry;

import com.zgbd.dao.jdbctemplate.annotation.Column;
import com.zgbd.dao.jdbctemplate.annotation.Table;
import com.zgbd.dao.jdbctemplate.entry.DTO;

import lombok.Getter;
import lombok.Setter;

/**
 * ${this.commons}
 * @author autocode
 * @date ${this.getDate()}
 */
@Setter
@Getter
@Table("${this.tableName}")
public class ${this.entryName} extends DTO{

	/**
	 * 主键id
	 */
	@Column("id")
	private String id;
  ${this.tableFields.map(item =>
  `

	/**
	 * ${item.fieldCommons}
	 */
	@Column("${item.fieldName}")
	private String ${item.fieldName};`).join('')}

}
`,
          ctrl: `package ${this.packagePath}.ctrl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import ${this.packagePath}.entry.${this.entryName};
import ${this.packagePath}.service.${this.serviceName};
import com.zgbd.core.AntdStatusContent;

import io.swagger.annotations.Api;

/**
 * ${this.commons}
 * @author autocode
 * @date ${this.getDate()}
 */
@RestController
@RequestMapping("/application/product/spec")
@Api(value="/application/product/spec",tags="${this.commons}")
@CrossOrigin("*")
public class ${this.ctrlName} {

  @Autowired
  private ${this.serviceName} service;

  /**
   * 新增
   * @param spec
   * @param list
   * @return
   */
  @RequestMapping(value="/add" ,method={RequestMethod.POST})
  public AntdStatusContent add(${this.entryName} data){
    int result = service.add(data);
    if (result != 0) {
      return new AntdStatusContent(AntdStatusContent.SUCCESS, "插入成功！");
    }
    return new AntdStatusContent(AntdStatusContent.ERROR, "插入失败！");
  }

  /**
   * 获取分页数据
   * @param pageSize
   * @param pageNo
   * @return
   */
  @RequestMapping(value="/getPage" ,method={RequestMethod.GET})
  public AntdStatusContent getPage(int pageSize, int pageNo){
    return new AntdStatusContent(AntdStatusContent.SUCCESS, "返回成功！", true, service.getPage(pageSize, pageNo));
  }

  /**
   * 获取单条数据
   * @param id
   * @return
   */
  @RequestMapping(value="/getData" ,method={RequestMethod.GET})
  public AntdStatusContent getData(String id){
    ${this.entryName} content = service.getDataById(id);
    if (content != null) {
      return new AntdStatusContent(AntdStatusContent.SUCCESS,"返回成功！", true, content);
    }
    return new AntdStatusContent(AntdStatusContent.ERROR,"返回失败！", false, content);
  }


  /**
   * 删除单条记录
   * @param id
   * @return
   */
  @RequestMapping(value="/delete" ,method={RequestMethod.DELETE})
  public AntdStatusContent delete(String id){
    Integer content = service.delete(id);
    return new AntdStatusContent(AntdStatusContent.SUCCESS,"删除成功！", true, content);
  }
}
          `,
          service: `package ${this.packagePath}.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ${this.packagePath}.entry.${this.entryName};
import com.zgbd.core.Page;
import com.zgbd.core.PageContent;
import com.zgbd.core.util.StringUtil;
import com.zgbd.dao.jdbctemplate.dao.JdbcDao;
import com.zgbd.dao.jdbctemplate.dao.Query;

/**
 * ${this.commons}
 * @author autocode
 * @date ${this.getDate()}
 */
@Service
public class ${this.serviceName} {

	@Autowired
	private JdbcDao jdbcDao;

	/**
	 * 新增或修改数据
	 * @param bean
	 * @return
	 */
	public int add(${this.entryName} bean) {
		if(StringUtil.isEmpty(bean.getId())){
			return jdbcDao.insert(bean);
		} else {
			return jdbcDao.update(bean);
		}
	}

	/**
	 * 获取分页数据
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public List<${this.entryName}> getPage(int pageSize, int pageNo) {
		PageContent pageContent = jdbcDao.queryForPage(Query.createQuery(${this.entryName}.class), new Page<>(pageSize, pageNo), ${this.entryName}.class);
		return (List<${this.entryName}>)pageContent.getData();
	}

	/**
	 * 根据id获取
	 * @param id
	 * @return
	 */
	public ${this.entryName} getDataById(String id) {
		return jdbcDao.queryById(id, ${this.entryName}.class);
	}

	/**
	 * 根据id删除
	 * @param id
	 * @return
	 */
	public Integer delete(String id) {
		return jdbcDao.delete(id, ${this.entryName}.class);
	}

	/**
	 * 根据id批量删除
	 * @param ids
	 * @return
	 */
	public Integer delete(String[] ids) {
		return jdbcDao.delete(ids, ${this.entryName}.class);
	}

}
          `
        }
        // {{#  layui.each(d.fields, function(index, item){ }}\n   `{{item.dataColumn}}` {{item.dataField}}({{item.lengthField}}) COLLATE utf8mb4_bin DEFAULT NULL COMMENT \'{{item.comment}}\',\n   {{#  }); }}
        this.sql = `
CREATE TABLE ${this.tableName} (
  id int(11) NOT NULL AUTO_INCREMENT,
  ${this.tableFields.map(item => `${item.fieldName} ${item.fieldType.substring(item.fieldType.indexOf('-') + 1, item.fieldType.length)} COLLATE utf8mb4_bin DEFAULT NULL COMMENT "${item.fieldCommons}",`).join('\n  ')}
  create_time varchar(50) COLLATE utf8mb4_bin DEFAULT NULL COMMENT "创建时间",
  create_by varchar(50) COLLATE utf8mb4_bin DEFAULT NULL COMMENT "创建人",
  update_time varchar(50) COLLATE utf8mb4_bin DEFAULT NULL COMMENT "修改时间",
  update_by varchar(50) COLLATE utf8mb4_bin DEFAULT NULL COMMENT "修改人",
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin COMMENT="${this.commons}";
        `
        this.vueTemplate = `
<template>
  <div>
    <a-spin :spinning="spinning">
      <a-button @click="handleAdd" type="primary" >新增</a-button>

      <a-table :columns="columns" :dataSource="data" :rowSelection="rowSelection">
         <span slot="action" slot-scope="text, record">
            <a @click="handleEdit(record)">编辑</a>
            <a-divider type="vertical" />
            <a-dropdown>
              <a class="ant-dropdown-link">
                更多 <a-icon type="down" />
              </a>
              <a-menu slot="overlay">
                <a-menu-item>
                  <a href="javascript:;" @click="handleDetail(record)">详情</a>
                </a-menu-item>
                <a-menu-item>
                  <a-popconfirm title="确定删除吗?" @confirm="() => handleDelete(record.id)">
                    <a>删除</a>
                  </a-popconfirm>
                </a-menu-item>
              </a-menu>
            </a-dropdown>
        </span>
      </a-table>
    </a-spin>
    <category-modal  title="新增分类" :visible="visible"  @ok="handleOk"  @cancel="handleCancel" ref="categorymodal">
    </category-modal>
  </div>
</template>

&lt;script&gt;
  import CategoryModal from './modules/CategoryModal'
  import {getCategoryList,deleteCategory,deleteCategoryList} from '@/api/api'
  import SpinLoad from  '@/util/SpinLoad'

  const columns = [{
    title: '分类名称',
    dataIndex: 'name',
    key: 'name',
    customRender: function (t, r, index) {
      if(r.parentId == '0'){
          return t;
      }else{
          return '├'+ t;
      }
    }
  }, {
    title: '描述',
    dataIndex: 'description',
    key: 'description',
  }, {
    title: '排序',
    dataIndex: 'sort_no',
    key: 'sort_no',
  },
    {
      title: '操作',
      dataIndex: 'action',
      scopedSlots: { customRender: 'action' },
      fixed:"right",
      align:"center",
      width:150
    }];

  const data = '';
  export default {
    components: {
      CategoryModal,
      SpinLoad,
    },
    data() {
      return {
        spinning : '',
        data,
        columns,
        addIframe: false
      }
    },
    created() {
      this.loadData();
    },
    methods :{
      loadData(){
        this.data = [];
        this.spinning = true;
        getCategoryList({pageSize: 10, pageNo: 1}).then((res)=>{
          if(res.success){
            this.data = res.result;
            this.spinning = false;
          }
        })
      },
      handleAdd(){
        this.$refs.categorymodal.add();
        this.$refs.categorymodal.title="新增";
      },
      handleEdit: function(record){
        this.$refs.categorymodal.edit(record);
        this.$refs.categorymodal.title="编辑";
      },
      handleDetail(record){
        this.$refs.categorymodal.edit(record);
        this.$refs.categorymodal.title="详情";
        this.$refs.categorymodal.disableSubmit = true;
      },
      handleDelete(id){
        var that = this;
        deleteCategory({id: id}).then((res)=>{
          if(res.success){
            that.$message.success(res.message);
            that.loadData();
          }else{
            that.$message.warning(res.message);
          }
        });
      },
      handleOk(e) {
        console.log(e);
        this.visible = false
        // 新增/修改 成功时，重载列表
        this.loadData();
      },
    }
  }

&lt;/script&gt;

<style scoped>
</style>
        `
      }
    }
  }
</script>
<style scoped>
</style>