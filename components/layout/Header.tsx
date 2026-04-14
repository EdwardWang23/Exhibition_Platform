'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bell, Search, Menu, Plus, ChevronRight } from 'lucide-react'

const breadcrumbMap: Record<string, string> = {
  '': '首页',
  'dashboard': '工作台',
  'projects': '项目管理',
  'project': '项目详情',
  'planning': '策划智能体',
  'chat': '对话页',
  'report': '需求分析报告',
  'themes': '主题方案',
  'content': '内容规划',
  'competitor': '竞品分析',
  'design': '设计智能体',
  'workspace': '设计工作台',
  'visual': '视觉风格',
  '3d-editor': '3D场地编辑器',
  'render-preview': '效果图预览',
  'media': '多媒体推荐',
  'qa-report': '设计质检报告',
  'rendering': '出图智能体',
  'construction-drawings': '施工图查看',
  'compliance': '规范检查报告',
  'export': '导出中心',
  'list': '清单智能体',
  'materials': '材料清单',
  'equipment': '设备清单',
  'staff': '人员清单',
  'budget': '预算汇总',
  'production': '制作智能体',
  'suppliers': '供应商列表',
  'negotiation': '采购谈判辅助',
  'orders': '订单跟踪',
  'construction': '施工智能体',
  'progress': '施工进度看板',
  'quality': '质量检查报告',
  'promotion': '宣传智能体',
  'channels': '渠道配置',
  'monitoring': '效果监测',
  'settings': '系统设置',
  'notifications': '消息通知',
  'data': '数据管理',
}

export default function Header({ onMenuClick }: { onMenuClick: () => void }) {
  const pathname = usePathname()
  const [showSearch, setShowSearch] = useState(false)
  const [notifications] = useState([
    { id: 1, title: '策划智能体已完成需求分析报告', time: '5分钟前', unread: true },
    { id: 2, title: '项目「数字中国峰会」设计已通过质检', time: '20分钟前', unread: true },
    { id: 3, title: '设备清单已生成，待您审核', time: '1小时前', unread: true },
    { id: 4, title: '供应商「华展装饰」报价已更新', time: '2小时前', unread: false },
    { id: 5, title: '施工进度更新：完成度达到75%', time: '3小时前', unread: false },
  ])

  const paths = pathname.split('/').filter(Boolean)
  const breadcrumbs = paths.map((p, i) => ({
    name: breadcrumbMap[p] || p,
    path: '/' + paths.slice(0, i + 1).join('/'),
  }))

  return (
    <header className="h-14 bg-white border-b border-gray-200 flex items-center px-4 gap-4 flex-shrink-0 sticky top-0 z-20">
      {/* Mobile menu */}
      <button onClick={onMenuClick} className="lg:hidden text-gray-500 hover:text-gray-700">
        <Menu size={20} />
      </button>

      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-sm flex-1 min-w-0">
        {breadcrumbs.map((crumb, i) => (
          <span key={crumb.path} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight size={14} className="text-gray-300 flex-shrink-0" />}
            <span className={`${i === breadcrumbs.length - 1 ? 'text-gray-800 font-medium' : 'text-gray-400 hover:text-gray-600 cursor-pointer'}`}>
              {crumb.name}
            </span>
          </span>
        ))}
      </nav>

      {/* Search */}
      <div className="relative hidden md:block">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="搜索项目、智能体..."
          className="w-64 h-8 pl-9 pr-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 focus:bg-white transition-all"
          onFocus={() => setShowSearch(true)}
          onBlur={() => setShowSearch(false)}
        />
      </div>

      {/* New Project */}
      <Link href="/projects/new"
        className="hidden sm:flex items-center gap-1.5 h-8 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors">
        <Plus size={14} />
        新建项目
      </Link>

      {/* Notifications */}
      <div className="relative">
        <button className="relative w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
          <Bell size={18} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>
        <div className="hidden absolute right-0 top-full mt-1 w-80 bg-white rounded-xl shadow-lg border border-gray-100 p-2 z-50 animate-fade-in">
          <div className="px-3 py-2 border-b border-gray-50">
            <span className="text-sm font-semibold text-gray-800">通知中心</span>
            <span className="ml-2 text-xs text-blue-600 font-medium">5条新消息</span>
          </div>
          <div className="max-h-80 overflow-y-auto">
            {notifications.map(n => (
              <div key={n.id}
                className={`px-3 py-2.5 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors ${n.unread ? 'bg-blue-50/50' : ''}`}>
                <div className="flex items-start gap-2.5">
                  {n.unread && <div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-blue-500 flex-shrink-0" />}
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm ${n.unread ? 'font-medium text-gray-800' : 'text-gray-600'}`}>{n.title}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{n.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link href="/notifications" className="block text-center text-xs text-blue-600 hover:text-blue-700 py-2 border-t border-gray-50 mt-1">
            查看全部
          </Link>
        </div>
      </div>

      {/* User avatar (mobile only) */}
      <Link href="/settings" className="sm:hidden w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
        <span className="text-white text-xs font-medium">李</span>
      </Link>
    </header>
  )
}
