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
      <Route path="/cubelunch/" element={<Home />} />
      <Route path="/cubelunch/registration" element={<Rejestration />}/>
      <Route path="/cubelunch/login" element={<Login />}/>
      <Route path="/cubelunch/store" element={<Store />}/>
      <Route path="/cubelunch/admin" element={<Admin />}/>
      <Route path="*" element={<NoPage />} />
    </Routes>
  )
}