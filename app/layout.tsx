import Head from "next/head";
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
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
