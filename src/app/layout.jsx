import "./globals.css";
import styles from "./page.module.css";
import Link from "next/Link";
import NavBar from "@/components/navbar";
import React from "react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <NavBar />

        {children}

        <h1>Footer</h1>
      </body>
    </html>
  );
}
