import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify";
import Contact from "./components/pages/Contact"
import About from "./components/pages/About"
import Blog from "./components/pages/Blog"
import Home from "./components/pages/Home"
import Services from "./components/pages/Services"
import Vet from "./components/pages/Vet"
import Blogsingle from "./components/pages/Blogsingle"
import Gallery from "./components/pages/Gallery"
import Pricing from "./components/pages/Pricing"
import Error from "./components/pages/Error"
import AdminLayout from "./components/layout/AdminLayout"
import AddBreed from "./components/admin/breeds/AddBreed"
import ManageBreed from "./components/admin/breeds/ManageBreed"


import Master from "./components/layout/Master"
import Register from "./components/auth/Register"
import Login from "./components/auth/Login"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Master />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blog" element={<Blog />} />
            <Route path="vet" element={<Vet />} />
            <Route path="blogsingle" element={<Blogsingle />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="Services" element={<Services/>} />
            <Route path="Register" element={<Register />} />
            <Route path="Login" element={<Login />} />

          </Route>
           <Route path="/admin" element={<AdminLayout/>}>
                      <Route path="breed/add" element={<AddBreed/>}/>
                      <Route path="breed/manage" element={<ManageBreed/>}/>
          
                    </Route>
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </>
  )
}
export default App