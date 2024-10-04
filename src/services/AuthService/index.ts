"use server"
import axiousInstance from "@/src/lib/AxiousInstance";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";
import { jwtDecode } from "jwt-decode";

export const registerUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiousInstance.post("/auth/signup", userData);
    if (data.success) {
      cookies().set("accessToken", data?.data?.accessToken);
      cookies().set("refreshToken", data?.data?.refreshToken);
    }
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const loginUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiousInstance.post("/auth/login", userData);
    if (data.success) {
      cookies().set("accessToken", data?.data?.accessToken);
      cookies().set("refreshToken", data?.data?.refreshToken);
    }
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const logOut = () => {
  cookies().delete("accessToken");
  cookies().delete("refreshToken");
};

export const getCurrentUser = async () => {
  const accessToken = cookies().get("accessToken")?.value;
  let decodedToken = null;
  if (accessToken) {
    decodedToken = await jwtDecode(accessToken);
    console.log(decodedToken)
    return {
      _id: decodedToken._id,
      name: decodedToken.name,
      email: decodedToken.email,
      userName: decodedToken.userName,
      role: decodedToken.role,
      profilePicture: decodedToken.profilePicture,
    };
  }
  return decodedToken;
};

export const getNewAccessToken = async () => {
  try {
    const refreshToken = cookies().get("refreshToekn")?.value;
    const res = await axiousInstance({
      url: "/auth/refresh-token",
      method: "POST",
      withCredentials: true,
      headers: {
        cookies: `refreshToken-=${refreshToken}`,
      },
    });
    return res.data;
  } catch (error) {
    throw new Error("Failed to get new access token");
  }
};
