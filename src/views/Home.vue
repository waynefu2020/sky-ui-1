<template>
  <div>
    <div class="topNavAndBanner">
      <Topnav/>
      <div class="banner">
        <h1>Sky UI</h1>
        <h2>一款轻量级的 Vue 3 UI 组件库</h2>
        <p class="actions">
          <router-link to="/doc" class="start">开始使用</router-link>
          <a href="https://github.com/waynefu2020/tree-ui-1">
            <svg class="icon">
              <use xlink:href="#icon-github"></use>
            </svg>
            Github
          </a>
        </p>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-vue"></use>
          </svg>
          <h3>基于 Vue 3</h3>
          <p>采用了Composition API</p>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-ts"></use>
          </svg>
          <h3>基于 TypeScript </h3>
          <p>源代码采用 TypeScript 书写（非严格检查）</p>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-light"></use>
          </svg>
          <h3>代码易读</h3>
          <p>每个组件的代码都力求简洁</p>
        </li>
      </ul>
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
$blue: #397be9;
$radius: 20px;
$color: #0a9f98;

.topNavAndBanner{
  background: linear-gradient(148deg, rgba(99, 194, 254) 0%, rgba(58, 125, 234) 100%);
  clip-path: ellipse(80% 60% at 50% 40%);
}
.features{
  margin: 64px auto;
  padding: 0 16px;

  @media (min-width: 800px) {
    width: 800px;
    >ul{
      >li{
        width: 50%;
      }
    }
  }
  @media (min-width: 1200px) {
    width: 1200px;
    >ul{
      >li{
        width: 33.3333%;
      }
    }
  }
  > ul{
    display: flex;
    flex-wrap: wrap;
    > li{
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
          "icon title"
          "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      > svg{
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      > h3{
        grid-area: title;
        font-size: 28px;
      }
      >p{
        grid-area: text;
      }
    }
  }

}
  .banner{
    color: white;
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    > h2{
      font-size: 22px;
      font-weight: lighter;
    }
    > .actions{
      padding: 8px 0;
      a{
        margin: 0 8px;
        background: white;
        color: $blue;
        display: inline-block;
        border-radius: $radius;
        padding: 8px 22px;
        > svg{
          fill: $blue;
        }
        &:hover{
          text-decoration: none;
        }
      }
    }
  }
</style>