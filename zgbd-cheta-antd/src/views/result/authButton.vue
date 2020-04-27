<template>
    <div v-if="isshow">
      <slot></slot>

    </div>
</template>

<script>
  export default {
    name: 'authButton',
    data(){
      return{
        isshow:false,
        data:[]
      }
    },
    props:{
      name:{
        type:String
      },

    },
    created(){
      console.log(this.name,"7777")
      // debugger
      var object
      object=this.$route.matched[this.$route.matched.length-1].meta
      this.getContent(object)
      // this.$route.matched[this.$route.matched.length-1].meta.children.forEach(item=>{
      //   if(item.perms){
      //     // debugger
      //     if(item.perms===this.name){
      //       this.isshow=true
      //     }
      //   }
      // })
    },
    methods:{
      getContent(item){
        if(item.children){
          item.children.forEach(inner=>{
            if(inner.perms){
              if(item.perms===this.name){
                this.isshow=true
              }
            }
            this.getContent(inner)
            console.log(inner.perms,"9999")
          })
        }
        if(item.perms){
          if(item.perms===this.name){
            this.isshow=true
          }
        }
      }
    }

  }
</script>

<style scoped>

</style>