export const Staticroutes = [{
        childmeun: [{
                id: 'yhcz-1',
                title: "充值中心",
                url: "topup",
                icon: "wallet",
                noadmin: true
            },
            {
                id: 'yhcz-2',
                title: "充值记录",
                url: "rrecord",
                icon: "s-order"
            }
        ],
        id: 'yhcz',
        title: "用户充值",
        url: "",
        icon: "s-finance"
    },
    {
        childmeun: [{
            id: 'shcz-1',
            title: "续费中心",
            url: "mtopup",
            icon: "wallet"
        }],
        id: 'shcz',
        title: "商户充值",
        url: "",
        icon: "s-finance",
        noadmin: true
    },
    {
        childmeun: [{
            id: 'yhgl-1',
            title: "用户列表",
            url: "user",
            icon: "s-order"
        }, {
            id: 'yhgl-2',
            title: "资料录入",
            url: "udatum",
            icon: "edit",
            notab: false,
            nokeep: true
        }],
        id: 'yhgl',
        title: "用户管理",
        url: "",
        icon: "s-custom"
    },
    {
        childmeun: [{
            id: 'shgl-1',
            title: "商户列表",
            url: "shop",
            icon: "s-order",
            noshop: true
        }],
        id: 'shgl',
        title: "商户管理",
        url: "",
        icon: "s-shop",
        noshop: true
    },
    {
        childmeun: [{
            id: 'dcgl-1',
            title: "电池列表",
            url: "battery",
            icon: "s-order",
            noadmin: true,
        }],
        id: 'dcgl',
        title: "电池管理",
        url: "",
        icon: "s-help",
        noadmin: true,
    },
    {
        childmeun: [{
            id: '4-1',
            title: "设备列表",
            url: "cabinet",
            icon: "s-order"
        }, ],
        id: '4',
        title: "设备管理",
        url: "",
        icon: "set-up"
    }, {
        childmeun: [{
            id: '5-1',
            title: "订单列表",
            url: "order",
            icon: "s-order"
        }],
        id: '5',
        title: "订单管理",
        url: "",
        icon: "s-data"
    }, {
        childmeun: [{
            id: '6-1',
            title: "套餐列表",
            url: "combo",
            icon: "s-order"
        }],
        id: '6',
        title: "套餐管理",
        url: "",
        icon: "date"
    },
    // {
    //     childmeun: [{
    //         id: 'mmgl-1',
    //         title: "设置密码",
    //         url: "password",
    //         icon: "unlock"
    //     }],
    //     id: 'mmgl',
    //     title: "密码管理",
    //     url: "",
    //     icon: "lock"
    // },
    // {
    //     childmeun: [{
    //         id: '7-1',
    //         title: "帮助",
    //         url: "help",
    //         icon: "question"
    //     }, {
    //         id: '7-2',
    //         title: "关于",
    //         url: "about",
    //         icon: "info"
    //     }],
    //     id: '7',
    //     title: "系统管理",
    //     url: "",
    //     icon: "menu"
    // },
];