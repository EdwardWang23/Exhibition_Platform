'use client'
import AppLayout from '@/components/layout/AppLayout'
import { Card, CardBody } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { FileText, Download, Copy, Edit2, CheckCircle2, Clock, Target, Users, DollarSign, MapPin, BarChart2, Lightbulb, ArrowRight } from 'lucide-react'

export default function RequirementReportPage() {
  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto space-y-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-800">需求分析报告</h1>
            <p className="text-sm text-gray-500 mt-0.5">2026数字中国峰会 · 策划智能体生成 · 2026-03-18</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" icon={<Edit2 size={14} />}>重新编辑</Button>
            <Button variant="outline" size="sm" icon={<Copy size={14} />}>复制全文</Button>
            <Button size="sm" icon={<Download size={14} />}>导出PDF</Button>
          </div>
        </div>

        {/* Report sections */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <Card>
              <CardBody>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                      <Target size={20} className="text-purple-600" />
                    </div>
                    <div>
                      <h2 className="text-base font-semibold text-gray-800">基本需求</h2>
                      <p className="text-xs text-gray-400">项目基本信息与定位</p>
                    </div>
                  </div>
                  <Badge variant="success" dot>已确认</Badge>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { label: '项目名称', value: '2026数字中国峰会', icon: Target },
                    { label: '项目类型', value: '科技行业峰会/博览会', icon: BarChart2 },
                    { label: '展览面积', value: '8,000㎡', icon: MapPin },
                    { label: '预算总额', value: '¥8,500,000', icon: DollarSign },
                    { label: '目标参展商', value: '200+家', icon: CheckCircle2 },
                    { label: '预计观众', value: '50,000人次', icon: Users },
                    { label: '展期时长', value: '3天', icon: Clock },
                    { label: '目标受众', value: 'B端专业观众', icon: Users },
                  ].map(item => (
                    <div key={item.label} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                      <item.icon size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-400">{item.label}</p>
                        <p className="text-sm font-medium text-gray-800 mt-0.5">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <h3 className="text-base font-semibold text-gray-800 mb-4">目标受众画像</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <div className="flex items-center gap-2 mb-3">
                      <Users size={16} className="text-blue-600" />
                      <span className="text-sm font-medium text-blue-800">主要受众群体</span>
                    </div>
                    <div className="space-y-2">
                      {[
                        { role: '企业决策者', ratio: '30%', desc: 'CEO/CIO/CTO，对战略合作感兴趣' },
                        { role: '技术负责人', ratio: '35%', desc: '技术总监/研发经理，关注技术方案' },
                        { role: '采购部门', ratio: '25%', desc: '采购经理，寻找优质供应商' },
                        { role: '媒体与分析师', ratio: '10%', desc: '行业媒体记者，专业分析师' },
                      ].map(a => (
                        <div key={a.role} className="flex items-center gap-3">
                          <div className="w-24 text-sm text-gray-700">{a.role}</div>
                          <div className="flex-1 bg-blue-200 rounded-full h-2">
                            <div className="h-2 rounded-full bg-blue-500" style={{ width: a.ratio }} />
                          </div>
                          <span className="text-xs text-gray-500 w-8">{a.ratio}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="p-3 bg-gray-50 rounded-xl">
                      <p className="text-xs font-medium text-gray-500 mb-2">年龄分布</p>
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-xs"><span>25-35岁</span><span className="text-gray-500">45%</span></div>
                        <div className="h-1.5 bg-gray-200 rounded-full"><div className="h-1.5 rounded-full bg-purple-400" style={{ width: '45%' }} /></div>
                        <div className="flex justify-between text-xs"><span>35-45岁</span><span className="text-gray-500">35%</span></div>
                        <div className="h-1.5 bg-gray-200 rounded-full"><div className="h-1.5 rounded-full bg-purple-400" style={{ width: '35%' }} /></div>
                        <div className="flex justify-between text-xs"><span>45岁以上</span><span className="text-gray-500">20%</span></div>
                        <div className="h-1.5 bg-gray-200 rounded-full"><div className="h-1.5 rounded-full bg-purple-400" style={{ width: '20%' }} /></div>
                      </div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-xl">
                      <p className="text-xs font-medium text-gray-500 mb-2">决策影响力</p>
                      <div className="space-y-2">
                        {[{ level: '高', color: '#EF4444', w: '60%' }, { level: '中', color: '#F59E0B', w: '30%' }, { level: '低', color: '#10B981', w: '10%' }].map(l => (
                          <div key={l.level} className="flex items-center gap-2">
                            <div className="w-1 h-4 rounded-full" style={{ backgroundColor: l.color }} />
                            <span className="text-xs text-gray-600 w-4">{l.level}</span>
                            <div className="flex-1 bg-gray-200 rounded-full h-1.5"><div className="h-1.5 rounded-full" style={{ width: l.w, backgroundColor: l.color }} /></div>
                            <span className="text-xs text-gray-500">{l.w}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <h3 className="text-base font-semibold text-gray-800 mb-4">展示重点领域</h3>
                <div className="grid sm:grid-cols-3 gap-3">
                  {[
                    { name: '人工智能', percent: 40, color: '#8B5CF6' },
                    { name: '元宇宙/VR', percent: 30, color: '#EC4899' },
                    { name: '大数据/云计算', percent: 20, color: '#2563EB' },
                  ].map(item => (
                    <div key={item.name} className="p-4 rounded-xl border border-gray-100">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-800">{item.name}</span>
                        <span className="text-sm font-bold" style={{ color: item.color }}>{item.percent}%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full"><div className="h-2 rounded-full" style={{ width: `${item.percent}%`, backgroundColor: item.color }} /></div>
                      <p className="text-xs text-gray-400 mt-2">{item.percent / 10 * 1000}㎡</p>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </div>

          <div className="space-y-4">
            <Card>
              <CardBody>
                <h3 className="text-sm font-semibold text-gray-800 mb-3">置信度评估</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">整体置信度</span>
                    <span className="text-sm font-bold text-purple-600">92%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full"><div className="h-2 rounded-full bg-purple-500" style={{ width: '92%' }} /></div>
                  <div className="space-y-1.5 pt-2">
                    {[{ label: '基础信息', score: 95 }, { label: '受众分析', score: 88 }, { label: '展示领域', score: 92 }].map(s => (
                      <div key={s.label} className="flex items-center justify-between">
                        <span className="text-xs text-gray-400">{s.label}</span>
                        <span className="text-xs font-medium text-gray-600">{s.score}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <h3 className="text-sm font-semibold text-gray-800 mb-3">数据来源</h3>
                <div className="space-y-2">
                  {[
                    { source: '用户对话输入', weight: '60%' },
                    { source: '历史项目数据', weight: '25%' },
                    { source: '行业数据库', weight: '15%' },
                  ].map(s => (
                    <div key={s.source} className="flex items-center justify-between py-1.5">
                      <span className="text-xs text-gray-600">{s.source}</span>
                      <span className="text-xs text-gray-400">{s.weight}</span>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb size={16} className="text-amber-500" />
                  <h3 className="text-sm font-semibold text-gray-800">AI建议</h3>
                </div>
                <div className="space-y-2.5">
                  {[
                    '建议增加互动体验区比例，提升观众参与度',
                    'B端观众偏好技术深度内容，建议增加技术论坛',
                    '可考虑设置国际展区，吸引海外展商',
                    '预算分配建议向媒体传播倾斜30%',
                  ].map((tip, i) => (
                    <div key={i} className="flex items-start gap-2 p-2 bg-amber-50 rounded-lg">
                      <span className="text-amber-500 font-bold text-xs flex-shrink-0">{i + 1}</span>
                      <p className="text-xs text-gray-600">{tip}</p>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <h3 className="text-sm font-semibold text-gray-800 mb-3">下一步</h3>
                <Button className="w-full" size="sm" icon={<ArrowRight size={14} />}>生成主题方案</Button>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
