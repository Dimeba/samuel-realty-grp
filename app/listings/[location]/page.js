"use client";

import { useSearchParams } from "next/navigation";
import Hero from "@/components/Hero";
import SocialMedia from "@/components/SocialMedia";
import Properties from "@/components/Properties";

export default function LocationListings({ selectedLocation }) {
  const searchParams = useSearchParams();
  const location = selectedLocation || searchParams.get("location") || "All";

  return (
    <main>
      <Hero />
      <div>
        <SocialMedia />
      </div>
      <div>
        <Properties selectedLocation={location} />
      </div>
    </main>
  );
}
