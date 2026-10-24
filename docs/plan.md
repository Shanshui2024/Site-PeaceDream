# 和梦团队（PeaceDream）官网 · 开发计划

> 定位：团队 MC 自媒体
> 风格：简约简洁 · 直角边框 · 少量动效
> 交付形态：Next.js 静态导出（`output: 'export'` → `out/`，可直接托管任意静态服务器）

---

## 一、信息来源

| 来源 | 用途 |
| --- | --- |
| `2026和梦年终.pdf`（36页） | 团队数据、发展历程、工作室、活动、合作方等真实内容 |
| `pd.shanshui.site`（现役站点） | 文案基调："优秀 · 和平 · 创意 · 友善"、服务状态栏、教程入口 |
| `和梦团队立绘.png` | 首页主视觉：虚拟人物 和屿 & 梦辞 |

## 二、设计规范

- **配色**：以黑白灰为主基调 + 单一强调色（团队黑金/暗红点缀，呼应立绘红角），支持跟随系统深浅色
- **边框**：全局直角（`rounded-none`），1px 细线分隔，卡片用边框而非阴影
- **字体**：系统字体栈 + 等宽数字用于数据展示
- **动效（克制）**：
  - 滚动进入视口时淡入上移（IntersectionObserver，仅 CSS 过渡）
  - 卡片 / 链接 hover：边框变色 + 轻微位移
  - Hero 立绘：缓入动画一次
  - 不使用大型动画库，纯 CSS 实现

## 三、技术选型

| 项 | 选择 | 说明 |
| --- | --- | --- |
| 框架 | Next.js 15 (App Router) | `output: 'export'` 静态导出 |
| UI | React 19 + TypeScript | |
| 样式 | TailwindCSS 4 | `@tailwindcss/postix` 一行接入 |
| 动画 | 纯 CSS + IntersectionObserver | 不引入 framer-motion，保持轻量 |
| 包管理 | npm（registry.npmmirror.com 镜像） | 国内源安装 |

## 四、页面结构（首页单页锚点 + 商单定价 / 下载中心子页）

```
Header（固定顶栏：Logo文字 PEACEDREAM / 锚点导航 / 直角按钮）
├── #hero     首屏：团队名 + Slogan「以最纯粹的态度，守最适人的温度」+ 团队立绘
├── #about    关于团队：创立 2023.7.11、定位（MC/自媒体）、理念四词（优秀·和平·创意·友善）
├── #stats    数据一览：472 体系人数、147% 年增长、3 台长期服务器、2 个长期域名
├── #studio   和梦精品工作室：配音组20 / 技术制作5 / 设计制作5 / 动画部3 / 剪辑部3 / 建筑后勤4
├── #events   活动动态：盛夏和梦杯（2027 第三届）、四年之约线下团建（成都·2027.7）、新年大行动、城市追杀
├── #partners 合作伙伴：空晶宇宙 / 千阙云庭 / 段山岚客 / 方块烬火社 / 暗潮学院 / 琼鸽团队 / 缄厄斯札记 / 亿讯云
├── /pricing  商单定价：十大类目价格划分 + 售后说明 + 商单申请表入口
├── /download 下载中心：MC 整合包 / 数据包 / 剪辑资源分享
└── Footer    口号、快速链接（pd.shanshui.site 教程/服务状态）、© 2023-2027 PeaceDream
```

## 五、项目结构

```
Site-PDHomeNew/
├── docs/
│   └── plan.md             # 本文件：开发计划与设计规范
├── README.md
├── next.config.ts          # output: 'export', images unoptimized
├── package.json
├── tsconfig.json
├── postcss.config.mjs
├── scripts/                # 资产生成脚本（og 分享图 / PWA 图标）
├── public/
│   ├── favicon.ico
│   ├── site.webmanifest
│   ├── icons/              # PWA 图标
│   └── images/
│       ├── covers/         # 整合包封面
│       ├── team/           # 团队立绘（和屿 & 梦辞）
│       └── og-*.png        # 社交分享卡片
└── src/
    ├── app/
    │   ├── layout.tsx      # 元信息、字体、主题
    │   ├── page.tsx        # 首页组装（单页锚点）
    │   ├── globals.css     # Tailwind 入口 + 动效 keyframes
    │   ├── pricing/        # 商单定价页
    │   └── download/       # 下载中心
    ├── components/
    │   ├── layout/         # Header / Footer
    │   ├── sections/       # Hero / About / Stats / Studio / Events / Partners
    │   └── ui/             # Section（区块容器，标题+编号）/ Reveal（滚动淡入）/ icons
    └── data/
        ├── site.ts         # 站点文案/数据集中管理，便于后续修改
        ├── pricing.ts      # 商单价格划分与售后说明
        └── modpacks.ts     # 整合包与剪辑资源
```

## 六、开发步骤（每步一次 commit）

1. **chore: 项目脚手架** — 手写 package.json / tsconfig / next.config / globals.css，npmmirror 源安装依赖，确认 `next build` 通过
2. **feat: 数据层** — `src/data/site.ts` 收录 PDF 中的真实数据与文案
3. **feat: 布局与首屏** — Header + Hero（立绘 + slogan）+ Footer
4. **feat: 内容区块** — About / Stats / Studio / Events / Partners
5. **feat: 动效** — Reveal 滚动淡入 + hover 细节
6. **chore: 构建验证** — `next build` 产出 `out/`，README 完善

## 七、注意事项

- 立绘为透明底 PNG，深浅色下均可展示；导出时关闭图片优化（`images.unoptimized`）
- 所有数据来自 2026 年终 PDF，标注"数据截至 2026"
- 单页锚点导航需处理静态导出下的平滑滚动
- 不使用表情符号于页面正文
