'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard, FolderOpen, MessageSquare, Palette,
  Image, ListChecks, Package, HardHat, Megaphone,
  Settings, Bell, ChevronDown, ChevronRight, Users,
  Database, X, Menu, TrendingUp, FileText, BookOpen,
  CheckSquare, ShoppingCart, BarChart3, Download
} from 'lucide-react'

const agentItems = [
  {
    agent: 'planning', name: '策划智能体', icon: MessageSquare, color: '#8B5CF6', path: '/planning',
    sub: [
      { name: '对话页', path: '/planning/chat' },
      { name: '需求分析报告', path: '/planning/report' },
      { name: '主题方案', path: '/planning/themes' },
      { name: '内容规划', path: '/planning/content' },
      { name: '竞品分析', path: '/planning/competitor' },
    ]
  },
  {
    agent: 'design', name: '设计智能体', icon: Palette, color: '#EC4899', path: '/design',
    sub: [
      { name: '设计工作台', path: '/design/workspace' },
      { name: '视觉风格', path: '/design/visual' },
      { name: '3D场地编辑器', path: '/design/3d-editor' },
      { name: '效果图预览', path: '/design/render-preview' },
      { name: '多媒体推荐', path: '/design/media' },
      { name: '设计质检报告', path: '/design/qa-report' },
    ]
  },
  {
    agent: 'rendering', name: '出图智能体', icon: Image, color: '#F97316', path: '/rendering',
    sub: [
      { name: '出图工作台', path: '/rendering/workspace' },
      { name: '施工图查看', path: '/rendering/construction-drawings' },
      { name: '规范检查报告', path: '/rendering/compliance' },
      { name: '导出中心', path: '/rendering/export' },
    ]
  },
  {
    agent: 'list', name: '清单智能体', icon: ListChecks, color: '#14B8A6', path: '/list',
    sub: [
      { name: '清单工作台', path: '/list/workspace' },
      { name: '材料清单', path: '/list/materials' },
      { name: '设备清单', path: '/list/equipment' },
      { name: '人员清单', path: '/list/staff' },
      { name: '预算汇总', path: '/list/budget' },
    ]
  },
  {
    agent: 'production', name: '制作智能体', icon: Package, color: '#6366F1', path: '/production',
    sub: [
      { name: '制作工作台', path: '/production/workspace' },
      { name: '供应商列表', path: '/production/suppliers' },
      { name: '采购谈判辅助', path: '/production/negotiation' },
      { name: '订单跟踪', path: '/production/orders' },
    ]
  },
  {
    agent: 'construction', name: '施工智能体', icon: HardHat, color: '#84CC16', path: '/construction',
    sub: [
      { name: '施工工作台', path: '/construction/workspace' },
      { name: '施工进度看板', path: '/construction/progress' },
      { name: '质量检查报告', path: '/construction/quality' },
    ]
  },
  {
    agent: 'promotion', name: '宣传智能体', icon: Megaphone, color: '#06B6D4', path: '/promotion',
    sub: [
      { name: '宣传工作台', path: '/promotion/workspace' },
      { name: '素材生成', path: '/promotion/content' },
      { name: '渠道配置', path: '/promotion/channels' },
      { name: '效果监测', path: '/promotion/monitoring' },
    ]
  },
]

const commonItems = [
  { name: '系统设置', icon: Settings, path: '/settings' },
  { name: '消息通知', icon: Bell, path: '/notifications', badge: 5 },
  { name: '数据管理', icon: Database, path: '/data' },
]

