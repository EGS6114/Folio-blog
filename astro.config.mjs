// Astro 配置文件
// 详细文档：https://docs.astro.build/zh-cn/reference/configuration-reference/

import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // 网站地址，用于生成 sitemap 和 RSS
  site: 'https://folio.cc.cd',

  // Markdown 配置
  markdown: {
    syntaxHighlight: 'prism',
    prismTheme: 'coy',
    // 可选主题：'dracula', 'okaidia', 'tomorrow', 'coy' 等
  },

  // 构建配置
  build: {
    vite: {
      build: {
        // 生成 sourcemap 会增加耗时，若不需要可关闭
        sourcemap: false,
      },
    },
    // 内联小于 4KB 的样式，减少 HTTP 请求
    inlineStylesheets: 'auto',
  },

  // 压缩输出 HTML
  compressHTML: true,

  
});