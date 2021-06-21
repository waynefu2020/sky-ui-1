<template>
  <button class="tree-switch" @click="toggle" :class="{'tree-checked': value}">
    <span></span>
  </button>
</template>

<script lang="ts">
import {ref} from 'vue';

export default {
  props: {
    value: Boolean
  },
  setup(props, context) {
    const toggle = () => {
      context.emit('update:value', !props.value);
      //通知父组件，把这个pros.value取反值
    };
    return {toggle};
  }
};
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.tree-switch {
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

  &.tree-checked {
    background: #1890ff;

    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }

  &:active {
    > span {width: $h2 + 4px}
  }

  &.tree-checked:active {
    > span {width: $h2 + 4px;margin-left: -4px}
  }
}


</style>