import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Visible AI — AI Campaign Production",
  description: "Campaign-level creative, delivered in days, not months.",
  openGraph: {
    title: "Visible AI — AI Campaign Production",
    description: "Campaign-level creative, delivered in days, not months.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-bg text-ink font-sans">{children}</body>
    </html>
  );
}
