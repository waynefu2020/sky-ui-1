<template>
    <button class="tree-button"
      :class="{[`tree-theme-${theme}`]: theme}"
    >
      <slot/>
    </button>
</template>

<script lang="ts">
export default {
  props:{
    theme: {
      type: String,
      default: 'button'
    }
  }
}
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$radius: 4px;
$blue: #40a9ff;
.tree-button{
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
  &+&{
    margin-left: 8px;
  }
  &:hover, &:focus{
    color: $blue;
    border-color: $blue;
  }
  &:focus{
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.tree-theme-link{
    border: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,&:focus{
      color: lighten($blue, 10%);
    }
  }
  &.tree-theme-text{
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,&:focus{
      color: darken(white, 30%);
    }
  }
}
</style>