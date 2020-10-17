<template>
  <aside class="yo-aside" :style="{ width }">
    <slot></slot>
  </aside>
</template>

<script>
  export default {
    name: 'YoAside',

    componentName: 'YoAside',

    props: {
      width: {
        type: String,
        default: '300px'
      }
    }
  };
</script>
