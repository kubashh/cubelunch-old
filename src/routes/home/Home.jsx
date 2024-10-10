import { Background } from "../lib/Background"
import { CreateMenuButton } from "./CreateMenuButton"

export const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Background />
      <h1
        style={{
          marginTop: 100,
          marginBottom: 100,
          fontSize: 50
        }}
      >Home</h1>
      <div>
        <CreateMenuButton value="Registration" path="registration" />
        <CreateMenuButton value="Login" path="login" />
        <CreateMenuButton value="Store" path="store" />
        <CreateMenuButton value="Admin" path="admin" />
      </div>
    </div>
  )
}