import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zentara Labs — Smart Software for Businesses in Nepal",
  description:
    "Zentara Labs builds smart software solutions for businesses and organizations in Nepal. Products include Attend Xpress (HR & Attendance) and School Management System.",
  keywords: "software, Nepal, HR software, school management, attendance, Kathmandu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
