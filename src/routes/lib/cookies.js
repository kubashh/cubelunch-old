import Cookies from "js-cookie"

export const setVerificationCode = (verificationCode) => {
  Cookies.remove("verificationCode")
  Cookies.set("verificationCode", verificationCode, { expires: 7 })
  console.log(Cookies.get())
}

export const removeCookie = (key) => {
  Cookies.remove(key)
}

export const setCookie = (key, value, days = 7) => {
  Cookies.set(key, value, { expires: days })
}

Cookies.set("test", "test")

console.log("cookies", Cookies.get())
