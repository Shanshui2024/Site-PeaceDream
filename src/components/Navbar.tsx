import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
    const location = useLocation()

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                            <span className="text-white text-xs font-bold">PD</span>
                        </div>
                        <span className="font-semibold text-gray-900">PeaceDream | 和梦团队</span>
                    </Link>
                    
                    <div className="flex items-center gap-6">
                        <Link
                            to="/"
                            className={`text-sm transition-colors ${
                                location.pathname === '/'
                                    ? 'font-semibold text-gray-900 border-b-2 border-gray-900 pb-0.5'
                                    : 'text-gray-500 hover:text-gray-900'
                            }`}
                        >
                            主页
                        </Link>
                        <Link
                            to="/download"
                            className={`text-sm transition-colors ${
                                location.pathname === '/download'
                                    ? 'font-semibold text-gray-900 border-b-2 border-gray-900 pb-0.5'
                                    : 'text-gray-500 hover:text-gray-900'
                            }`}
                        >
                            下载
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
