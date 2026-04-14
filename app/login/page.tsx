'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff, Building2, Users, BarChart3, Zap } from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()
  const [form, setForm] = useState({ account: '', password: '', remember: false })
  const [showPwd, setShowPwd] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    await new Promise(r => setTimeout(r, 1500))
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen flex">
      {/* Left brand panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-white/5" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-white/5" />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full bg-purple-400/10" />
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center px-16 text-white">
          <div className="mb-12">
            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center mb-6">
              <span className="text-2xl font-bold">会</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">会展智能体平台</h1>
            <p className="text-blue-100 text-lg max-w-md leading-relaxed">
              面向会展企业的全流程AI智能管理系统，通过7大智能体覆盖从策划到宣传的全链路，实现设计自动化与项目管理智能化
            </p>
          </div>
          {/* Features */}
          <div className="grid grid-cols-2 gap-4 max-w-md">
            {[
              { icon: Zap, label: 'AI智能策划', desc: '一键生成方案' },
              { icon: Building2, label: '智能项目管理', desc: '全流程可视化' },
              { icon: Users, label: '协同工作台', desc: '团队高效协作' },
              { icon: BarChart3, label: '数据驱动决策', desc: '实时效果监测' },
            ].map((f, i) => (
              <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/10">
                <f.icon size={20} className="mb-2 text-blue-200" />
                <p className="text-sm font-semibold">{f.label}</p>
                <p className="text-xs text-blue-200 mt-0.5">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right login panel */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold">会</span>
            </div>
            <span className="text-lg font-semibold text-gray-800">会展智能体平台</span>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">欢迎回来</h2>
            <p className="text-gray-500">请登录您的账号以继续</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Enterprise selector */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">企业</label>
              <div className="relative">
                <Building2 size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <select className="w-full h-10 pl-9 pr-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-400">
                  <option>华展会展集团</option>
                  <option>北京会展中心</option>
                  <option>上海国际展览</option>
                </select>
              </div>
            </div>

            {/* Account */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">账号</label>
              <div className="relative">
                <input
                  type="text"
                  value={form.account}
                  onChange={e => setForm({ ...form, account: e.target.value })}
                  placeholder="请输入邮箱或手机号"
                  className="w-full h-10 pl-3 pr-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 bg-white"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">密码</label>
              <div className="relative">
                <input
                  type={showPwd ? 'text' : 'password'}
                  value={form.password}
                  onChange={e => setForm({ ...form, password: e.target.value })}
                  placeholder="请输入密码"
                  className="w-full h-10 pl-3 pr-10 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 bg-white"
                  required
                />
                <button type="button" onClick={() => setShowPwd(!showPwd)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  {showPwd ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={form.remember}
                  onChange={e => setForm({ ...form, remember: e.target.checked })}
                  className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span className="text-sm text-gray-500">记住登录状态</span>
              </label>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-700">忘记密码？</a>
            </div>

            {/* Error */}
            {error && (
              <div className="bg-red-50 border border-red-100 rounded-lg px-4 py-2.5 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* Submit */}
            <button type="submit" disabled={loading}
              className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-sm transition-colors disabled:opacity-60 flex items-center justify-center gap-2">
              {loading ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  登录中...
                </>
              ) : '登录'}
            </button>
          </form>

          {/* Third-party login */}
          <div className="mt-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-xs text-gray-400">其他登录方式</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
            <div className="flex gap-3">
              <button className="flex-1 h-10 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 flex items-center justify-center gap-2 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24"><path fill="#EA4335" d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z" /><path fill="#34A853" d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2936293 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z" /><path fill="#4A90E2" d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5272727 23.1818182,9.81818182 L12,9.81818182 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z" /><path fill="#FBBC05" d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7C0.97978677,17.5L5.27698177,14.2678769Z" /></svg>
                企业微信
              </button>
              <button className="flex-1 h-10 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 flex items-center justify-center gap-2 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24"><path fill="#333" d="M12 0C5.374 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z" /></svg>
                钉钉
              </button>
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-gray-400">
            登录即表示同意 <a href="#" className="text-blue-600 hover:underline">《用户服务协议》</a> 和 <a href="#" className="text-blue-600 hover:underline">《隐私政策》</a>
          </p>
        </div>
      </div>
    </div>
  )
}
