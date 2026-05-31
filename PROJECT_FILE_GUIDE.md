# 项目文件说明

这份文档用于修改代码时快速定位文件作用。当前项目是一个基于 Astro 6、Tailwind CSS 4、Astro Content Collections 和 Decap CMS 的个人博客，内容主要以 Markdown 文件保存在 `src/content/` 中。

## 快速定位

- 修改整站 HTML 外壳、SEO、公共脚本：看 `src/layouts/BaseLayout.astro`
- 修改顶部导航：看 `src/components/Header.astro`
- 修改底部信息：看 `src/components/Footer.astro`
- 修改首页首屏：看 `src/components/Hero.astro`
- 修改首页各板块：看 `src/pages/index.astro`
- 修改列表卡片样式：看 `src/components/NoteCard.astro`、`src/components/PortfolioCard.astro`
- 修改学习资料文件夹卡片：看 `src/components/FolderCard.astro`
- 修改学习资料文件夹页面：看 `src/pages/notes/folders/[...folder].astro`
- 修改文章详情页结构：看 `src/layouts/PostLayout.astro`、`src/layouts/PortfolioLayout.astro`
- 新增或修改文章内容：看 `src/content/notes/`、`src/content/portfolio/`、`src/content/reviews/`
- 修改内容字段：同时改 `src/content.config.ts` 和 `public/admin/config.yml`
- 修改后台 CMS：看 `src/pages/admin/index.astro` 和 `public/admin/config.yml`
- 修改全局样式和 Markdown 正文排版：看 `src/styles/global.css`
- 修改构建、依赖、部署：看 `package.json`、`astro.config.mjs`、`netlify.toml`

## 根目录文件

| 文件 | 作用 | 修改时参考 |
| --- | --- | --- |
| `.gitignore` | 配置 Git 忽略规则。忽略 `dist/`、`.astro/`、`node_modules/`、日志文件和环境变量文件。 | 通常不用改；新增不想提交的生成文件时再补充。 |
| `astro-dev.err.log` | Astro 开发服务的错误日志文件。 | 运行本地服务出错时可查看；不属于核心源码。 |
| `astro-dev.out.log` | Astro 开发服务的普通输出日志文件。 | 查看本地服务启动和访问输出；不属于核心源码。 |
| `astro.config.mjs` | Astro 项目配置文件。当前通过 Vite 插件加载 Tailwind CSS。 | 如果要接入站点集成、改 Vite 配置、改构建行为，改这里。 |
| `netlify.toml` | Netlify 部署配置。设置构建命令 `npm run build`、发布目录 `dist`、Node 版本 `22`。 | 修改部署命令、输出目录或线上 Node 版本时改这里。 |
| `package.json` | 项目包信息、Node 版本要求、npm 脚本和依赖。 | 本地运行命令、升级 Astro/Tailwind、增加依赖时改这里。 |
| `package-lock.json` | npm 依赖锁定文件，记录精确安装版本。 | 不手动编辑；执行 `npm install` 或升级依赖后自动更新。 |
| `README.md` | 项目介绍、技术栈、本地运行、后台入口和部署说明。 | 给使用者看的快速说明，适合放运行和部署步骤。 |
| `tsconfig.json` | TypeScript 配置，继承 Astro 严格配置并排除 `dist`。 | 需要调整类型检查范围或严格度时改这里。 |
| `PROJECT_FILE_GUIDE.md` | 当前这份项目文件说明。 | 后续新增文件后建议同步补充。 |

## 目录和生成物

| 目录 | 作用 | 修改时参考 |
| --- | --- | --- |
| `.astro/` | Astro 自动生成的类型和缓存目录。 | 不手动修改，重新运行 Astro 会生成。 |
| `.git/` | Git 仓库内部数据。 | 不手动修改。 |
| `.vscode/` | VS Code 项目配置。 | 只影响编辑器体验，不影响网站线上效果。 |
| `dist/` | `npm run build` 生成的静态站点输出目录。 | 不手动修改；部署时 Netlify 发布此目录。 |
| `node_modules/` | npm 安装的第三方依赖。 | 不手动修改；依赖通过 `package.json` 管理。 |
| `public/` | 静态资源目录，里面的文件会按原路径发布到网站根路径。 | 放 favicon、后台配置、图片等无需经过打包处理的资源。 |
| `src/` | 主要源码目录。 | 组件、页面、布局、样式、内容集合都在这里。 |

