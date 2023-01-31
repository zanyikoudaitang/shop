import axios from "axios";
import { ElLoading, ElMessage } from "element-plus";

let loadingObj = null;
const Service = axios.create({
  timeout: 5000,
  baseUrl: "",
  headers: {
    "Content-type": "application/json;charset=utf-8",
  },
});
// 请求之前：
Service.interceptors.request.use((config) => {
  loadingObj = ElLoading.service({
    lock: true,
    text: "Loading",
    background: "rgba(0, 0, 0, 0.7)",
  });
  return config;
});

// 响应之前：
Service.interceptors.response.use(
  (response) => {
    loadingObj.close();
    return response.data;
  },
  (error) => {
    loadingObj.close();
    ElMessage({
      message:'服务器错误',
      type:'error',
      duration:2000,
    })
    return Promise.reject(error);
  }
);
