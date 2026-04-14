'use client'
import React, { useState } from 'react'
import AppLayout from '@/components/layout/AppLayout'
import { Card, CardBody } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Settings, User, Cpu, Link2, Bell, Save } from 'lucide-react'

const tabs = ['账号管理', 'AIGC配置', '接口配置', '通知设置']

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('AIGC配置')
  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto space-y-5">
        <div className="flex items-center gap-3">
          <Settings size={24} className="text-gray-500" />
          <h1 className="text-xl font-bold text-gray-800">系统设置</h1>
        </div>

        <div className="flex gap-6">
          {/* Sidebar */}
          <div className="w-48 flex-shrink-0 space-y-1">
            {tabs.map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${activeTab === tab ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}>
                {tab}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 space-y-5">
            <Card>
              <CardBody>
                <div className="flex items-center gap-2 mb-4">
                  <Cpu size={16} className="text-purple-600" />
                  <h2 className="text-sm font-semibold text-gray-800">AIGC模型配置</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="text-xs text-gray-500 mb-1 block">大语言模型</label>
                    <select className="w-full h-9 px-3 border border-gray-200 rounded-lg text-sm">
                      <option>GPT-4o (推荐)</option>
                      <option>Claude 3.5 Sonnet</option>
                      <option>通义千问 2.5</option>
                      <option>文心一言 4.0</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 mb-1 block">图像生成模型</label>
                    <select className="w-full h-9 px-3 border border-gray-200 rounded-lg text-sm">
                      <option>DALL-E 3 (推荐)</option>
                      <option>Midjourney v6</option>
                      <option>Stable Diffusion XL</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 mb-1 block">AI响应温度参数</label>
                    <div className="flex items-center gap-3">
                      <input type="range" min="0" max="100" defaultValue="70" className="flex-1 accent-purple-500" />
                      <span className="text-sm text-gray-600 w-10">0.7</span>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <div className="flex items-center gap-2 mb-4">
                  <Bell size={16} className="text-blue-600" />
                  <h2 className="text-sm font-semibold text-gray-800">通知设置</h2>
                </div>
                <div className="space-y-3">
                  {[
                    { label: '任务完成通知', desc: '智能体任务完成时发送通知', defaultChecked: true },
                    { label: '风险预警通知', desc: '检测到项目风险时立即通知', defaultChecked: true },
                    { label: '每日日报', desc: '每日推送项目进展日报', defaultChecked: false },
                    { label: '周报汇总', desc: '每周一推送本周数据汇总', defaultChecked: true },
                  ].map(item => (
                    <label key={item.label} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <div>
                        <p className="text-sm font-medium text-gray-800">{item.label}</p>
                        <p className="text-xs text-gray-400">{item.desc}</p>
                      </div>
                      <input type="checkbox" defaultChecked={item.defaultChecked} className="w-4 h-4 rounded border-gray-300 text-blue-600" />
                    </label>
                  ))}
                </div>
              </CardBody>
            </Card>

            <div className="flex justify-end gap-2">
              <Button variant="outline" size="sm">重置</Button>
              <Button size="sm" icon={<Save size={14} />}>保存设置</Button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}



