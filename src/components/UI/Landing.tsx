 "use client"
import { Input } from "@nextui-org/react";
import RecipeCard from "./Recipe/RecipeCard";
import { SearchIcon } from "../icons";
import { getAllRecipes } from "@/src/services/RecipeService";
export default async function Landing() {
    const {
        data: { recipes },
      } = await getAllRecipes(); //
  return (
    <>
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
      <hr className="w-full mt-3" />
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map((recipe: any) => (
          <RecipeCard key={recipe._id} recipe={recipe} />
        ))}
      </div>
    </>
  );
}
