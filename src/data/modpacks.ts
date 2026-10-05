/**
 * 整合包与资源数据 —— 迁移自旧版下载页（F:\Site-PeaceDream）
 */

export type PackLink = {
  url: string;
  code?: string;
};

export type ModPack = {
  id: number;
  name: string;
  version: string;
  type: string;
  description: string;
  /** 卡片封面图（来自官方发布页 / 官方视频封面） */
  cover: string;
  /** 标签，展示在卡片上 */
  tags: string[];
  author?: string;
  updated?: string;
  downloads?: string;
  likes?: string;
  tip?: string;
  warning?: string;
  video?: string;
  wiki?: string;
  links: PackLink[];
};

export type Resource = {
  id: number;
  name: string;
  description: string;
  tip?: string;
  download: string;
};

export const downloadNotices = [
  "本页所有内容均已经过真人真机上机测试，合法有效无毒，请放心使用。",
  "并非所有资源均同意转载分享，客户端所有权归原作者所有，若侵权请及时联系，我们会及时删除。侵权必究，共同守护知识产权。",
  "内容下载使用夸克网盘，请确保夸克网盘账号可用。",
  "所有文件都建议解压后使用。",
  "群主在线期间，若不想在网盘内下载，可私信站主获取，QQ：3059400953。",
  "想上传你的资源，欢迎联系 QQ：3059400953。",
] as const;

export const qqGroupUrl =
  "https://qm.qq.com/cgi-bin/qm/qr?authKey=b3VxyMWTm7QQam3ygPJKqwPbVr7pMSWF8%2BBlRlcWkY%2F8SgGSXflppovvtpo8JXZo&k=f_XJsUMdqxG__u_gsykrRSOjrRx_9rkK&noverify=0";

