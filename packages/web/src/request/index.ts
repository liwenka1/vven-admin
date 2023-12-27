import axios from 'axios'

interface IAnyObj {
  [index: string]: unknown
}

interface FcResponse<T> {
  errno: string
  errmsg: string
  data: T
}

type Fn = (data: FcResponse<unknown>) => unknown

const get = <T>(url: string, params: IAnyObj = {}, clearFn?: Fn): Promise<[unknown, FcResponse<T> | undefined]> =>
  new Promise((resolve) => {
    axios
      .get(url, { params })
      .then((result) => {
        let res: FcResponse<T>
        if (clearFn !== undefined) {
          res = clearFn(result.data) as unknown as FcResponse<T>
        } else {
          res = result.data as FcResponse<T>
        }
        resolve([null, res as FcResponse<T>])
      })
      .catch((err) => {
        resolve([err, undefined])
      })
  })

export { get }
