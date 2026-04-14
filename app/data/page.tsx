'use client'
import React, { useState } from 'react'
import AppLayout from '@/components/layout/AppLayout'
import { Card, CardBody } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Database, Package, Users, FileText, Building2, Plus, Download, Upload, Search } from 'lucide-react'

const tabs = [
  { key: 'materials', label: '材料库', icon: Package, count: 234 },
  { key: 'suppliers', label: '供应商库', icon: Building2, count: 156 },
  { key: 'staff', label: '人员库', icon: Users, count: 89 },
  { key: 'specs', label: '规范库', icon: FileText, count: 42 },
]

const materialData = [
  { no: 1, name: '铝合金框架', category: '结构材料', spec: '40×40mm', unit: '米', price: 85, supplier: '华铝建材', status: 'verified' },
  { no: 2, name: '阻燃布料', category: '装饰材料', spec: '3m幅宽', unit: '平方米', price: 120, supplier: '东方阻燃', status: 'verified' },
  { no: 3, name: 'LED灯带', category: '电气材料', spec: '5050 RGB', unit: '米', price: 45, supplier: '光影科技', status: 'verified' },
  { no: 4, name: '木质基层板', category: '结构材料', spec: '1220×2440mm', unit: '张', price: 180, supplier: '金鼎木业', status: 'pending' },
]

const supplierData = [
  { no: 1, name: '华展装饰工程有限公司', category: '展台搭建', region: '北京', rating: 4.8, status: 'verified' },
  { no: 2, name: '光影科技有限公司', category: 'AV设备', region: '上海', rating: 4.6, status: 'verified' },
  { no: 3, name: '东方阻燃材料有限公司', category: '阻燃材料', region: '广州', rating: 4.9, status: 'verified' },
]

const staffData = [
  { no: 1, name: '张伟', role: '项目经理', company: '自有团队', phone: '138****1234', status: 'active' },
  { no: 2, name: '李娜', role: '设计师', company: '自有团队', phone: '139****5678', status: 'active' },
]

const specsData = [
  { no: 1, name: '会展设计防火规范', category: '防火', version: 'GB 2023', updated: '2025-12-01', status: 'active' },
  { no: 2, name: '展览施工安全规范', category: '安全', version: 'GB 2022', updated: '2025-06-15', status: 'active' },
]




