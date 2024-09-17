"use client";

import { usePathname } from "next/navigation";
import Hero from "@/components/Hero";
import { useEffect } from "react";
import Head from "next/head";
import SocialMedia from "@/components/SocialMedia";
import Properties from "@/components/Properties";

export default function LocationListings() {
  const pathname = usePathname();

  const location = pathname.includes("new-york") ? "New York" : "Long Island";
  const isPastSales = pathname.includes("past-sales");
  useEffect(() => {
    document.title = `${
      isPastSales ? "Past Sales" : "Active Listings"
    } - ${location}`;
  }, [location, isPastSales]);

  return (
    <>
      {" "}
      <Head>
        <meta name="description" content={`${location}`} />
      </Head>
      <main>
        <Hero />
        <div>
          <SocialMedia />
        </div>
        <div>
          <Properties selectedLocation={location} isPastSales={isPastSales} />
        </div>
      </main>
    </>
  );
}
