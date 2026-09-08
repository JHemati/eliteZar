import imgBg from "@/imports/LoginTheme31/4414a465c48d1571d2be24e3b84969275e832769.png";
import imgLogo from "@/imports/LoginTheme31/a8344bea206e9bcc74d98698de553e07b0788cb4.png";

const PHONE_PATH =
  "M12.526 13.808C12.6981 13.887 12.892 13.9051 13.0758 13.8592C13.2595 13.8133 13.4221 13.7062 13.5368 13.5555L13.8327 13.168C13.9879 12.961 14.1892 12.793 14.4207 12.6773C14.6521 12.5615 14.9073 12.5013 15.166 12.5013H17.666C18.108 12.5013 18.532 12.6769 18.8445 12.9895C19.1571 13.302 19.3327 13.7259 19.3327 14.168V16.668C19.3327 17.11 19.1571 17.5339 18.8445 17.8465C18.532 18.159 18.108 18.3346 17.666 18.3346C13.6878 18.3346 9.87246 16.7543 7.05941 13.9412C4.24637 11.1282 2.66602 7.31288 2.66602 3.33464C2.66602 2.89261 2.84161 2.46868 3.15417 2.15612C3.46673 1.84356 3.89065 1.66797 4.33268 1.66797H6.83268C7.27471 1.66797 7.69863 1.84356 8.01119 2.15612C8.32375 2.46868 8.49935 2.89261 8.49935 3.33464V5.83463C8.49935 6.09338 8.43911 6.34857 8.32339 6.57999C8.20768 6.81142 8.03967 7.01272 7.83268 7.16797L7.44268 7.46047C7.2897 7.57728 7.18186 7.74346 7.13751 7.93076C7.09315 8.11806 7.115 8.31495 7.19935 8.48797C8.33825 10.8012 10.2114 12.672 12.526 13.808Z";

const LOCATION_PATH_1 =
  "M16.6667 8.33333C16.6667 12.4942 12.0508 16.8275 10.5008 18.1658C10.3564 18.2744 10.1807 18.3331 10 18.3331C9.81933 18.3331 9.64356 18.2744 9.49917 18.1658C7.94917 16.8275 3.33333 12.4942 3.33333 8.33333C3.33333 6.56522 4.03571 4.86953 5.28595 3.61929C6.5362 2.36905 8.23189 1.66667 10 1.66667C11.7681 1.66667 13.4638 2.36905 14.714 3.61929C15.9643 4.86953 16.6667 6.56522 16.6667 8.33333Z";

const LOCATION_PATH_2 =
  "M10 10.8333C11.3807 10.8333 12.5 9.71405 12.5 8.33333C12.5 6.95262 11.3807 5.83333 10 5.83333C8.61929 5.83333 7.5 6.95262 7.5 8.33333C7.5 9.71405 8.61929 10.8333 10 10.8333Z";

const MONITOR_PATH =
  "M16.6667 2.5H3.33333C2.41286 2.5 1.66667 3.24619 1.66667 4.16667V12.5C1.66667 13.4205 2.41286 14.1667 3.33333 14.1667H16.6667C17.5871 14.1667 18.3333 13.4205 18.3333 12.5V4.16667C18.3333 3.24619 17.5871 2.5 16.6667 2.5Z";

const DOWNLOAD_PATH_1 =
  "M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5";

const DOWNLOAD_PATH_2 = "M5.83333 8.33333L10 12.5L14.1667 8.33333";

