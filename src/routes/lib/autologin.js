import { changeWindowLocation } from "./direcroty"
import { post } from "./post"

export const autologin = async () => {
  if(window.localStorage.getItem(`autologin`) != `false`) {
    const { path, success } = await post("login/auto")

    if(success) {
      changeWindowLocation(path)
    } else {
      changeWindowLocation(`login`)
      localStorage.clear()

      if(!window.location.pathname == `login`) {
        changeWindowLocation(`login`)
      } else {
        window.localStorage.setItem(`autologin`, `false`)
      }
    }
  }
}