export default function Sidebar({ collapsed, onToggle }: { collapsed: boolean; onToggle: () => void }) {
  const pathname = usePathname()
  const [expandedAgents, setExpandedAgents] = useState<string[]>(['planning'])

  const toggleAgent = (agent: string) => {
    setExpandedAgents(prev =>
      prev.includes(agent) ? prev.filter(a => a !== agent) : [...prev, agent]
    )
  }

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + '/')
  const isRootActive = (path: string) => pathname === path || pathname.startsWith(path + '/')

  return (
    <>
      {/* Mobile overlay */}
      {!collapsed && (
        <div className="fixed inset-0 bg-black/30 z-30 lg:hidden" onClick={onToggle} />
      )}
      <aside className={`fixed top-0 left-0 h-full bg-white border-r border-gray-200 z-40 transition-all duration-300 flex flex-col
        ${collapsed ? 'w-16' : 'w-60'}
        lg:relative`}
      >
        {/* Logo */}
        <div className="h-14 flex items-center px-4 border-b border-gray-100 flex-shrink-0">
          {!collapsed ? (
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm font-bold">会</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-800 leading-tight">会展智能体</div>
                <div className="text-xs text-gray-400 leading-tight">Exhibition AI Platform</div>
              </div>
            </div>
          ) : (
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mx-auto">
              <span className="text-white text-sm font-bold">会</span>
            </div>
          )}
          <button onClick={onToggle} className="ml-auto lg:hidden text-gray-400 hover:text-gray-600">
            <X size={16} />
          </button>
        </div>

        {/* Nav */}
        <div className="flex-1 overflow-y-auto py-3 scrollbar-thin">
          {/* Dashboard */}
          <div className="px-2 mb-1">
            <Link href="/dashboard"
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all
                ${isActive('/dashboard') || pathname === '/' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}>
              <LayoutDashboard size={18} className="flex-shrink-0" />
              {!collapsed && <span>工作台</span>}
            </Link>
          </div>

          {/* Projects */}
          <div className="px-2 mb-1">
            <Link href="/projects"
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all
                ${isActive('/projects') ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}>
              <FolderOpen size={18} className="flex-shrink-0" />
              {!collapsed && <span>项目管理</span>}
            </Link>
          </div>

          <div className="mx-4 my-2 border-t border-gray-100" />

          {/* Agent Modules */}
          {!collapsed && (
            <div className="px-4 pb-1">
              <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">智能体模块</span>
            </div>
          )}

          {agentItems.map(item => {
            const active = isRootActive(item.path)
            const expanded = expandedAgents.includes(item.agent)
            return (
              <div key={item.agent} className="px-2 mb-0.5">
                <button
                  onClick={() => toggleAgent(item.agent)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all
                    ${active ? 'bg-gray-50' : 'hover:bg-gray-50'} ${collapsed ? 'justify-center' : ''}`}
                >
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: item.color + '20' }}>
                    <item.icon size={12} style={{ color: item.color }} />
                  </div>
                  {!collapsed && (
                    <>
                      <span className="flex-1 text-left text-gray-700">{item.name}</span>
                      {expanded ? <ChevronDown size={14} className="text-gray-400" /> : <ChevronRight size={14} className="text-gray-400" />}
                    </>
                  )}
                </button>
                {!collapsed && expanded && (
                  <div className="ml-4 mt-0.5 space-y-0.5 animate-fade-in">
                    {item.sub.map(sub => (
                      <Link key={sub.path} href={sub.path}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs transition-all
                          ${pathname === sub.path ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'}`}>
                        <div className="w-1 h-1 rounded-full bg-current flex-shrink-0" style={{ opacity: 0.4 }} />
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          })}

          <div className="mx-4 my-2 border-t border-gray-100" />

          {/* Common */}
          {!collapsed && (
            <div className="px-4 pb-1">
              <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">公共功能</span>
            </div>
          )}
          {commonItems.map(item => (
            <div key={item.path} className="px-2 mb-0.5">
              <Link href={item.path}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all relative
                  ${isActive(item.path) ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-600 hover:bg-gray-50'}
                  ${collapsed ? 'justify-center' : ''}`}>
                <item.icon size={18} className="flex-shrink-0" />
                {!collapsed && (
                  <>
                    <span className="flex-1">{item.name}</span>
                    {item.badge && (
                      <span className="ml-auto bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
                {collapsed && item.badge && (
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
                )}
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom user */}
        {!collapsed && (
          <div className="p-3 border-t border-gray-100 flex-shrink-0">
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-medium">李</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-800 truncate">李明远</div>
                <div className="text-xs text-gray-400 truncate">会展项目经理</div>
              </div>
            </div>
          </div>
        )}
      </aside>
    </>
  )
}