function CallIcon() {
  return (
    <svg className="shrink-0" fill="none" height="20" viewBox="0 0 20 20" width="20">
      <path d={PHONE_PATH} stroke="#515151" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="shrink-0" fill="none" height="20" viewBox="0 0 20 20" width="20">
      <path d={LOCATION_PATH_1} stroke="#515151" strokeLinecap="round" strokeLinejoin="round" />
      <path d={LOCATION_PATH_2} stroke="#515151" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MonitorIcon() {
  return (
    <svg className="shrink-0" fill="none" height="20" viewBox="0 0 20 20" width="20">
      <path d={MONITOR_PATH} stroke="black" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.66667 17.5H13.3333" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 14.1667V17.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg className="shrink-0" fill="none" height="20" viewBox="0 0 20 20" width="20">
      <path d="M10 12.5V2.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
      <path d={DOWNLOAD_PATH_1} stroke="black" strokeLinecap="round" strokeLinejoin="round" />
      <path d={DOWNLOAD_PATH_2} stroke="black" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

interface SharedLayoutProps {
  children: React.ReactNode;
  showDescription?: boolean;
  showFooter?: boolean;
}

export default function SharedLayout({ children, showDescription = false, showFooter = false }: SharedLayoutProps) {
  return (
    <div className="bg-[#f4f4f4] relative size-full overflow-hidden" dir="rtl">
      {/* Full-screen animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-bottom animate-bg-ken-burns"
          src={imgBg}
        />
        <div aria-hidden className="absolute border border-[#f0f0f0] border-solid inset-[-1px]" />
      </div>

      {/* Left form panel slot */}
      {children}

      {/* Right info panel */}
      <div className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.64)] flex items-center justify-center top-[5.8%] right-[4.5%] w-[44%] bottom-[5.8%] p-[5%]" dir="rtl">
        <div className="flex flex-col gap-8 items-end justify-center w-full h-full">
          {/* Logo + brand */}
          <div className="flex flex-col gap-3 items-end justify-center">
            <div className="size-24 relative shrink-0">
              <img alt="آریانا گلد" className="absolute inset-0 object-cover size-full" src={imgLogo} />
            </div>
            <div className="flex flex-col gap-1 items-end text-right">
              <p className="font-['Doran:Bold',sans-serif] text-[#986c12] text-[clamp(22px,2.5vw,32px)] leading-[1.32] text-right" dir="rtl">
                سامانه آریانا گلد
              </p>
              <p className="font-['Doran:Regular',sans-serif] text-[#363636] text-[clamp(14px,1.6vw,20px)] leading-[1.32] text-right" dir="rtl">
                معامله مطمئن ، سرمایه پایدار
              </p>
            </div>
          </div>

          {/* Description — shown on OTP and Password pages */}
          {showDescription && (
            <p className="font-['IRANSansXFaNum:Regular',sans-serif] text-black text-[clamp(12px,1.1vw,16px)] leading-[2] text-right w-full" dir="rtl">
              مجموعه ما یکی از فعالان حوزه خرید و فروش طلا و جواهر در منطقه است که با ارائه انواع مصنوعات طلا، سکه و زیورآلات متنوع در خدمت مشتریان گرامی می‌باشد. برای دریافت اطلاعات بیشتر، می‌توانید با ما در ارتباط باشید.
            </p>
          )}

          {/* Contact info */}
          <div className="flex flex-col gap-2 items-end w-full">
            <div className="flex gap-2 items-center justify-end">
              <p className="font-['IRANSansXFaNum:Regular',sans-serif] text-[clamp(12px,1.1vw,16px)] text-right whitespace-nowrap" dir="rtl">
                <span className="text-[#383838]">شماره تماس:</span>
                <span>{` 7213506 0353`}</span>
              </p>
              <CallIcon />
            </div>
            <div className="flex gap-2 items-center justify-end">
              <p className="font-['IRANSansXFaNum:Regular',sans-serif] text-[clamp(12px,1.1vw,16px)] text-right whitespace-nowrap" dir="rtl">
                <span className="text-[#383838]">شماره همراه:</span>
                <span>{` 09130026714`}</span>
              </p>
              <CallIcon />
            </div>
            <div className="flex gap-2 items-center justify-end w-full">
              <p className="font-['IRANSansXFaNum:Regular',sans-serif] text-[clamp(12px,1.1vw,16px)] text-right whitespace-nowrap" dir="rtl">
                <span className="text-[#383838]">آدرس:</span>
                <span className="text-black">{` یزد بلوار امام جعفر صادق`}</span>
              </p>
              <LocationIcon />
            </div>
          </div>

          {/* Download buttons */}
          <div className="flex gap-2 items-center justify-end w-full flex-wrap">
            <button className="bg-white flex gap-2 items-center justify-center px-4 py-2 rounded-[8px] border border-[#e5e3e3] hover:bg-gray-50 transition-colors cursor-pointer">
              <p className="font-['IRANSansXFaNum:Regular',sans-serif] text-[clamp(10px,1vw,14px)] text-black leading-[28px] text-right" dir="rtl">
                نسخه وب اپلیکیشن / IOS
              </p>
              <MonitorIcon />
            </button>
            <button className="bg-white flex gap-2 items-center justify-center px-4 py-2 rounded-[8px] border border-[#e5e3e3] hover:bg-gray-50 transition-colors cursor-pointer">
              <p className="font-['IRANSansXFaNum:Regular',sans-serif] text-[clamp(10px,1vw,14px)] text-black leading-[28px] text-right" dir="rtl">
                دانلود اپلیکیشن اندروید
              </p>
              <DownloadIcon />
            </button>
          </div>

          {/* Footer — shown on Login page only */}
          {showFooter && (
            <p className="font-['IRANSansXFaNum:Regular',sans-serif] text-[#6c6c6c] text-[clamp(10px,1vw,14px)] text-center w-full leading-[28px]" dir="rtl">
              <span>{`تمامی حقوق برای وبسایت `}</span>
              <span className="font-['Doran:Bold',sans-serif] text-black">آریانا گلد</span>
              <span>{` محفوظ است `}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
