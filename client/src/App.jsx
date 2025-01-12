import { Route, Routes } from "react-router-dom"
import AuthLayout from "./components/auth/Layout"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import AdminLayout from "./components/admin-view/Layout"
import AdminDashboard from "./pages/admin-view/Dashboard"
import AdminOders from "./pages/admin-view/Oders"
import AdminProducts from "./pages/admin-view/Products"
import AdminFeatures from "./pages/admin-view/Features"
import ShopingLayout from "./components/shoping-view/Layout"
import NotFound from "./pages/Not-Found"


function App() {
 

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
          <Route path="/auth" element={<AuthLayout/>}>
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
          </Route>
          <Route path="/admin" element={<AdminLayout/>}>
            <Route path="dashboard" element={<AdminDashboard/>}/>
            <Route path="oders" element={<AdminOders/>}/>
            <Route path="products" element={<AdminProducts/>}/>
            <Route path="features" element={<AdminFeatures/>}/>
          </Route>
          <Route path="/shop" element={<ShopingLayout/>}></Route>
          <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
