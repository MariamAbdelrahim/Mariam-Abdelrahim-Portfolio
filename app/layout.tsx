import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const headerStore = await headers();
  const host = headerStore.get("host") ?? "localhost:3000";
  const protocol =
    headerStore.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title: "Mariam Abdelrahim Rapee | Data Scientist",
    description:
      "Data science portfolio of Mariam Abdelrahim Rapee — data analysis, interactive dashboards, machine learning, and data storytelling.",
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      title: "Mariam Abdelrahim Rapee | Data Scientist",
      description:
        "Data analysis, interactive dashboards, machine learning, and data storytelling.",
      type: "website",
      images: [
        {
          url: `${origin}/og.png`,
          width: 1731,
          height: 909,
          alt: "Mariam Abdelrahim — Data Scientist",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Mariam Abdelrahim Rapee | Data Scientist",
      description:
        "Data analysis, interactive dashboards, machine learning, and data storytelling.",
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
