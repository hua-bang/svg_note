module.exports = {
    title: "Svg-Note",
    description: 'svg note',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'External', link: 'https://google.com' },
        ],
        sidebar: [
            {
                title: '首页',   // 必要的
                path: '/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1   // 可选的, 默认值是 1
            },
            {
                title: '效果展示',   // 必要的
                path: '/show',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,   // 可选的, 默认值是 1,
                children: [
                    ["/show/slide", "滑动图片"],
                    ["/show/gradient", "点击切换"],
                    ["/show/elongation", "图片伸长"],
                    ["/show/different_pictures", "图片点A见B"]
                ]
            },
            {
                title: '效果代码',   // 必要的
                path: '/code',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,   // 可选的, 默认值是 1,
                children: [
                    ["/code/slide", "滑动图片"],
                    ["/code/gradient", "点击切换"],
                    ["/code/elongation", "图片伸长"],
                    ["/code/different_pictures", "图片点A见B"]
                ]
            }
        ]
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@img': '../image'
            }
        }
    }
}