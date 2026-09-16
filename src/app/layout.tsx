import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muneeb Ahmed — Full Stack Web Developer",
  description:
    "Portfolio of Muneeb Ahmed, a full stack web developer based in Lahore, Pakistan, working with React, Next.js, Node.js and Express.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="antialiased"
        style={
          {
            "--font-display": "'Fraunces', serif",
            "--font-body": "'Inter', sans-serif",
          } as React.CSSProperties
        }
      >
        {children}
      </body>
    </html>
  );
}
