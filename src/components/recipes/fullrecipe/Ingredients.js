import { useRecipes } from "../../data/RecipeContext";

function Ingredients(props) {
  const ingredients = useRecipes().ingredients;
  console.log(props.ingredients);
  console.log(ingredients);

  // for (const [key, value] of Object.entries(props.ingredients)) {
  //   console.log(`${key}: ${value}`);
  // }

  return <div></div>;
}

export default Ingredients;
