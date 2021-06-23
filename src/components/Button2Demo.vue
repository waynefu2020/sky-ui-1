<demo>不同尺寸</demo>
<template>
  <div>
    <div>
      <Button size="big">按钮</Button>
      <Button>按钮</Button>
      <Button size="small">按钮</Button>
    </div>
    <div>
      <Button size="big" theme="link">按钮</Button>
      <Button theme="link">按钮</Button>
      <Button size="small" theme="link">按钮</Button>
    </div>
    <div>
      <Button size="big" theme="text">按钮</Button>
      <Button theme="text">按钮</Button>
      <Button size="small" theme="text">按钮</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Button from '../lib/Button.vue'

export default{
  components:{Button}
}
</script>
