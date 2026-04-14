'use client'
import { useState, useRef, useEffect } from 'react'
import AppLayout from '@/components/layout/AppLayout'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Send, Sparkles, Copy, RefreshCw, ThumbsUp, ThumbsDown, Paperclip, MessageSquare } from 'lucide-react'

const quickQuestions = [
  '帮我分析目标受众画像',
  '生成3套主题方案',
  '竞品分析报告',
  '展区如何划分更合理',
  '制定详细的执行时间表',
  '推荐展示形式与媒体',
]

const chatHistory = [
  { id: 1, name: '数字中国峰会需求确认', date: '今天 14:23', unread: true },
  { id: 2, name: '汽车博览会策划讨论', date: '昨天 16:45', unread: false },
  { id: 3, name: '科技创新大会首轮对话', date: '3天前', unread: false },
]

const initialMessages = [
  { role: 'ai', content: '您好！我是策划智能体，专注于会展项目的需求分析与方案策划。\n\n我可以帮助您：\n- 📝 **需求采集与分析**：多轮对话收集项目背景、目标、受众等信息\n- 🎨 **主题方案生成**：基于需求生成3-5套差异化主题方案\n- 📊 **内容规划**：展区划分、活动安排、时间流程\n- 🔍 **竞品分析**：研究同类展会，提供差异化策略\n\n请告诉我您要策划的项目名称或开始描述您的需求。', time: '10:30' },
  { role: 'user', content: '我要策划一个数字科技主题的博览会，主要面向B端专业观众，预算3000万，展览面积1万平米', time: '10:31' },
  { role: 'ai', content: '感谢您的信息！我已记录以下需求：\n\n**基本信息**\n- 项目类型：数字科技主题博览会\n- 目标受众：B端专业观众（企业决策者、技术负责人、采购部门）\n- 预算规模：3000万元\n- 展览面积：10000㎡\n\n**进一步确认**：\n1. 预计参展商数量是多少？\n2. 展会周期计划几天？\n3. 主要展示哪些细分领域？（如：人工智能、大数据、云计算、物联网等）\n4. 有无特定的目标城市或场地偏好？\n5. 往届是否有类似展会经验？', time: '10:31' },
  { role: 'user', content: '预计300家参展商，展期3天，重点展示AI和元宇宙方向', time: '10:32' },
]

export default function PlanningChatPage() {
  const [messages, setMessages] = useState(initialMessages)
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [chatHistoryList] = useState(chatHistory)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [showHistory, setShowHistory] = useState(false)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = async () => {
    if (!input.trim() || loading) return
    const userMsg = { role: 'user' as const, content: input, time: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }) }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setLoading(true)
    await new Promise(r => setTimeout(r, 2000))
    setMessages(prev => [...prev, {
      role: 'ai',
      content: '根据您提供的信息，我已生成初步方案框架：\n\n**项目定位**\n数字科技前沿博览会（DCT Expo 2026），定位为亚洲最具影响力的数字科技 B2B 专业展\n\n**展区规划建议**\n- AI 创新区（4000㎡）：展示人工智能最新技术与应用\n- 元宇宙体验区（3000㎡）：沉浸式体验元宇宙生态\n- 商务对接区（2000㎡）：B端专业观众商贸洽谈\n- 论坛活动区（1000㎡）：主题演讲与行业研讨\n\n**目标数据**\n- 300+ 参展企业\n- 50000+ 专业观众\n- 100+ 场同期活动\n- 预计媒体曝光 5000万+\n\n您希望我进一步细化哪个方向的方案？或者我可以生成完整的策划文档。',
      time: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })
    }])
    setLoading(false)
  }

  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto h-[calc(100vh-8rem)] flex gap-5">
        {/* Chat history sidebar */}
        <div className={`w-64 flex-shrink-0 ${showHistory ? '' : 'hidden lg:block'}`}>
          <div className="bg-white rounded-xl border border-gray-100 h-full flex flex-col">
            <div className="p-4 border-b border-gray-100">
              <Button icon={<MessageSquare size={14} />} className="w-full" size="sm">新建对话</Button>
            </div>
            <div className="flex-1 overflow-y-auto p-2 space-y-1">
              {chatHistoryList.map(h => (
                <button key={h.id}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-colors ${h.unread ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}>
                  <p className="truncate">{h.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{h.date}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main chat area */}
        <div className="flex-1 flex flex-col bg-white rounded-xl border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="px-5 py-3 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-purple-100 flex items-center justify-center">
                <Sparkles size={16} className="text-purple-600" />
              </div>
              <div>
                <h2 className="text-sm font-semibold text-gray-800">策划智能体</h2>
                <p className="text-xs text-gray-400">AI · 在线</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Badge variant="purple" dot>对话中</Badge>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-5 space-y-5">
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-3 animate-fade-in ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                {msg.role === 'ai' && (
                  <div className="w-8 h-8 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <Sparkles size={16} className="text-purple-600" />
                  </div>
                )}
                {msg.role === 'user' && (
                  <div className="w-8 h-8 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-medium text-blue-600">李</span>
                  </div>
                )}
                <div className={`max-w-[70%] space-y-2 ${msg.role === 'user' ? 'text-right' : ''}`}>
                  <div className={`inline-block px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap
                    ${msg.role === 'ai' ? 'bg-gray-50 text-gray-800 rounded-tl-sm' : 'bg-blue-600 text-white rounded-tr-sm'}`}>
                    {msg.content}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <span>{msg.time}</span>
                    {msg.role === 'ai' && (
                      <>
                        <button className="hover:text-gray-600"><Copy size={11} /></button>
                        <button className="hover:text-emerald-600"><ThumbsUp size={11} /></button>
                        <button className="hover:text-red-500"><ThumbsDown size={11} /></button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex gap-3 animate-fade-in">
                <div className="w-8 h-8 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <Sparkles size={16} className="text-purple-600" />
                </div>
                <div className="inline-block px-4 py-3 rounded-2xl bg-gray-50">
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick questions */}
          <div className="px-5 py-2 border-t border-gray-50">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs text-gray-400">快捷问题：</span>
              {quickQuestions.map((q, i) => (
                <button key={i} onClick={() => setInput(q)}
                  className="text-xs px-2.5 py-1 bg-gray-50 hover:bg-gray-100 text-gray-600 rounded-full border border-gray-200 transition-colors">
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="px-5 py-3 border-t border-gray-100">
            <div className="flex items-end gap-2">
              <button className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100">
                <Paperclip size={16} />
              </button>
              <textarea
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage() } }}
                placeholder="输入消息，按 Enter 发送..."
                rows={1}
                className="flex-1 px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm resize-none focus:outline-none focus:border-purple-400 max-h-32"
              />
              <Button onClick={sendMessage} disabled={!input.trim()} icon={<Send size={14} />}>
                发送
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
