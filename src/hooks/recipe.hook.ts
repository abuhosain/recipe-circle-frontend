 
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { addRating, createVote } from "../services/RecipeService";
 
export const useVote = () => {
  return useMutation<any, Error, { recipeId: string; voteValue: number }>({
    mutationKey: ["VOTE_RECIPE"],
    mutationFn: async ({ recipeId, voteValue }) => await createVote(recipeId, voteValue),
    onSuccess: () => {
      toast.success("Vote submitted successfully");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to submit vote");
    },
  });
};

export const useRating = () => {
  return useMutation<any, Error, { recipeId: string; rating: number }>({
    mutationKey: ["VOTE_RECIPE"],
    mutationFn: async ({ recipeId, rating }) => await addRating(recipeId, rating),
    onSuccess: () => {
      toast.success("Rating submitted successfully");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to submit Rating");
    },
  });
}