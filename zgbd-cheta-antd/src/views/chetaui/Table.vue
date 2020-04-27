<template>
  <a-spin class="table" :spinning="spinning">
    <a-table :columns="columns"
	    :dataSource="data"
	    :pagination="pagination"
	    @change="handleTableChange"
	  >
	  	<span class="handle" slot="action" slot-scope="text, record">
				<template v-if="record.updateBy == 'edit'&&name == 'ParameterList'">
          <a href="javascript:;" @click="handleDetail(record)">详情</a>
          <a href="javascript:;">
          	<a class="edit" @click.stop="handleEdit(record)">编辑</a>
          </a>
          <a href="javascript:;">
          	<a class="modification" @click.stop="modification(record.id)">修改</a>
          </a>
          <a href="javascript:;">
          	<a class="handleDelete" @click.stop="handleDelete(record.id)">删除</a>
          </a>
				</template>
				<template v-if="(record.updateBy == '' || record.updateBy == null)&&name == 'ParameterList'">
          <a href="javascript:;" @click="handleDetail(record)">详情</a>
          <a href="javascript:;">
          	<a class="edit" @click.stop="handleEdit(record)">编辑</a>
          </a>
				</template>
				<template v-if="name == 'maintenance'">
	        <a class="one" href="javascript:;" @click="toDetail(record)">详情</a>
			  </template>
		  </span>
  	</a-table>
  </a-spin>
</template>

<script>
	import { getAction } from '@/api/manage';
  export default {
    name: 'Table',
    props:{
    	columns:{
    		type: Array
    	},
    	data:{
    		type: Array
    	},
	    name: {
	    	type: String
	    },
	    pageSize: [String, Number]
    },
    data () {
      return {
        spinning: false,
        url:{
        	detail: "/application/car/account/detail"
        },
        pagination: {
					current: 1,
					pageSize: 10,
					total: 0
				}
      }
    },
    created() {
				this.pagination.pageSize = this.pageSize;
		},
		mounted(){
			
		},
		methods: {
			handleTableChange(pagination){
				const pager = { ...this.pagination };
        pager.current = pagination.current;
        this.pagination = pager;
        this.getData(this.pagination);
			},
			getData(pagination){
				this.$emit('getData',pagination);
			},
			handleDetail(record){
				getAction(this.url.detail,{
					vehicleId: record.id,
					vehicleNO: record.registrationNO
				})
				.then((res)=>{
					console.log(res);
					this.$parent.detailData = res.result;
					this.$parent.isShow = false;
				})
			},
			handleEdit(record){
				record.updateBy = 'edit';
			},
			toDetail(record){
				
			}
		}
  }
</script>

<style lang="less" scoped>
.table{
	.handle{
		&>a{
			margin-right: 20px;
			&.one{
				margin: 0;
			}
		}
		.modification{
			color: #faad14;
		}
		.handleDelete{
			color: #f5222d;
		}
	}
	.edit{
		color: #1890ff;
	}
}
</style>