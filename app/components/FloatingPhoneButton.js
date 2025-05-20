// components/FloatingPhoneButton.js
import { Phone } from "lucide-react";
import Link from "next/link";

export default function FloatingPhoneButton({ phoneNumber }) {
  // Format the phone number for tel: link
  const formattedNumber = phoneNumber.replace(/\D/g, "");

  return (
    <div className="fixed left-4 bottom-4 z-50">
      <Link
        href={`tel:${formattedNumber}`}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-[#dc1d46] !text-white shadow-l transition-all duration-300 animate-bounce hover:animate-none"
        aria-label="Call us"
      >
        <Phone size={18} />
      </Link>
    </div>
  );
}
