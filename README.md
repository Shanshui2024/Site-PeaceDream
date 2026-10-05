# 和梦团队 · PeaceDream 官网

简约直角风格的团队展示页，单页锚点导航，静态导出可部署至任意静态服务器。

## 技术栈

- Next.js 15（App Router，`output: 'export'`）
- React 19 + TypeScript
- TailwindCSS 4
- 动效：纯 CSS + IntersectionObserver（无动画库）

## 使用

```bash
npm install --registry=https://registry.npmmirror.com   # 国内镜像安装
npm run dev                                             # 本地开发
npm run build                                           # 静态导出至 out/
```

## 结构

- `src/data/site.ts` — 全部文案与数据（源自 2026 年度总结），改这里即可更新内容
- `src/components/` — Header / Hero / About / Stats / Studio / Events / Partners / Footer / Reveal
- `public/assets/images/team/` — 团队立绘（和屿 & 梦辞）

## 设计

- 全局直角边框、1px 细线分隔，黑白灰 + 暗红强调色
- 自动适配系统深浅色
- 滚动淡入、卡片 hover 变色、Hero 缓入等克制动效
