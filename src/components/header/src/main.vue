<template>
  <header class="yo-header" :style="{ height }">
    <slot></slot>
  </header>
</template>

<script>
  export default {
    name: 'YoHeader',
    componentName: 'YoHeader',
    props: {
      height: {
        type: String,
        default: '60px'
      }
    }
  };
</script>
