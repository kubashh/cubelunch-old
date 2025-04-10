import { Background } from "../lib/Background"
import { Header } from "./Header"
import { Products } from "./Products"

export const Store = () => {
  return (
    <div>
      <Background />

      <div
        style={{
          position: "absolute",
          overflowY: "scroll",
          display: "grid",
          gridTemplateRows: "50px calc(100vh - 51px)",
        }}
      >
        <Header />
        <Products />
      </div>
    </div>
  )
}
