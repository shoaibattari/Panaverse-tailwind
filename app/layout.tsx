import Head from "next/head";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
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
      <body>
        <Navbar2 />
        {children}
        <Footer />
      </body>
    </html>
  );
}
