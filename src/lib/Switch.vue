<template>
  <button class="sky-switch" @click="toggle" :class="classes"
          :disabled="disabled">
    <span></span>
  </button>
</template>

<script lang="ts">
import {computed, ref} from 'vue';

export default {
  props: {
    value: Boolean,
    size: {
      type: String,
      default: 'normal'
    },
    disabled: {
      type: Boolean,
      default: false
    },
  },
  setup(props, context) {
    const {size} = props
    const classes = computed(()=>{
      return {
        [`sky-size-${size}`]: size,
        ['sky-checked']: props.value
      }
    })
    const toggle = () => {
      context.emit('update:value', !props.value);
      console.log(props.value);
      //通知父组件，把这个pros.value取反值
    };
    return {toggle,classes};
  }
};
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.sky-switch {
  height: $h;
  width: $h*2;
  border: none;
  background: #bfbfbf;
  border-radius: $h/2;
  position: relative;
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    background: white;
    height: $h2;
    width: $h2;
    border-radius: $h2/2;
    transition: all 0.25s;
  }
  &[disabled]{
    cursor: not-allowed;
    background: #ececec;
    > span{background: #c9c9c9;}
  }
  &.sky-checked {
    background: #428aee;

    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }
  &.sky-size-big {
    margin-right: 14px;
  }

  &.sky-size-small {
    margin-left: 14px;
  }
  &:active {
    > span {width: $h2 + 4px}
  }

  &.sky-checked:active {
    > span {width: $h2 + 4px;margin-left: -4px}
  }
}

</style>