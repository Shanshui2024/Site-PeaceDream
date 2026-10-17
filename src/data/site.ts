export const site = {
  name: "和梦团队",
  nameEn: "PeaceDream",
  slogan: "以最纯粹的态度，守最适人的温度",
  keywords: ["优秀", "和平", "创意", "友善"],
  founded: "2023.7.11",
  positioning: "Minecraft · 自媒体",
  intro:
    "和梦团队创立于 2023 年 7 月 11 日，从一间小小的闲聊群起步，逐步转型为专注于 Minecraft 与自媒体方向的创作者团队。我们相信纯粹的态度与适人的温度可以并存——做内容如此，待人亦然。",
  /** 保留旧门户地址备查，页面不再外链（旧域名可能停用，统一指向本站） */
  refSite: "https://pd.shanshui.site",
  /**
   * 站点正式地址 —— 用于 Open Graph / 分享卡片的绝对 URL。
   * 部署到新域名时改这里即可（务必带协议、无尾部斜杠）。
   */
  url: "https://site-peace-dream.vercel.app",
  /**
   * 社交分享图 —— 由 scripts/gen-og.py 生成，文件名自带内容哈希。
   * 社交平台按 URL 缓存 og:image，改图后文件名随之变化即可让缓存失效。
   */
  ogImage: "/og-b708e288.png",
} as const;

/** QQ 加群链接 —— 全站共用一份定义 */
export const qqGroupUrl = "https://qm.qq.com/q/H3HMtMuBiw";

export const stats = [
  { value: "472", label: "体系总人数", note: "截至 2026 年末" },
  { value: "147%", label: "年度人数增长率", note: "2026 年重点招募新人" },
  { value: "3", label: "长期运营服务器", note: "幻终物理机 / 亿讯云 / 阿浪 VPS" },
  { value: "2", label: "长期域名", note: "团队资源持续扩展" },
] as const;

export const growth = [
  { year: "2024 年初", count: 89 },
  { year: "2025 年初", count: 190 },
  { year: "2026 年初", count: 242 },
  { year: "至今", count: 472 },
] as const;

export const studio = {
  name: "和梦精品工作室",
  intro:
    "旨在为玩家打造更好的游戏内容。经过几轮整改与更新，内容制作精良，在 MC 论坛收获了大量下载量。",
  departments: [
    { name: "配音组", count: 20 },
    { name: "技术制作", count: 5 },
    { name: "设计制作", count: 5 },
    { name: "动画部", count: 3 },
    { name: "剪辑部", count: 3 },
    { name: "建筑后勤", count: 4 },
  ],
} as const;

export const events = [
  {
    title: "盛夏和梦杯",
    period: "每年一届",
    desc: "团队品牌赛事，2027 年将迎来第三届。本届举办地为《迷你世界·谁是狙神》，预计 2026 年 8 月初开启，规模 10 人。",
    tag: "赛事",
  },
  {
    title: "四年之约 · 线下团建",
    period: "2027.7 · 成都",
    desc: "四年时间，岁月鎏金。一时的见面，一生的情谊。2027 年 7 月 20 日前后，共六天。",
    tag: "团建",
  },
  {
    title: "新年大行动",
    period: "每年元旦",
    desc: "跨年传统活动，全员参与，红包福利与游戏内容并行。",
    tag: "活动",
  },
  {
    title: "城市追杀",
    period: "经典企划",
    desc: "团队经典游戏活动之一，开放世界追逃玩法，深受成员喜爱。",
    tag: "活动",
  },
] as const;

export const partners = [
  { name: "空晶宇宙", type: "合作关系" },
  { name: "千阙云庭", type: "联互主播运营" },
  { name: "段山岚客", type: "B站主播互助" },
  { name: "方块烬火社", type: "合作关系" },
  { name: "暗潮学院", type: "合作关系" },
  { name: "琼鸽团队", type: "合作关系" },
  { name: "缄厄斯札记", type: "合作关系" },
  { name: "亿讯云", type: "合作关系" },
  { name: "云茨科技", type: "合作关系" },
] as const;

export const characters = [
  { name: "和屿", role: "和梦虚拟人物" },
  { name: "梦辞", role: "和梦虚拟人物" },
] as const;
