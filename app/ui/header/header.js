import logo from "@/assets/logo.png";
import styles from "./header.module.css";
import Image from "next/image";
import HeaderBackground from "./header-background";
import NavLink from "./nav-link";
import Link from "next/link";

export default function Headers() {
  return (
    <>
      <HeaderBackground />
      <header className={styles.header}>
        {/* 로고 */}
        <Link href="/" className={styles.logo}>
          <Image src={logo} alt="식탁 가득한 음식" priority />
          NextLevel Food
        </Link>
        {/* 메뉴 */}
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
