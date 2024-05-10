import Link from "next/link";
import styles from "./page.module.css";
import MealsGrid from "@/ui/meals/meals-grid";
import { getMeals } from "@/lib/meals";

export default async function page() {
  const meals = await getMeals();
  return (
    <>
      <header className={styles.header}>
        <h1>Delicious meals, created</h1>
        <span className={styles.highlight}>by you</span>
        <p>Choose your favorite recipe and cook it yourself. It's easy and fun!</p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share your Favorite Recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}
