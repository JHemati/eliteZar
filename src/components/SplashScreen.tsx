'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      onFinish();
    }, 2500); // مدت زمان نمایش اسپلش اسکرین (2.5 ثانیه)

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white overflow-hidden">
      {/* Background Decorative Elements (Minimal & Professional) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-50 rounded-full blur-[100px] opacity-60 animate-pulse" />
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] bg-indigo-50 rounded-full blur-[80px] opacity-60 animate-pulse delay-700" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-8">
        
        {/* Logo Animation */}
        <div className="relative w-32 h-32 md:w-40 md:h-40 animate-logo-enter">
          <div className="absolute inset-0 bg-blue-100 rounded-3xl rotate-12 scale-95 opacity-50 blur-sm animate-logo-glow" />
          <div className="relative w-full h-full bg-white rounded-3xl shadow-xl flex items-center justify-center p-6 animate-logo-bounce-in">
             {/* جایگزینی با لوگوی اصلی پروژه - اگر مسیری دارید عوض کنید */}
             <div className="w-full h-full flex items-center justify-center text-blue-600 font-bold text-4xl">
                {/* اگر فایل لوگو دارید از کامپوننت Image استفاده کنید */}
                {/* <Image src="/logo.svg" alt="Logo" fill className="object-contain" priority /> */}
                
                {/* لوگوی متنی/آیکونی مینیمال به عنوان پیش‌فرض */}
                <svg viewBox="0 0 100 100" className="w-20 h-20 md:w-24 md:h-24 fill-current">
                   <circle cx="50" cy="50" r="45" className="opacity-10" />
                   <path d="M50 20 L80 70 L20 70 Z" className="opacity-20" />
                   <circle cx="50" cy="50" r="15" />
                </svg>
             </div>
          </div>
        </div>

        {/* Brand Name Animation */}
        <div className="flex flex-col items-center space-y-2 animate-text-slide-up" style={{ animationDelay: '0.3s' }}>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-tight">
            الیت زار
          </h1>
          <p className="text-sm md:text-base text-gray-500 font-medium">
            تجربه هوشمند مدیریت املاک
          </p>
        </div>

        {/* Minimal Loading Bar */}
        <div className="w-48 h-1 bg-gray-100 rounded-full overflow-hidden mt-8">
          <div className="h-full bg-blue-600 rounded-full animate-loading-bar" />
        </div>
      </div>

      {/* Inline Styles for Custom Animations */}
      <style jsx>{`
        @keyframes logo-enter {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes logo-bounce-in {
          0% { opacity: 0; transform: scale(0.3); }
          50% { transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes logo-glow {
          0%, 100% { opacity: 0.3; transform: rotate(12deg) scale(0.95); }
          50% { opacity: 0.6; transform: rotate(12deg) scale(1.05); }
        }
        @keyframes text-slide-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes loading-bar {
          0% { width: 0%; margin-left: 50%; }
          50% { width: 70%; margin-left: 15%; }
          100% { width: 100%; margin-left: 0%; }
        }

        .animate-logo-enter {
          animation: logo-enter 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .animate-logo-bounce-in {
          animation: logo-bounce-in 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .animate-logo-glow {
          animation: logo-glow 3s ease-in-out infinite;
        }
        .animate-text-slide-up {
          opacity: 0;
          animation: text-slide-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .animate-loading-bar {
          animation: loading-bar 2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>
    </div>
  );
}
