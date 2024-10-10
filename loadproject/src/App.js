import { Routes, Route } from "react-router-dom"
import { Home } from "./routes/home/Home"
import { Login } from "./routes/login/Login"
import { Rejestration } from "./routes/registration/Registration"
import { Store } from "./routes/store/Store"
import { Admin } from "./routes/admin/Admin"
import { NoPage } from "./routes/noPage/NoPage"

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="registration" element={<Rejestration />}/>
      <Route path="login" element={<Login />}/>
      <Route path="store" element={<Store />}/>
      <Route path="admin" element={<Admin />}/>
      <Route path="*" element={<NoPage />} />
    </Routes>
  )
}