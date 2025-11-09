import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DeepX - Giải pháp AI & Hạ tầng số thông minh hàng đầu Việt Nam",
  description: "DeepX - Kiến tạo giải pháp dữ liệu và hạ tầng số đột phá, ứng dụng trí tuệ nhân tạo để mang lại giá trị thiết thực cho doanh nghiệp và xã hội.",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${inter.variable
      } antialiased`}>
        {children}
      </body>
    </html>
  );
}
