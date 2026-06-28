import FooterLinks from "@/components/navbar/FooterLinks";
import { Navbar } from "@/components/navbar/Navbar";
import "@/styles/globals.scss";
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from "@mantine/core";
import '@mantine/core/styles.css';
import { Notifications } from "@mantine/notifications";
import { Geist, Geist_Mono } from "next/font/google";
import { PROFILE_IMAGE } from "@/utils/siteAssets";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ujjwal Pandey | Full-stack Engineer",
  description: "Portfolio of Ujjwal Pandey, a Full-stack Software Engineer focused on Java, React, Next.js, and mobile app development.",
  icons: {
    icon: PROFILE_IMAGE,
    apple: PROFILE_IMAGE,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`} style={{ margin: "auto" }}>
        <MantineProvider>
          <Notifications />
          <Navbar />
          {children}  {/* Always CSR */}
          <FooterLinks />
        </MantineProvider>
      </body>
    </html>
  );
}
