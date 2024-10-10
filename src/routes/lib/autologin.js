import { post } from "./post"

export const autologin = async () => {
  if(window.localStorage.getItem(`autologin`) != `false`) {
    const { path, success } = await post("login/auto")

    if(success) {
      window.location.pathname = path
    } else {
      window.location.pathname = "login"
      localStorage.clear()

      if(!window.location.pathname == `login`) {
        window.location.pathname = `login`
      } else {
        window.localStorage.setItem(`autologin`, `false`)
      }
    }
  }
}