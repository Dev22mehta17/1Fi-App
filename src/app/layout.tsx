import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "1Fi - Shop Using Mutual Funds | 1Fi Marketplace",
  description: "India's first LAMF-based shopping platform. Buy what you love on 0% No-Cost EMI without selling your mutual fund investments.",
  icons: {
    icon: "https://1fi.in/1fi.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#712CDC",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
