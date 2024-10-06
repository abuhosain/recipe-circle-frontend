import envConfig from "@/src/config/env.confg";

export const getSingleUserById = async (userId: string) => {
    let fetchOptions = {};
    fetchOptions = {
      cache: "no-store",
    };
  
    const res = await fetch(`${envConfig.baseApi}/user/${userId}`, fetchOptions);
    if (!res.ok) {
      throw new Error("Faild to fetch recipe ");
    }
    return res.json();
  };

 export const getRecipesByUserId = async (id : string) => {
    let fetchOptions = {};
    fetchOptions = {
      cache: "no-store",
    };
  
    const res = await fetch(`${envConfig.baseApi}/user/recipe/${id}`, fetchOptions);
    if (!res.ok) {
      throw new Error("Faild to fetch recipe ");
    }
    return res.json();
  };
 