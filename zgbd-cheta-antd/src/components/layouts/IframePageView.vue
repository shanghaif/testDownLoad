<template>

  <iframe
    :id="url"
    :src="url"
    frameborder="0"
    width="100%"
    height="800px"
    scrolling="auto"></iframe>

</template>

<script>

  export default {
    name: "IframePageContent",
    data () {
      return {
        id:"",
      }
    },
    props: {
      url: {
        type: String,
        default: ''
      }
    },
    created () {
      this.goUrl()
    },
    updated () {
      this.goUrl()
    },
    watch: {
      $route(to, from) {
        this.goUrl();
      }
    },
    methods: {
      goUrl () {
        let url = this.url || this.$route.meta.url
        if (url !== null && url !== undefined) {
          if (url.charAt(0) === '/') {
            url = url.substring(1);
          }
          this.url = url;
        }
      }
    }
  }
</script>
<style>
</style>