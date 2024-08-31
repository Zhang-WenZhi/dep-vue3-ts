<template>
  <!-- 不能省 -->
  <!-- <router-view /> -->
  <a-config-provider :locale="zhCN">
    <router-view />
  </a-config-provider>
</template>

<script setup lang="ts">
// <script lang="ts">
// export default {

// }
import zhCN from "ant-design-vue/es/locale/zh_CN";

console.log('App router-view 路由导航！');
</script>

<style scoped></style>