## `.vscode/`

| 文件 | 作用 | 修改时参考 |
| --- | --- | --- |
| `.vscode/extensions.json` | 推荐安装 Astro VS Code 插件。 | 团队成员打开项目时会收到插件推荐。 |
| `.vscode/launch.json` | VS Code 调试/启动配置，运行 `./node_modules/.bin/astro dev`。 | 想通过 VS Code 一键启动开发服务时可调整。 |

## `public/`

`public` 下的资源会直接发布。例如 `public/images/site/hero-lancity.png` 在页面中使用路径 `/images/site/hero-lancity.png`。

| 文件 | 作用 | 修改时参考 |
| --- | --- | --- |
| `public/favicon.ico` | 浏览器传统 favicon 图标。 | 替换网站小图标时更新。 |
| `public/favicon.svg` | SVG 格式 favicon。 | 替换网站小图标时更新。 |
| `public/admin/config.yml` | Decap CMS 后台配置。定义 Git Gateway、媒体目录、中文界面和三个内容集合的字段。学习笔记集合已开启嵌套路径，可按文件夹保存文章。 | 修改后台表单字段、分类选项、媒体上传路径或学习资料文件夹能力时改这里；字段也要和 `src/content.config.ts` 保持一致。 |
| `public/images/avatar/.gitkeep` | 占位文件，用于让空的头像目录进入 Git。 | 后续如果放头像图片，可保留或删除。 |
| `public/images/site/hero-lancity.png` | 站点主视觉图。用于首页 Hero、作品卡片默认封面、Open Graph 分享图、关于页图片，以及部分内容封面。 | 替换整站主视觉时改这张图，影响范围较大。 |
| `public/images/site/section-learning.png` | 首页“我正在学习”板块背景图。 | 修改首页学习方向板块氛围图时替换。 |
| `public/images/site/section-notes.png` | 首页“最新学习笔记”板块背景图。 | 修改首页笔记板块背景时替换。 |
| `public/images/site/section-portfolio.png` | 首页“精选作品”板块背景图。 | 修改首页作品板块背景时替换。 |
| `public/images/site/section-reviews.png` | 首页“项目复盘”板块背景图。 | 修改首页复盘板块背景时替换。 |
| `public/images/site/section-about.png` | 首页“关于蓝city”板块背景图。 | 修改首页关于板块背景时替换。 |
| `public/images/site/section-contact.png` | 首页“联系”板块背景图。 | 修改首页联系板块背景时替换。 |
| `public/images/uploads/.gitkeep` | 占位文件，用于让上传图片目录进入 Git。 | Decap CMS 上传图片会放在这个目录。 |
| `public/images/uploads/c779ede3-f209-47e8-8174-caeb1f15fcde.png` | 作品《AI绘画-画稿显灵 · 纸上幻生》的封面图。 | 被对应作品 Markdown 的 `cover` 字段引用。 |
| `public/images/uploads/chatgpt-image-2026年4月30日-11_44_11.png` | 上传图片资源。当前未在源码中直接引用。 | 可作为后续内容封面或正文图片；不用时可以清理。 |
| `public/images/uploads/画中美人-·-破卷而出.png` | 作品《AI 绘图作品-画中美人 · 破卷而出》的封面图。 | 被对应作品 Markdown 的 `cover` 字段引用。 |

## `src/content.config.ts`

这个文件定义 Astro Content Collections 的数据结构。它决定 Markdown frontmatter 里哪些字段是合法字段。

当前有三个集合：

| 集合 | 目录 | 字段 |
| --- | --- | --- |
| `notes` | `src/content/notes/` | `title`、`description`、`date`、`category`、`tags`、`cover`、`draft` |
| `portfolio` | `src/content/portfolio/` | `title`、`description`、`date`、`type`、`tools`、`tags`、`cover`、`video`、`draft` |
| `reviews` | `src/content/reviews/` | `title`、`description`、`date`、`project`、`category`、`tags`、`cover`、`draft` |

修改字段时要同步检查：

- `public/admin/config.yml`：后台表单字段
- 列表页：`src/pages/**/index.astro`
- 详情页布局：`src/layouts/PostLayout.astro`、`src/layouts/PortfolioLayout.astro`
- 卡片组件：`src/components/NoteCard.astro`、`src/components/PortfolioCard.astro`

