<template>
  <div>
    <h1>Button 按钮</h1>
    <p>按钮主要用于传递用户点击后触发的操作</p>
    <Demo :component="Button1Demo"/>
    <Demo :component="Button2Demo"/>
    <Demo :component="Button4Demo"/>
    <Demo :component="Button5Demo"/>
    <div class="button-attributes">
      <h2>Button 参数</h2>
      <table class="attributes-table">
        <thead>
        <tr>
          <th>参数</th>
          <th>说明</th>
          <th>类型</th>
          <th>可选值</th>
          <th>默认值</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>theme</td>
          <td>按钮类型</td>
          <td>String</td>
          <td>-</td>
          <td>false</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否禁用</td>
          <td>Boolean</td>
          <td>-</td>
          <td>false</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">

import Button from '../lib/Button.vue';
import Demo from './Demo.vue';
import Button1Demo from './Button1Demo.vue';
import Button2Demo from './Button2Demo.vue';
import Button4Demo from './Button4Demo.vue';
import Button5Demo from './Button5Demo.vue';

export default {
  components: {Demo, Button},
  setup() {
    return {Button1Demo, Button2Demo, Button4Demo, Button5Demo};
  }
};
</script>

<style lang="scss" scoped>
@import "src/helper.scss";
p{
  color: $font-color;
}
</style>