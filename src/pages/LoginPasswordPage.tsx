import { useState } from "react";
import SharedLayout from "@/components/SharedLayout";

const EYE_PATH_1 =
  "M10.3867 8C10.3867 9.32 9.32 10.3867 8 10.3867C6.68 10.3867 5.61333 9.32 5.61333 8C5.61333 6.68 6.68 5.61333 8 5.61333C9.32 5.61333 10.3867 6.68 10.3867 8Z";
const EYE_PATH_2 =
  "M8 13.5133C10.3533 13.5133 12.5467 12.1267 14.0733 9.72667C14.6733 8.78667 14.6733 7.20667 14.0733 6.26667C12.5467 3.86667 10.3533 2.48 8 2.48C5.64667 2.48 3.45333 3.86667 1.92667 6.26667C1.32667 7.20667 1.32667 8.78667 1.92667 9.72667C3.45333 12.1267 5.64667 13.5133 8 13.5133Z";

interface Props {
  onConfirm: () => void;
  onSwitchToOtp: () => void;
  onForgotPassword: () => void;
}

export default function LoginPasswordPage({ onConfirm, onSwitchToOtp, onForgotPassword }: Props) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SharedLayout showDescription>
      {/* Left form panel - exact match with Figma */}
      <div className="absolute bg-[rgba(255,255,255,0.81)] border border-[#f0f0f0] border-solid top-[7.7%] left-[4.5%] w-[43%] bottom-[7.7%] flex flex-col items-center justify-center px-[8%]">
        <div className="flex flex-col gap-8 items-center justify-center w-full">
          <p className="font-['IRANSansXFaNum:Bold',sans-serif] leading-[1.32] text-[#0d0800] text-[clamp(15px,1.4vw,18px)] text-right w-full" dir="auto">
            رمز عبور خود را وارد کنید
          </p>

          <div className="flex flex-col items-start w-full gap-1">
            {/* Password input field - exact structure from Figma */}
            <div className="h-[58px] relative w-full">
              <div className="absolute bg-white inset-[10px_0_0_0] flex items-center justify-between px-[12px] py-[14px] rounded-[12px]">
                <div aria-hidden className="absolute border border-[#dad9d8] border-solid inset-0 pointer-events-none rounded-[12px]" />
                {/* Eye icon (left side in RTL) - exact structure from Figma */}
                <button
                  className="content-stretch flex items-center relative shrink-0 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <div className="relative shrink-0 size-[16px]">
                    <svg className="absolute block inset-0 size-full" fill="none" height="16" viewBox="0 0 16 16" width="16">
                      <path d={EYE_PATH_1} stroke="#55524C" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={EYE_PATH_2} stroke="#55524C" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </button>
                <input
                  className="flex-1 min-w-0 font-['IRANSansXFaNum:Regular',sans-serif] text-[#3b3b3b] text-[clamp(13px,1.2vw,16px)] text-right bg-transparent outline-none pr-[8px]"
                  dir="auto"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="●●●●●●"
                  type={showPassword ? "text" : "password"}
                  value={password}
                />
              </div>
              <div className="absolute bg-white flex h-5 items-center justify-center px-[4px] py-[2px] right-[12px] rounded-[16px] top-0">
                <p className="font-['IRANSansXFaNum:Regular',sans-serif] text-[#55524c] text-[12px] leading-[1.32]" dir="auto">
                  رمز ‌عبور*
                </p>
              </div>
            </div>

            {/* Spacer */}
            <div className="h-[22px]" />

            {/* Confirm button - exact styling from Figma */}
            <button
              className="bg-[#17e5e5] rounded-[12px] w-full cursor-pointer hover:bg-[#12cccc] active:bg-[#0fb3b3] transition-colors"
              onClick={() => password.length > 0 && onConfirm()}
            >
              <div className="flex gap-[4px] items-center justify-center p-[12px]">
                <p className="font-['IRANSansXFaNum:Medium',sans-serif] leading-[1.48] text-[#0d0800] text-[clamp(14px,1.3vw,16px)] text-center" dir="auto">
                  تایید
                </p>
              </div>
            </button>
          </div>

          {/* Secondary actions - exact structure from Figma */}
          <div className="flex flex-col gap-[12px] items-center w-full">
            <button
              className="font-['IRANSansXFaNum:Medium',sans-serif] leading-[1.4] text-[#084d4d] text-[clamp(11px,1vw,14px)] text-center cursor-pointer hover:opacity-70 transition-opacity"
              dir="auto"
              onClick={onSwitchToOtp}
            >
              ورود با رمز یک‌بار‌مصرف
            </button>
            <button
              className="font-['IRANSansXFaNum:Medium',sans-serif] leading-[1.4] text-[#084d4d] text-[clamp(11px,1vw,14px)] text-center cursor-pointer hover:opacity-70 transition-opacity"
              dir="auto"
              onClick={onForgotPassword}
            >
              فراموشی رمز عبور
            </button>
          </div>
        </div>
      </div>
    </SharedLayout>
  );
}
