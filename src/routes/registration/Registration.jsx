import { useState } from "react"
import { post } from "../lib/post"
import { Background } from "../lib/Background"
import { changeWindowLocation } from "../lib/direcroty"

export const Rejestration = () => {
  const [form, setForm] = useState({
    login: ``,
    email: ``,
    password: ``,
  })

  const inputsStyle = {
    margin: "10px 0",
    border: 0,
    borderRadius: 20,
    padding: "8px 16px",
    fontSize: 20,
  }

  return (
    <center>
      <Background />
      <from
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#333",
          width: 400,
          borderRadius: 20,
          padding: "10px 30px",
          marginTop: 100,
        }}
        onSubmit={(event) => {
          event.preventDefault()
          alert("jsjo")
        }}
      >
        <div
          style={{
            ...inputsStyle,
            fontWeight: "bold",
            fontSize: 30,
          }}
        >
          Rejestracja
        </div>
        <input
          type="text"
          style={inputsStyle}
          placeholder="Login"
          value={form.login}
          onChange={(event) => {
            event.preventDefault()
            setForm({
              ...form,
              login: event.target.value,
            })
          }}
        />
        <input
          type="email"
          style={inputsStyle}
          placeholder="Email"
          value={form.email}
          onChange={(event) => {
            event.preventDefault()
            setForm({
              ...form,
              email: event.target.value,
            })
          }}
        />
        <input
          type="password"
          style={inputsStyle}
          placeholder="Hasło"
          value={form.password}
          onChange={(event) => {
            event.preventDefault()
            setForm({
              ...form,
              password: event.target.value,
            })
          }}
        />
        <input
          type="submit"
          style={inputsStyle}
          value="Zarejestruj"
          onClick={async () => {
            const response = await post("registration", form)

            console.log(response)

            if (response.success) {
              changeWindowLocation(`login`)
            }
          }}
        />
        <a
          href="login"
          style={{
            textAlign: "right",
            textDecoration: "none",
            color: "white",
            marginTop: 10,
          }}
        >
          Zaloguj się
        </a>
      </from>
    </center>
  )
}
