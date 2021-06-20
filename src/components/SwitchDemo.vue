<template>
  <div>
    <Switch v-model:value="bool"/>
<!--    y变化的时候，$event传递最新的值，$event是外部传context.emit()过来的第二个参数-->
  </div>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue';
import {ref} from 'vue';

export default {
  components:{Switch},
  setup(){
    const bool = ref(false)
    return {bool}
  }
}
</script>

<style lang="scss" scoped>

</style>