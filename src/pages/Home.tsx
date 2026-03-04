import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Home() {
    return (
        <div className="min-h-screen">
            {/* Full-screen Hero Section */}
            <div className="relative h-screen md:h-screen w-full flex items-center">
                <div className="pl-6 md:pl-24">
                    <h1 className="text-5xl md:text-8xl font-bold text-gray-900 mb-3 md:mb-4 animate-fade-in-up">和梦团队</h1>
                    <p className="text-2xl md:text-4xl text-gray-500 mb-3 md:mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>PeaceDream</p>
                    <p className="text-lg md:text-xl text-gray-400 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>优秀 · 和平 · 创意 · 友善</p>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-6 py-8 md:py-12">
                {/* Status Card */}
                <ScrollCard className="bg-white rounded-xl border border-gray-200 p-6 mb-6 hover:shadow-xl transition-shadow duration-300" style={{ animationDelay: '0.6s' }}>
                    <div className="mb-4">
                        <h2 className="text-sm font-medium text-gray-500 mb-3">服务状态</h2>
                        <p className="text-base text-gray-900">
                            SakuraFRP 可用期至 <span className="font-medium">2025 年 8 月 24 日</span>
                        </p>
                        <p className="text-xs text-gray-400 mt-2">Update: 竹寒心.</p>
                    </div>

                    <div className="flex gap-3">
                        <Link
                            to="/download"
                            className="inline-flex items-center px-6 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-0.5"
                        >
                            进入下载
                        </Link>
                        <a
                            href="https://qm.qq.com/cgi-bin/qm/qr?authKey=b3VxyMWTm7QQam3ygPJKqwPbVr7pMSWF8%2BBlRlcWkY%2F8SgGSXflppovvtpo8JXZo&k=f_XJsUMdqxG__u_gsykrRSOjrRx_9rkK&noverify=0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-2.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:-translate-y-0.5"
                        >
                            加入 QQ 群
                        </a>
                    </div>
                </ScrollCard>

                {/* Tutorial Section */}
                <section id="tutorial" className="py-8 md:py-16">
                    <div className="max-w-6xl mx-auto px-4 md:px-0">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4 scroll-animate" style={{ animationDelay: '0.8s' }}>教程</h2>
                        <div className="space-y-8 md:space-y-12">
                            <ScrollCard className="hover:shadow-2xl transition-shadow duration-300" style={{ animationDelay: '1s' }}>
                                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">MC Java 电脑端开服教程</h3>
                                <div className="w-full">
                                    <video
                                        src="https://pd123.my.canvasite.cn/home/_assets/video/9c0b5b547dc714d026f39d5b3e52f831.mp4"
                                        controls
                                        muted
                                        autoPlay
                                        loop
                                        disableRemotePlayback
                                        controlsList="nodownload"
                                        className="w-full rounded-xl shadow-lg"
                                    />
                                </div>
                            </ScrollCard>
                            <ScrollCard className="hover:shadow-2xl transition-shadow duration-300" style={{ animationDelay: '1.2s' }}>
                                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">MC 基岩版开服教程</h3>
                                <div className="w-full">
                                    <video
                                        src="https://pd123.my.canvasite.cn/home/_assets/video/a44ef0644f18f207c58e41adbc725b0f.mp4"
                                        controls
                                        muted
                                        autoPlay
                                        loop
                                        disableRemotePlayback
                                        controlsList="nodownload"
                                        className="w-full rounded-xl shadow-lg"
                                    />
                                </div>
                            </ScrollCard>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

// Scroll Animation Card Component
function ScrollCard({ children, className, style }: { children: React.ReactNode, className?: string, style?: React.CSSProperties }) {
    const ref = useScrollAnimation()

    return (
        <div ref={ref} className={`scroll-animate ${className || ''}`} style={style}>
            {children}
        </div>
    )
}
