import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '会展智能体平台 - 全流程AI管理系统',
  description: '面向会展企业的全流程AI智能管理系统，通过7大智能体覆盖从策划到宣传的全链路',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
