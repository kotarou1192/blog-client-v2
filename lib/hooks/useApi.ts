import { getWithAuthenticate } from "@/lib/networks/AxiosWrapper"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export function useGetAPI(apiName: string, params?: object): any {
  const [result, setResult] = useState()
  const router = useRouter()
  useEffect(() => {
    getWithAuthenticate(apiName, params)
      .then((res) => {
        setResult(res.data)
      })
      .catch((err) => {
        if (err.response.status == 404) router.push("/404", "/404")
      })
  }, [params, apiName])
  return result
}
