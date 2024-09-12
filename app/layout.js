"use client";
import React from "react";

import { Nunito_Sans } from "next/font/google";
import "./globals.scss";

import { useState } from "react";
// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [selectedLocation, setSelectedLocation] = useState("All");
  return (
    <html lang="en">
      <head>
        {
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700&display=swap"
            rel="stylesheet"
          />
        }
      </head>
      <body className={nunitoSans.className}>
        <Header onLocationChange={setSelectedLocation} />

        {React.cloneElement(children, { selectedLocation })}
        <Footer />
      </body>
    </html>
  );
}
