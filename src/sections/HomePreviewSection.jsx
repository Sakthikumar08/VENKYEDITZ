"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import VideoCard from "../components/VideoCard"
import GalleryItem from "../components/GalleryItem"
import ProjectCard from "../components/ProjectCard"
import { videoData, galleryData, showcaseData } from "../data/portfolioData"

const HomePreviewSection = () => {
  // Get first 3 videos
  const previewVideos = videoData.slice(0, 3)
  
  // Get first 3 gallery items
  const previewGallery = galleryData.slice(0, 3)
  
  // Get first 3 projects
  const previewProjects = showcaseData.slice(0, 3)

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Reels Preview Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-cyan-400 font-mono">REELS.PREVIEW()</h2>
            <Link 
              to="/reels" 
              className="px-6 py-2 border-2 border-cyan-500 text-cyan-400 font-mono font-bold rounded-lg hover:bg-cyan-500/20 transition-all uppercase tracking-widest text-sm"
            >
              View All
            </Link>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-orange-500 mb-10"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewVideos.map((video, index) => (
              <VideoCard key={`${video.id}-${index}`} video={video} index={index} />
            ))}
          </div>
        </motion.div>
        
        {/* Gallery Preview Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-orange-400 font-mono">GALLERY.PREVIEW()</h2>
            <Link 
              to="/gallery" 
              className="px-6 py-2 border-2 border-orange-500 text-orange-400 font-mono font-bold rounded-lg hover:bg-orange-500/20 transition-all uppercase tracking-widest text-sm"
            >
              View All
            </Link>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-cyan-500 mb-10"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewGallery.map((item, index) => (
              <GalleryItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </motion.div>
        
        {/* Projects Preview Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-cyan-400 font-mono">PROJECTS.PREVIEW()</h2>
            <Link 
              to="/projects" 
              className="px-6 py-2 border-2 border-cyan-500 text-cyan-400 font-mono font-bold rounded-lg hover:bg-cyan-500/20 transition-all uppercase tracking-widest text-sm"
            >
              View All
            </Link>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-orange-500 mb-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {previewProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HomePreviewSection