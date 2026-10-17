/**
 * 商单价格明细划分参考标准（第 20261017 版）
 * 来源：和梦精品工作室《商单价格明细划分参考标准（第20261017版）》
 *
 * 说明：所有价格划分均为参考，实际按商单难易程度动态定价。
 */

export const pricing = {
  eyebrow: "BUSINESS",
  title: "商单定价",
  lead: "和梦精品工作室承接 Minecraft 相关创作与开发，以下为价格划分参考。",
  /** 计费说明。拆成片段，便于在页面上高亮指定内容。 */
  notice: {
    before: "所有价格划分均为",
    highlight: "参考",
    after: "，具体实际定价按照商单难易程度进行动态定价。",
    emphasis: "定价价格按照接单人自行决定",
  },
  formUrl: "https://ocnhbcz4uf2f.feishu.cn/share/base/form/shrcnG8ZvfyIYgE8KL51bDbHvid",
  formNote: "确认价格后，请通过商单申请表提交需求，填写合作内容与报价。",
} as const;

export type PriceRow = {
  label: string;
  spec: string;
  price: string;
};

export type PriceSection = {
  index: string;
  title: string;
  core: string;
  rows?: PriceRow[];
  /** 无表格的段落型定价（如配音、视频剪辑） */
  paragraphs?: { title: string; lines: string[] }[];
  footer?: string;
};

export const priceSections: PriceSection[] = [
  {
    index: "01",
    title: "Minecraft 服务器租用",
    core: "按服务器硬件配置，是否含整合包定制/服务端调试定价。额外加价项包括技术运维。",
    footer: "三天起租，不足三天按照三天计算",
    rows: [
      { label: "小型服", spec: "2–10 人，2–4G 内存", price: "¥3.7 / 天" },
      { label: "中型服", spec: "10–30 人，6–8G 内存", price: "¥6.4 / 天" },
      { label: "大型服", spec: "30–80 人，12–16G 内存", price: "¥14 / 天" },
    ],
    paragraphs: [
      {
        title: "其他",
        lines: ["额外定制制作服务端按照难易程度，收价 5–20 元。", "个人托管服务按照自行偏好定价。"],
      },
    ],
  },
  {
    index: "02",
    title: "Minecraft 建筑制作类",
    core: "按建筑占地面积、细节精细度、交付形式（蓝图文件/进服建造）定价。",
    rows: [
      { label: "小型建筑", spec: "20×20 以内（小房子、亭子、简易小屋，内饰简单）", price: "10–35" },
      { label: "中型建筑", spec: "20×20 ~ 100×100（庄园、据点、中型建筑，基础装饰）", price: "40–120" },
      { label: "大型建筑", spec: "100×100 ~ 500×500（建筑群、主城片区，基础景观）", price: "120–450+" },
      { label: "超大场景", spec: "500×500 以上（完整主城、大型场景）", price: "450–1500+" },
    ],
  },
  {
    index: "03",
    title: "Minecraft 模组制作类",
    core: "按功能复杂度、是否新增实体/物品/维度/机制。核心成本是开发工时与调试成本。",
    rows: [
      { label: "简单模组", spec: "单个物品/简单机制，无新实体", price: "¥100–300" },
      { label: "中等模组", spec: "多个物品/生物，基础交互，新群系/维度", price: "¥300–1500" },
      { label: "大型模组", spec: "完整玩法体系，新 BOSS、多系统联动、复杂机制", price: "¥1500–10000+" },
    ],
  },
  {
    index: "04",
    title: "Minecraft 皮肤制作类",
    core: "按分辨率（64×64 / 128×128）、人设复杂度、是否分层/HD 细节。",
    rows: [
      { label: "基础定制", spec: "64×64，简单人设，个人使用", price: "¥10–40" },
      { label: "精细定制", spec: "128×128，复杂服饰/细节，分层效果", price: "¥30–100" },
      { label: "泳装", spec: "产阳花，上吧", price: "14.9" },
    ],
  },
  {
    index: "05",
    title: "Minecraft 材质包制作类",
    core: "按分辨率、覆盖范围（仅方块 / 全物品+实体+GUI），制作难度定价。",
    rows: [
      { label: "简易材质包", spec: "16x/32x，仅修改部分方块/物品，适配玩法。部分 GUI 改变", price: "¥60–200" },
      { label: "完整材质包", spec: "32x/64x，全方块+物品+GUI+生物", price: "¥200+" },
    ],
  },
  {
    index: "06",
    title: "Minecraft 数据包制作类",
    core: "按指令复杂度、功能类型（掉落/配方/自定义玩法）、系统联动数量定价。纯原版指令实现，门槛低于插件，价格整体低于插件开发。",
    rows: [
      { label: "简单数据包", spec: "修改掉落表/配方，单一生效功能", price: "¥30–60" },
      { label: "中等数据包", spec: "自定义生物、简单小游戏机制、多函数联动", price: "¥60–100" },
      { label: "复杂数据包", spec: "完整游戏模式、多系统玩法、大量指令与函数", price: "¥100+" },
    ],
  },
  {
    index: "07",
    title: "Minecraft 服务器插件制作类",
    core: "按功能复杂度、是否带 GUI/数据库、是否跨服兼容、性能优化要求定价，基于 Spigot/Paper 等 API 开发，核心成本是代码开发与兼容性调试。",
    rows: [
      { label: "基础插件", spec: "简单命令、消息修改、单一功能", price: "¥50–300" },
      { label: "中等插件", spec: "多 GUI 界面、经济/权限系统、小型小游戏", price: "¥300–1500" },
      { label: "复杂插件", spec: "完整游戏模式、跨服系统、数据库联动", price: "¥1500–3000" },
    ],
  },
  {
    index: "08",
    title: "MC 动画制作定制",
    core: "按成片时长、角色数量、动作/运镜复杂度、渲染质量和剧本进行定价。",
    footer: "10 秒起做，不足 10 秒按照 10 秒计算。",
    paragraphs: [
      {
        title: "按秒折算参考",
        lines: ["普通质量（剧情类） ¥10/秒", "高品质（打斗类） ¥30/秒"],
      },
    ],
  },
  {
    index: "09",
    title: "配音录制",
    core: "按文案长度定价。",
    footer: "朗读内容不低于 50 字，未超过 50 字按照 50 字计算，起读价 4 元（50 字）。每 2 块钱加 15 个字。",
  },
  {
    index: "10",
    title: "视频代剪辑",
    core: "按成片时长、剪辑复杂度（特效/调色/包装）、素材量、出片时效定价。MC 游戏剪辑比普通生活剪辑溢价约 20%。",
    rows: [
      { label: "基础剪辑", spec: "配字幕、BGM、简单转场，无特效；短视频 30 秒内 ¥10–15 起", price: "¥10–30 / 分钟" },
      { label: "中级剪辑", spec: "加特效、调色、多素材拼接、节奏卡点", price: "¥30–80 / 分钟" },
      { label: "高级剪辑", spec: "MC 集锦/混剪、带片头包装、分镜设计", price: "¥80–120 / 分钟" },
    ],
    footer: "加急出片：加收原价的 30%–50%。",
  },
];