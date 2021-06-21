<template>
  <div>
    <div>Dialog示例</div>
    <h1>示例1</h1>
    <Button @click="toggle">Toggle</Button>
    <Dialog :visible="x"></Dialog>
  </div>
</template>

<script lang="ts">


import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {ref} from 'vue';
export default {
  components: {Button, Dialog},
  setup(){
    const x = ref(false)
    const toggle = ()=>{
      x.value = !x.value
    }
    return {x, toggle}
  }
}
</script>

<style lang="scss" scoped>

</style>