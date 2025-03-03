import "@/styles/globals.css";
import Navbar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";

export const metadata = {
  title: "飯魚 FanYu",
  description: "不是一般人的一般人",
  icons: "/CampPhoto.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-TW">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