## `src/lib/`

| 文件 | 作用 | 修改时参考 |
| --- | --- | --- |
| `src/lib/content.ts` | 内容相关工具函数。包含日期格式化、按日期倒序排序、过滤草稿、生成详情页 URL。 | 内容列表排序、草稿显示规则、文章链接规则要改这里。 |

主要函数：

- `formatDate(date)`：把日期格式化为中文日期。
- `byDateDesc(a, b)`：按 `date` 从新到旧排序。
- `isPublished(entry)`：过滤 `draft: true` 的草稿，只显示已发布内容。
- `getEntryUrl(collection, id)`：根据集合名和内容 id 生成详情页地址。

## `src/components/`

| 文件 | 作用 | 修改时参考 |
| --- | --- | --- |
| `src/components/Header.astro` | 顶部导航栏。定义首页、学习笔记、作品集、关于我、联系我等导航项，并根据当前路径高亮。 | 增删导航入口、修改站点名称、调整移动端菜单时改这里。 |
| `src/components/Footer.astro` | 页面底部版权信息和“内容管理后台”入口。 | 修改版权文案、后台入口、底部链接时改这里。 |
| `src/components/Hero.astro` | 首页首屏主视觉区。包含背景图、标题、介绍文案和三个按钮。 | 修改首页第一屏、主按钮、个人介绍时改这里。 |
| `src/components/FolderCard.astro` | 学习资料文件夹卡片。展示文件夹名、路径、文章数量和最近更新时间。 | 修改 `/notes/` 页面里的文件夹入口样式时改这里。 |
| `src/components/NoteCard.astro` | 笔记和复盘列表卡片。展示日期、分类、标题、摘要和标签。 | 学习笔记列表和项目复盘列表共用；改样式会影响两类列表。 |
| `src/components/PortfolioCard.astro` | 作品集列表卡片。展示封面、日期、类型、标题、摘要和标签。没有封面时使用 `hero-lancity.png`。 | 改作品卡片封面比例、悬停效果、信息展示时改这里。 |
| `src/components/SectionTitle.astro` | 板块标题组件。展示小标题 `eyebrow`、主标题和描述。 | 首页和栏目页标题区复用；统一标题样式时改这里。 |
| `src/components/TagList.astro` | 标签列表组件。把标签数组渲染成 `#标签` 样式。 | 修改所有标签展示样式时改这里。 |

## `src/layouts/`

| 文件 | 作用 | 修改时参考 |
| --- | --- | --- |
| `src/layouts/BaseLayout.astro` | 整站基础布局。负责 HTML 文档结构、meta 信息、favicon、Open Graph 图片、Netlify Identity 脚本、Header、Footer 和全局样式引入。 | 所有页面都会受影响；改 SEO、全局脚本、公共布局时改这里。 |
| `src/layouts/PostLayout.astro` | 通用文章详情布局，用于学习笔记和项目复盘。展示返回链接、标题、摘要、日期、分类/关联项目、标签、封面、正文和上一篇/下一篇导航。 | 改笔记/复盘详情页结构时改这里。 |
| `src/layouts/PortfolioLayout.astro` | 作品详情布局。展示返回作品集、标题、摘要、日期、作品类型、工具、标签、封面、视频链接、正文和上一篇/下一篇导航。 | 改作品详情页结构时改这里。 |

## `src/pages/`

Astro 会根据 `src/pages/` 的文件路径自动生成路由。