export const modPacks: ModPack[] = [
  {
    id: 1,
    name: "幻梦界冒险之旅",
    version: "1.20.1 · Forge",
    type: "魔法类、剧情类",
    description:
      "和梦团队出品。恭迎踏入幻梦界，主张梦境与魔幻：主线篇章「帕斯特之梦」为必经奇旅，循迹前行可解锁专属悠远剧情；副本「暮色森林」随心择往，另有新生魔艺衍化无尽法术、车万女仆相伴日常。",
    cover: "/assets/images/covers/dwa.jpg",
    tags: ["服务端/客户端", "魔法", "剧情"],
    author: "Tbang_（和梦团队）",
    updated: "更新于 142 天前",
    downloads: "2.2 千",
    likes: "7",
    tip: "建议先在主世界发育再越级挑战 Boss；进入游戏前请先调整按键设置。推荐配置 i5-4690 / 4GB 内存 / GTX 750 以上，预留 3GB 存储。",
    video: "https://www.bilibili.com/video/BV112hRzbExM/",
    links: [
      { url: "https://www.xyebbs.com/res-id/DWA/downloads" },
      { url: "https://www.minebbs.com/resources/13197/" },
    ],
  },
  {
    id: 2,
    name: "我痛友灭",
    version: "1.21 以上",
    type: "数据包 · 多人玩法",
    description:
      "和梦团队原创数据包。只要我受伤了，我的朋友就会直接嘎掉。你和你的朋友能否完美通关，还是在游戏结束后问候对方全家。",
    cover: "/assets/images/covers/twd.jpg",
    tags: ["服务端/客户端", "数据包", "多人"],
    author: "和梦团队（原创）",
    updated: "更新于 242 天前",
    downloads: "1.0 千",
    likes: "2",
    tip: "新生成地图后，将文件解压到地图文件夹 /datapacks 内即可。游戏内指令：/function game1:start 开始，/function game1:reload 重置。建议 2 人以上游玩。",
    video: "https://www.bilibili.com/video/BV1VMxFzMEei/",
    links: [
      { url: "https://yepstudio.lanzouu.com/imkjg3mki18d" },
      { url: "https://www.minebbs.com/resources/14514/" },
    ],
  },
  {
    id: 3,
    name: "幽匿生存",
    version: "1.19.2",
    type: "生存类、冒险类",
    description:
      "在这个整合包中，我们需要对抗古老的幽匿力量，病毒会在五天后爆发。其病毒每隔一段时间就会进化一次，我们的任务是击杀古代幽匿心脏，阻止病毒扩散。",
    cover: "/assets/images/covers/sculk.jpg",
    tags: ["生存", "冒险"],
    author: "和梦精品工作室",
    tip: "先切换创造，使用【开发者 幽匿主茎发生器】后才能开始游戏。",
    video:
      "https://www.bilibili.com/video/BV13f421z7ub/?share_source=copy_web&vd_source=2225adc426f223f806ea0c78bb811ff5",
    links: [{ url: "https://pan.quark.cn/s/31307c2a41b9", code: "5pqX" }],
  },
  {
    id: 4,
    name: "The First City",
    version: "1.19.3",
    type: "剧情类",
    description:
      "本客户端重点对远古城市进行了改造，击杀坚守者，插入钥匙，来探索这不为人知的真正城堡吧。",
    cover: "/assets/images/covers/firstcity.jpg",
    tags: ["剧情", "远古城市"],
    author: "和梦精品工作室",
    tip: "游戏前期需要长时间生存攒齐装备，并且要找远古城市。",
    warning:
      "如要体验这个模组，请务必创建一个全新的世界来游玩，且除了前置模组外不要添加任何其他模组，否则后果自负。",
    video:
      "https://www.bilibili.com/video/BV1T1421t7X4/?share_source=copy_web&vd_source=2225adc426f223f806ea0c78bb811ff5",
    links: [{ url: "https://pan.quark.cn/s/f943149a34b6" }],
  },
  {
    id: 5,
    name: "生活大冒险",
    version: "1.20.1",
    type: "生存类、冒险类",
    description:
      "村民变成了可以正常交流的人类，并且可以正常建立关系。生活大冒险是最适合用来养老的整合包。",
    cover: "/assets/images/covers/life.jpg",
    tags: ["生存", "凡家物语"],
    author: "和梦精品工作室",
    video:
      "https://www.bilibili.com/video/BV1cr4213767/?share_source=copy_web&vd_source=2225adc426f223f806ea0c78bb811ff5",
    links: [{ url: "https://pan.quark.cn/s/b61043762d99" }],
  },
  {
    id: 6,
    name: "吸血鬼生存",
    version: "1.20.1",
    type: "生存类",
    description: "我的世界，但是我变成了吸血鬼。这种情况下我该怎么生存。",
    cover: "/assets/images/covers/vampire.jpg",
    tags: ["生存", "吸血鬼"],
    author: "和梦精品工作室",
    wiki: "https://www.mcmod.cn/class/930.html",
    links: [{ url: "https://pan.quark.cn/s/89aa3a4472b8" }],
  },
];

export const resources: Resource[] = [
  {
    id: 1,
    name: "刀哥语音包",
    description: "那是什么刀？刀哥语音包。下载语音包，指定有你好果子吃。",
    tip: "解压后使用。",
    download: "https://yepstudio.lanzouj.com/iR29B28p2k7a",
  },
  {
    id: 2,
    name: "神鹰黑手哥",
    description: "小 b 崽子，敢不敢跟我比划比划。下了神鹰语音包，指定让你飞起来。",
    tip: "解压后使用。",
    download: "https://yepstudio.lanzouj.com/ixNWO28p2k4h",
  },
  {
    id: 3,
    name: "Bandicam 录屏软件",
    description:
      "没有好的录屏软件？用 OBS 太卡？已配置好的录屏软件，支持全屏/窗口/摄像头录制，免费无水印。",
    tip: "一定要解压，把解压好的东西放到同一个文件夹里面，可将本体创建快捷方式放到桌面。",
    download: "https://yepstudio.lanzouu.com/i50641t81wpc",
  },
];

export const getDiskType = (url: string): string => {
  if (url.includes("quark")) return "夸克";
  if (url.includes("lanzou")) return "蓝奏云";
  if (url.includes("123pan") || url.includes("123684")) return "123 云盘";
  if (url.includes("xyebbs")) return "XyeBBS";
  if (url.includes("minebbs")) return "MineBBS";
  if (url.includes("bbsmc")) return "BBSMC";
  return "网盘";
};
