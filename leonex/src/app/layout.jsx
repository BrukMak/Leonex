import "../styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Head from "next/head";



export const metadata = {
  title: "Leonex Solutions",
  description: "It solutions and technology partner",
  openGraph: { title: "Leonex Solutions" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className="font-inter bg-gray-700 bg-white">
          <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
