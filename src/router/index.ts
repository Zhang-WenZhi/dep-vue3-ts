import { createRouter, createWebHistory } from 'vue-router';


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
const routes: any = Object.entries(pageModules).map(([pagePath, config]) => {
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
        meta: config,
        children: [],
    }
});
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

export default createRouter({
    history: createWebHistory(), // createWebHashHistory 路径加#号 createWebHistory 路径不加#
    routes: routes,
});
