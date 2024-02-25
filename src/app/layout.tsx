import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "G-Sneaker",
  description: "G-Sneaker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <main className="flex flex-col items-center w-full overflow-hidden h-full min-h-screen text-white bg-white ">
          <div className="w-full h-[100vh]">
            <div className="w-full h-[60%] bg-white"></div>
            {children}
            <div className="w-full h-[40%] bg-[#F6C90E]"></div>
          </div>
        </main>
      </body>
    </html>
  );
}
