import React from 'react';

interface StructuredDataProps {
  type: 'Restaurant' | 'LocalBusiness' | 'BreadcrumbList' | 'FAQPage' | 'Menu';
  data: any; // specific schema data
}

export const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  // Convert data to JSON-LD string based on type
  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  });

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />;
};
