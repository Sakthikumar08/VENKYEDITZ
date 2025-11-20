"use client"

import { motion } from "framer-motion"
import ContactForm from "../components/ContactForm"
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi"

const ContactSection = () => {
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

  return (
    <section id="contact" className="relative min-h-screen py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-cyan-400 mb-4 font-mono">INITIATE.CONTACT()</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-orange-500"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="p-6 rounded-xl border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm">
              <h3 className="text-xl font-mono font-bold text-cyan-400 mb-6">CONTACT.INFO</h3>
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
                    >
                      <Icon
                        className={`w-6 h-6 flex-shrink-0 mt-1 ${isOrange ? "text-orange-400" : "text-cyan-400"}`}
                      />
                      <div>
                        <h4
                          className={`text-sm font-mono uppercase tracking-widest ${
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
            <div className="p-6 rounded-xl border border-orange-500/30 bg-orange-500/5 backdrop-blur-sm">
              <h3 className="text-xl font-mono font-bold text-orange-400 mb-4">SOCIAL.LINKS</h3>
              <div className="flex flex-wrap gap-3">
                {["Instagram", "YouTube", "Twitter", "LinkedIn"].map((platform) => (
                  <motion.a
                    key={platform}
                    href="#"
                    className="px-4 py-2 rounded-lg border border-orange-500/50 text-orange-400 text-sm font-mono hover:bg-orange-500/20 transition-all"
                    whileHover={{ scale: 1.05 }}
                  >
                    {platform}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-8 rounded-xl border border-orange-500/30 bg-orange-500/5 backdrop-blur-sm"
          >
            <h3 className="text-xl font-mono font-bold text-orange-400 mb-6">SEND.MESSAGE</h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
