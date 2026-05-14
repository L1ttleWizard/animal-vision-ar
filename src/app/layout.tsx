import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { PhoneFrame } from "@/components/PhoneFrame";
import { Providers } from "@/store/Providers";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Мир глазами животного — AR-прототип",
  description:
    "Прототип мобильного AR-приложения «Мир глазами животного». Делает мир видимым через зрение разных животных.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#0F1A0C",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full">
        <Providers>
          <PhoneFrame>{children}</PhoneFrame>
        </Providers>
      </body>
    </html>
  );
}
