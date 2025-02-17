import { Route, Routes } from "react-router-dom"
import AuthLayout from "./components/auth/Layout"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import AdminLayout from "./components/admin-view/Layout"
import AdminDashboard from "./pages/admin-view/Dashboard"
import AdminOders from "./pages/admin-view/Oders"
import AdminProducts from "./pages/admin-view/Products"
import AdminFeatures from "./pages/admin-view/Features"
import ShoppingLayout from "./components/shoping-view/Layout"
import NotFound from "./pages/Not-Found"
import ShoppingHome from "./pages/shoping-view/Home"
import ShoppingListing from "./pages/shoping-view/Listing"
import ShoppingCheckout from "./pages/shoping-view/Checkout"
import ShoppingAccount from "./pages/shoping-view/Account"
import CheckAuth from "./components/common/CheckAuth"
import Unauth from "./pages/unauth-page"


function App() {
 
  const isAuthenticated = false;
  const user = null;

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
          <Route path="/auth" element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout/>
            </CheckAuth>
          }>
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
          </Route>
          <Route path="/admin" element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout/>
            </CheckAuth>
          }>
            <Route path="dashboard" element={<AdminDashboard/>}/>
            <Route path="oders" element={<AdminOders/>}/>
            <Route path="products" element={<AdminProducts/>}/>
            <Route path="features" element={<AdminFeatures/>}/>
          </Route>
          <Route path="/shop" element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <ShoppingLayout/>
            </CheckAuth>
          }>
            <Route path="home" element={<ShoppingHome/>}/>
            <Route path="listing" element={<ShoppingListing/>}/>
            <Route path="checkout" element={<ShoppingCheckout/>}/>
            <Route path="account" element={<ShoppingAccount/>}/>
          </Route>
          
          <Route path="/unauth-page" element={<Unauth/>}/>
          <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
