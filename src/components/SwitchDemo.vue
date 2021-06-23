<template>
  <div>
    <h1>Switch组件示例</h1>
    <Demo :component="Switch1Demo"/>
    <Demo :component="Switch2Demo"/>
  </div>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue';
import Switch1Demo from './Switch1Demo.vue';
import Switch2Demo from './Switch2Demo.vue';

import Demo from './Demo.vue';


export default {
  components: {Demo, Switch},
  setup() {
    return { Switch1Demo, Switch2Demo};
  }
};
</script>