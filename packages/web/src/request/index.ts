/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  CreateAxiosDefaults,
  InternalAxiosRequestConfig
} from 'axios'

import useGlobalStore from '@/stores/useGlobal'

type Response<T> = Promise<[boolean, T, AxiosResponse<T>]>

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

  private responseInterceptorSuccess(response: AxiosResponse<unknown, unknown>): Promise<any> {
    return Promise.resolve([false, response.data, response])
  }

  private responseInterceptorError(error: unknown): Promise<any> {
    return Promise.resolve([true, error])
  }

  request<T, D = any>(config: AxiosRequestConfig<D>): Response<T> {
    return this.axiosInstance(config)
  }

  get<T, D = any>(url: string, config?: AxiosRequestConfig<D>): Response<T> {
    return this.axiosInstance.get(url, config)
  }

  post<T, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Response<T> {
    return this.axiosInstance.post(url, data, config)
  }

  put<T, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Response<T> {
    return this.axiosInstance.put(url, data, config)
  }

  delete<T, D = any>(url: string, config?: AxiosRequestConfig<D>): Response<T> {
    return this.axiosInstance.delete(url, config)
  }
}

const request = new Request({ timeout: 60 * 1000 * 5 })

export default request
