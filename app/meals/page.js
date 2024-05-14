import MealsGrid from "@/ui/meals/meals-grid";
import Link from "next/link";
import { Suspense } from "react";
import { getMeals } from "../../lib/meals";
import Loading from "./meals-loading";
import styles from "./page.module.css";

export const Meals = async () => {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
};

export default async function page() {
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
        <Suspense fallback={<Loading />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
