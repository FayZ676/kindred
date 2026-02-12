import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const averiaSerifLibre = localFont({
  src: [
    {
      path: "../fonts/Averia_Serif_Libre/AveriaSerifLibre-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Averia_Serif_Libre/AveriaSerifLibre-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../fonts/Averia_Serif_Libre/AveriaSerifLibre-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Averia_Serif_Libre/AveriaSerifLibre-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/Averia_Serif_Libre/AveriaSerifLibre-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Averia_Serif_Libre/AveriaSerifLibre-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-averia-serif-libre",
});

export const metadata: Metadata = {
  title: "Kindred - Love that lasts lifetimes",
  description:
    "A safe-haven for courtship drawing from the teachings and principles of the Baha'i faith",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${averiaSerifLibre.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
