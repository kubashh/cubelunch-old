//import cookies from "../lib/cookies"

import { useEffect, useState } from "react"
import { post } from "../lib/post"
import { changeWindowLocation } from "../lib/direcroty"

export const Header = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    post(`user/get`).then((data) => {
    setUser(data)
  })})

  const inputStyle = {
    margin: "6px 10px",
    border: 0,
    borderRadius: 10,
    padding: "",
    backgroundColor: "#333",
    fontSize: 20
  }

  if(!user) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row-reverse"
      }}
    >
      <input
        type="button"
        style={inputStyle}
        onClick={() => {
          localStorage.clear()
          changeWindowLocation("login")
        }}
        value="Wyloguj"
      />
      <input
        type="button"
        style={inputStyle}
        onClick={() => {
          
        }}
        value="Ustawienia"
      />
      <input
        type="button"
        style={inputStyle}
        onClick={() => {
          
        }}
        value={user.cash}
      />
      <input
        type="button"
        style={inputStyle}
        onClick={() => {
          
        }}
        value="Produkty"
      />
    </div>
  )
}