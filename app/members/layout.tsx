import React from "react";
import styles from "./page.module.css";
import Sheet from "../_components/Sheet";
import Hero from "../_components/Hero";

type Props = {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props){
  return (
    <>
      <Hero title="Members" sub="メンバー" />
      <Sheet>{children}</Sheet>
    </>
  )
}
