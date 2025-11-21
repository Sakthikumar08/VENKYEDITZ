"use client"

import { useEffect, useRef } from "react"
import { Routes, Route } from "react-router-dom"
import Lenis from "lenis"
import Navbar from "./components/Navbar"
import Preloader from "./components/Preloader"
import SocialLinks from "./components/SocialLinks"
import HomePage from "./pages/HomePage"
import ReelsPage from "./pages/ReelsPage"
import GalleryPage from "./pages/GalleryPage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import ProjectsPage from "./pages/ProjectsPage"
import Footer from "./components/Footer"

function App() {
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      smoothTouch: false,
    })

    lenisRef.current = lenis

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="App bg-slate-950 text-white overflow-x-hidden">
      <Preloader />
      <Navbar />
      <div className="absolute top-8 right-0 z-20">
        <SocialLinks variant="horizontal" position="top" />
      </div>
      <main className="relative">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reels" element={<ReelsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
