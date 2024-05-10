"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./nav-link.module.css";

export default function NavLink({ href, children }) {
  const patehname = usePathname();

  return (
    <Link href={href} className={patehname.startsWith(href) ? `${styles.link} ${styles.active}` : styles.link}>
      {children}
    </Link>
  );
}
