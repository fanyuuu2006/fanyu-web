import "@/styles/globals.css";

export const metadata = {
  title: "飯魚 FanYu",
  description: "不是一般人的一般人",
  icons: "/CampPhoto.ico"
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-TW">
      <body >
        {children}
      </body>
    </html>
  );
}
