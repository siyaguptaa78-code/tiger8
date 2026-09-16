import type { Metadata } from "next";
import { Raleway, Fjalla_One } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/config/constants";

const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });
const fjallaOne = Fjalla_One({ weight: "400", subsets: ["latin"], variable: "--font-fjalla" });

export const metadata: Metadata = {
  metadataBase: new URL('https://tigers365id.com'),
  verification: {
    google: "4rOIin98EB4WV1HiT78JnwyGjTCDEW_ywIkOuej-QM0",
  },
  title: "Tiger365 Online ID | Official Access Guide",
  description: "Explore Tiger365 information, online ID guidance, sports gaming and gaming resources, login help, and frequently asked questions.",
  keywords: ["tiger365", "tiger365 login", "tiger365 register", "tiger365 id", "tiger365 exchange", "tiger 365", "tiger365 official ID"],
  applicationName: 'Tiger365',
  authors: [{ name: 'Tiger365' }],
  creator: 'Tiger365',
  publisher: 'Tiger365',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Tiger365 Online ID | Official Access Guide",
    description: "Explore Tiger365 information, online ID guidance, sports gaming and gaming resources, login help, and frequently asked questions.",
    url: "https://tigers365id.com",
    siteName: "Tiger365",
    images: [
      {
        url: "https://tiger365com.com/wp-content/uploads/2025/04/logo-text-768x134.png",
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.brand.name} Official Logo`,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Tiger365 Online ID | Official Access Guide",
    description: "Explore Tiger365 information, online ID guidance, sports gaming and gaming resources, login help, and frequently asked questions.",
    images: ["https://tiger365com.com/wp-content/uploads/2025/04/logo-text-768x134.png"],
  },
  icons: {
    icon: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://tigers365id.com/#website",
        "url": "https://tigers365id.com/",
        "name": "Tiger365",
        "inLanguage": "en"
      },
      {
        "@type": "Organization",
        "@id": "https://tigers365id.com/#organization",
        "name": "Tiger365",
        "url": "https://tigers365id.com/"
      },
      {
        "@type": "WebPage",
        "@id": "https://tigers365id.com/#webpage",
        "url": "https://tigers365id.com/",
        "name": "Tiger365 Online ID | Official Access Guide",
        "description": "Explore Tiger365 information, online ID guidance, sports gaming and gaming resources, login help, and frequently asked questions.",
        "isPartOf": {
          "@id": "https://tigers365id.com/#website"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://tigers365id.com/#faq",
        "url": "https://tigers365id.com/",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Tiger365?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tiger365 is the brand or website referenced on this domain. Check the site's current pages and terms for the latest information."
            }
          },
          {
            "@type": "Question",
            "name": "How does a Tiger365 ID work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "An account ID is generally used to identify a user account. Refer to Tiger365's current account instructions and terms for the exact process."
            }
          },
          {
            "@type": "Question",
            "name": "How can I access Tiger365?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Use the site's current official URL and verify the domain before entering any account information. Follow the access instructions published on the site."
            }
          },
          {
            "@type": "Question",
            "name": "What sports are available on Tiger365?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Available sports can change. Check the current sports or gaming section on the website for the latest list and availability."
            }
          },
          {
            "@type": "Question",
            "name": "Does Tiger365 provide live sports information?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Check the site's current sports section for any live-event information and the terms that apply to its use."
            }
          },
          {
            "@type": "Question",
            "name": "How can I get help with my Tiger365 account?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Use the contact or support details published on the website. Avoid relying on unofficial accounts or third-party contacts."
            }
          },
          {
            "@type": "Question",
            "name": "How do I find Tiger365 login information?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Use the official domain and follow the current login or access instructions. If access fails, use the site's published support channel."
            }
          },
          {
            "@type": "Question",
            "name": "What payment options are supported?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Use the contact or support details published on the website. Avoid relying on unofficial accounts or third-party contacts."
            }
          },
          {
            "@type": "Question",
            "name": "What should I do if I have trouble accessing my account?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Use the official domain and follow the current login or access instructions. If access fails, use the site's published support channel."
            }
          },
          {
            "@type": "Question",
            "name": "Where can I find the latest Tiger365 updates?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Refer to Tiger365's current website information and terms for the most accurate answer."
            }
          }
        ]
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body 
        className={`${raleway.variable} ${fjallaOne.variable}`}
        style={{
          '--primary': SITE_CONFIG.theme.primary,
          '--primary-hover': SITE_CONFIG.theme.primaryHover,
          '--primary-rgb': SITE_CONFIG.theme.primaryRgb,
          '--background': SITE_CONFIG.theme.background,
          '--secondary': SITE_CONFIG.theme.secondary,
          '--foreground': SITE_CONFIG.theme.foreground,
          '--text-primary': SITE_CONFIG.theme.textPrimary,
          '--text-secondary': SITE_CONFIG.theme.textSecondary,
          '--text-muted': SITE_CONFIG.theme.textMuted,
          '--border': SITE_CONFIG.theme.border,
          '--footer-bg': SITE_CONFIG.theme.footerBg,
        } as React.CSSProperties}
      >
        {children}
      </body>
    </html>
  );
}
