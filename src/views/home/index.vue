<template>
  <a-space direction="vertical" :style="{ width: '100%' }" :size="[0, 48]">
    <a-layout>
      <a-layout-header :style="headerStyle">
        <a-space>
          <div class="logo">
            <a href="https://vitejs.dev" target="_blank">
              <img src="/vite.svg" class="logo" alt="Vite logo" />
            </a>
          </div>
          <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" @click="handleMenuClick"/>
        </a-space>
      </a-layout-header>
      <a-layout-content :style="contentStyle">
        <a-breadcrumb :style="{ margin: '16px 0' }">
          <!-- <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item> -->
          <SendOutlined /><SendOutlined /><SendOutlined />
          <a-breadcrumb-item 
            v-for="(item, index) in breadcrumbItems" 
            :key="item.path"
            :href="index === breadcrumbItems.length - 1 ? undefined : item.path"
          >
            {{ item.meta.title }}
          </a-breadcrumb-item>
          <!-- 动态面包屑 -->
          <!-- <a-breadcrumb-item 
            v-for="(item, index) in breadcrumbItems" 
            :key="item.path"
            :href="index === breadcrumbItems.length - 1 ? undefined : item.path"
            @click.prevent="handleBreadcrumbClick(item.path)"
          >
            {{ item.meta.title }}
          </a-breadcrumb-item> -->
        </a-breadcrumb>
        <div :style="{ background: '#fff', padding: '24px', minHeight: '380px' }">
          <!-- 判断路由是否有匹配项，没有则显示默认页 -->
          <!-- <template v-if="route.matched.length > 0">
            <router-view />
          </template> -->
          <template v-if="isRouteAllowed">
            <router-view />
          </template>
          <template v-else>
            <!-- 默认页面内容 -->
            <div class="default-page">
              <!-- 默认页 -->
              <ColorfulCards />
            </div>
          </template>
        </div>
      </a-layout-content>
      <a-layout-footer :style="footerStyle">
        Collect Docs ©2025 Created by ZHENGQING
      </a-layout-footer>
    </a-layout>
  </a-space>
</template>

<script lang="ts" setup>
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
  AndroidOutlined,
  AppleOutlined,
  WindowsOutlined,
  BugOutlined,
  PartitionOutlined,
  GoldOutlined,
  FireOutlined,
  UserSwitchOutlined,
  DeleteOutlined,
  CodeOutlined,  // 新增：用于C++教程的图标
  SendOutlined,
} from '@ant-design/icons-vue';
import { h, ref, computed } from 'vue';
import { MenuProps } from 'ant-design-vue';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
import { useRouter, useRoute } from 'vue-router';  // 引入路由 // 引入路由相关
import ColorfulCards from "@/components/ColorfulCards.vue";

const router = useRouter();  // 创建路由实例
const route = useRoute();  // 获取当前路由信息

const current = ref<string[]>(['mail']);

console.log(PieChartOutlined, TeamOutlined, FileOutlined, MailOutlined, SettingOutlined)

console.log("home route::", route, "route.matched::", route.matched);

// 定义允许的路由路径列表（与switch中列举的路由对应）
const allowedRoutes = [
  '/',
  '/cpp-tutorial',
  '/rust-tutorial',
  '/login',
  '/python-tutorial/flask',
  '/python-tutorial/django',
  '/java-tutorial/spring-boot',
  '/go-tutorial/gin',
  '/typescript-javascript/react',
  '/typescript-javascript/vue3'
];

// 判断当前路由是否在允许列表中
const isRouteAllowed = computed(() => {
  // 检查当前路由是否在允许的路由列表中
  return allowedRoutes.includes(route.path);
});

// 处理菜单点击事件
const handleMenuClick = (e: any) => {
  console.log('click:::', e);
  // 根据不同的key导航到不同的路由
  switch(e.key) {
    case 'c-plus-plus':
      router.push('/cpp-tutorial');
      break;
    // 可以在这里添加其他菜单项的路由跳转逻辑
    case 'rust':
      router.push('/rust-tutorial');
      break;
    case 'wenzhi:1':
      router.push('/rust-tutorial');
      break;
    case 'zhanzai:2':
      router.push('/rust-tutorial');
      break;
    case 'exit:3':
      router.push('/login');
      break;
    case 'flask:1':
      router.push('/python-tutorial/flask');
      break;
    case 'django:2':
      router.push('/python-tutorial/django');
      break;
    case 'spring-boot:1':
      router.push('/rust-tutorial');
      break;
    // 有具体页面了再加
    default:
      router.push('/rust-tutorial');
      break;
    
  }
};

