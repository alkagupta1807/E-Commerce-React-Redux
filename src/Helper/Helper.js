import axios from "axios";
let adminUrl="https://wtsacademy.dedicateddevelopers.us/api";
if(process.env?.REACT_APP_ENV==="production"){
    adminUrl="https://wtsacademy.dedicateddevelopers.us/api";
}
let profileURL="https://wtsacademy.dedicateddevelopers.us/uploads/user/profile_pic";
let productURL = "https://wtsacademy.dedicateddevelopers.us/uploads/product";

export const baseURL= adminUrl;
let axiosInstance=axios.create({
    baseURL,
});
export const profileDetailsPath = (media) => {
    return profileURL+`/${media}`;
  }
 
export const productUploadURL=(media)=>{
    return productURL+`/${media}`;
}

axiosInstance.interceptors.request.use(
    async function(config){
        const token=
        localStorage.getItem("token")|| sessionStorage.getItem("token");
        if(token!==null|| token!==undefined){
            config.headers["x-access-token"]=token;
        }
    return config;

    },
    function (err){
        return Promise.reject(err);
    }

);


export default axiosInstance;