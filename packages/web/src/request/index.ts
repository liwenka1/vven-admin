/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  CreateAxiosDefaults,
  InternalAxiosRequestConfig
} from 'axios'

import { useGlobalStore } from '@/stores'

interface Result<T = any> {
  code: number
  message: string
  data?: T
}

class Request {
  constructor(config?: CreateAxiosDefaults) {
    this.axiosInstance = axios.create(config)

    this.axiosInstance.interceptors.request.use((axiosConfig) => this.requestInterceptor(axiosConfig))

    this.axiosInstance.interceptors.response.use(
      (response) => this.responseInterceptorSuccess(response),
      (error) => this.responseInterceptorError(error)
    )
  }

  private axiosInstance: AxiosInstance

  private requestInterceptor(axiosConfig: InternalAxiosRequestConfig): Promise<any> {
    const { token } = useGlobalStore.getState()
    if (token) {
      axiosConfig.headers.Authorization = `Bearer ${token}`
    }
    return Promise.resolve(axiosConfig)
  }

  private responseInterceptorSuccess(response: AxiosResponse<Result>): Promise<any> {
    const { data } = response
    return Promise.resolve(data)
  }

  private responseInterceptorError(error: AxiosError<Result>): Promise<any> {
    if (error.response) {
      const { data } = error.response
      return Promise.reject(data)
    }
    return Promise.reject(error)
  }

  request<T, D = any>(config: AxiosRequestConfig<D>): Promise<T> {
    return this.axiosInstance(config)
  }

  get<T, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<T> {
    return this.axiosInstance.get(url, config)
  }

  post<T, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<T> {
    return this.axiosInstance.post(url, data, config)
  }

  put<T, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<T> {
    return this.axiosInstance.put(url, data, config)
  }

  delete<T, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<T> {
    return this.axiosInstance.delete(url, config)
  }
}

const request = new Request({ timeout: 60 * 1000 * 5 })

export default request
