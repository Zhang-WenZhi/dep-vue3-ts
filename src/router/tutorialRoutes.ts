import { RouteRecordRaw } from 'vue-router';

// 教程相关路由配置
const tutorialRoutes: RouteRecordRaw[] = [
  // C++教程路由
  {
    path: "/cpp-tutorial",
    name: "CppTutorial",
    component: () => import('@/components/tutorials/CppTutorial.vue'),
    meta: {
      title: 'C++教程',
      menuOrder: '50',
      requiresAuth: true // 假设需要登录
    },
    children: [
      {
        path: "/cpp-tutorial/basics",
        name: "CppBasics",
        component: () => import('@/components/tutorials/cpp/Basics.vue'),
        meta: {
          title: 'C++基础',
          menuOrder: '51'
        }
      },
      {
        path: "/cpp-tutorial/advanced",
        name: "CppAdvanced",
        component: () => import('@/components/tutorials/cpp/Advanced.vue'),
        meta: {
          title: 'C++高级特性',
          menuOrder: '52'
        }
      }
    ]
  },
  
  // Rust教程路由
  {
    path: "/rust-tutorial",
    name: "RustTutorial",
    component: () => import('@/components/tutorials/RustTutorial.vue'),
    meta: {
      title: 'Rust教程',
      menuOrder: '60',
      requiresAuth: true
    },
    children: []
  },
  
  // Python教程路由
  {
    path: "/python-tutorial",
    name: "PythonTutorial",
    // 子路由生效，要注释掉这一行
    // component: () => import('@/components/tutorials/PythonTutorial.vue'),
    meta: {
      title: 'Python教程',
      menuOrder: '20',
      requiresAuth: true
    },
    children: [
      {
        path: "/python-tutorial/flask",
        name: "FlaskTutorial",
        component: () => import('@/components/tutorials/python/Flask.vue'),
        meta: {
          title: 'Flask框架',
          menuOrder: '21'
        }
      },
      {
        path: "/python-tutorial/django",
        name: "DjangoTutorial",
        component: () => import('@/components/tutorials/python/Django.vue'),
        meta: {
          title: 'Django框架',
          menuOrder: '22'
        }
      }
    ]
  },
  
  // Java教程路由
  {
    path: "/java-tutorial",
    name: "JavaTutorial",
    component: () => import('@/components/tutorials/JavaTutorial.vue'),
    meta: {
      title: 'Java教程',
      menuOrder: '30',
      requiresAuth: true
    },
    children: []
  },
  
  // Go教程路由
  {
    path: "/go-tutorial",
    name: "GoTutorial",
    component: () => import('@/components/tutorials/GoTutorial.vue'),
    meta: {
      title: 'Go教程',
      menuOrder: '40',
      requiresAuth: true
    },
    children: []
  },
  
  // JS/TS教程路由
  {
    path: "/js-ts-tutorial",
    name: "JsTsTutorial",
    component: () => import('@/components/tutorials/JsTsTutorial.vue'),
    meta: {
      title: 'JavaScript/TypeScript教程',
      menuOrder: '50',
      requiresAuth: true
    },
    children: []
  }
];

/**
 * {
    path: '/main', // 登录后进入的主页面路径
    name: 'MainLayout',
    component: Layout, // 父组件：包含header、content、footer的布局
    meta: { requiresAuth: true }, // 需要登录才能访问
    children: [
      // 所有需要在content区域显示的组件，都作为Layout的子路由
      ...tutorialRoutes, // 教程相关路由（C++、Python等）
      {
        path: 'dashboard', // 控制台页面
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: { title: '控制台', menuOrder: '10' }
      }
    ]
  },
 * 
 */

export default tutorialRoutes;
    