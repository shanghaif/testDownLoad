export default {
  methods: {
    filedValue: function (cols) {
      const colum=[]
      const lastObject=this.$route.matched[this.$route.matched.length-1].meta
      console.log(lastObject,"iiiiiiiii")
      var list = []
      this.treeToList(lastObject, list);
      cols.forEach(col =>{
        list.forEach(item=>{
          if(item.perms===col.filedKey){
            colum.push(col)
          }
        })

      })
      return colum
    },
    treeToList (obj, list) {
      list.push(obj);
      obj.children.forEach(item => {
        this.treeToList(item,list);
      })
    },
  }
}
