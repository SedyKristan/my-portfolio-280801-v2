import { Open_Sans } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-openSans",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.variable}>
        {children}
        {/* <PageTransition>{children}</PageTransition> */}
      </body>
    </html>
  );
}
