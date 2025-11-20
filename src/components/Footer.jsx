"use client"

import { motion } from "framer-motion"
import { FiGithub, FiInstagram, FiYoutube, FiLinkedin } from "react-icons/fi"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: "GitHub", icon: FiGithub, url: "#" },
    { name: "Instagram", icon: FiInstagram, url: "#" },
    { name: "YouTube", icon: FiYoutube, url: "#" },
    { name: "LinkedIn", icon: FiLinkedin, url: "#" },
  ]

  return (
    <footer className="relative bg-slate-900/50 border-t border-cyan-500/20 py-12 backdrop-blur-md">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-cyan-500/20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-mono font-bold text-cyan-400 mb-2">VENKY</h3>
            <p className="text-slate-400 text-sm">
              Visual storyteller & creative technologist crafting immersive digital experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-mono font-bold text-orange-400 uppercase tracking-widest mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#work" className="text-slate-400 hover:text-orange-400 transition-colors">
                  Work
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-orange-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-mono font-bold text-cyan-400 uppercase tracking-widest mb-4">Follow</h4>
            <div className="flex gap-3">
              {socialLinks.map(({ name, icon: Icon, url }) => (
                <motion.a
                  key={name}
                  href={url}
                  className="w-10 h-10 rounded-lg border border-cyan-500/30 bg-cyan-500/10 flex items-center justify-center text-cyan-400 hover:border-orange-500/50 hover:bg-orange-500/10 hover:text-orange-400 transition-all"
                  whileHover={{ scale: 1.1 }}
                  aria-label={name}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="text-center text-slate-500 text-sm font-mono"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>&copy; {currentYear} VENKY EDITS. ALL RIGHTS RESERVED. | SYSTEM_ALPHA_BUILD</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
