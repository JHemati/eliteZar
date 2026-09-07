import { useState, useEffect, useRef } from "react";
import SharedLayout from "@/components/SharedLayout";

const ARROW_RIGHT_PATH = "M14.43 5.93L20.5 12L14.43 18.07";

interface Props {
  phone: string;
  onBack: () => void;
  onConfirm: () => void;
  onSwitchToPassword: () => void;
}

export default function LoginOtpPage({ phone, onBack, onConfirm, onSwitchToPassword }: Props) {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [seconds, setSeconds] = useState(160);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (seconds <= 0) return;
    const timer = setInterval(() => setSeconds((s) => s - 1), 1000);
    return () => clearInterval(timer);
  }, [seconds]);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const next = [...otp];
    next[index] = value.slice(-1);
    setOtp(next);
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <SharedLayout showDescription>
      {/* Left form panel - exact match with Figma */}
      <div className="absolute bg-[rgba(255,255,255,0.81)] border border-[#f0f0f0] border-solid top-[7.7%] left-[4.5%] w-[43%] bottom-[7.7%] flex flex-col items-center justify-center px-[8%]">
        {/* Back arrow (top-left in RTL context = top-right visually) */}
        <button
          className="absolute top-[39px] left-[39px] cursor-pointer hover:opacity-70 transition-opacity"
          onClick={onBack}
        >
          <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
            <path
              d={ARROW_RIGHT_PATH}
              stroke="#292D32"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="1.5"
            />
            <path
              d="M3.5 12H20.33"
              stroke="#292D32"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="1.5"
            />
          </svg>
        </button>

        <div className="flex flex-col gap-8 items-center justify-center w-full">
          <p className="font-['IRANSansXFaNum:Bold',sans-serif] leading-[1.32] text-[#0d0800] text-[clamp(15px,1.4vw,18px)] text-right w-full" dir="auto">
            کد تایید را وارد کنید
          </p>

          <div className="flex flex-col gap-[26px] items-start w-full">
            <p className="font-['IRANSansXFaNum:Regular',sans-serif] leading-[1.4] text-[#0d0800] text-[clamp(11px,1vw,14px)] text-right w-full" dir="auto">
              {`کد تایید برای شماره ${phone} پیامک شد`}
            </p>

            {/* OTP Input boxes — exact structure from Figma */}
            <div className="relative shrink-0 w-full" dir="ltr">
              <div className="content-stretch flex items-start relative size-full">
                {[0, 1, 2, 3].map((i) => (
                  <input
                    key={i}
                    ref={(el) => { inputRefs.current[i] = el; }}
                    className={[
                      "bg-white flex-[1_0_0] min-w-px h-[48px] text-center font-['IRANSansXFaNum:Bold',sans-serif] text-[#55524c] text-[clamp(13px,1.4vw,16px)]",
                      i === 0 ? "rounded-bl-[12px] rounded-tl-[12px]" : "",
                      i === 3 ? "rounded-br-[12px] rounded-tr-[12px]" : "",
                      otp[i] !== ""
                        ? "border border-[#dad9d8]"
                        : i === otp.findIndex((v) => v === "")
                        ? "border border-[#17e5e5]"
                        : "border border-[#dad9d8]",
                    ].join(" ")}
                    inputMode="numeric"
                    maxLength={1}
                    onChange={(e) => handleOtpChange(i, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(i, e)}
                    type="text"
                    value={otp[i]}
                  />
                ))}
              </div>
            </div>

            {/* Timer + confirm — exact structure from Figma */}
            <div className="flex flex-col gap-[16px] items-start w-full">
              <div className="[word-break:break-word] content-stretch flex font-['IRANSansXFaNum:Regular',sans-serif] gap-[8px] items-center justify-center leading-[1.4] not-italic relative shrink-0 text-[#55524c] text-[clamp(11px,1vw,14px)] text-center w-full whitespace-nowrap">
                <p className="relative shrink-0" dir="auto">مانده تا دریافت مجدد کد</p>
                <p className="relative shrink-0" dir="auto">{seconds > 0 ? formatTime(seconds) : "ارسال مجدد"}</p>
              </div>

              <button
                className="bg-[#17e5e5] rounded-[12px] w-full cursor-pointer hover:bg-[#12cccc] active:bg-[#0fb3b3] transition-colors"
                onClick={() => otp.every((d) => d !== "") && onConfirm()}
              >
                <div className="flex gap-[4px] items-center justify-center p-[12px]">
                  <p className="font-['IRANSansXFaNum:Medium',sans-serif] leading-[1.48] text-[#0d0800] text-[clamp(14px,1.3vw,16px)] text-center" dir="auto">
                    تایید
                  </p>
                </div>
              </button>
            </div>
          </div>

          <button
            className="font-['IRANSansXFaNum:Medium',sans-serif] leading-[1.4] text-[#084d4d] text-[clamp(11px,1vw,14px)] text-center cursor-pointer hover:opacity-70 transition-opacity"
            dir="auto"
            onClick={onSwitchToPassword}
          >
            ورود با رمز عبور
          </button>
        </div>
      </div>
    </SharedLayout>
  );
}
