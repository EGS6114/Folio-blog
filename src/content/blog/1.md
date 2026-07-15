---
title: Folio-blog快速部署
description: 本博客的快速部署和相关说明
pubDate: 2026-07-15
coverImage:
---

## 概述
 
 okmij-blog 是基于 Astro 框架构建的轻量化静态个人博客项目。支持部署在Cloudflare Pages、Vercel、GitHub Pages 等主流静态托管平台。可以接入pagescms快速推送文章

## 1.环境准备
 
 - Node.js：推荐 **v20 LTS**，最低兼容 v18
 - Git：用于克隆仓库、版本管理
 - npm：Node.js 自带包管理工具

## 2.拉取仓库

打开终端，依次执行指令
`git clone https://github.com/EGS6114/okmij-blog.git`

`cd okmij-blog`

`npm install`

`npm run dev`

启动成功后访问： [http://localhost:4321](http://localhost:4321)

打包静态资源：`npm run build`
编译完成后，静态文件输出至项目内*dist*文件夹。

## 3.修改配置文件

##### 站点基础配置
配置文件路径 `src/config.ts`

## 4.补充部署参考

**Cloudflare Pages / Vercel**
构建命令： `npm run build`
输出目录：`dist`

## 5.题外话

我之前也折腾过各种各样的博客框架，各种各样的主题，但是在研究透功能之后也就感觉累了，没意思了。感觉我的乐趣更多是在修bug，优化功能上，可惜我始终没能沉下心来写文章。

直到有一天，我在b站上看到了一个复古风格的博客主题，有一条评论是这样的：
  
  2000年的博客应该是这样的（附一张okmij的归档图）

我一瞬间就被吸引了，虽然简洁，但是，好像很有意思啊！于是我就做了这个博客，基于astro，我只要写好文章动态路由和页面模板就行，项目体量极小，几乎不可能出问题。之后，我就要扎下根来，好好更新文章了 (`･ω･´)ゞ
