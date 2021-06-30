<template>
    <div class="sky-radio">
        <input type="radio" id="sky-radio" name="sky-radio-input"
               :value="label" v-model="store"
               :disabled="disabled">
        <label for="sky-radio">
        <span class="sky-radio-name">
          <slot></slot>
        </span>
        </label>
      </div>
</template>

<script lang="ts">
import {ref} from 'vue';

export default {
  props:{
    label:{
      type: [String, Number],
      required: true
    },
    disabled:{
      type: Boolean
    }
  },
  setup(props, context){
    const store = ref('')
    return {store}
  }
}
</script>

<style lang="scss" scoped>
@import "src/helper.scss";
$color: #79a1eb;
.sky-radio{
  position: relative;
  display: inline-block;
  cursor: pointer;
  color: $font-color;
  white-space: nowrap;
  margin: 0.5rem 1rem;
}
input[type="radio"]{
  opacity: 0;

  + label{
    position: relative;
    cursor: pointer;
    &::before{
      content: '';
      position: absolute;
      left: -60%;
      top: -2%;
      border-radius: 50%;
      border: 1px solid #c5d9e8;
      width: 16px;
      height: 16px;

    }
    &:hover::before{
      border-color: $color;
      transition: border 0.2s ease 0s;
    }
    &::after{
      content: "";
      position: absolute;
      left: -52%;
      top: 18%;
      border-radius: 50%;
      width: 10px;
      height: 10px;
    }

  }

  &:checked{
    + label:after{
      background: $color;
    }
    + label:before{
      border-color: $color;
    }
  }
  &:focus{
    + label::before{
      box-shadow: 0 0 2px $color;

    }
  }

  &:disabled{
    + label:before{
      border: 1px solid #ddd;
      box-shadow: 0 0 4px #ddd;
      background: #f7f7f7;
      cursor: not-allowed;
    }
    + label:after{
      background: #f7f7f7;
      cursor: not-allowed;
    }
  }
}
</style>