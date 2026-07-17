// 文件路径：src/pages/rss.xml.js
// RSS 订阅生成文件
// 访问 https://你的域名/rss.xml 即可获取 RSS 订阅源
// 文档：https://docs.astro.build/zh-cn/guides/rss/

import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
// 引入 markdown-it 用于将 Markdown 渲染为 HTML
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

// 导出 GET 函数，Astro 会在请求时调用它生成 RSS
export async function GET(context) {
  // 1. 获取所有非草稿的博客文章
  //    getCollection 返回文章数组，每个文章包含：
  //    - data: frontmatter 数据（如标题、日期、描述等）
  //    - body: Markdown 原始内容（字符串）
  //    - slug: 文章的唯一标识符（用于生成链接）
  const posts = await getCollection('blog', ({ data }) => !data.draft);

  // 2. 按发布时间倒序排列（最新的在前）
  const sortedPosts = posts.sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime()
  );

  // 3. 调用 @astrojs/rss 提供的辅助函数生成 RSS XML
  return rss({
    // -------- 博客整体信息（channel 级别） --------
    // 博客标题
    title: 'Folio-blog',
    // 博客描述
    description: '记录学习、生活与思考',
    // 网站地址：从 astro.config.mjs 的 site 配置读取
    // 注意：你的 astro.config.mjs 中必须正确设置 site: 'https://111.xx'
    site: context.site,
    // 自定义 XML 命名空间和语言标签
    customData: `<language>zh-CN</language>`,

    // -------- 文章列表（item 级别） --------
    items: sortedPosts.map((post) => {
      // 4. 将文章 Markdown 内容渲染为 HTML
      //    注意：如果你的文章包含 MDX 或组件，需要额外处理
      //    对于纯 Markdown，markdown-it 可以直接渲染
      const contentHtml = parser.render(post.body);

      return {
        // 文章标题
        title: post.data.title,
        // 文章摘要（RSS 标准中的 description 字段）
        // 注意：这里只取 frontmatter 中的描述，不是正文
        description: post.data.description,
        // 【新增】文章完整内容（RSS 标准中的 content:encoded 字段）
        // 这样订阅器可以显示全文，而不只是标题
        content: contentHtml,
        // 发布时间
        pubDate: post.data.pubDate,
        // 文章链接（相对于 site 的路径）
        link: `/blog/${post.slug}/`,
        // 【可选】自定义每个 item 的额外 XML 标签
        // customData: `<author>你的名字</author>`,
      };
    }),

    // -------- 其他配置（可选） --------
    // 如果你的 astro.config.mjs 中设置了 trailingSlash: 'never'
    // 这里可以设置 trailingSlash: false 保持链接一致
    // trailingSlash: false,
  });
}