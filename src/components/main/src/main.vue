<template>
  <Main class="yo-main" :style="{ height }">
    <slot></slot>
  </Main>
</template>

<script>
  export default {
    name: 'MMain',
    componentName: 'MMain',
    props: {
      height: {
        type: String,
        default: '60px'
      }
    }
  };
</script>
<style lang="scss" scoped>

</style>
