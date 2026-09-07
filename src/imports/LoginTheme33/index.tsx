import svgPaths from "./svg-wwtjt6zvr4";
import imgPolishedGoldSurfacesCyanLight2026072515411 from "./4414a465c48d1571d2be24e3b84969275e832769.png";
import imgNewlogo1 from "./a8344bea206e9bcc74d98698de553e07b0788cb4.png";

function VuesaxLinearEye() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/eye">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="eye">
          <path d={svgPaths.pd01f000} id="Vector" stroke="#55524C" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p2221a200} id="Vector_2" stroke="#55524C" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p123b8a80} id="Vector_3" opacity="0" stroke="#55524C" />
        </g>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="relative shrink-0 size-[16px]" data-name="vuesax/linear/eye">
        <VuesaxLinearEye />
      </div>
    </div>
  );
}

function InnerTextfield() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-w-px relative" data-name="_inner Textfield">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[8px] relative size-full">
          <Frame13 />
          <div className="[word-break:break-word] flex flex-col font-['IRANSansXFaNum:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3b3b3b] text-[16px] text-right whitespace-nowrap">
            <p className="leading-[1.48]" dir="auto">
              ●●●●●●
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-white content-stretch flex inset-[10px_0_0_0] items-center justify-end px-[12px] py-[14px] rounded-[12px]">
      <div aria-hidden className="absolute border border-[#dad9d8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <InnerTextfield />
    </div>
  );
}

function TextfileldLabel() {
  return (
    <div className="absolute bg-white content-stretch flex h-[20px] items-center justify-center px-[4px] py-[2px] right-[12px] rounded-[16px] top-0" data-name="_Textfileld-Label">
      <div className="[word-break:break-word] flex flex-col font-['IRANSansXFaNum:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#55524c] text-[12px] text-right whitespace-nowrap">
        <p className="leading-[1.32]" dir="auto">
          رمز ‌عبور*
        </p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="h-[58px] relative shrink-0 w-full">
      <Frame1 />
      <TextfileldLabel />
    </div>
  );
}

function InLineMessage() {
  return <div className="h-[22px] relative rounded-[4px] shrink-0 w-full" data-name="_inLine Message" />;
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="bg-[#17e5e5] relative rounded-[12px] shrink-0 w-full" data-name="Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center p-[12px] relative size-full">
            <p className="[word-break:break-word] font-['IRANSansXFaNum:Medium',sans-serif] leading-[1.48] not-italic relative shrink-0 text-[#0d0800] text-[16px] text-center whitespace-nowrap" dir="auto">
              تایید
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="h-[80px] relative shrink-0 w-full" data-name="Input">
        <div className="flex flex-col items-end size-full">
          <div className="content-stretch flex flex-col items-end relative size-full">
            <Frame12 />
            <InLineMessage />
          </div>
        </div>
      </div>
      <Frame17 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame14 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-end justify-center relative shrink-0 w-[281px]">
      <Frame22 />
      <p className="[word-break:break-word] font-['IRANSansXFaNum:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#084d4d] text-[14px] text-center w-full" dir="auto">
        ورود با رمز یک‌بار‌مصرف
      </p>
      <p className="[word-break:break-word] font-['IRANSansXFaNum:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#084d4d] text-[14px] text-center w-full" dir="auto">
        فراموشی رمز عبور
      </p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center justify-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['IRANSansXFaNum:Bold',sans-serif] leading-[1.32] not-italic relative shrink-0 text-[#0d0800] text-[18px] text-right w-[280px]" dir="auto">
        رمز عبور خود را وارد کنید
      </p>
      <Frame15 />
    </div>
  );
}

