import { useState } from "react";
import SharedLayout from "@/components/SharedLayout";

interface Props {
  onNext: (phone: string) => void;
}

export default function LoginPhonePage({ onNext }: Props) {
  const [phone, setPhone] = useState("");

  return (
    <SharedLayout showFooter>
      {/* Left form panel */}
      <div className="animate-page-in absolute bg-[rgba(255,255,255,0.81)] border border-[#f0f0f0] border-solid top-[7.7%] left-[4.5%] w-[43%] bottom-[7.7%] flex flex-col items-center justify-center px-[8%]">
        <div className="flex flex-col gap-8 items-center justify-center w-full">
          <p className="font-['IRANSansXFaNum:Bold',sans-serif] leading-[1.32] text-[#0d0800] text-[clamp(15px,1.4vw,18px)] text-right w-full" dir="auto">
            ورود به سامانه
          </p>

          <div className="flex flex-col gap-4 items-end justify-center w-full">
            <p className="font-['IRANSansXFaNum:Regular',sans-serif] leading-[1.4] text-[#0d0800] text-[clamp(12px,1.1vw,14px)] text-right w-full" dir="auto">
              لطفا شماره موبایل خود را وارد کنید
            </p>

            {/* Phone input field */}
            <div className="flex flex-col items-start w-full gap-1">
              <div className="h-[58px] relative w-full">
                <div className="absolute bg-white inset-[10px_0_0_0] flex items-center justify-end px-3 py-[14px] rounded-[12px] border border-[#dad9d8]">
                  <input
                    className="flex-1 min-w-0 font-['IRANSansXFaNum:Regular',sans-serif] text-[#0d0800] text-[clamp(13px,1.2vw,16px)] text-right bg-transparent outline-none"
                    dir="auto"
                    inputMode="tel"
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="09xxxxxxxxx"
                    type="tel"
                    value={phone}
                  />
                </div>
                <div className="absolute bg-white flex h-5 items-center justify-center px-1 py-[2px] right-3 rounded-[16px] top-0">
                  <p className="font-['IRANSansXFaNum:Regular',sans-serif] text-[#55524c] text-[12px] leading-[1.32]" dir="auto">
                    شماره موبایل*
                  </p>
                </div>
              </div>

              {/* Spacer for inline message */}
              <div className="h-[22px]" />

              {/* Submit button */}
              <button
                className="bg-[#17e5e5] rounded-[12px] w-full cursor-pointer hover:bg-[#12cccc] active:bg-[#0fb3b3] transition-colors"
                onClick={() => phone.length >= 10 && onNext(phone)}
              >
                <div className="flex gap-1 items-center justify-center p-3">
                  <p className="font-['IRANSansXFaNum:Medium',sans-serif] leading-[1.48] text-[#0d0800] text-[clamp(14px,1.3vw,16px)] text-center" dir="auto">
                    ورود
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </SharedLayout>
  );
}
