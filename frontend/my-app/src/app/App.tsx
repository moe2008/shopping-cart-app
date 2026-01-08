import './App.css'
import { ShoppingPage } from '@/features/shopping-cart/components'

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-linear-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-80 h-80 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-lime-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-6000"></div>
      </div>
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      <div className="relative z-10 w-full px-2 md:px-8 py-8 md:py-12">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block">
            <h1 className="text-5xl md:text-7xl font-black bg-linear-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-3 tracking-tight">
              Shopping-Cart-App
            </h1>
            <div className="h-2 bg-linear-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-full transform -skew-x-12"></div>
          </div>
        </div>
        <div className="w-full max-w-[95%] mx-auto">
          <div className="backdrop-blur-xl bg-white/70 rounded-3xl shadow-2xl border border-white/50 p-1">
            <div className="bg-white rounded-[1.4rem] shadow-inner">
              <ShoppingPage />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App