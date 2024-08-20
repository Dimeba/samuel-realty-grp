import { Nunito_Sans } from "next/font/google";
import "./globals.scss";

// Components
import Header from "@/components/Header";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Samuel Realty Group",
  description: "Real Estate Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <Header />

        {children}
      </body>
    </html>
  );
}
