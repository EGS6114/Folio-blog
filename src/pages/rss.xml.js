// RSS 订阅生成文件
// 访问 /rss.xml 即可获取 RSS 订阅源
// 文档：https://docs.astro.build/zh-cn/guides/rss/

import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

// RSS 配置
export async function GET(context) {
  // 获取所有非草稿的博客文章
  const posts = await getCollection('blog', ({ data }) => !data.draft);

  // 按时间倒序排列
  const sortedPosts = posts.sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime()
  );

  return rss({
    // 博客标题
    title: 'Folio-blog',

    // 博客描述
    description: '记录学习、生活与思考',

    // 网站地址（从 astro.config.mjs 的 site 配置读取）
    site: context.site,

    // RSS 订阅的文章列表
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      // 文章链接
      link: `/blog/${post.slug}/`,
    })),

    // 自定义 XML 命名空间（可选）
    customData: `<language>zh-CN</language>`,
  });
}