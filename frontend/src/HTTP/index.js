import axios from 'axios'
// import dotenv from 'dotenv'

// dotenv.config()

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer '
    }
})

// list of all the endPoints
/*
This will trigger the backend router and send these fields as data
data = {phone} */
export const sendOtp = (data) => api.post('/api/send-otp', data)
/*
This will trigger the backend router and send these fields as data
data = {otp, hash, phone} */
export const verifyOtp = (data) => api.post('/api/verify-otp', data)

/*
This will trigger the backend router and send these fields as data
data = {name , avatar} */
export const activate = (data) => api.post('/api/activate', data)

export const logout = () => api.post('/api/logout')


// Interceptors

api.interceptors.response.use((config) => {
    return config
}, async (error) => {

    const originalRequest = error.config
    if (error.response.status === 401 && originalRequest && !originalRequest._isRetry) {

        originalRequest.isRetry = true
        try {
            await axios
                .get(`${process.env.REACT_APP_API_URL}/api/refresh`, {
                    withCredentials: true
                })

            return api.request(originalRequest)
        } catch (err) {
            console.log('Error occured in Axios Interceptor in token regeneration')
            console.log(err.message)
        }
    }

    throw error
})
export default api