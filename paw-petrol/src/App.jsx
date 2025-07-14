import Contact from "./components/pages/Contact"
import About from "./components/pages/About"
import Blog from "./components/pages/Blog"
import Services from "./components/pages/Services"
import Vet from "./components/pages/Vet"
import Blogsingle from "./components/pages/Blogsingle"
import Gallery from "./components/pages/Gallery"
import Pricing from "./components/pages/Pricing"
import Error from "./components/pages/Error"

import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./components/pages/Home"
import Master from "./components/layout/Master"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Master/>}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
          <Route path="vet" element={<Vet />} />
          <Route path="blogsingle" element={<Blogsingle />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="pricing" element={<Pricing />} />
          
          </Route>
          <Route path="*" element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App