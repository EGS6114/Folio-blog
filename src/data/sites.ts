// src/data/sites.ts

export interface Site {
  name: string;
  url: string;
  desc: string;
  category: string; // 分类名称
}

export const sites: Site[] = [
  //  边缘服务器
  {
    name: "cloudflare",
    url: "https://www.cloudflare.com",
    desc: "全球领先的云平台与网络安全服务商",
    category:"边缘服务器"
  },
  {
    name: "腾讯云 (EdgeOne)",
    url: "https://edgeone.ai",
    desc: "腾讯云推出的全球边缘安全加速平台",
    category: "边缘服务器",
  },
  
  // 开发工具
  {
    name: "GitHub",
    url: "https://github.com",
    desc: "全球最大的代码托管平台",
    category: "开发工具",
  },

  //  视频平台
  {
    name: "bilibili",
    url: "hhttps://www.bilibili.com",
    desc: "国内知名弹幕网站",
    category: "视频平台",
  },
    {
    name: "YouTube",
    url: "https://www.youtube.com",
    desc: "全球最大视频平台",
    category: "视频平台",
  },
  
  //  框架与库
  {
    name: "TypeScript 官方文档",
    url: "https://www.typescriptlang.org/docs",
    desc: "TypeScript 官方文档与手册",
    category: "框架与库",
  },
  {
    name: "Astro 官方",
    url: "https://astro.build",
    desc: "Astro 框架官网",
    category: "框架与库",
  },
    {
    name: "Vite 官方",
    url: "https://vitejs.dev",
    desc: "下一代前端构建工具",
    category: "框架与库",
  },
  {
    name: "Vue.js 官方",
    url: "https://vuejs.org",
    desc: "渐进式 JavaScript 框架",
    category: "框架与库",
  },
  
  //搜索引擎
  {
    name: "谷歌",
    url: "https://www.google.com",
    desc: "全球最大的搜索引擎",
    category: "搜索引擎",
  },
  {
    name: "Bing",
    url: "https://www.bing.com",
    desc: "微软推出的搜索引擎",
    category: "搜索引擎",
  },
  {
    name: "DuckDuckGo",
    url: "https://duckduckgo.com",
    desc: "注重隐私保护的搜索引擎，支持 !bang快捷语法",
    category: "搜索引擎",
  },
    
  
  // 以后可以在这里继续添加，按分类归类
];