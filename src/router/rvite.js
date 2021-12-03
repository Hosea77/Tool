//引入所有views下.vue文件
const modules =
    import.meta.glob("../views/modules/sys/**/index.vue");

export const routerFilterFunc = (RouterItem = []) => {
    const arr = [];

    RouterItem.forEach(item => {
        const obj = {
            ...item,
            beforeComponent: item.component,
        };

        if (obj.childmeun) {
            obj.childmeun = routerFilterFunc(obj.childmeun);
        }

        const component = modules[`../views/modules/sys/${obj.url}/index.vue`];
        if (component) {
            obj.component = modules[`../views/modules/sys/${obj.url}/index.vue`];
        } else {
            // obj.component = () => import("@/views/common/404.vue");
            obj.component = null;
        }
        arr.push(obj);
    });
    return arr;
};