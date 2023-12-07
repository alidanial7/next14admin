"use client";

import React from "react";
import styles from "./menuLink.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

type TMenuLinkProps = {
  title: string;
  icon: React.ReactNode;
  path: string;
};

function MenuLink({ title, icon, path }: TMenuLinkProps) {
  const pathName = usePathname();
  return (
    <Link
      href={path}
      className={`${styles.container} ${pathName === path && styles.active}`}
      title={styles.container}
    >
      {icon}
      {title}
    </Link>
  );
}

export default MenuLink;
