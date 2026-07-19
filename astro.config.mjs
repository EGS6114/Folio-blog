// Astro 配置文件
// 详细文档：https://docs.astro.build/zh-cn/reference/configuration-reference/

import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // 网站地址，用于生成 sitemap 和 RSS
  site: 'https://folio.cc.cd',

  // Markdown 配置
  markdown: {
    // 代码高亮配置，使用 Shiki（Astro 内置）
    shikiConfig: {
      // 代码高亮主题，可选主题：https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'github-dark',
      // 启用自动换行
      wrap: true,
    },
  },

  // 构建配置
  build: {
    // 内联小于 4KB 的样式，减少 HTTP 请求
    inlineStylesheets: 'auto',
  },

  // 压缩输出 HTML
  compressHTML: true,

  
});