function Body() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-1/2 w-[552px]" data-name="body">
      <Frame16 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.81)] border border-[#f0f0f0] border-solid h-[704px] left-[64px] top-[64px] w-[552px]">
      <Body />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[64px] top-[64px]">
      <div className="-translate-y-1/2 absolute h-[704px] pointer-events-none right-[64px] top-1/2 w-[1151px]" data-name="Polished_gold_surfaces_cyan_light_202607251541 1">
        <img alt="" className="absolute inset-0 max-w-none object-bottom size-full" src={imgPolishedGoldSurfacesCyanLight2026072515411} />
        <div aria-hidden className="absolute border border-[#f0f0f0] border-solid inset-[-1px]" />
      </div>
      <Frame21 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-end justify-center leading-[1.32] not-italic relative shrink-0 text-right">
      <p className="font-['Doran:Bold',sans-serif] min-w-full relative shrink-0 text-[#936810] text-[32px] w-[min-content]" dir="auto">
        سامانه آریانا گلد
      </p>
      <p className="font-['Doran:Regular',sans-serif] relative shrink-0 text-[20px] text-black whitespace-nowrap" dir="auto">
        معامله مطمئن ، سرمایه پایدار
      </p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-end justify-center relative shrink-0">
      <div className="relative shrink-0 size-[96px]" data-name="newlogo 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNewlogo1} />
      </div>
      <Frame19 />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Frame">
          <path d={svgPaths.pe4c6180} id="Vector" stroke="#515151" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['IRANSansXFaNum:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-black text-right whitespace-nowrap">
        <p className="text-[16px]" dir="auto">
          <span className="[word-break:break-word] font-['IRANSansXFaNum:Regular',sans-serif] leading-[normal] not-italic text-[#383838]">شماره تماس:</span>
          <span className="leading-[normal]">{` 7213506 0353`}</span>
        </p>
      </div>
      <Frame />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Frame">
          <path d={svgPaths.pe4c6180} id="Vector" stroke="#515151" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['IRANSansXFaNum:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-black text-right whitespace-nowrap">
        <p className="text-[16px]" dir="auto">
          <span className="[word-break:break-word] font-['IRANSansXFaNum:Regular',sans-serif] leading-[normal] not-italic text-[#383838]">شماره همراه:</span>
          <span className="leading-[normal]">{` 09130026714`}</span>
        </p>
      </div>
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Frame">
          <path d={svgPaths.p26ddc800} id="Vector" stroke="#515151" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p35ba4680} id="Vector_2" stroke="#515151" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['IRANSansXFaNum:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-right text-white whitespace-nowrap">
        <p className="text-[16px]" dir="auto">
          <span className="[word-break:break-word] font-['IRANSansXFaNum:Regular',sans-serif] leading-[normal] not-italic text-[#383838]">آدرس:</span>
          <span className="leading-[normal]">{` `}</span>
          <span className="[word-break:break-word] font-['IRANSansXFaNum:Regular',sans-serif] leading-[normal] not-italic text-black">یزد بلوار امام جعفر صادق</span>
        </p>
      </div>
      <Frame3 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0">
      <Frame10 />
      <Frame11 />
      <Frame9 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Frame">
          <path d={svgPaths.p8db9670} id="Vector" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6.66667 17.5H13.3333" id="Vector_2" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 14.1667V17.5" id="Vector_3" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0">
      <div aria-hidden className="absolute border border-[#e5e3e3] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="[word-break:break-word] flex flex-col font-['IRANSansXFaNum:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-right whitespace-nowrap">
        <p className="leading-[28px]" dir="auto">
          نسخه وب اپلیکیشن / IOS
        </p>
      </div>
      <Frame4 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Frame">
          <path d="M10 12.5V2.5" id="Vector" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3053b100} id="Vector_2" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p37dcb700} id="Vector_3" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0">
      <div aria-hidden className="absolute border border-[#e5e3e3] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="[word-break:break-word] flex flex-col font-['IRANSansXFaNum:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-right whitespace-nowrap">
        <p className="leading-[28px]" dir="auto">
          دانلود اپلیکیشن اندروید
        </p>
      </div>
      <Frame5 />
    </div>
  );
}

function Btn() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-name="btn">
      <Frame7 />
      <Frame6 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-end relative shrink-0 w-full">
      <Frame8 />
      <Btn />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-end justify-center min-w-px relative">
      <Frame18 />
      <div className="[word-break:break-word] flex flex-col font-['IRANSansXFaNum:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[16px] text-black text-right w-[min-content]">
        <p className="leading-[32px]" dir="auto">
          مجموعه ما یکی از فعالان حوزه خرید و فروش طلا و جواهر در منطقه است که با ارائه انواع مصنوعات طلا، سکه و زیورآلات متنوع در خدمت مشتریان گرامی می‌باشد. برای دریافت اطلاعات بیشتر، می‌توانید با ما در ارتباط باشید.
        </p>
      </div>
      <Frame23 />
    </div>
  );
}

function Top() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.64)] content-stretch flex gap-[16px] h-[674px] items-center justify-center left-[632px] p-[64px] top-[80px] w-[568px]" data-name="top">
      <Frame20 />
    </div>
  );
}

export default function LoginTheme() {
  return (
    <div className="bg-[#f4f4f4] relative size-full" data-name="Login-Theme-3-3">
      <Group />
      <Top />
    </div>
  );
}