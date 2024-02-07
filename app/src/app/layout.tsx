'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./layout.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import AppHeader from "@/components/app.header";
import AppFooter from "@/components/app.footer";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppHeader />
        <Container >
            {children}
        </Container>
        <AppFooter />
      </body>
    </html>
  );
}
