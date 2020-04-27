<template>
	<uni-calendar :selected="info" :showMonth="false" @change="change" />
</template>

<script>
	import uniCalendar from '@/components/uni-calendar/uni-calendar.vue'
	export default {
		components: {
			uniCalendar
		},
		data(){
			return {
				info: []
			}
		},
		methods: {
			setSelected: function(data){
				this.info = data;
			},
			change: function(e){
				this.$emit('change')
			}
		}
	}
</script>

<style>
</style>
