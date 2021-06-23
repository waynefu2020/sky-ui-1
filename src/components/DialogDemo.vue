<template>
  <div>
    <h1>Dialog示例</h1>
    <h2>示例1</h2>
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
    <h2>示例2</h2>
    <Button @click="showDialog">show</Button>
  </div>
</template>

<script lang="ts">

import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {ref} from 'vue';
import {openDialog} from '../lib/openDialog.ts';

export default {
  components: {Button, Dialog},
  setup(){
    const x = ref(false)
    const toggle = ()=>{
      x.value = !x.value
    }
    const f1 = () =>{
      return true
    }
    const f2 = () =>{}
    const showDialog = ()=>{
      openDialog({
        title:'标题',
        content:'你好',
        ok(){console.log('ok');},
        cancel(){console.log('cancel');}
      })
    }
    return {x, toggle, f1,f2,showDialog}
  }
}
</script>

<style lang="scss" scoped>

</style>