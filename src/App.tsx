import { Route, Routes } from "react-router-dom"
import { Blog, Home, Projects, Settings } from "./pages"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"

function App() {

  gsap.registerPlugin(ScrollTrigger);

  return (
    <main>
      <Routes>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="projects" element={<Projects />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </main>
  )
}

export default App
