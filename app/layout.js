import { Inter } from "next/font/google";
import "./globals.css";
import './app.css'

import Header from '../Components/Header/header'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Math Work Sheet",
  description: "Math Work for Your Children",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header className='frame'/>
        {children}
      </body>
    </html>
  );
}
