import { Nunito_Sans } from "next/font/google";
import "./globals.scss";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

//components
import Header from "@/components/Header";

export const metadata = {
  title: "Samuel Realty Group",
  description: "Real Estate Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        {children}
        <Header />
      </body>
    </html>
  );
}
