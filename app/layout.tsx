import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cookies } from 'next/headers';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DeepX - Giải pháp AI & Hạ tầng số thông minh hàng đầu Việt Nam",
  description: "DeepX - Kiến tạo giải pháp dữ liệu và hạ tầng số đột phá, ứng dụng trí tuệ nhân tạo để mang lại giá trị thiết thực cho doanh nghiệp và xã hội.",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
};

export default async function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  const store = await cookies();
  const locale = store.get('NEXT_LOCALE')?.value || 'vi';

  return (
    <html lang={locale}>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
