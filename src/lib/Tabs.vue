<template>
  <div class="sky-tabs">
    <div class="sky-tabs-nav" ref="container">
      <div class="sky-tabs-nav-item"
           v-for="(t, index) in titles"
           :ref="element => { if( t === selected) selectedItem = element }"
           :class="{selected: t === selected}"
           @click="select(t)" :key="index">{{ t }}
      </div>
      <div class="sky-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="sky-tabs-content">
      <component :is="current" :key="current.props.title"/>
    </div>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue';
import {computed, onMounted, ref, watchEffect} from 'vue';

export default {
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context) {
    const container = ref<HTMLDivElement>(null);
    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab');
      }
    });
    const current = computed(()=>{
      return defaults.find(tag => tag.props.title === props.selected)
    })

    onMounted(()=>{
      watchEffect(()=>{
        const {width} = selectedItem.value.getBoundingClientRect();
        indicator.value.style.width = width + 'px';
        const {left: left1} = container.value.getBoundingClientRect();
        const {left: left2} = selectedItem.value.getBoundingClientRect();
        const left = left2 - left1;
        indicator.value.style.left = left + 'px';
      });
    })


    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    const select = (title: string) => {
      context.emit('update:selected', title);
    };
    return {defaults, titles, current, select, selectedItem, indicator, container};
  }
};
</script>

<style lang="scss">
$blue: #428aee;
$color: #333;
$border-color: #d9d9d9;

.sky-tabs {

  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }

    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: left 250ms;
    }
  }

  &-content {
    padding: 8px 0;

    &-item {
      display: none;

      &.selected {
        display: block;
      }
    }
  }
}
</style>