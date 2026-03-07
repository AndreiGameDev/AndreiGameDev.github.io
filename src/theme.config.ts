// cannot use path alias here because unocss can not resolve it
import { defineConfig } from "./toolkit/themeConfig";

export default defineConfig({
  siteName: "Portfolio",
  locale: "en", // 网站语言: "zh-CN" | "en"
  nav: [
    {
      href: "/",
      text: "Home",
      icon: "i-ri-home-line",
    },
    {
      text: "Posts",
      href: "/posts/",
      icon: "i-ri-quill-pen-fill",
      dropbox: {
        enable: true,
        items: [
          {
            href: "/categories/",
            text: "Categories",
            icon: "i-ri-book-shelf-fill",
          },
          {
            href: "/tags/",
            text: "Tags",
            icon: "i-ri-price-tag-3-fill",
          },
          {
            href: "/archives/",
            text: "Archives",
            icon: "i-ri-archive-line",
          },
        ],
      },
    },
    // Friends and Moments navigation removed per user request
  ],
  brand: {
    title: "Portfolio",
    subtitle: "Consists of unity, unreal and godot persona and team projects, and more",
    logo: "",
  },
  cover: {
    enable: false,
    preload: true,
    // 固定封面模式（可选）：
    // - enable: 是否启用固定封面
    // - url: 推荐填 "cover-1" ~ "cover-6"（来自 src/components/Images.astro 预设），
    //        或者填 public 路径/远程 URL（会使用 <img> 兜底渲染）
    fixedCover: {
      enable: true,
      url: "cover-4",
    },
    // gradient: true, // 渐变模式
    nextGradientCover: false, // 文章导航使用渐变背景
  },
  sidebar: {
    author: "Andrei-Ionut Bila-Nicola",
    description:
      "Passionate young game developer, currently studying BSc Computer Games Programming at the University of Gloucestershire.",
    social: {
      github: {
        url: "https://github.com/AndreiGameDev",
        icon: "i-ri-github-fill",
      },
      // twitter: {
      //   url: "https://twitter.com/yourname",
      //   icon: "i-ri-twitter-x-line",
      // },
      email: {
        url: "mailto:andreibilanicola@gmail.com",
        icon: "i-ri-mail-line",
      },
    },
  },
  footer: {
    since: 2025,
    icon: {
      name: "sakura rotate",
      color: "#ffc0cb",
    },
    count: false,
    powered: true,
    icp: {
      enable: false,
      // icon: '/beian-icon.png',
      icpnumber: "津ICP备2022001375号",
      icpurl: "https://beian.miit.gov.cn/",
      // beian: '网安备案号',
      // recordcode: 'xxxxx',
    },
  },
  widgets: {
    randomPosts: false,
    recentComments: false,
    recentCommentsLimit: 10,
  },
  comments: {
    enable: false,
    waline: {
      // 替换为你的 Waline 服务端地址，例如: https://comments.example.com
      serverURL: "",
      // 推荐与站点语言保持一致
      lang: "zh-CN",
    },
  },
  hyc: {
    // HYC 扩展总开关：关闭后其所有子功能不可用
    enable: false,
    aiSummary: {
      // AI 摘要卡片开关（受 hyc.enable 总开关控制）
      enable: false,
      // 卡片标题
      title: "AI 摘要",
      // 是否显示摘要使用的模型名称
      showModel: true,
    },
    aiRecommend: {
      // AI 相近文章推荐开关（受 hyc.enable 总开关控制）
      enable: false,
      // 默认展示前 3 篇
      limit: 3,
      // 最低相似度阈值（0.4 = 40%）
      minSimilarity: 0.4,
    },
  },
  nyxPlayer: {
    enable: false,
    preset: "shokax",
    darkModeTarget: ':root[data-theme="dark"]',
    urls: [
      {
        name: "默认歌单",
        url: "https://music.163.com/#/playlist?id=2943811283",
      },
    ],
  },
  visibilityTitle: {
    enable: false,
    leaveTitle: "👀 你先忙，我等你回来~",
    returnTitle: "🎉 欢迎回来！",
    restoreDelay: 3000,
  },
  home: {
    selectedCategories: [
      // { name: "Unity" },
      // { name: "Unreal Engine" },
      // { name: "Godot" },
      // { name: "Misc" },
    ],
    pageSize: 5,
    title: {
      behavior: "default",
      customTitle: "",
    },
  },
  friends: {
    // Friends section disabled by clearing links
    title: "",
    description: "",
    links: [],
  },
  copyright: {
    license: "CC-BY-NC-SA-4.0",
    show: false,
  },
});
