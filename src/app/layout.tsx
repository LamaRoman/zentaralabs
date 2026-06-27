import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://zentaralabs.com"),
  title: {
    default: "Attend Xpress — Best Attendance & HR Software in Nepal | Zentara Labs",
    template: "%s | Zentara Labs",
  },
  description:
    "Attend Xpress is a modern, affordable attendance and HR software for businesses in Nepal. Mobile QR clock-in, geo-fencing, automatic payroll and payslips — no fingerprint machine needed. A simple, low-cost alternative to traditional attendance systems.",
  keywords: [
    "attendance software Nepal",
    "HR software Nepal",
    "best attendance app Nepal",
    "employee attendance app Nepal",
    "mobile attendance Nepal",
    "QR attendance Nepal",
    "payroll software Nepal",
    "HR system Nepal",
    "attendance system for small business Nepal",
    "fingerprint machine alternative",
    "Hajir alternative",
    "Attend Xpress",
    "Zentara Labs",
    "Kathmandu",
  ],
  authors: [{ name: "Zentara Labs" }],
  creator: "Zentara Labs",
  publisher: "Zentara Labs",
  alternates: { canonical: "/" },
  verification: { google: "Po55SOPbcSJe1IshWGzcV4dKS_swpJ3z5Jz-5MnZXEw" },
  openGraph: {
    type: "website",
    locale: "en_NP",
    url: "https://zentaralabs.com",
    siteName: "Zentara Labs",
    title: "Attend Xpress — Best Attendance & HR Software in Nepal",
    description:
      "Modern mobile attendance & HR software for Nepali businesses. QR clock-in, geo-fencing, automatic payroll. No hardware, affordable, made in Nepal.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Attend Xpress — Best Attendance & HR Software in Nepal",
    description:
      "Modern mobile attendance & HR software for Nepali businesses. QR clock-in, geo-fencing, automatic payroll. No hardware needed.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "Business Software",
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Zentara Labs",
  url: "https://zentaralabs.com",
  email: "support@zentaralabs.com",
  description:
    "Zentara Labs builds smart, affordable business software in Nepal. Its flagship product, Attend Xpress, is a mobile attendance and HR system.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kathmandu",
    addressCountry: "NP",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+977-9761154213",
    contactType: "sales",
    areaServed: "NP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
