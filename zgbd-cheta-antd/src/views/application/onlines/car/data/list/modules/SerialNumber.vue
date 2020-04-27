<template>
    <div>
      {{ind+1}}
    </div>
</template>

<script>
  export default {
    name: 'SerialNumber',
    props: {
      record: {
        type: Object,
        default: () => {}
      },
      ind: {
        type: Object,
        default: () => 1
      },
    },
  }
</script>

<style scoped>

</style>