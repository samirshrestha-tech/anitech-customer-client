import axios from "axios";

const rootAPI = import.meta.env.VITE_SERVER_ROOT + "/api/v1";
const userAPI = rootAPI + "/users";
const catAPI = rootAPI + "/categories";
const productAPI = rootAPI + "/products";

const apiProcessor = async ({ method, url, data, isPrivate, refreshToken }) => {
  try {
    const token = refreshToken ? getRefreshJWT() : getAccessJWT();
    const headers = {
      Authorization: isPrivate ? token : null,
    };
    const response = await axios({
      method,
      url,
      data,
      headers,
    });

    return response.data;
  } catch (error) {
    if (error.response?.data?.message.includes("jwt expired")) {
      const { accessJWT } = await fetchNewAccessJWT();

      if (accessJWT) {
        sessionStorage.setItem("accessJWT", accessJWT);
        return apiProcessor({ method, url, data, isPrivate, refreshToken });
      }
    }
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const fetchProducts = (_id) => {
  return apiProcessor({
    method: "get",
    url: _id ? productAPI + "/" + _id : productAPI,
    isPrivate: true,
  });
};
