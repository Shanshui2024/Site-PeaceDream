import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="min-h-screen">
            <div className="max-w-4xl mx-auto px-6 py-12">
                {/* Header */}
                <div className="mb-10">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">和梦团队</h1>
                    <p className="text-xl text-gray-500">PeaceDream</p>
                    <p className="text-sm text-gray-400 mt-2">优秀·和平·创意·友善</p>
                </div>

                {/* Status Card */}
                <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
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
                            className="inline-flex items-center px-6 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
                        >
                            进入下载
                        </Link>
                        <a
                            href="https://qm.qq.com/cgi-bin/qm/qr?authKey=b3VxyMWTm7QQam3ygPJKqwPbVr7pMSWF8%2BBlRlcWkY%2F8SgGSXflppovvtpo8JXZo&k=f_XJsUMdqxG__u_gsykrRSOjrRx_9rkK&noverify=0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-2.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors"
                        >
                            加入 QQ 群
                        </a>
                    </div>
                </div>

                {/* Tutorial Section */}
                <section id="tutorial" className="pt-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">教程</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                            <video
                                src="https://pd123.my.canvasite.cn/home/_assets/video/9c0b5b547dc714d026f39d5b3e52f831.mp4"
                                controls
                                className="w-full h-full"
                            />
                        </div>
                        <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                            <video
                                src="https://pd123.my.canvasite.cn/home/_assets/video/a44ef0644f18f207c58e41adbc725b0f.mp4"
                                controls
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
