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

  useEffect(() => {
    document.title = `${location}`;
  }, [location]);

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
          <Properties selectedLocation={location} />
        </div>
      </main>
    </>
  );
}
