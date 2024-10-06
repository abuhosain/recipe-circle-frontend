 "use server"
import RecipeCard from "@/src/components/UI/Recipe/RecipeCard";
import { getAllRecipes } from "@/src/services/RecipeService";
export default async function Home() {
  const { data: { recipes } } = await getAllRecipes(); //  
  return (
    <section>
    
      {/* Render the list of recipes using RecipeCard */}
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map((recipe: any) => (  
            <RecipeCard key={recipe._id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
}
