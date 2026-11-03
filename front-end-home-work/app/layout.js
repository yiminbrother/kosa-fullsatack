import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppHeader from "./AppHeader";
import AppAside from "./AppAside";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "React 실습 노트",
  description: "React Props와 State 코드 실습",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-zinc-100 text-zinc-900">
        <AppHeader />
        <div className="flex flex-1">
          <AppAside />
          <main className="min-w-0 flex-1 p-4 sm:p-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
