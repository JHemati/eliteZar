import { useState } from "react";
import LoginPhonePage from "@/pages/LoginPhonePage";
import LoginOtpPage from "@/pages/LoginOtpPage";
import LoginPasswordPage from "@/pages/LoginPasswordPage";

type Page = "phone" | "otp" | "password";

export default function App() {
  const [page, setPage] = useState<Page>("phone");
  const [phone, setPhone] = useState("09130026714");
  const [key, setKey] = useState(0);

  const navigate = (next: Page) => {
    setKey((k) => k + 1);
    setPage(next);
  };

  return (
    <div className="size-full">
      {page === "phone" && (
        <LoginPhonePage
          key={key}
          onNext={(p) => {
            setPhone(p);
            navigate("otp");
          }}
        />
      )}
      {page === "otp" && (
        <LoginOtpPage
          key={key}
          phone={phone}
          onBack={() => navigate("phone")}
          onConfirm={() => alert("ورود موفق!")}
          onSwitchToPassword={() => navigate("password")}
        />
      )}
      {page === "password" && (
        <LoginPasswordPage
          key={key}
          onConfirm={() => alert("ورود موفق!")}
          onForgotPassword={() => navigate("otp")}
          onSwitchToOtp={() => navigate("otp")}
        />
      )}
    </div>
  );
}
