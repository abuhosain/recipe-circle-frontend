"use client"; // This line indicates that this component will be rendered on the client side
import React, { useState } from "react";
import { Avatar, Button } from "@nextui-org/react";
import { Author, IRecipe, IUser } from "@/src/types"; // Import the IUser and IRecipe types
import RecipeCard from "../Recipe/RecipeCard";

function ProfileDetails({ user, recipe }: { user: Author; recipe: IRecipe[] }) {
    console.log(recipe)
  // Set initial following state based on whether the user is already followed
  const [isFollowing, setIsFollowing] = useState(false); // Replace with actual logic if available

  // Handle follow/unfollow action
  const handleFollowToggle = () => {
    setIsFollowing((prev) => !prev);
    // Here, you would typically also make an API call to update the follow status on the server
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Profile Overview */}
      <div className="flex items-center mb-8">
        <Avatar
          src={user.profilePicture}
          alt={user.name}
          size="lg"
          className="mr-6"
        />
        <div>
          <h1 className="text-3xl font-bold">{user.name}</h1>
          <p className="text-gray-600">{user?.bio || "No bio available"}</p>
          <Button
            className={`mt-4 ${isFollowing ? "bg-red-600" : "bg-blue-600"}`}
            size="sm"
            onClick={handleFollowToggle}
          >
            {isFollowing ? "Unfollow" : "Follow"}
          </Button>
        </div>
      </div>

      {/* Followers and Following Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">
            Followers ({user?.followers?.length})
          </h3>
          <ul className="space-y-1">
            {user.followers && user.followers.length > 0 ? (
              user.followers.map((follower, index) => (
                <li key={index} className="text-gray-700">
                  {follower.name || follower}
                </li>
              ))
            ) : (
              <li className="text-gray-700">No followers yet</li>
            )}
          </ul>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">
            Following ({user?.following?.length})
          </h3>
          <ul className="space-y-1">
            {user.following && user.following.length > 0 ? (
              user.following.map((followee, index) => (
                <li key={index} className="text-gray-700">
                  {followee.name || followee}
                </li>
              ))
            ) : (
              <li className="text-gray-700">Not following anyone</li>
            )}
          </ul>
        </div>
      </div>

      {/* Recipes Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Recipes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recipe && recipe.length > 0 ? (
            recipe.map((rec, index) => (
              <RecipeCard key={rec._id} recipe={rec} />
            ))
          ) : (
            <p className="text-gray-700">No recipes found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileDetails;
