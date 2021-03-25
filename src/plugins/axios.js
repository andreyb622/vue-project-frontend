import axios from "axios";

function setIterceptors(store) {
  axios.defaults.baseURL = "http://localhost:3000/";

  axios.interceptors.request.use(function(config) {
    const token = store.state.auth.token;
    console.log(token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log(config);
    return config;
  });
}

export default function SettingAxios(store) {
  setIterceptors(store);
  store.axios = axios;
}
