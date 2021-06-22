<template>
  <div>
    <div class="topNavAndBanner">
      <Topnav/>
      <div class="banner">
        <h1>木林森UI</h1>
        <h2>清新极简的UI框架</h2>
        <p class="actions">
          <a href="https://github.com/waynefu2020/tree-ui-1">Github</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <svg class="icon">
        <use xlink:href="#icon-vue"></use>
      </svg>
      <svg class="icon">
        <use xlink:href="#icon-ts"></use>
      </svg>
      <svg class="icon">
        <use xlink:href="#icon-light"></use>
      </svg>
    </div>
  </div>

</template>

<script lang="ts">

import Topnav from "../components/Topnav.vue";
export default {
  components: {Topnav}
}
</script>

<style lang="scss" scoped>
$green: #02bcb0;
$radius: 4px;
$color: #0a9f98;

.topNavAndBanner{
  background: linear-gradient(148deg, rgba(227,255,253,1) 0%, rgba(183,233,230,1) 100%);
  clip-path: ellipse(80% 60% at 50% 40%);
}
.features{
  > svg{
    width: 64px;
    height: 64px;
  }
}
  .banner{
    color: $color;
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    > .actions{
      padding: 8px 0;
      a{
        margin: 0 8px;
        background: $green;
        color: white;
        display: inline-block;
        border-radius: $radius;
        padding: 8px 22px;
        &:hover{
          text-decoration: none;
        }
      }
    }
  }
</style>