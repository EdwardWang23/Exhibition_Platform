'use client'
import AppLayout from '@/components/layout/AppLayout'
import { Card, CardBody } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Layers, Calendar, Users, MapPin, Clock, ArrowRight, GripVertical } from 'lucide-react'

const zones = [
  { id: 1, name: 'AI创新区', area: '4000㎡', color: '#8B5CF6', capacity: 120, booths: 80, events: 25, desc: '人工智能技术创新与应用展示' },
  { id: 2, name: '元宇宙体验区', area: '2500㎡', color: '#EC4899', capacity: 80, booths: 50, events: 18, desc: 'VR/AR/MR沉浸式体验' },
  { id: 3, name: '大数据/云计算区', area: '2000㎡', color: '#2563EB', capacity: 60, booths: 40, events: 12, desc: '数据服务与云解决方案' },
  { id: 4, name: '商务洽谈区', area: '1500㎡', color: '#10B981', capacity: 200, booths: 0, events: 0, desc: 'B端专业观众商贸对接' },
  { id: 5, name: '论坛活动区', area: '1000㎡', color: '#F59E0B', capacity: 500, booths: 0, events: 50, desc: '主题演讲与行业研讨' },
]

const schedule = [
  { day: 'Day 1', date: '6月8日', theme: '开幕日', activities: [
    { time: '09:00-10:00', event: '开幕式暨主论坛', type: 'forum', location: '主会场A', participants: 500 },
    { time: '10:30-12:00', event: 'AI赋能产业升级论坛', type: 'forum', location: '论坛区A', participants: 300 },
    { time: '14:00-17:00', event: '元宇宙应用场景体验', type: 'activity', location: '元宇宙体验区', participants: 200 },
    { time: '19:00-21:00', event: 'VIP欢迎晚宴', type: 'social', location: '宴会厅', participants: 150 },
  ]},
  { day: 'Day 2', date: '6月9日', theme: '创新日', activities: [
    { time: '09:30-11:30', event: '新锐企业路演大赛', type: 'competition', location: '论坛区B', participants: 400 },
    { time: '14:00-16:00', event: 'AI创新大赛决赛', type: 'competition', location: '主会场A', participants: 500 },
    { time: '16:30-18:00', event: '一对一商务对接会', type: 'meeting', location: '商务洽谈区', participants: 200 },
  ]},
  { day: 'Day 3', date: '6月10日', theme: '闭幕日', activities: [
    { time: '09:30-11:00', event: '数字经济白皮书发布', type: 'release', location: '主会场A', participants: 400 },
    { time: '14:00-15:30', event: '闭幕式暨颁奖典礼', type: 'ceremony', location: '主会场A', participants: 500 },
    { time: '15:30-17:00', event: '媒体发布会', type: 'press', location: '新闻发布厅', participants: 100 },
  ]},
]

