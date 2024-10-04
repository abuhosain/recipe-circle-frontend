"use server"

import envConfig from "@/src/config/env.confg";
import { getNewAccessToken } from "@/src/services/AuthService";
import axios from "axios";
import { cookies } from "next/headers";


const axiousInstance = axios.create({
    baseURL : envConfig.baseApi,
});

axiousInstance.interceptors.request.use(
    function(confg) {
        const cockieStore = cookies();
        const accessToken = cockieStore.get("accessToken")?.value;
        if(accessToken){
            confg.headers.Authorization = accessToken;
        }
        return confg;
    },
    function(error) {
        return Promise.reject(error);
    }
);



axiousInstance.interceptors.response.use(
    function (response) {
      return response;
    },
    async function (error) {
      const config = error.config;
      if (error?.response?.status === 401 && !config?.sent) {
        config.sent = true;
  
        const res = await getNewAccessToken();
        const accessToken = res.data.accessToken;
        cookies().set("accessToken", accessToken);
        config.headers["Authorization"] = accessToken;
        return axiousInstance(config);
      } else {
        return Promise.reject(error);
      }
    }
  );

  export default axiousInstance;