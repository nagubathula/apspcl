import { Montserrat } from "next/font/google";
import "./globals.css";

const inter = Montserrat({ subsets: ["latin"],variable: '--font-Montserrat'  });

export const metadata = {
  title: "APSPCL",
  description: "Official web page of APSPCL",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
