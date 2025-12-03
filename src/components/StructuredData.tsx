export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "SportsOrganization",
    name: "Thunderbolts Football Club",
    alternateName: "TFC",
    url: "https://thunderboltsfc.com",
    logo: "https://thunderboltsfc.com/assets/img/logo3.png",
    description:
      "Premier football club in Nepal dedicated to developing elite talent, achieving competitive excellence, and inspiring the next generation of footballers.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Dhapakhel",
      addressLocality: "Lalitpur",
      addressCountry: "Nepal",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+977-980-197-3975",
      contactType: "General Inquiries",
      email: "info@thunderbolts.com.np",
    },
    sameAs: [
      "https://facebook.com/thunderboltsfc",
      "https://twitter.com/thunderboltsfc",
      "https://instagram.com/thunderboltsfc",
      "https://youtube.com/@thunderboltsfc",
    ],
    sport: "Football",
    memberOf: {
      "@type": "SportsOrganization",
      name: "All Nepal Football Association",
      alternateName: "ANFA",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Thunderbolts Football Club",
    url: "https://thunderboltsfc.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://thunderboltsfc.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
