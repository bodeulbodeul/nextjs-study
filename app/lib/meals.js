import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  return db.prepare("select * from meals").all();
}