| 文件 | 路由 | 作用 | 修改时参考 |
| --- | --- | --- | --- |
| `src/pages/index.astro` | `/` | 首页。读取三个内容集合，展示 Hero、学习方向、最新笔记、精选作品、最新复盘、关于和联系板块。 | 首页板块顺序、展示数量、背景图、首页文案都在这里。 |
| `src/pages/about.astro` | `/about/` | 关于页。介绍蓝city和学习方向。 | 修改个人介绍和关于页图片时改这里。 |
| `src/pages/contact.astro` | `/contact/` | 联系页。提供邮箱、笔记入口和作品入口。 | 修改联系方式或联系卡片时改这里。 |
| `src/pages/admin/index.astro` | `/admin/` | Decap CMS 后台入口页面。加载 Netlify Identity 和 Decap CMS 脚本。 | 修改后台入口页标题、CMS 脚本版本时改这里。 |
| `src/pages/notes/index.astro` | `/notes/` | 学习笔记列表页。读取 `notes` 集合，过滤草稿，按日期倒序展示，并按文章所在子目录生成“资料文件夹”入口。 | 修改笔记列表布局、文件夹展示、分类展示、排序规则时改这里。 |
| `src/pages/notes/folders/[...folder].astro` | `/notes/folders/:folder/` | 学习资料文件夹页。根据 Markdown 所在子目录生成文件夹页面，并只展示该文件夹下的文章。 | 修改文件夹详情页布局或文件夹筛选逻辑时改这里。 |
| `src/pages/notes/[...slug].astro` | `/notes/:slug/` 或 `/notes/:folder/:slug/` | 学习笔记详情页。支持普通文章和放在子文件夹里的文章，通过 `getStaticPaths` 为每篇已发布笔记生成页面，并传入上一篇/下一篇。 | 修改笔记详情生成逻辑或详情数据传递时改这里。 |
| `src/pages/portfolio/index.astro` | `/portfolio/` | 作品集列表页。读取 `portfolio` 集合，过滤草稿，按日期倒序展示，并列出作品类型。 | 修改作品列表布局、类型筛选展示、排序规则时改这里。 |
| `src/pages/portfolio/[slug].astro` | `/portfolio/:slug/` | 作品详情页。为每个已发布作品生成页面，并使用 `PortfolioLayout` 渲染。 | 修改作品详情生成逻辑或详情数据传递时改这里。 |
| `src/pages/reviews/index.astro` | `/reviews/` | 项目复盘列表页。读取 `reviews` 集合，过滤草稿，按日期倒序展示，并列出分类。 | 修改复盘列表布局、分类展示、排序规则时改这里。 |
| `src/pages/reviews/[slug].astro` | `/reviews/:slug/` | 项目复盘详情页。为每篇已发布复盘生成页面，并使用 `PostLayout` 渲染。 | 修改复盘详情生成逻辑或详情数据传递时改这里。 |

## `src/styles/`

| 文件 | 作用 | 修改时参考 |
| --- | --- | --- |
| `src/styles/global.css` | 全局 CSS。引入 Tailwind，设置字体、滚动行为、选中文本样式、链接默认样式，以及 Markdown 正文 `.article-content` 的标题、列表、代码、引用等排版。 | 改整站字体、正文排版、文章 Markdown 样式时改这里。 |

## `src/content/notes/`

学习笔记内容集合。每个 Markdown 文件会生成一篇 `/notes/` 下的详情页。`draft: true` 时不会在前台显示。

| 文件 | 内容作用 | 修改时参考 |
| --- | --- | --- |
| `src/content/notes/2026-05-28-build-lancity.md` | 学习笔记《网站搭建 001：我为什么开始搭建蓝city》。记录搭建个人博客的原因和技术选择。 | 修改网站搭建相关笔记正文或 frontmatter。 |
| `src/content/notes/2026-05-28-html-structure.md` | 学习笔记《编程学习 001：HTML 页面结构》。记录 HTML 页面结构的基础理解。 | 修改 HTML 学习笔记内容。 |
| `src/content/notes/2026-05-28-prompt-basic.md` | 学习笔记《AI 创作笔记 001：提示词的基本结构》。带有 `cover` 封面图。 | 修改提示词学习笔记内容或封面。 |
| `src/content/notes/2026-05-28-storyboard-basics.md` | 学习笔记《影像表达 001：什么是分镜》。记录分镜和镜头拆解基础。 | 修改分镜学习笔记内容。 |

笔记 frontmatter 常用字段：

```yaml
title: "文章标题"
description: "文章摘要"
date: 2026-05-28
category: "分类"
tags:
  - 标签
cover: "/images/site/hero-lancity.png"
draft: false
```

## `src/content/portfolio/`

作品集内容集合。每个 Markdown 文件会生成一篇 `/portfolio/` 下的详情页。作品详情页会额外展示作品类型、工具和可选视频链接。

