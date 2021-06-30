<template>
  <h1>Tabs示例</h1>
  <hr>
  <Demo :component="Tabs1Demo"/>
  <div class="tabs-attributes">
    <h2>Tabs 参数</h2>
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
        <td>title</td>
        <td>Tab标题</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Demo from './Demo.vue';
import Tabs1Demo from './Tabs1Demo.vue'
export default {
  components: {Demo},
  setup(){
    return {Tabs1Demo}
  }
}
</script>

<style lang="scss" scoped>

</style>