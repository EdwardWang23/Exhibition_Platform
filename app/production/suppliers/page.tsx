'use client'
import AppLayout from '@/components/layout/AppLayout'
import { Card, CardBody } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Search, Star, MapPin, CheckCircle2 } from 'lucide-react'

const suppliers = [
  { id: 1, name: '华展装饰工程有限公司', logo: '华', category: '展台搭建', rating: 4.8, region: '北京', price: '中', strength: ['大型展会经验', '自有工厂', '准时交付'], status: 'verified' },
  { id: 2, name: '光影科技有限公司', logo: '光', category: 'AV设备', rating: 4.6, region: '上海', price: '中', strength: ['顶级设备', '技术支持强'], status: 'verified' },
  { id: 3, name: '东方阻燃材料有限公司', logo: '东', category: '阻燃材料', rating: 4.9, region: '广州', price: '低', strength: ['源头工厂', '价格优势', '品质保证'], status: 'verified' },
  { id: 4, name: '华铝建材有限公司', logo: '铝', category: '铝合金', rating: 4.5, region: '佛山', price: '低', strength: ['大型铝材商', '规格齐全'], status: 'verified' },
]

export default function SuppliersPage() {
  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto space-y-5">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-800">供应商列表</h1>
          <Button size="sm">添加供应商</Button>
        </div>

        <Card>
          <CardBody className="p-0">
            <div className="px-4 py-3 border-b border-gray-100 flex items-center gap-3">
              <div className="relative flex-1 max-w-xs">
                <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input placeholder="搜索供应商..." className="w-full h-8 pl-8 pr-3 bg-gray-50 border border-gray-200 rounded-lg text-sm" />
              </div>
              {['全部', '展台搭建', 'AV设备', '材料'].map(f => (
                <button key={f} className={`px-3 py-1 text-xs rounded-lg ${f === '全部' ? 'bg-indigo-100 text-indigo-600 font-medium' : 'text-gray-500'}`}>{f}</button>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 gap-4 p-4">
              {suppliers.map(s => (
                <div key={s.id} className="border border-gray-100 rounded-xl p-4 hover:border-gray-200 transition-colors">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-lg flex-shrink-0">{s.logo}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-semibold text-gray-800">{s.name}</h3>
                        {s.status === 'verified' && <CheckCircle2 size={14} className="text-emerald-500" />}
                      </div>
                      <p className="text-xs text-gray-400">{s.category} · <MapPin size={10} className="inline" /> {s.region}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Star size={12} className="text-amber-400" fill="#F59E0B" />
                        <span className="text-xs font-medium text-gray-700">{s.rating}</span>
                        <Badge variant="success" size="sm" className="ml-1">{s.price}价位</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {s.strength.map(str => <Badge key={str} variant="default" size="sm">{str}</Badge>)}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">查看详情</Button>
                    <Button size="sm" className="flex-1">发起询价</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>
    </AppLayout>
  )
}
