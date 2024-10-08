import { useMutation } from "@tanstack/react-query"
import { FieldValues } from "react-hook-form"
import { loginUser, registerUser, updateUser } from "../services/AuthService"
import { toast } from "sonner"

export const useUserLogin = () => {
    return useMutation<any, Error, FieldValues>({
      mutationKey: ["USER_LOGIN"],
      mutationFn: async (userData) => await loginUser(userData),
      onSuccess: () => {
        toast.success("User login successfully");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  export const useUserRegistraiton = () => {
    return useMutation<any, Error, FieldValues>({
      mutationKey: ["USER_REGISTRATION"],
      mutationFn: async (userData) => await registerUser(userData),
      onSuccess: () => {
        toast.success("User registration successfully");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  export const useUserUpdate = () => {
    return useMutation<any, Error, FieldValues>({
      mutationKey: ["USER_ UPDATE"],
      mutationFn: async (updatedData) => await updateUser(updatedData),
      onSuccess: () => {
        toast.success("User update successfully");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };