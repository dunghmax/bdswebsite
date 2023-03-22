import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Link from "next/Link";
import React from "react";
import TodoFeature from "@/pages/todo/pages";
import AlbumFeature from "@/pages/album/pages";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div>
        <h1>Body</h1>
        <Link href="/about">Test Link & Nav</Link>

        <TodoFeature />

        <AlbumFeature />
      </div>
    </main>
  );
}
