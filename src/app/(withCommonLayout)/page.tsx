 "use server"
import { SearchIcon } from "@/src/components/icons";
import RecipeCard from "@/src/components/UI/Recipe/RecipeCard";
import { getAllRecipes } from "@/src/services/RecipeService";
import { Input } from "@nextui-org/input";
export default async function Home() {
  const { data: { recipes } } = await getAllRecipes();
   //  
  return (
    <section>
    <div className="max-w-xl flex-1 mx-auto">
        <form className="flex-1">
          <Input
            aria-label="Search"
            classNames={{
              inputWrapper: "bg-default-100",
              input: "text-sm",
            }}
            placeholder="Search..."
            size="lg"
            startContent={
              <SearchIcon className="pointer-events-none flex-shrink-0 text-base" />
            }
            type="text"
          />
        </form>
      </div>
      {/* Render the list of recipes using RecipeCard */}
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map((recipe: any) => (  
            <RecipeCard key={recipe._id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
}
