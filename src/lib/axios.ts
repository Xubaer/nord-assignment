import Axios, { type AxiosRequestConfig } from 'axios'
import { API_URL } from '@/config'
import storage from '@/utils/storage'

function authRequestInterceptor(config: AxiosRequestConfig) {
  const configuration = config
  configuration.headers = config.headers ?? {}
  const token = storage.getToken()
  if (token) {
    configuration.headers.authorization = `${token}`
  }
  configuration.headers.Accept = 'application/json'
  return config
}

export const axios = Axios.create({
  baseURL: API_URL,
})

axios.interceptors.request.use(authRequestInterceptor)
