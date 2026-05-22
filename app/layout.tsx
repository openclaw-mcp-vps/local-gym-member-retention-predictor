import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GymRetain – Predict Which Members Will Cancel Next Month",
  description: "Analyzes check-in frequency, class attendance, and payment patterns to identify at-risk gym members 30 days before they cancel."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="edc0624d-a525-4115-9158-3dfeb0807bb6"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
