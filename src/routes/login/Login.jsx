import { useState } from "react"
import { post } from "../lib/post"
import { Background } from "../lib/Background"
import { setVerificationCode } from "../lib/cookies"
import { autologin } from "../lib/autologin"

export const Login = () => {
  const [form, setForm] = useState({
    login: ``,
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
      >
        <div
          style={{
            ...inputsStyle,
            fontWeight: "bold",
            fontSize: 30,
          }}
        >
          Login
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
          value="Zaloguj się"
          onClick={async () => {
            const response = await post("login", form)

            const { success, verificationCode } = response

            if (success) {
              if (verificationCode) {
                console.log(verificationCode)
                setVerificationCode(verificationCode)
                autologin()
                console.log(window.cookie)
              }
            }
          }}
        />
        <a
          href="registration"
          style={{
            textAlign: "right",
            textDecoration: "none",
            color: "white",
            marginTop: 10,
          }}
        >
          Zarejestruj się
        </a>
      </from>
    </center>
  )
}
