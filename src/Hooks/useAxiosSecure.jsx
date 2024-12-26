import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true
});
const useAxiosSecure = () => {
    const { logout } = useAuth()
    const navigate = useNavigate();

    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {
            return response;
        }, error => {
            // console.log('Error caught in interceptor', error)

            if (error.status === 401 || error.status === 403) {
                // console.log('Need to Logout the User')
                logout()
                .then(()=>{
                    // console.log('Logged Out User')
                    navigate('/signin')
                })
                .catch(error => console.log(error))
            }

            return Promise.reject(error)
        })

    }, [logout, navigate])

    return axiosInstance;
};

export default useAxiosSecure;