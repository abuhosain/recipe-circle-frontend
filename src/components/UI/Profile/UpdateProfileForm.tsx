// src/components/UpdateProfileForm.tsx
"use client";

import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import { Button } from "@nextui-org/react";
import { SubmitHandler, FieldValues } from "react-hook-form";
import { toast } from "sonner"; // For notifications
import updateProfileSchema from "@/src/schemas/updateProfileSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUserUpdate } from "@/src/hooks/auth.hooks";
import { useUser } from "@/src/context/user.provider"; // Assuming this is the hook to get logged-in user data

export default function UpdateProfileForm() {
  const { user } = useUser(); // Fetch the logged-in user details
  const { mutate: updateUser } = useUserUpdate(); // Use the mutation hook

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data)
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-4">Update Profile</h3>
      <FXForm
        onSubmit={onSubmit}
        resolver={zodResolver(updateProfileSchema)}
       
      >
        <div className="py-3">
          <FXInput name="name" label="Name" />
        </div>
        <div className="py-3">
          <FXInput name="email" label="Email" type="email" />
        </div>
        <div className="py-3">
          <FXInput name="phone" label="Phone" />
        </div>
        <div className="py-3">
          <FXInput name="userName" label="Username" />
        </div>
        <div className="py-3">
          <FXInput name="profilePicture" label="Profile Picture" type="file" />
        </div>
        <Button
          className="my-3 w-full rounded-md bg-default-900 font-semibold text-default"
          size="lg"
          type="submit"
        >
          {"Update"}
        </Button>
      </FXForm>
    </div>
  );
}
