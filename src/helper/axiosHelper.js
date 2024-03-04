import axios from "axios";

const rootAPI = process.env.REACT_APP_ROOT_URL + "/api/v2";
const userAPI = rootAPI + "/front-users";
const catAPI = rootAPI + "/categories";
const productAPI = rootAPI + "/products";

const apiProcessor = async ({ method, url, data, isPrivate }) => {
  try {
    // const token = refreshToken ? getRefreshJWT() : getAccessJWT();
    // const headers = {
    //   Authorization: isPrivate ? token : null,
    // };
    const response = await axios({
      method,
      url,
      data,
      //   headers,
    });

    return response.data;
  } catch (error) {
    // if (error.response?.data?.message.includes("jwt expired")) {
    //   const { accessJWT } = await fetchNewAccessJWT();

    //   if (accessJWT) {
    //     sessionStorage.setItem("accessJWT", accessJWT);
    //     return apiProcessor({ method, url, data, isPrivate, refreshToken });
    //   }
    // }
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const fetchProducts = () => {
  return apiProcessor({
    method: "get",
    url: productAPI,
    // isPrivate: true,
  });
};
