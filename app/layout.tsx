import type { Metadata } from "next";
import { Inter, Kanit, Sriracha, Caveat, Fahkwang } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const kanit = Kanit({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["100", "300", "400"],
  variable: "--font-kanit",
});
const sriracha = Sriracha({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sriracha",
});
const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-caveat",
});

const fahkwang = Fahkwang({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "600", "700"],
  variable: "--font-fahkwang",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${kanit.variable} ${caveat.variable} ${sriracha.variable} ${fahkwang.variable} bg-zinc-900 h-screen `}
      >
        {children}
      </body>
    </html>
  );
}

const metadata: Metadata = {
  title: "Bus Kehidupan",
  description: "reklame agen bus",
};

export { metadata };
