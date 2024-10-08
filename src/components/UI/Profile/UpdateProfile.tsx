// src/pages/update-profile.tsx

"use client";
import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import { Button } from "@nextui-org/react";
import { useUser } from "@/src/context/user.provider";
import { useUpdateUser } from "@/src/hooks/user.hook"; // Hook for updating the user
import { zodResolver } from "@hookform/resolvers/zod";

import { SubmitHandler, FieldValues } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "sonner"; // For notifications
import updateProfileSchema from "@/src/schemas/updateProfileSchema";

function UpdateProfile() {
  const router = useRouter();
  const { mutate: updateUser, isPending } = useUpdateUser();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    updateUser(data, {
      onSuccess: () => {
        toast.success("Profile updated successfully");
        router.push("/"); // Redirect to profile page
      },
      onError: () => {
        toast.error("Failed to update profile. Please try again.");
      },
    });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-4">Update Profile</h3>
      <FXForm onSubmit={onSubmit} resolver={zodResolver(updateProfileSchema)}>
        <div className="py-3">
          <FXInput name="name" label="Name"   />
        </div>
        <div className="py-3">
          <FXInput name="email" label="Email" type="email"   />
        </div>
        <div className="py-3">
          <FXInput name="password" label="Password" type="password" />
        </div>
        <div className="py-3">
          <FXInput name="phone" label="Phone"  />
        </div>
        <div className="py-3">
          <FXInput name="userName" label="Username"   />
        </div>
        <div className="py-3">
          <FXInput name="profilePicture" label="Profile Picture" type="file" />
        </div>
        <Button
          className="my-3 w-full rounded-md bg-default-900 font-semibold text-default"
          size="lg"
          type="submit"
          disabled={isPending}
        >
          {isPending ? "Updating..." : "Update"}
        </Button>
      </FXForm>
    </div>
  );
}

export default UpdateProfile;
