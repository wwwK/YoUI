<template>
    <button @click="handlerClick" :type="nativeType"     :autofocus="autofocus" :disabled="disabled" class="yo-button"
            :class="['yo-button--'+type,
            size ? 'yo-button--' + size : '',
            {
              'is-plain':plain,
              'is-round': round,
              'is-circle':circle,
              'is-disabled': disabled,
              'is-loading': loading
              }]">
        <i v-if="icon && !loading" :class="icon"></i>
        <i class="yo-icon-loading" v-if="loading"></i>
        <span v-if="$slots.default">
            <slot></slot>
        </span>
    </button>
</template>

<script>
  export default {
    name: "YoButton",
    props: {
      type: {
        default: "default",
        type: String
      },
      size: {
        default: "medium",
        type: String
      },
      plain: {
        default: false,
        type: Boolean
      },
      nativeType: {
        type: String,
        default: 'button',
        validator: function (value) {
            return ['button', 'reset', 'submit'].indexOf(value) > -1;
        }
      },
      autofocus: Boolean,
      round: {
        default: false,
        type: Boolean
      },
      circle: {
        default: false,
        type: Boolean
      },
      disabled: {
        default: false,
        type: Boolean
      },
      loading: {
        default: false,
        type: Boolean
      },
      icon:{
        default: "",
        type: String
      }
    },
    methods: {
      handlerClick(e){
        this.$emit('click', e)
      }
    }
  }
</script>
