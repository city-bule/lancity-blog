# 蓝city Astro 博客

蓝city 是一个关于 AI、编程和影像表达的个人博客。项目使用 Astro + Tailwind CSS + Decap CMS，内容以 Markdown 文件保存在仓库中。

## 技术栈

- Astro 6
- Tailwind CSS 4
- Astro Content Collections
- Decap CMS
- Netlify Identity + Git Gateway

## 本地运行

```sh
npm install
npm run dev
```

本地地址：

```text
http://localhost:4321
```

后台入口：

```text
http://localhost:4321/admin
```

Decap CMS 本地写入需要另开一个终端运行本地代理：

```sh
npx decap-server
```

## 内容目录

```text
src/content/notes       学习笔记
src/content/portfolio   作品集
src/content/reviews     项目复盘
```

上传图片目录：

```text
public/images/uploads
```

## 常用命令

```sh
npm run dev       # 启动开发服务器
npm run build     # 构建生产版本
npm run preview   # 本地预览构建结果
```

## 部署到 Netlify

1. 将项目推送到 GitHub。
2. 在 Netlify 选择 New site from Git。
3. 选择对应 GitHub 仓库。
4. Build command 设置为 `npm run build`。
5. Publish directory 设置为 `dist`。
6. 部署完成后进入 Identity 设置，启用 Netlify Identity。
7. Registration 建议设置为 Invite only。
8. 在 Identity 的 Services 中启用 Git Gateway。
9. 访问 `https://你的域名/admin` 登录后台。

## 后台内容集合

Decap CMS 已配置三类内容：

- 学习笔记：标题、摘要、日期、分类、标签、封面图、草稿、正文
- 作品集：标题、简介、日期、作品类型、工具、标签、封面图、视频链接、草稿、正文
- 项目复盘：标题、摘要、日期、关联项目、分类、标签、封面图、草稿、正文

本地后台使用 Decap CMS 的 `local_backend` 写入 Markdown 文件。Decap 官方本地代理不支持 `editorial_workflow`，所以本地编辑时采用 `draft` 字段控制是否显示在前台。

新建文章默认 `draft: true`，保存后不会出现在博客前台；后续可以回到后台继续编辑。确认完成后，把“保存为草稿”关闭，让字段变成 `draft: false`，再保存一次，文章才会显示在网站上。

## 目录结构

```text
public/
  admin/
  images/
src/
  components/
  content/
  layouts/
  lib/
  pages/
  styles/
```
