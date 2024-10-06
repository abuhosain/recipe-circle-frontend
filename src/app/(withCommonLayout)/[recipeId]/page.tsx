"use server"
import Container from "@/src/components/UI/Container";
import RecipeDetails from "@/src/components/UI/Recipe/RecipeDetails";
import { getSingleRecipesById } from "@/src/services/RecipeService";

interface IProps {
  params: {
    recipeId: string;
  };
}
export default async function RecipeDetailsPage({ params: { recipeId } }: IProps) {
  console.log("id", recipeId);
  const { data: recipe } = await getSingleRecipesById(recipeId);
  console.log(recipe);
  return (
    <Container>
      <div className="mx-auto my-3 ">
        <RecipeDetails key={recipe._id} recipe={recipe} />
      </div>
    </Container>
  );
}
