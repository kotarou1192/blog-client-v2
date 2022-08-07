import axios from "axios"
import Cookies from "js-cookie"
import { BASE_URL, LEFT_DAYS_TO_DELETE_TOKEN } from "@/config/Constants"

type LoginParams = {
  email: string
  password: string
  recaptchaToken: string
}

type LoginApiParams = {
  value: LoginParams
}

export const login = async (
  email: string,
  password: string,
  recaptchaToken: string
) => {
  const loginApiParams: LoginApiParams = {
    value: {
      email,
      password,
      recaptchaToken
    }
  }
  console.log("success to noremember")
  return await axios.post(BASE_URL + "/auth", loginApiParams)
}

export const rememberLogin = async (
  email: string,
  password: string,
  recaptchaToken: string
) => {
  const loginApiParams: LoginApiParams = {
    value: {
      email,
      password,
      recaptchaToken
    }
  }
  return await axios.post(BASE_URL + "/auth", loginApiParams).then((res) => {
    if (res.status === 200) {
      Cookies.set("loginToken", res.data.token, {
        expires: LEFT_DAYS_TO_DELETE_TOKEN
      })
      console.log("success to remember")
    }
    return res
  })
}

export const postWithAuthenticate = async (apiName: string, params: any) => {
  const token = Cookies.get("loginToken")
  return await axios.post(
    BASE_URL + apiName,
    params,
    token == null
      ? {}
      : {
          headers: { Authorization: "Bearer " + token }
        }
  )
}

export const putWithAuthenticate = async (apiName: string, params: any) => {
  const token = Cookies.get("loginToken")
  return await axios.put(
    BASE_URL + apiName,
    params,
    token == null
      ? {}
      : {
          headers: { Authorization: "Bearer " + token }
        }
  )
}

export const deleteWithAuthenticate = async (apiName: string) => {
  const token = Cookies.get("loginToken")
  return await axios.delete(
    BASE_URL + apiName,
    token == null
      ? {}
      : {
          headers: { Authorization: "Bearer " + token }
        }
  )
}

export const getWithAuthenticate = async (apiName: string, params?: object) => {
  const token = Cookies.get("loginToken")
  const checkedParams = params == null ? {} : params
  return await axios.get(
    BASE_URL + apiName,
    token == null
      ? { params: checkedParams }
      : {
          params: checkedParams,
          headers: { Authorization: "Bearer " + token }
        }
  )
}
