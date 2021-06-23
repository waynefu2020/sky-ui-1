<template>
  <Button @click="toggle">Toggle</Button>
  <Dialog v-model:visible="x" :close-on-click-overlay="false" :ok="f1" :cancel="f2">
    <template v-slot:content>
      <div>你好</div>
      <div>hi</div>
    </template>
    <template v-slot:title>
      <strong>加粗的标题</strong>
    </template>
  </Dialog>
</template>

<script lang="ts">
import Vue from 'vue';

export default {

}
</script>

<style lang="scss" scoped>

</style>