| 文件 | 内容作用 | 修改时参考 |
| --- | --- | --- |
| `src/content/portfolio/2026-05-27-ai绘画-画稿显灵-·-纸上幻生.md` | 作品《AI绘画-画稿显灵 · 纸上幻生》。记录 AI 绘图提示词设计，并引用上传封面 `c779ede3-f209-47e8-8174-caeb1f15fcde.png`。 | 修改作品标题、封面、工具、提示词正文。 |
| `src/content/portfolio/2026-05-28-character-design.md` | 作品《AI 绘图作品-画中美人 · 破卷而出》。记录东方奇幻人像海报提示词，并引用同名上传封面。 | 修改角色设计提示词、封面或标签。 |
| `src/content/portfolio/2026-05-28-storyboard-room.md` | 作品《分镜设计 001：室内悬疑镜头练习》。记录 8 个镜头的室内悬疑段落设计。 | 修改分镜作品内容、工具或标签。 |

作品 frontmatter 常用字段：

```yaml
title: "作品标题"
description: "作品摘要"
date: 2026-05-28
type: "AI 绘图"
tools:
  - 使用工具
tags:
  - 标签
cover: "/images/uploads/example.png"
video: "https://example.com"
draft: false
```

## `src/content/reviews/`

项目复盘内容集合。每个 Markdown 文件会生成一篇 `/reviews/` 下的详情页。详情页使用 `PostLayout.astro`。

| 文件 | 内容作用 | 修改时参考 |
| --- | --- | --- |
| `src/content/reviews/2026-05-28-first-ai-video-review.md` | 复盘《项目复盘 001：第一次 AI 视频练习总结》。记录 AI 视频练习的目标、问题、修改过程和下一步改进。 | 修改复盘内容、关联项目、封面或标签。 |

复盘 frontmatter 常用字段：

```yaml
title: "复盘标题"
description: "复盘摘要"
date: 2026-05-28
project: "关联项目"
category: "项目复盘"
tags:
  - 标签
cover: "/images/site/hero-lancity.png"
draft: false
```

## 内容从 Markdown 到页面的流程

1. `src/content.config.ts` 定义每类内容允许有哪些字段。
2. Markdown 文件放进 `src/content/notes/`、`src/content/portfolio/` 或 `src/content/reviews/`。
3. 列表页通过 `getCollection()` 读取内容。
4. `isPublished()` 过滤掉 `draft: true` 的草稿。
5. `byDateDesc()` 按日期从新到旧排序。
6. 列表页用 `NoteCard` 或 `PortfolioCard` 渲染卡片。
7. 学习笔记会通过 `getEntryFolder()` 从内容 id 中识别所在子文件夹，例如 `ai-video/first-note` 会归入 `ai-video` 文件夹。
8. `[...slug].astro` 动态详情页通过 `getStaticPaths()` 为每篇内容生成页面，子文件夹路径也会保留在 URL 中。
9. `notes/folders/[...folder].astro` 会为每个实际存在文章的文件夹生成独立列表页。
10. 详情页布局用 `PostLayout` 或 `PortfolioLayout` 渲染正文、封面、标签和上一篇/下一篇。

## 修改代码时的注意点

- 如果只是写文章，优先改 `src/content/` 下的 Markdown，或通过 `/admin/` 后台编辑。
- 学习资料支持子文件夹。把文章保存为 `src/content/notes/ai-video/文章名.md` 后，前台会生成 `/notes/ai-video/文章名/`，并在 `/notes/` 显示 `ai-video` 文件夹入口。
- 在 Decap CMS 后台新建学习笔记时，可在“保存路径（文件夹/文件名）”里填写 `ai-video/2026-05-29-first-note` 这类路径；填写新的第一段路径即可创建新文件夹。
- 如果新增 frontmatter 字段，必须同时修改 `src/content.config.ts` 和 `public/admin/config.yml`，否则构建或后台编辑可能不一致。
- 如果希望草稿不显示，设置 `draft: true`；前台过滤逻辑在 `src/lib/content.ts` 的 `isPublished()`。
- 图片放到 `public/images/uploads/` 后，Markdown 中使用 `/images/uploads/文件名.png`。
- 首页板块背景图来自 `src/pages/index.astro` 的 `sectionBackgrounds`。
- 全站公共标题、描述、分享图在 `src/layouts/BaseLayout.astro`。
- 不要直接编辑 `dist/`、`.astro/`、`node_modules/`，这些都是生成或安装目录。
- `package-lock.json` 不手动改；依赖变更通过 npm 命令完成。
