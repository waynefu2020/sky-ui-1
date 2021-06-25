<template>
  <div class="layout">
    <Topnav class="nav" :toggleMenuButtonVisible="true"/>
    <div class="actions">
      <a href="https://github.com/waynefu2020/tree-ui-1">
        <svg class="icon">
          <use xlink:href="#icon-github"></use>
        </svg>
        Github
      </a>
      <a href="">
        <svg class="icon">
          <use xlink:href="#icon-about"></use>
        </svg>
        关于
      </a>
    </div>
    <div class="content">
      <aside v-if="menuVisible">
        <h2>快速开始</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始</router-link>
          </li>
        </ol>
        <h2>组件</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 开关</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 按钮</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 弹窗</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 选项卡</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script lang="ts">

import Topnav from '../components/Topnav.vue';
import {inject, Ref} from 'vue';

export default {
  components: {Topnav},
  setup() {
    const menuVisible = inject<Ref<boolean>>('menuVisible');
    return {menuVisible}
  }
};
</script>

<style lang="scss" scoped>
$aside-index: 10;
.layout{
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;

  > .actions{
    text-align: right;
    margin-top: 16px;
    margin-right: 10px;
    z-index: 20;
    > a{
      margin: 0 12px;
      &:hover{
        color: #4086ed;
        text-decoration: none;
      }
    }
  }
  > .nav{
    flex-shrink: 0;
    background: white;
    box-shadow: 0 10px 60px 0 rgba(29,29,31,0.07);
  }
  > .content{
    background: white;
    flex-grow: 1;
    padding-top: 50px;
    padding-left: 156px;

    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
  .content{
    display: flex;

    > aside{
      flex-shrink: 0;
    }
    > main{
      flex-grow: 1;
      padding: 0 54px;
      height: 90vh;
    }
  }
  aside {
    background: #ddf1ff;
    width: 180px;
    padding: 94px 0 10px 0;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    z-index: $aside-index;
    border-right: 1px solid #ECECEC;

    > h2 {
      margin-bottom: 4px;
      padding: 0 16px;
      font-size: 24px;
    }

    > ol {
      line-height: 26px;
      > li {
        >a{
          position: relative;
          display: block;
          padding: 4px 16px;
          text-decoration: none;
        }
        .router-link-active{
          background: white;
          border-left: 3px solid #0d92ff;
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
        }
      }
    }
  }
  main{
    overflow: auto;
  }
}

</style>