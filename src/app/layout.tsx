import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Ahtisham Saingal | Senior Shopify Web Developer & eCommerce Expert",
  description: "Premium Shopify developer specializing in custom theme design, custom Liquid section development, conversion rate optimization (CRO), speed optimization, and Shopify Plus solutions.",
  keywords: [
    "Shopify Developer",
    "Shopify Expert",
    "Shopify Plus Merchant",
    "Liquid Developer",
    "Shopify Theme Development",
    "eCommerce Web Developer",
    "Shopify Migration",
    "Store Speed Optimization",
    "Conversion Rate Optimization",
    "React Frontend Developer",
    "Custom Liquid",
    "DTC Brands Shopify Developer",
    "Ahtisham Saingal"
  ],
  authors: [{ name: "Muhammad Ahtisham Saingal" }],
  creator: "Muhammad Ahtisham Saingal",
  metadataBase: new URL("https://ahtishamsaingal.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ahtishamsaingal.com",
    title: "Muhammad Ahtisham Saingal | Senior Shopify Web Developer & eCommerce Expert",
    description: "Premium Shopify developer specializing in custom theme design, custom Liquid development, conversion rate optimization (CRO), speed optimization, and Shopify Plus solutions.",
    siteName: "Muhammad Ahtisham Saingal Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Ahtisham Saingal - Shopify Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Ahtisham Saingal | Senior Shopify Web Developer",
    description: "Build high-converting Shopify stores with customized theme sections, Liquid optimizations, and blazing fast performance.",
    images: ["/profile.jpg"],
    creator: "@AhtishamSaingal",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-charcoal font-sans antialiased font-medium">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Muhammad Ahtisham Saingal",
              "image": "https://ahtishamsaingal.com/profile.jpg",
              "description": "Senior Shopify Web Developer specializing in custom theme design, Liquid development, speed optimization, and Shopify Plus solutions.",
              "url": "https://ahtishamsaingal.com",
              "telephone": "+923459106532",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lahore",
                "addressCountry": "PK"
              },
              "sameAs": [
                "https://github.com/MuhammadAhtishamSaingal",
                "https://www.linkedin.com/in/muhammad-ahtisham-saingal-447718260",
                "https://www.instagram.com/ahtisham.shopify/"
              ]
            })
          }}
        />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
