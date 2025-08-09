import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import tutorialRoutes from './tutorialRoutes';
import { isLogin } from '@/util/loginUtil';


// vue-cli + webpack 可以用request.context
// vite 用glob
const pageModules: Record<string, string> = import.meta.glob('@/views/**/page.ts', {
    eager: true,
    import: 'default',
});
console.log("pageModules: ", pageModules);
const compoModules: Record<string, () => Promise<unknown>> = import.meta.glob('@/views/**/index.vue');
console.log("compoModules: ", compoModules);
// : Array<RouteRecordRaw>
const viewsRoutes: RouteRecordRaw[] = Object.entries(pageModules).map(([pagePath, config]) => {
    console.log("pagePath: ", pagePath);
    console.log("config: ", config);
    // 第一个replace不管用！
    let path = pagePath.replace('../views', '').replace('/page.ts', '');
    path=path.split('/views')[path.split('/views').length - 1];
    console.log("path: ", path);
    path = path || '/';
    const name = path.split('/').filter(Boolean).join('-') || 'index';
    console.log("name: ", name);

    const compoPath = pagePath.replace('/page.ts', '/index.vue');
    console.log("compoPath: ", compoPath);

    return {
        path: path,
        name: name,
        component: compoModules[compoPath],
        meta: typeof config === 'string' ? JSON.parse(config) : config,
        children: [],
    }
});

console.log("viewsRoutes: ", viewsRoutes);
console.log("homeRoute::", viewsRoutes[1]);
viewsRoutes[1]?.children?.push(...tutorialRoutes) // 再添加教程路由
console.log("homeRoute::", viewsRoutes[1]);

// 合并路由数组：将 tutorialRoutes 加入到 viewsRoutes 中
const routes: RouteRecordRaw[] = [
  ...viewsRoutes,  // 先添加views目录的路由
  // ...tutorialRoutes  // 再添加教程路由
];
console.log("routes:", routes);

routes.push({
    path: '/:pathMatch(.*)*',
    name: '找不到页面',
    component: () => import('@/views/404/index.vue'),
    meta: {
        title: '匹配不到一律404页',
        menuOrder: '100',
    },
    children: [],
});
routes.push({ // 登录页
    path: "/",
    name: "根路径页面",
    redirect: "/login",
    component: () => import('@/views/login/index.vue'), // 按需引入,
    meta: {
        title: '起始登录页',
        menuOrder: '100',
    },
    children: [],
})

console.log("import.meta.env.BASE_URL: ", import.meta.env.BASE_URL);

const router = createRouter({
    history: createWebHistory('wenzhi-vue'), // createWebHashHistory 路径加#号 createWebHistory 路径不加#
    // history: createWebHistory(import.meta.env.BASE_URL), // createWebHashHistory 路径加#号 createWebHistory 路径不加#
    routes: routes,
});


/**
 * 
 * Vue Router 中的全局前置守卫（beforeEach），它的主要作用是：
1.统一设置页面标题
当路由切换时，会自动将页面标题（浏览器标签页显示的文字）设置为当前路由 meta 配置中的 title 属性值。
如果路由配置了 meta: { title: 'C++教程' }，则页面标题会变成 "C++ 教程"
如果没有配置 title，则默认显示 "默认标题"
2.路由跳转的拦截与控制
beforeEach 是路由跳转前触发的钩子函数，你可以在这里添加各种控制逻辑，比如：
权限验证（未登录用户禁止访问需要登录的页面）
登录状态判断（未登录自动跳转到登录页）
页面访问限制（某些页面只允许特定角色访问）

通过 next() 允许路由继续跳转。
 * 
 */
router.beforeEach((to, from, next) => {
  console.log('路由跳转前：', "to::", to, "from::", from, "next::", next);

  // 设置页面标题
  document.title = to.meta.title as string || '默认标题';

  const loginControlFlag = true;
  if (loginControlFlag) {
    next();
  } else {
    // -----------------------待后台sa-token登陆逻辑好了再用-------------------------
    // 权限判断
    if (to.meta.requiresAuth && !isLogin()) {
      // 需要登录但未登录，跳转到登录页，并记录当前路径（方便登录后返回）
      next(`/login?redirect=${to.fullPath}`);
    } else {
      // 已登录或无需登录，正常跳转
      next();
    }
  }
  
});

export default router;