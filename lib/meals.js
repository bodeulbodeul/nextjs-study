import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("select * from meals").all();
}

export const getMeal = (slug) => {
  return db.prepare("SELECT * FROM MEALS WHERE slug = ?").get(slug);
};

export const saveMeal = (meal) => {
  meal.instructions = xss(meal.instructions);
  meal.slug = slugify(meal.title);
};
