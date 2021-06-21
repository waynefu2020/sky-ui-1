<template>
  <div>
  <div>Button 示例</div>
  <h1>示例1</h1>
    <div>
      <Button>按钮</Button>
      <Button theme="button">按钮</Button>
      <Button theme="link">链接</Button>
      <Button theme="text">文本</Button>
    </div>
  <h1>示例2</h1>
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
    <h1>示例3</h1>
      <div>
        <div>
          <Button level="main">按钮</Button>
          <Button>按钮</Button>
          <Button level="danger">按钮</Button>
        </div>
        <div>
          <Button level="main" theme="link">按钮</Button>
          <Button theme="link">按钮</Button>
          <Button level="danger" theme="link">按钮</Button>
        </div>
        <div>
          <Button level="main" theme="text">按钮</Button>
          <Button theme="text">按钮</Button>
          <Button level="danger" theme="text">按钮</Button>
        </div>
      </div>
    <h1>示例4</h1>
    <div>
      <Button disabled>禁用</Button>
      <Button theme="link" disabled>禁用链接</Button>
      <Button theme="text" disabled>禁用文本</Button>
    </div>
    <h1>示例5</h1>
    <div>
      <Button loading>加载中</Button>
      <Button>加载完毕</Button>
    </div>
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