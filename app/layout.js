"use client";
import React from "react";
import Head from "next/head";
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
      <Head>
        <meta name="description" content="Real estate agency" />
        <meta name="keywords" content="real estate, new york, long island" />
        <link rel="icon" href="/favicon.ico" />

        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className={nunitoSans.className}>
        <Header onLocationChange={setSelectedLocation} />
        {React.cloneElement(children, { selectedLocation })}{" "}
        {/* kloniranje React elementa i dodavanje ili izmjena props-a, kloniram Children  i dodajem selectedLocation prop koji se dalje prosljedjuje na */}
        <Footer />
      </body>
    </html>
  );
}
