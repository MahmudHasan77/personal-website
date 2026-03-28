import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const myUrl = "https://mahmud-hasan-seven.vercel.app";
export const metadata: Metadata = {
  title: "Md Mahmud Hasan | Web and Mobile App Developer Ethical hacker",
  description:
    "I'm a passionate Full Stack Web and Mobile App Developer building modern, responsive, and high-performance applications using React, Next.js, and React Native.",
  keywords: [
    "Mahmud hasan",
    "web Engineer",
    "web Developer",
    "MERN Stack",
    "Next.js",
    "React Developer",
    "Portfolio",
    "Bangladesh",
    "developer mahmud",
    "mobile app developer",
    "mobile application developer",
    "Ethical hacker",
  ],
  authors: [{ name: "Md Mahmud Hasan" }],

  openGraph: {
    title: "Md Mahmud Hasan | Web Engineer",
    description:
      "Check out my portfolio and latest projects built with React, Next.js, and MongoDB.",
    url: myUrl,
    siteName: "Md Mahmud Hasan Portfolio",
    images: [
      {
        url: "/mahmud-hasan.png",
        width: 1200,
        height: 630,
        alt: "Md Mahmud Hasan",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Md Mahmud Hasan | Web Engineer",
    description:
      "Building modern, scalable web applications using React, Next.js, and MongoDB.",
    images: ["/mahmud-hasan.png"],
  },
  metadataBase: new URL(myUrl),
  other: {
    "google-site-verification": "SpySfPuBYpu0p3WV0J0E-6Nzz71izC5yn7n-idWs1BE",
  },
  icons: {
    icon: "/mahmud-hasan.png",
    shortcut: "/mahmud-hasan.png",
    apple: "/mahmud-hasan.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <head>
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            try {
              const theme = localStorage.getItem('theme');
              if (theme === 'dark') {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            } catch (e) {}
          })();
        `,
      }}
    />
  </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
