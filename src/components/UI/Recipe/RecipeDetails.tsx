"use client";
import { useState } from "react";
import { IRecipe, IUser } from "@/src/types";
import ImageGallery from "./ImageGallery";
import "@smastrom/react-rating/style.css";
import { useVote } from "@/src/hooks/recipe.hook";
import VoteComponent from "./RecipeVote";
import RecipeRating from "./RecipeRating";
import CommentSection from "./RecipeComment";

interface IProps {
  recipe: IRecipe;
  user : IUser
}

export default function RecipeDetails({ recipe, user }: IProps) {
  console.log(user)
  const [totalVotes, setTotalVotes] = useState(recipe?.voteScore || 0);

  // Use the custom mutation hook for voting
  const { mutate: voteRecipe } = useVote();

  const handleVote = (voteValue: 1 | -1 | 0) => {
    voteRecipe(
      { recipeId: recipe?._id, voteValue },
      {
        onSuccess: () => {
          // Update the local vote count after successful mutation
          setTotalVotes((prevVotes) => prevVotes + voteValue);
        },
        onError: (error) => {
          console.error("Error submitting vote:", error);
        },
      }
    );
  };

  return (
    <div className="grid md:grid-cols-2 gap-3">
      {/* Recipe details page */}
      <div className="">
        <div className="pr-12">
          <ImageGallery images={recipe?.images} />
        </div>
        <h3 className="text-3xl mt-3 font-semibold">{recipe?.title}</h3>
       

        {/* Description */}
        <p className="text-md mt-3 text-slate-500">{recipe?.description}</p>

        {/* Tags */}
        <div className="flex gap-3 mt-3 mb-2">
          <span className="text-xl">Tags:</span>
          <p className="flex gap-2 items-center">
            {recipe.tags ? (
              recipe.tags?.map((item, index) => (
                <span key={index}>`{item}`</span>
              ))
            ) : (
              <p>There are no tags available now.</p>
            )}
          </p>
        </div>

        {/* Vote */}
        <VoteComponent
          initialVote={0}
          onVote={handleVote}
          initialTotalVotes={totalVotes}
        />
      </div>

      {/* Author section */}

      <div >
        {/* <div className="border rounded-md w-full bg-slate-500 relative h-[20rem] mt-12">
          <Image
            src={
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            }
            className="flex justify-center mx-auto rounded-full absolute -top-24 right-52"
            height={200}
            width={200}
            alt="Author Name"
          />
          <div className="mt-32 text-center">
            <h3 className="font-bld text-3xl">
              HI I'm, {recipe?.author?.name}
            </h3>
            <h2 className="text-md">
              A culinary enthusiast with a love for creating delicious and
              easy-to-follow recipes. Passionate about blending flavors and
              making cooking enjoyable for everyone.
            </h2>

            <Link href={`profile/${recipe?.author?._id}`}>
              <Button className="px-2 mt-3">Learn More..</Button>
            </Link>
          </div>
        </div> */}

        <div className="mt-4">
        <RecipeRating  key={recipe._id} recipe={recipe}  />
        </div>

        <div>
          <CommentSection recipe={recipe} currentUser={user} />
        </div>
      </div>
    </div>
  );
}