export default function ContentPlanningPage() {
  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-800">内容规划</h1>
            <p className="text-sm text-gray-500 mt-0.5">数字中国峰会 · 展区划分与活动安排</p>
          </div>
          <Button size="sm" icon={<ArrowRight size={14} />}>导出规划方案</Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 space-y-5">
            {/* Zone planning */}
            <Card>
              <CardBody>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Layers size={20} className="text-purple-600" />
                    <div>
                      <h2 className="text-base font-semibold text-gray-800">展区划分</h2>
                      <p className="text-xs text-gray-400">5个功能分区，总面积 11000㎡</p>
                    </div>
                  </div>
                  <Badge variant="success">已规划</Badge>
                </div>
                <div className="space-y-3">
                  {zones.map(z => (
                    <div key={z.id} className="border border-gray-100 rounded-xl p-4 hover:border-gray-200 transition-colors cursor-pointer group">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: z.color + '15' }}>
                          <GripVertical size={16} className="text-gray-400 group-hover:text-gray-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: z.color }} />
                              <span className="text-sm font-semibold text-gray-800">{z.name}</span>
                            </div>
                            <Badge variant="default" size="sm">{z.area}</Badge>
                          </div>
                          <p className="text-xs text-gray-500 mb-2">{z.desc}</p>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1 text-xs text-gray-400">
                              <Users size={11} />
                              <span>容纳{z.capacity}人</span>
                            </div>
                            {z.booths > 0 && (
                              <div className="flex items-center gap-1 text-xs text-gray-400">
                                <MapPin size={11} />
                                <span>{z.booths}个展位</span>
                              </div>
                            )}
                            {z.events > 0 && (
                              <div className="flex items-center gap-1 text-xs text-gray-400">
                                <Calendar size={11} />
                                <span>{z.events}场活动</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>

            {/* Schedule */}
            <Card>
              <CardBody>
                <div className="flex items-center gap-3 mb-4">
                  <Calendar size={20} className="text-blue-600" />
                  <div>
                    <h2 className="text-base font-semibold text-gray-800">活动日程</h2>
                    <p className="text-xs text-gray-400">3天展期，共 105+ 场同期活动</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {schedule.map(day => (
                    <div key={day.day} className="border border-gray-100 rounded-xl overflow-hidden">
                      <div className="px-4 py-3 bg-gray-50 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Badge variant="primary">{day.day}</Badge>
                          <span className="text-sm font-medium text-gray-800">{day.theme}</span>
                        </div>
                        <span className="text-xs text-gray-400">{day.date}</span>
                      </div>
                      <div className="divide-y divide-gray-50">
                        {day.activities.map((a, i) => (
                          <div key={i} className="flex items-center gap-4 px-4 py-3 hover:bg-gray-50 transition-colors">
                            <span className="text-xs text-gray-400 w-24 flex-shrink-0">{a.time}</span>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-800">{a.event}</p>
                              <p className="text-xs text-gray-400 mt-0.5">{a.location}</p>
                            </div>
                            <div className="flex items-center gap-3 flex-shrink-0">
                              <Badge variant={
                                a.type === 'forum' ? 'purple' :
                                a.type === 'competition' ? 'orange' :
                                a.type === 'social' ? 'pink' :
                                a.type === 'meeting' ? 'cyan' : 'default'
                              } size="sm">
                                {a.type === 'forum' ? '论坛' : a.type === 'competition' ? '大赛' : a.type === 'social' ? '社交' : a.type === 'meeting' ? '对接' : a.type}
                              </Badge>
                              <span className="text-xs text-gray-400 hidden sm:block">{a.participants}人</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </div>

          <div className="space-y-5">
            {/* Route planning */}
            <Card>
              <CardBody>
                <h3 className="text-sm font-semibold text-gray-800 mb-3">参观路线规划</h3>
                <div className="space-y-2">
                  {[
                    { name: '主线 A', color: '#2563EB', time: '约2.5小时', zones: ['AI创新区', '元宇宙体验区', '论坛活动区'] },
                    { name: '主线 B', color: '#8B5CF6', time: '约2小时', zones: ['大数据区', '商务洽谈区', '论坛活动区'] },
                    { name: 'VIP专线', color: '#F59E0B', time: '约1小时', zones: ['VIP展区', '商务洽谈区', '欢迎晚宴'] },
                  ].map(route => (
                    <div key={route.name} className="p-3 bg-gray-50 rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: route.color }} />
                        <span className="text-xs font-medium text-gray-700">{route.name}</span>
                        <span className="text-xs text-gray-400 ml-auto">{route.time}</span>
                      </div>
                      <div className="space-y-1">
                        {route.zones.map((z, i) => (
                          <div key={i} className="flex items-center gap-1.5 text-xs text-gray-500">
                            <span className="w-4 text-center">{i + 1}</span>
                            <span>{z}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>

            {/* Traffic estimation */}
            <Card>
              <CardBody>
                <h3 className="text-sm font-semibold text-gray-800 mb-3">人流量预估</h3>
                <div className="space-y-3">
                  {[
                    { zone: 'AI创新区', peak: '1500人/时', avg: '800人/时', color: '#8B5CF6' },
                    { zone: '元宇宙体验区', peak: '600人/时', avg: '350人/时', color: '#EC4899' },
                    { zone: '论坛活动区', peak: '500人/时', avg: '300人/时', color: '#F59E0B' },
                    { zone: '商务洽谈区', peak: '400人/时', avg: '250人/时', color: '#10B981' },
                  ].map(t => (
                    <div key={t.zone}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-600">{t.zone}</span>
                        <span className="text-gray-400">峰值 {t.peak}</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full">
                        <div className="h-2 rounded-full" style={{ width: `${parseInt(t.peak) / 15}%`, backgroundColor: t.color }} />
                      </div>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <Button className="w-full" size="sm" icon={<ArrowRight size={14} />}>生成完整规划文档</Button>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
