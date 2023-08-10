import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.unsplash.com',
  timeout: 60 * 1000
})

instance.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] = `Client-ID ${
      import.meta.env.RENDERER_VITE_UNSPLASH_ACCESS_KEY
    }`
    return config
  },
  (err) => Promise.reject(err)
)

instance.interceptors.response.use(
  (res) => {
    return res.data
  },
  (err) => Promise.reject(err)
)

export default instance
