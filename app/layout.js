import { Inter } from "next/font/google";
import "./globals.css";

import Header from '../Components/Header/header'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MathSheets.Online FREE",
  description: "MathSheets.Online - Math Work for Your Children",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
