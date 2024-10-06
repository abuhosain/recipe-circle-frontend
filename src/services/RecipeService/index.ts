"use server";
import envConfig from "@/src/config/env.confg";
import axiousInstance from "@/src/lib/AxiousInstance";
import { revalidateTag } from "next/cache";

export const getAllRecipes = async () => {
  let fetchOptions = {};

  fetchOptions = {
    cache: "no-store",
  };

  const res = await fetch(`${envConfig.baseApi}/recipe`, fetchOptions);
  if (!res.ok) {
    throw new Error("Faild to fetch recipe ");
  }
  return res.json();
};

export const getSingleRecipesById = async (id: string) => {
  let fetchOptions = {};
  fetchOptions = {
    cache: "no-store",
  };

  const res = await fetch(`${envConfig.baseApi}/recipe/${id}`, fetchOptions);
  if (!res.ok) {
    throw new Error("Faild to fetch recipe ");
  }
  return res.json();
};

export const createVote = async (
  recipeId: string,
  value: number
): Promise<any> => {
  try {
    const { data } = await axiousInstance.post(
      `/social/recipes/${recipeId}/vote`,
      {
        vote: value,
      }
    );
    return data;
  } catch (error) {
    console.error("Vote submission error:", error); // Improved logging for easier debugging
    throw new Error("Failed to submit vote"); // This can be further enhanced to include error details
  }
};

export const addRating = async (
  recipeId: string,
  rating: number
): Promise<any> => {
  try {
    const { data } = await axiousInstance.post(`/social/rating/${recipeId}`, {
      rating: rating,
    });
    return data;
  } catch (error) {
    console.error("Rating submission error:", error); // Improved logging for easier debugging
    throw new Error("Failed to submit Rating"); // This can be further enhanced to include error details
  }
};