function DataTable({ type }: { type: string }) {
  if (type === 'materials') return (
    <table className="w-full">
      <thead><tr className="border-b border-gray-100">
        {['序号', '材料名称', '分类', '规格', '单位', '参考单价', '供应商', '状态'].map(h => (
          <th key={h} className="text-left text-xs font-medium text-gray-500 px-4 py-3">{h}</th>
        ))}
      </tr></thead>
      <tbody>{materialData.map(m => (
        <tr key={m.no} className="border-b border-gray-50 hover:bg-gray-50">
          <td className="px-4 py-3 text-sm text-gray-400">{m.no}</td>
          <td className="px-4 py-3 text-sm font-medium text-gray-800">{m.name}</td>
          <td className="px-4 py-3 text-sm text-gray-500">{m.category}</td>
          <td className="px-4 py-3 text-sm text-gray-500">{m.spec}</td>
          <td className="px-4 py-3 text-sm text-gray-500">{m.unit}</td>
          <td className="px-4 py-3 text-sm text-gray-800">¥{m.price}</td>
          <td className="px-4 py-3 text-sm text-gray-500">{m.supplier}</td>
          <td className="px-4 py-3"><Badge variant={m.status === 'verified' ? 'success' : 'warning'} size="sm">{m.status === 'verified' ? '已审核' : '待审核'}</Badge></td>
        </tr>
      ))}</tbody>
    </table>
  )
  if (type === 'suppliers') return (
    <table className="w-full">
      <thead><tr className="border-b border-gray-100">
        {['序号', '名称', '类别', '地区', '评分', '状态'].map(h => (
          <th key={h} className="text-left text-xs font-medium text-gray-500 px-4 py-3">{h}</th>
        ))}
      </tr></thead>
      <tbody>{supplierData.map(s => (
        <tr key={s.no} className="border-b border-gray-50 hover:bg-gray-50">
          <td className="px-4 py-3 text-sm text-gray-400">{s.no}</td>
          <td className="px-4 py-3 text-sm font-medium text-gray-800">{s.name}</td>
          <td className="px-4 py-3 text-sm text-gray-500">{s.category}</td>
          <td className="px-4 py-3 text-sm text-gray-500">{s.region}</td>
          <td className="px-4 py-3 text-sm font-medium text-amber-600">{s.rating} ★</td>
          <td className="px-4 py-3"><Badge variant="success" size="sm">合格</Badge></td>
        </tr>
      ))}</tbody>
    </table>
  )
  if (type === 'staff') return (
    <table className="w-full">
      <thead><tr className="border-b border-gray-100">
        {['序号', '姓名', '岗位', '团队', '联系方式', '状态'].map(h => (
          <th key={h} className="text-left text-xs font-medium text-gray-500 px-4 py-3">{h}</th>
        ))}
      </tr></thead>
      <tbody>{staffData.map(s => (
        <tr key={s.no} className="border-b border-gray-50">
          <td className="px-4 py-3 text-sm text-gray-400">{s.no}</td>
          <td className="px-4 py-3 text-sm font-medium text-gray-800">{s.name}</td>
          <td className="px-4 py-3 text-sm text-gray-500">{s.role}</td>
          <td className="px-4 py-3 text-sm text-gray-500">{s.company}</td>
          <td className="px-4 py-3 text-sm text-gray-500">{s.phone}</td>
          <td className="px-4 py-3"><Badge variant="success" size="sm">在职</Badge></td>
        </tr>
      ))}</tbody>
    </table>
  )
  return (
    <table className="w-full">
      <thead><tr className="border-b border-gray-100">
        {['序号', '规范名称', '分类', '版本', '更新时间', '状态'].map(h => (
          <th key={h} className="text-left text-xs font-medium text-gray-500 px-4 py-3">{h}</th>
        ))}
      </tr></thead>
      <tbody>{specsData.map(s => (
        <tr key={s.no} className="border-b border-gray-50">
          <td className="px-4 py-3 text-sm text-gray-400">{s.no}</td>
          <td className="px-4 py-3 text-sm font-medium text-gray-800">{s.name}</td>
          <td className="px-4 py-3"><Badge variant="purple" size="sm">{s.category}</Badge></td>
          <td className="px-4 py-3 text-sm text-gray-500">{s.version}</td>
          <td className="px-4 py-3 text-sm text-gray-500">{s.updated}</td>
          <td className="px-4 py-3"><Badge variant="success" size="sm">现行</Badge></td>
        </tr>
      ))}</tbody>
    </table>
  )
}

export default function DataManagementPage() {
  const [activeTab, setActiveTab] = useState('materials')
  
  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Database size={24} className="text-gray-500" />
            <h1 className="text-xl font-bold text-gray-800">数据管理</h1>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" icon={<Upload size={14} />}>导入</Button>
            <Button variant="outline" size="sm" icon={<Download size={14} />}>导出</Button>
            <Button size="sm" icon={<Plus size={14} />}>新增</Button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1">
          {tabs.map(tab => (
            <button key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors
                ${activeTab === tab.key ? 'bg-blue-50 text-blue-600' : 'text-gray-500 hover:bg-gray-50'}`}>
              <tab.icon size={14} />
              {tab.label}
              <Badge variant={activeTab === tab.key ? 'primary' : 'default'} size="sm">{tab.count}</Badge>
            </button>
          ))}
        </div>

        {/* Table */}
        <Card>
          <CardBody className="p-0">
            <div className="px-4 py-3 border-b border-gray-100 flex items-center gap-3">
              <div className="relative flex-1 max-w-xs">
                <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input placeholder="搜索..." className="w-full h-8 pl-8 pr-3 bg-gray-50 border border-gray-200 rounded-lg text-sm" />
              </div>
            </div>
            <div className="overflow-x-auto">
              <DataTable type={activeTab} />
            </div>
          </CardBody>
        </Card>
      </div>
    </AppLayout>
  )
}
