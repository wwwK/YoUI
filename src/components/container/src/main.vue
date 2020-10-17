<template>
    <section class="yo-container" :class="{'is-direction': isVertical }" >
        <slot></slot>
    </section>
</template>

<script>
    export default {
      name: "YoContainer",
      props:{
        direction:{
          type: String,
          default: "vertical"
        }
      },
      computed:{
        isVertical(){
          if (this.direction === 'vertical') {
            return true;
          } else if (this.direction === 'horizontal') {
            return false;
          }
          return this.$slots && this.slots.default ?
            this.$slots.default.some(vnode=>{
                const tag = vnode.componentOptions && vnode.componentOptions.tag;
                return tag === 'yo-header' || tag === 'yo-footer';
             }) : false;
        }
      }
    }
</script>
