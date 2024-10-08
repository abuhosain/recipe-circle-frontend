 
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { addComment, addRating, createVote, deleteComment, updateComment } from "../services/RecipeService";
 
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
    mutationKey: ["RATING_RECIPE"],
    mutationFn: async ({ recipeId, rating }) => await addRating(recipeId, rating),
    onSuccess: () => {
      toast.success("Rating submitted successfully");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to submit Rating");
    },
  });
}


// comment section
export const useAddComment = () => {
  return useMutation<any, Error, { recipeId: string; comment: string }>({
    mutationKey: ["COMMENT_RECIPE"],
    mutationFn: async ({ recipeId, comment }) => await addComment(recipeId, comment),
    onSuccess: () => {
      toast.success("Comment submitted successfully");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to submit Comment");
    },
  });
}

// Hook for deleting comment
export const useDeleteComment = () => {
  return useMutation<any, Error, { recipeId: string; commentId: string }>({
    mutationKey: ["DELETE_COMMENT"],
    mutationFn: async ({ recipeId, commentId }) => await deleteComment(recipeId, commentId),
    onSuccess: () => {
      toast.success("Comment deleted successfully");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to delete Comment");
    },
  });
};

// Hook for updating comment
export const useUpdateComment = () => {
  return useMutation<any, Error, { recipeId: string; commentId: string; newComment: string }>({
    mutationKey: ["UPDATE_COMMENT"],
    mutationFn: async ({ recipeId, commentId, newComment }) => await updateComment(recipeId, commentId, newComment),
    onSuccess: () => {
      toast.success("Comment updated successfully");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to update Comment");
    },
  });
};