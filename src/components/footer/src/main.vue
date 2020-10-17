<template>
  <Main class="yo-footer" :style="{ height }">
    <slot></slot>
  </Main>
</template>

<script>
  export default {
    name: 'YoFooter',
    componentName: 'YoFooter',
    props: {
      height: {
        type: String,
        default: '60px'
      }
    }
  };
</script>