// 处理面包屑点击
// const handleBreadcrumbClick = (path: string) => {
//   router.push(path);
// };

// 跳转到推荐教程
const goToRecommended = () => {
  router.push('/python-tutorial/flask');
};

// 动态生成面包屑项
const breadcrumbItems = computed(() => {
  // 过滤掉没有meta.title的路由记录
  return route.matched.filter(item => item.meta && item.meta.title).map(item => ({
    path: item.path,
    meta: item.meta
  }));
});

const items = ref<MenuProps['items']>([
  {
    key: 'user',
    icon: () => h(UserSwitchOutlined),
    label: '用户',
    title: '用户',
    children: [
      {
        label: '张文治',
        key: 'wenzhi:1',
        icon: () => h(UserOutlined),
      },
      {
        label: '张湛哉',
        key: 'zhanzai:2',
        icon: () => h(UserOutlined),
      },
      {
        label: '退出',
        key: 'exit:3',
        icon: () => h(DeleteOutlined),
      },
    ],
  },
  {
    key: 'python',
    icon: () => h(AndroidOutlined),
    label: 'Python教程',
    title: 'Python教程',
    children: [
      {
        label: 'Flask',
        key: 'flask:1',
        icon: () => h(GoldOutlined),
      },
      {
        label: 'Django',
        key: 'django:2',
        icon: () => h(DesktopOutlined),
      },
    ],
  },
  {
    key: 'java',
    icon: () => h(AppleOutlined),
    label: 'Java教程',
    title: 'Java教程',
    children: [
      {
        label: 'Spring Boot',
        key: 'spring-boot:1',
        icon: () => h(GoldOutlined),
      },
      {
        label: 'Mybatis Flex',
        key: 'mybatix-flex:2',
        icon: () => h(DesktopOutlined),
      },
    ],
  },
  {
    key: 'go',
    icon: () => h(AppstoreOutlined),
    label: 'Go教程',
    title: 'Go教程',
    children: [
      {
        label: 'gin教程',
        key: 'gin:1',
        icon: () => h(FireOutlined),
      },
      {
        label: 'wails(桌面端)',
        key: 'wails:2',
        icon: () => h(FireOutlined),
      },
    ],
  },
  {
    key: 'typescript-javascript',
    icon: () => h(WindowsOutlined),
    label: 'Typescript+JavaScript教程',
    title: 'Typescript+JavaScript教程',
    children: [
      {
        type: 'group',
        label: '前端框架',
        children: [
          {
            label: 'React',
            key: 'react:1',
            icon: () => h(GoldOutlined),
          },
          {
            label: 'Vue3',
            key: 'vue3:2',
            icon: () => h(DesktopOutlined),
          },
        ],
      },
      {
        type: 'group',
        label: 'UI框架',

        children: [
          {
            label: 'Ant Design',
            key: 'ant-design:3',
            icon: () => h(BugOutlined),
          },
          {
            label: 'Element Plus',
            key: 'element-plus:4',
            icon: () => h(PartitionOutlined),
          },
        ],
      },
    ],
  },
  // {
  //   key: 'rust',
  //   label: h(
  //     'a',
  //     {
  //       href: 'https://vscode.dev',
  //       target: '_blank',
  //     },
  //     'Rust教程',
  //   ),
  //   title: 'Rust链接',
  //   icon: () => h(CodeOutlined),  // 添加图标
  // },
  {
    key: 'c-plus-plus',
    label: h(
      'a',
      {
        href: 'https://quickref.cn/', // https://cheatsheets.zip/ https://github.com/Fechin/reference
        target: '_blank',
      },
      'C++教程',
    ),
    title: 'C++链接',
    icon: () => h(CodeOutlined),  // 添加图标
  },
  {
    key: 'rust',
    label: 'Rust教程',
    title: 'Rust教程',
    icon: () => h(CodeOutlined),  // 添加图标
  },
  // {
  //   key: 'c-plus-plus',
  //   label: 'C++教程',  // 改为普通文本标签
  //   title: 'C++教程',
  //   icon: () => h(CodeOutlined),  // 添加C++相关图标
  // },
]);


const headerStyle = {
  textAlign: 'center',
  color: 'green',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#ffffff',
  position: 'fixed',
  width: '100%',
  zIndex: 1,
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 800,
  // lineHeight: '800px',
  // color: 'red',
  // backgroundColor: '#108ee9',
  padding: '0 50px',
  marginTop: '64px'
};
const footerStyle = {
  textAlign: 'center',
  color: 'pin',
  // backgroundColor: '#fff', // #7dbcea
};
// export {};
</script>

<style scoped>
</style>