"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <motion.input
          type="text"
          name="name"
          placeholder="NAME_TRANSMISSION"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-slate-900/50 border border-orange-500/30 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400/50 transition-all font-mono text-sm"
          whileFocus={{ scale: 1.02 }}
          required
        />
      </div>

      <div>
        <motion.input
          type="email"
          name="email"
          placeholder="EMAIL_ADDRESS"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-slate-900/50 border border-orange-500/30 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400/50 transition-all font-mono text-sm"
          whileFocus={{ scale: 1.02 }}
          required
        />
      </div>

      <div>
        <motion.textarea
          name="message"
          placeholder="MESSAGE_DATA"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-slate-900/50 border border-orange-500/30 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400/50 transition-all resize-none font-mono text-sm"
          whileFocus={{ scale: 1.02 }}
          required
        />
      </div>

      <motion.button
        type="submit"
        className="w-full py-2 px-4 bg-gradient-to-r from-orange-500 to-orange-600 text-slate-900 font-mono font-bold rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all uppercase tracking-widest text-sm"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        TRANSMIT_MESSAGE
      </motion.button>
    </motion.form>
  )
}

export default ContactForm
