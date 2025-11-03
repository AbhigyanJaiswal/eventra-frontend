import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eventra – Wedding & Event Services",
  description:
    "Discover and book trusted wedding & event service vendors across Bihar – photographers, decorators, caterers, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-primary text-primary">
        {children}
      </body>
    </html>
  );
}
