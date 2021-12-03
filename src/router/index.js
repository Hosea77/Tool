import {
    createRouter,
    createWebHashHistory,
} from 'vue-router'

const routes = [{
    path: '/',
    component: () => import('@/views/common/home'),
    name: 'home',
    meta: {
        title: '首页',
    }
}, {
    path: '/table',
    component: () => import('@/views/eg-components/table'),
    name: 'table',
    meta: {
        title: '表格',
    }
}]

const router = createRouter({
    history: createWebHashHistory(),
    scrollBehavior: () => ({
        y: 0
    }), //使keep-alive缓存页面 滚动条跳到顶部
    isAddDynamicMenuRoutes: false, // 是否已经添加动态(菜单)路由
    routes,
})

router.beforeEach(async (to, from, next) => {
    next()
})

export default router