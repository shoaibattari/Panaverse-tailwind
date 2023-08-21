import Head from "next/head";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "panaverse ",
  description: "next app panaverse tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body  className='mx-auto max-w-2xl md:max-w-[1550px]' >
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
