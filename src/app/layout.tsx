import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Varun Gunasekaran - Senior Software Engineer",
  description: "Senior Software Engineer with expertise in cloud-native web applications, Angular, React, .NET Core, and Azure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${firaCode.variable} antialiased bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark`}
      >
        {children}
        <div id="portal-root" />
      </body>
    </html>
  );
}
