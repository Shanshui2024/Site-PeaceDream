import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Download() {
    const featured = {
        title: 'Chaos Adventure丨混乱冒险生存',
        subtitle: '双工作室合作出品整合包项目',
        description: '每个 Boss 都拥有独特的背景故事与挑战机制。怪物种类丰富，从普通小怪到精英怪逐步升级，带来多样战斗体验。武器设计炫酷且功能各异，让玩家在畅爽打击感中感受探索的乐趣。',
        image: 'https://pd123.my.canvasite.cn/download/_assets/media/b0eec2c1c7db0445cf9dac588e45abfd.png',
        download123: 'https://www.123684.com/s/2GNBjv-Gtewh',
        downloadQuark: 'https://pan.quark.cn/s/f81da337969c',
    }

    const modPacks = [
        {
            id: 1,
            name: '幽匿生存',
            version: '1.19.2',
            type: '生存类、冒险类',
            description: '在这个整合包中，我们需要对抗古老的幽匿力量，病毒会在五天后爆发。其病毒每隔一段时间就会进化一次，我们的任务是击杀古代幽匿心脏，阻止病毒扩散。',
            tip: '先切换创造，使用【开发者 幽匿主茎发生器】后才能开始游戏！',
            video: 'https://www.bilibili.com/video/BV13f421z7ub/?share_source=copy_web&vd_source=2225adc426f223f806ea0c78bb811ff5',
            download: 'https://pan.quark.cn/s/31307c2a41b9',
            downloadCode: '5pqX',
        },
        {
            id: 2,
            name: '乌托邦 3.2',
            version: '1.20.1',
            type: '生存类、趣味类',
            description: '500+ 模组，在花海里感受宁静，在山峰之巅寻找勇气，在音符间倾听人生。记录游戏每一处风景，丰富的任务系统。这个充满诗意的乌托邦，期待旅者的到来！',
            tip: '低配电脑玩家谨慎使用！',
            video: 'https://www.bilibili.com/video/BV1Kf421X7cg/?share_source=copy_web&vd_source=2225adc426f223f806ea0c78bb811ff5',
            download: 'https://pan.quark.cn/s/752daeace2b1',
            downloadCode: 'cjJi',
        },
        {
            id: 3,
            name: 'Earth 3',
            version: '1.20.1',
            type: '生存类、冒险类',
            description: '300+ 模组，更多的怪物和工具，魔改冒险休闲整合，更适合冒险！',
            tip: '低配电脑玩家谨慎使用！',
            video: 'https://www.bilibili.com/video/BV1Ke41127bg/?share_source=copy_web&vd_source=2225adc426f223f806ea0c78bb811ff5',
            download: 'https://pan.quark.cn/s/35f61982aaec',
            downloadCode: '',
        },
        {
            id: 4,
            name: 'The First City',
            version: '1.19.3',
            type: '剧情类',
            description: '本客户端重点对远古城市进行了重点的改造，击杀坚守者，插入钥匙，来探索这不为人知的真正城堡吧！',
            tip: '游戏前期需要长时间生存攒齐装备，并且要找远古城市。',
            warning: '如要体验这个模组，请务必创建一个全新的世界来游玩，且除了前置模组外不要添加任何其他模组，否则后果自负!',
            video: 'https://www.bilibili.com/video/BV1T1421t7X4/?share_source=copy_web&vd_source=2225adc426f223f806ea0c78bb811ff5',
            download: 'https://pan.quark.cn/s/f943149a34b6',
            downloadCode: '',
        },
        {
            id: 5,
            name: '无尽贪婪',
            version: '1.18.2',
            type: '生存类、耗时间',
            description: '没别的，肝就完了！（已提供 ProjectE 等价交换模组）',
            tip: '本整合包自制，知悉后可转载。',
            download: 'https://pan.quark.cn/s/9e41593e707b',
            downloadCode: '',
        },
        {
            id: 6,
            name: '灾变',
            version: '1.20.1',
            type: '生存类、冒险类',
            description: '本客户端由史诗战斗等各种 boss mods 叠加而成，其中还有暮色森林等，比较好玩，史诗战斗 mod 使你的攻击更加帅气！欢迎入坑！',
            tip: '你可能要提前适应适应史诗战斗 awa',
            video: 'https://www.bilibili.com/video/BV1LE421379P/?share_source=copy_web&vd_source=2225adc426f223f806ea0c78bb811ff5',
            download: 'https://pan.quark.cn/s/f4ed1c0be4db',
            downloadCode: '',
        },
        {
            id: 7,
            name: '惊变 100 天',
            version: '1.20.1',
            type: '生存类、冒险类',
            description: '僵尸病毒已经蔓延到全球并消灭了人类。你是剩下的一切，好吧 - 面对无尽的感染浪潮。你能坚持多久？僵尸每隔 10 天就会升级一次，最终进化为 50 天。尸潮、血月和超级血月，你是否能抵挡住？！',
            tip: '僵尸过多可能会导致 FPS 大幅下降。',
            video: 'https://www.bilibili.com/read/cv13893234/',
            download: 'https://pan.quark.cn/s/9d0a64c1dce2',
            downloadCode: '',
        },
        {
            id: 8,
            name: '生活大冒险',
            version: '1.20.1',
            type: '生存类、冒险类',
            description: '村民变成了可以正常交流的人类，并且可以正常建立关系，你敢信？生活大冒险是最适合用来养老的啦！',
            tip: '别舒服死了 awa',
            video: 'https://www.bilibili.com/video/BV1cr4213767/?share_source=copy_web&vd_source=2225adc426f223f806ea0c78bb811ff5',
            download: 'https://pan.quark.cn/s/b61043762d99',
            downloadCode: '',
        },
        {
            id: 9,
            name: '粑粑空岛',
            version: '1.20.1',
            type: '空岛类',
            description: '一个空岛，但是开局只有一个茅坑？吃小粪便有概率掉竹子，吃粪便块有概率掉树苗。这种情况下我该怎么通关这个空岛？！',
            tip: '对准茅坑按 Shift + 右键可以拉屎。',
            video: 'https://www.bilibili.com/video/BV18142127f7/?share_source=copy_web&vd_source=2225adc426f223f806ea0c78bb811ff5',
            download: 'https://pan.quark.cn/s/3fd341d7ea5c',
            downloadCode: '',
        },
        {
            id: 10,
            name: '吸血鬼生存',
            version: '1.20.1',
            type: '生存类',
            description: '我的世界，但是我变成了吸血鬼？！这种情况下我该怎么生存？',
            wiki: 'https://www.mcmod.cn/class/930.html',
            download: 'https://pan.quark.cn/s/89aa3a4472b8',
            downloadCode: '',
        },
        {
            id: 11,
            name: '幸运方块整合',
            version: '1.20.1',
            type: 'PVP 类',
            description: '50+ 幸运方块整合，一次性玩个够！内置幸运方块多人 PVP 地图，和你的好朋友看看谁是欧皇谁是非酋吧！',
            download: 'https://pan.quark.cn/s/afbb907783d7',
            downloadCode: '',
        },
    ]

    const resources = [
        {
            id: 1,
            name: '刀哥语音包',
            description: '那是什么刀？刀哥语音包！下载语音包，指定有你好果子吃！',
            tip: '解压后使用。',
            download: 'https://yepstudio.lanzouj.com/iR29B28p2k7a',
        },
        {
            id: 2,
            name: '神鹰黑手哥',
            description: '小 b 崽子，敢不敢跟我比划比划！下了神鹰语音包，指定让你飞起来！',
            tip: '解压后使用。',
            download: 'https://yepstudio.lanzouj.com/ixNWO28p2k4h',
        },
        {
            id: 3,
            name: 'bandicam 录屏软件（免费已破解）',
            description: '没有好的录屏软件？用 OBS 太卡？已配置好的录屏软件，支持全屏/窗口/摄像头录制，关键免费无水印，贼清晰！',
            tip: '一定要解压，把解压好的东西放到同一个文件夹里面！可以把 Bandicam 本体创建个快捷方式放到桌面上哦~',
            download: 'https://yepstudio.lanzouu.com/i50641t81wpc',
        },
    ]

    const getDiskType = (url: string) => {
        if (url.includes('quark')) return '夸克'
        if (url.includes('lanzou')) return '蓝奏云'
        if (url.includes('123pan') || url.includes('123684')) return '123 云盘'
        return ''
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Featured Section - Sticky Background with Scroll */}
            <section className="relative">
                {/* Desktop: Fixed Background Image */}
                <div className="hidden md:block sticky top-0 w-full h-screen overflow-hidden">
                    <img
                        src={featured.image}
                        alt={featured.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Mobile: Simple Top-Bottom Layout */}
                <div className="md:hidden">
                    <div className="w-full h-64 overflow-hidden">
                        <img
                            src={featured.image}
                            alt={featured.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="bg-black py-8">
                        <div className="max-w-6xl mx-auto px-6">
                            <h2 className="text-3xl font-bold text-white mb-3">{featured.title}</h2>
                            <p className="text-lg text-gray-300 mb-4">{featured.subtitle}</p>
                            <p className="text-base text-gray-200 mb-6 leading-relaxed">
                                {featured.description}
                            </p>

                            <div className="space-y-3 mb-6">
                                <div className="text-sm text-gray-300">
                                    <p className="mb-2 font-medium">下载方式</p>
                                    <div className="space-y-2">
                                        <div>
                                            <p className="mb-1">渠道 1：123 云盘（推荐使用浏览器下载，仅 0.5 元）</p>
                                        </div>
                                        <div>
                                            <p className="mb-1">渠道 2：夸克网盘（团队夸克账号可使用，快速享用 SVIP 下载速度）</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <a
                                    href={featured.download123}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3 border border-white bg-transparent text-white text-sm font-medium rounded hover:bg-white hover:text-black transition-colors"
                                >
                                    123 云盘下载
                                </a>
                                <a
                                    href={featured.downloadQuark}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3 border border-white bg-transparent text-white text-sm font-medium rounded hover:bg-white hover:text-black transition-colors"
                                >
                                    夸克下载
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Desktop: Content Sections that scroll over the image */}
                <div className="hidden md:block relative -mt-[50vh] z-10">
                    {/* Spacer to allow scrolling */}
                    <div className="h-[50vh]"></div>

                    {/* Introduction Card */}
                    <div className="bg-gradient-to-t from-black via-black/90 to-transparent py-24">
                        <div className="max-w-6xl mx-auto px-12">
                            <h2 className="text-6xl font-bold text-white mb-4">{featured.title}</h2>
                            <p className="text-2xl text-gray-300 mb-6">{featured.subtitle}</p>
                            <p className="text-lg text-gray-200 mb-8 max-w-3xl leading-relaxed">
                                {featured.description}
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="text-sm text-gray-300">
                                    <p className="mb-2 font-medium">下载方式</p>
                                    <div className="space-y-2">
                                        <div>
                                            <p className="mb-1">渠道 1：123 云盘（推荐使用浏览器下载，仅 0.5 元）</p>
                                        </div>
                                        <div>
                                            <p className="mb-1">渠道 2：夸克网盘（团队夸克账号可使用，快速享用 SVIP 下载速度）</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <a
                                    href={featured.download123}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3 border border-white bg-transparent text-white text-sm font-medium rounded hover:bg-white hover:text-black transition-colors"
                                >
                                    123 云盘下载
                                </a>
                                <a
                                    href={featured.downloadQuark}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3 border border-white bg-transparent text-white text-sm font-medium rounded hover:bg-white hover:text-black transition-colors"
                                >
                                    夸克下载
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-6 py-12">
                {/* Must Read - Animated Card */}
                <ScrollCard id="must-read" className="mb-12">
                    <div className="bg-white rounded-xl border-2 border-red-500 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-lg font-bold mb-4 text-red-600 flex items-center">
                            <svg className="w-5 h-5 mr-2 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                            和梦团队下载专页必看
                        </h2>
                        <div className="space-y-2 text-sm text-gray-600 leading-relaxed">
                            <p>1.本网站所有内容均已经过真人真机上机测试，合法有效无毒，请放心使用。</p>
                            <p>2.并非所有资源均同意转载分享，客户端所有权归原作者所有，若侵权请及时联系，我们会及时删除。侵权必究，让我们共同守护知识产权。</p>
                            <p>3.内容下载会使用夸克网盘，请确保夸克网盘账号是否可用。</p>
                            <p>4.所有的文件都建议解压后使用！</p>
                            <p>5.群主在线期间，若您不想在网盘内下载，可以私信站主下载！请联系 3059400953。</p>
                            <p>6.若想上传你的资源，欢迎联系 QQ：3059400953！</p>
                            <p>7.我们对所有的下载进行了更新，您可以点击按钮下载！</p>
                        </div>
                    </div>
                </ScrollCard>

                {/* Down Arrow - Animated */}
                <ScrollCard className="flex justify-center mb-12">
                    <div className="flex flex-col items-center text-gray-400">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                        <span className="text-xs mt-2">向下开始</span>
                    </div>
                </ScrollCard>

                {/* Mod Packs */}
                <section id="modpacks" className="mb-12">
                    <ScrollCard className="block mb-6">
                        <h2 className="text-lg font-bold text-gray-900">第一板块：MC 整合包分享</h2>
                    </ScrollCard>
                    <div className="grid md:grid-cols-2 gap-4">
                        {modPacks.map((pack, index) => (
                            <ScrollCard
                                key={pack.id}
                                className="bg-white rounded-lg border border-gray-200 p-4 hover:border-gray-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <h3 className="text-sm font-bold mb-2 text-gray-900">
                                    {pack.id}. {pack.name}
                                </h3>
                                <p className="text-xs text-gray-600 mb-2 leading-relaxed line-clamp-2">
                                    {pack.description}
                                </p>
                                <div className="space-y-1 text-xs text-gray-500">
                                    <p>
                                        <span className="text-gray-400">版本：</span>
                                        {pack.version} - {pack.type}
                                    </p>
                                    {pack.tip && (
                                        <p>
                                            <span className="text-gray-400">提示：</span>
                                            {pack.tip}
                                        </p>
                                    )}
                                    {pack.warning && (
                                        <p className="text-red-500">
                                            <span className="text-red-400">警告：</span>
                                            {pack.warning}
                                        </p>
                                    )}
                                </div>
                                <div className="mt-3 pt-3 border-t border-gray-100 flex flex-wrap gap-2">
                                    <a
                                        href={pack.download}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-3 py-1.5 border border-gray-300 bg-white text-gray-700 text-xs font-medium rounded hover:bg-gray-50 transition-colors"
                                    >
                                        {getDiskType(pack.download)}下载
                                        {pack.downloadCode && (
                                            <span className="ml-1 text-gray-400">· {pack.downloadCode}</span>
                                        )}
                                    </a>
                                    {pack.video && (
                                        <a
                                            href={pack.video}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-3 py-1.5 border border-gray-300 bg-white text-gray-700 text-xs font-medium rounded hover:bg-gray-50 transition-colors"
                                        >
                                            视频
                                        </a>
                                    )}
                                    {pack.wiki && (
                                        <a
                                            href={pack.wiki}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-3 py-1.5 border border-gray-300 bg-white text-gray-700 text-xs font-medium rounded hover:bg-gray-50 transition-colors"
                                        >
                                            百科
                                        </a>
                                    )}
                                </div>
                            </ScrollCard>
                        ))}
                    </div>
                </section>

                {/* Resources */}
                <section id="resources">
                    <ScrollCard className="block mb-6">
                        <h2 className="text-lg font-bold text-gray-900">第二板块：剪辑资源分享</h2>
                    </ScrollCard>
                    <div className="grid md:grid-cols-3 gap-4">
                        {resources.map((resource, index) => (
                            <ScrollCard
                                key={resource.id}
                                className="bg-white rounded-lg border border-gray-200 p-4 hover:border-gray-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <h3 className="text-sm font-bold mb-2 text-gray-900">
                                    {resource.name}
                                </h3>
                                <p className="text-xs text-gray-600 mb-2 leading-relaxed">
                                    {resource.description}
                                </p>
                                {resource.tip && (
                                    <p className="text-xs text-gray-400 mb-2">
                                        <span className="font-medium">提示：</span>
                                        {resource.tip}
                                    </p>
                                )}
                                <a
                                    href={resource.download}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-3 py-1.5 border border-gray-300 bg-white text-gray-700 text-xs font-medium rounded hover:bg-gray-50 transition-colors"
                                >
                                    {getDiskType(resource.download)}下载 →
                                </a>
                            </ScrollCard>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}

// Scroll Animation Card Component
function ScrollCard({ children, className, style, id }: { children: React.ReactNode, className?: string, style?: React.CSSProperties, id?: string }) {
    const ref = useScrollAnimation()

    return (
        <div ref={ref} id={id} className={`scroll-animate ${className || ''}`} style={style}>
            {children}
        </div>
    )
}
