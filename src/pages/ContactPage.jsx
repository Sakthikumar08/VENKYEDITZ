"use client"

import { motion } from "framer-motion"
import ContactForm from "../components/ContactForm"
import { FiMail, FiPhone, FiMapPin, FiInstagram, FiYoutube, FiTwitter, FiLinkedin } from "react-icons/fi"

const ContactPage = () => {
  const contactInfo = [
    {
      icon: FiMail,
      label: "Email",
      value: "hello@venkyeditz.com",
      accent: "cyan",
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      accent: "orange",
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: "Los Angeles, CA",
      accent: "cyan",
    },
  ]

  const socialLinks = [
    { name: "Instagram", icon: FiInstagram, url: "https://instagram.com" },
    { name: "YouTube", icon: FiYoutube, url: "https://youtube.com" },
    { name: "Twitter", icon: FiTwitter, url: "https://twitter.com" },
    { name: "LinkedIn", icon: FiLinkedin, url: "https://linkedin.com" },
  ]

  return (
    <section className="relative min-h-screen py-32 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div className="mb-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-7xl font-bold text-cyan-400 mb-4 font-mono">INITIATE.CONTACT()</h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Get in touch to discuss your next project or collaboration opportunity
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-orange-500 mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="p-8 rounded-xl border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm">
              <h3 className="text-xl font-mono font-bold text-cyan-400 mb-8">CONTACT.INFO</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  const isOrange = info.accent === "orange"
                  return (
                    <motion.div
                      key={info.label}
                      className={`flex items-start gap-4 p-4 rounded-lg border transition-all ${
                        isOrange
                          ? "border-orange-500/30 hover:border-orange-500/50 bg-orange-500/5"
                          : "border-cyan-500/30 hover:border-cyan-500/50 bg-cyan-500/5"
                      }`}
                      whileHover={{ x: 5 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Icon
                        className={`w-6 h-6 flex-shrink-0 mt-1 ${isOrange ? "text-orange-400" : "text-cyan-400"}`}
                      />
                      <div>
                        <h4
                          className={`text-sm font-mono uppercase tracking-widest font-bold ${
                            isOrange ? "text-orange-400" : "text-cyan-400"
                          }`}
                        >
                          {info.label}
                        </h4>
                        <p className="text-slate-300 mt-1">{info.value}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="p-8 rounded-xl border border-orange-500/30 bg-orange-500/5 backdrop-blur-sm">
              <h3 className="text-xl font-mono font-bold text-orange-400 mb-8">SOCIAL.LINKS</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon
                  return (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 rounded-lg border border-orange-500/50 text-orange-400 font-mono text-sm font-bold hover:bg-orange-500/20 transition-all"
                      whileHover={{ scale: 1.05, x: 5 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Icon className="w-5 h-5" />
                      {link.name}
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="p-8 rounded-xl border border-orange-500/30 bg-orange-500/5 backdrop-blur-sm h-fit"
          >
            <h3 className="text-xl font-mono font-bold text-orange-400 mb-8">SEND.MESSAGE</h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
