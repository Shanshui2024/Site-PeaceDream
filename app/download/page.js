import Navigation from '../components/Navigation';
import DownloadHeader from '../components/DownloadHeader';
import ChaosAdventure from '../components/ChaosAdventure';
import Disclaimer from '../components/Disclaimer';
import ModpackGrid from '../components/ModpackGrid';
import ResourcesGrid from '../components/ResourcesGrid';
import Footer from '../components/Footer';
import { PageContainer } from '../components/CommonStyles';

export const metadata = {
  title: '资源下载 - PeaceDream 和梦团队',
  description: 'MC整合包、模组、剪辑资源下载。幽匿生存、乌托邦、Earth 3等热门整合包免费下载。',
};

const modpacks = [
  { name: '幽匿生存', version: 'v1.19.2', type: '生存冒险', tips: '在这个整合包中，我们需要对抗古老的幽匿力量，病毒会在五天后爆发。其病毒每隔一段时间就会进化一次，我们的任务是击杀古代幽匿心脏，阻止病毒扩散。', tip: '先切换创造，使用【开发者 幽匿主茎发生器】后才能开始游戏！', link: 'https://pan.quark.cn/s/31307c2a41b9', code: '5pqX' },
  { name: '乌托邦3.2', version: 'v1.20.1', type: '生存模组包', tips: '500+模组，在花海里感受宁静，在山峰之巅寻找勇气，在音符间倾听人生。记录游戏每一处风景，丰富的任务系统。这个充满诗意的乌托邦，期待旅者的到来！', tip: '低配电脑玩家谨慎使用！', link: 'https://pan.quark.cn/s/752daeace2b1', code: 'cjJi' },
  { name: 'Earth 3', version: 'v1.20.1', type: '冒险模组包', tips: '300+模组，更多的怪物和工具，魔改冒险休闲整合，更适合冒险！', tip: '低配电脑玩家谨慎使用！', link: 'https://pan.quark.cn/s/35f61982aaec' },
  { name: 'The First City', version: 'v1.19.3', type: '故事性模组包', tips: '本客户端重点对远古城市进行了重点的改造，击杀坚守者，插入钥匙，来探索这不为人知的真正城堡吧！', tip: '游戏前期需要长时间生存攒齐装备，并且要找远古城市。警告：必须创建全新世界游玩，除前置模组外不要添加其他模组！', link: 'https://pan.quark.cn/s/f943149a34b6' },
  { name: '无尽贪婪', version: 'v1.18.2', type: '生存竞技', tips: '没别的，肝就完了！（已提供ProjectE等价交换模组）', tip: '本整合包自制，知悉后可转载。', link: 'https://pan.quark.cn/s/9e41593e707b' },
  { name: '灾变', version: 'v1.20.1', type: 'BOSS挑战', tips: '本客户端由史诗战斗等各种boss mods叠加而成，其中还有暮色森林等，比较好玩，史诗战斗mod使你的攻击更加帅气！欢迎入坑！', tip: '你可能要提前适应史诗战斗awa', link: 'https://pan.quark.cn/s/f4ed1c0be4db' },
  { name: '惊变100天', version: 'v1.20.1', type: '僵尸生存', tips: '僵尸病毒已经蔓延到全球并消灭了人类。你是剩下的一切，好吧 - 面对无尽的感染浪潮。你能坚持多久？僵尸每隔10天就会升级一次，最终进化为50天。尸潮、血月和超级血月，你是否能抵挡住？！', tip: '僵尸过多可能会导致FPS大幅下降。', link: 'https://pan.quark.cn/s/9d0a64c1dce2' },
  { name: '生活大冒险', version: 'v1.20.1', type: '生活模组包', tips: '村民变成了可以正常交流的人类，并且可以正常建立关系，你敢信？生活大冒险是最适合用来养老的啦！', tip: '别舒服死了awa', link: 'https://pan.quark.cn/s/b61043762d99' },
  { name: '粑粑空岛', version: 'v1.20.1', type: '空岛挑战', tips: '一个空岛，但是开局只有一个茅坑？吃小粪便有概率掉竹子，吃粪便块有概率掉树苗。这种情况下我该怎么通关这个空岛？！', tip: '对准茅坑按Shift + 右键可以拉屎。', link: 'https://pan.quark.cn/s/3fd341d7ea5c' },
  { name: '吸血鬼生存', version: 'v1.20.1', type: '特殊生存', tips: '我的世界，但是我变成了吸血鬼？！这种情况下我该怎么生存？', link: 'https://pan.quark.cn/s/89aa3a4472b8' },
  { name: '幸运方块整合', version: 'v1.20.1', type: 'PvP竞技', tips: '50+幸运方块整合，一次性玩个够！内置幸运方块多人PVP地图，和你的好朋友看看谁是欧皇谁是非酋吧！', link: 'https://pan.quark.cn/s/afbb907783d7' },
];

const resources = [
  { name: '刀哥语音包', description: '那是什么刀？刀哥语音包！下载语音包，指定有你好果子吃！', link: 'https://yepstudio.lanzouj.com/iR29B28p2k7a' },
  { name: '神鹰黑手哥', description: '小b崽子，敢不敢跟我比划比划！下了神鹰语音包，指定让你飞起来！', link: 'https://yepstudio.lanzouj.com/ixNWO28p2k4h' },
  { name: 'bandicam录屏软件（免费已破解）', description: '没有好的录屏软件？用OBS太卡？已配置好的录屏软件，支持全屏/窗口/摄像头录制，关键免费无水印，贼清晰！', link: 'https://yepstudio.lanzouu.com/i50641t81wpc' },
];

export default function Download() {
  return (
    <PageContainer maxWidth="1280px">
      <Navigation currentPage="download" />
      <DownloadHeader />
      <ChaosAdventure />
      <Disclaimer />
      <ModpackGrid modpacks={modpacks} />
      <ResourcesGrid resources={resources} />
      <Footer />
    </PageContainer>
  );
}