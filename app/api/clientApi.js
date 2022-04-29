import { create } from "apisauce";

import settings from "../config/settings";
import authStorage from "../auth/authStorage";
import cache from "../utility/cache";

const apiClient = create({
  baseURL: settings.apiUrl,
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;
  request.headers["x-auth-token"] = authToken;
});

//rewritiujemo orginali get methodu od appsouca
const get = apiClient.get;
//da bi implemenitirali caching call
//ali mora imati isti signature kao orginal
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }
  //if response from server not ok
  const data = await cache.get(url);
  return data ? { ok: true, data: data } : response;
};

export default apiClient;
