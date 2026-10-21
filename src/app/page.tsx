import { Hero } from "@/components/sections/Hero";
import {
  CategoryGrid,
  FaqPreview,
  FinalCta,
  HowItWorks,
  HumanDifference,
  Independence,
  PaidDisclosure,
  PainPoints,
} from "@/components/sections/HomeSections";
import { site } from "@/config/site";

export default function HomePage() {
  // Structured data only advertises a phone number once a real one is configured.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: site.url,
    description: site.description,
    areaServed: "US",
    ...(site.phone.isPlaceholder ? {} : { telephone: site.phone.tel }),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <CategoryGrid />
      <PainPoints />
      <HumanDifference />
      <HowItWorks />
      <PaidDisclosure />
      <Independence />
      <FaqPreview />
      <FinalCta />
    </>
  );
}
