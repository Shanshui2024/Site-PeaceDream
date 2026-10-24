# 和梦团队 · PeaceDream 官网

简约直角风格的团队官网：首页单页锚点导航，另有商单定价页与下载中心，静态导出可部署至任意静态服务器。

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

```
Site-PDHomeNew/
├── docs/plan.md            # 开发计划与设计规范
├── scripts/                # 资产生成脚本（og 分享图 / PWA 图标）
├── public/
│   ├── favicon.ico
│   ├── site.webmanifest
│   ├── icons/              # PWA 图标（scripts/gen-icons.py 生成）
│   └── images/             # 立绘、整合包封面、og 分享图
│       ├── covers/         # 整合包封面
│       ├── team/           # 团队立绘（和屿 & 梦辞）
│       └── og-*.png        # 社交分享卡片
└── src/
    ├── app/                # 路由：/ 首页 · /pricing 商单定价 · /download 下载中心
    ├── components/
    │   ├── layout/         # Header / Footer
    │   ├── sections/       # Hero / About / Stats / Studio / Events / Partners
    │   └── ui/             # Reveal / Section / icons
    └── data/               # 文案与数据集中管理，改这里即可更新内容
```

- `src/data/site.ts` — 站点文案与数据（源自 2026 年度总结）
  - `site.url` — 正式域名，用于 Open Graph 分享卡片绝对地址；换域名改这一处
  - `site.ogImage` — og 分享图路径，由 `scripts/gen-og.py` 生成时自动同步
- `src/data/pricing.ts` — 商单价格划分与售后说明
- `src/data/modpacks.ts` — 整合包与剪辑资源

## 设计

- 白卡圆角 + 1px 细线分隔，黑白灰 + 绿色强调色（`--accent`）
- 自动适配系统深浅色
- 滚动淡入、卡片 hover 变色、Hero 缓入等克制动效
- 尊重 `prefers-reduced-motion`

## 站点资源

| 文件 | 用途 |
| --- | --- |
| `public/images/og-*.png` | 社交分享卡片（1200×630，文件名带内容哈希防缓存） |
| `public/site.webmanifest` | PWA 清单 |
| `public/icons/icon-192.png` `icon-512.png` `icon-maskable.png` | PWA 图标 |

重新生成（需 Pillow + Noto CJK 字体）：

```bash
python3 scripts/gen-og.py      # 生成 og 分享图（自动同步 site.ts 的 ogImage）
python3 scripts/gen-icons.py   # 由 favicon.ico 生成 PWA 图标
```
