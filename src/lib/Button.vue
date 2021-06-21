<template>
  <button class="tree-button" :class="classes">
    <slot/>
  </button>
</template>

<script lang="ts">
import {computed} from 'vue';

export default {
  props: {
    theme: {
      type: String,
      default: 'button'
    },
    size: {
      type: String,
      default: 'normal'
    },
    level: {
      type: String,
      default: 'normal'
    }
  },
  setup(props) {
    const {theme, size, level} = props;
    const classes = computed(() => {
      return {
        [`tree-theme-${theme}`]: theme,
        [`tree-size-${size}`]: size,
        [`tree-level-${level}`]: level,
      };
    });
    return {classes};
  }
};
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$radius: 4px;
$blue: #40a9ff;
$red: red;
.tree-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);

  & + & {
    margin-left: 8px;
  }

  &:hover, &:focus {
    color: $blue;
    border-color: $blue;
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &.tree-theme-link {
    border: transparent;
    box-shadow: none;
    color: $blue;

    &:hover, &:focus {
      color: lighten($blue, 10%);
    }
  }

  &.tree-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;

    &:hover, &:focus {
      color: darken(white, 30%);
    }
  }

  &.tree-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }

  &.tree-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  &.tree-theme-button{
    &.tree-level-main{
      background: $blue;
      color: white;
      border-color: $blue;
      &:hover,&:focus{
        background: darken($blue,10%);
        border-color: darken($blue,10%);
      }
    }
    &.tree-level-danger{
      background: $red;
      color: white;
      border-color: $red;
      &:hover,&:focus{
        background: darken($red,10%);
        border-color: darken($red,10%);
      }
    }
  }
  &.tree-theme-link{
    &.tree-level-danger{
      color: $red;
      &:hover,&:focus{
        color: darken($red,10%);
      }
    }
  }
  &.tree-theme-text{
    &.tree-level-main{
      color: $blue;
      &:hover,&:focus{
        color: darken($blue,10%);
      }
    }
    &.tree-level-danger{
      color: $red;
      &:hover,&:focus{
        color: darken($red,10%);
      }
    }
  }
}
</style>