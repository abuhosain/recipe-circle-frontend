"use client"
import { IRecipe } from "@/src/types";
import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Link from "next/link";
export default function RecipeCard({ recipe }: {recipe : IRecipe}) {
  return (
    <Card className="py-4 relative">
      <CardHeader className="pb-0 pt-2 flex justify-center">
        <Image
          alt="Card background"
          className="object-cover w-full rounded-xl"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width={400}
        />
        {/* Absolute positioning for Premium/Free label */}
        <div className="absolute top-2 right-2 bg-yellow-300 text-black z-10 px-2 py-1 rounded shadow">
          {recipe?.isPremium ? "Premium" : "Free"}
        </div>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <p className="text-large uppercase font-bold">{recipe?.title}</p>
        <div className="flex gap-2 items-center">
          <Rating
            style={{ maxWidth: 100 }}
            value={recipe.averageRating}
            readOnly
          />
          <p className="text-xl mt-1">{recipe?.averageRating}</p>
        </div>
        <h2>
          {" "}
          Posted by{" "}
          <Link className="underline" href={`profile/${recipe.author._id}`}>
            <b>
              <i>{recipe?.author?.name}</i>
            </b>
          </Link>
        </h2>
        <Link href={`/recipes/${recipe?._id}`} className="w-full">
          <Button
            className="mt-4"
            color="primary"
            size="sm"
            onClick={() => console.log("View Details clicked")}
          >
            View Details
          </Button>
        </Link>
      </CardBody>
    </Card>
  );
}
