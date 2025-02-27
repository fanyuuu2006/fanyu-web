"use client";
import "@/styles/Navbar.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "@/assets/images/Logo.png";

export default function Navbar() {
  const router = useRouter();

  return (
    <header>
      <Image
        priority
        src={Logo}
        title="飯魚正負"
        alt="Logo"
        className="Logo"
        onClick={() => {
          router.push("/");
        }}
      />
    </header>
  );
}
