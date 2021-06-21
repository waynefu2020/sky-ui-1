<template>
  <div>Button 示例</div>
  <h1>示例1</h1>
  <div>
    <Button>我是默认按钮</Button>
    <Button theme="button">我是按钮</Button>
    <Button theme="link">我是链接</Button>
    <Button theme="text">我是文本</Button>
  </div>
</template>

<script lang="ts">


import Button from '../lib/Button.vue';
export default {
  components: {Button},
  setup(){
    const onClick = ()=>{
      console.log('你好');
    }
    return {onClick}
  }
}
</script>

<style lang="scss" scoped>

</style>