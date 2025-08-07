import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Belajar Next.js",
  description: "halo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <nav className="w-full bg-pink-100 text-center py-2 text-pink-600 text-sm font-medium">
        DolCetta
      </nav>
      

        {children}

         <footer id="footer" className="bg-pink-100 pt-10">
    <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8 text-gray-800">

      <div>
      
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2">
            📧 prisaprisa601@gmail.com
          </li>
          <li className="flex items-center gap-2">
            ☎️ 9510‑1613‑1462
          </li>
          <li className="flex items-center gap-2">
            📍 Sukatani, Depok
          </li>
        </ul>
      </div>


      <div>
        <h3 className="font-bold text-xl mb-4">Support</h3>
        <ul className="space-y-2 text-sm">
          <li>Privacy Policy</li>
          <li>Terms</li>
        </ul>
      </div>


      <div>
        <h3 className="font-bold text-xl mb-4">Available On</h3>
        <ul className="space-y-2 text-sm">
          <li>Grab</li>
        </ul>
      </div>


      <div className="flex justify-end">
      </div>
    </div>


    <div className="bg-pink-200 py-4 text-center text-sm text-gray-700">
      ©2025 Dolcetta. Hak cipta terlindungi
    </div>
  </footer>
      </body>
    </html>
  );
}
