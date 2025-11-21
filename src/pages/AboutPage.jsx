"use client"

import { motion } from "framer-motion"

const AboutPage = () => {
  const skills = [
    { name: "Video Editing", level: 95 },
    { name: "Color Grading", level: 90 },
    { name: "Motion Graphics", level: 85 },
    { name: "VFX & Compositing", level: 88 },
    { name: "Audio Design", level: 82 },
    { name: "Storytelling", level: 92 },
  ]

  const tools = ["Premiere Pro", "After Effects", "DaVinci Resolve", "Cinema 4D", "Figma", "Blender", "Nuke", "Houdini"]

  const experience = [
    { year: "2023-Present", role: "Senior Video Editor", company: "Digital Studios" },
    { year: "2021-2023", role: "Motion Graphics Designer", company: "Creative Agency" },
    { year: "2019-2021", role: "Video Editor", company: "Content Production" },
  ]

  return (
    <section className="relative min-h-screen py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div className="mb-12 sm:mb-16 md:mb-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-cyan-400 mb-4 font-mono">SYSTEM.ABOUT()</h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl">
            Discover the story behind the craft and the passion driving innovation
          </p>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-cyan-500 to-orange-500 mt-4 sm:mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Main Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 p-6 sm:p-8 rounded-xl border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm"
          >
            <h2 className="text-xl sm:text-2xl font-mono font-bold text-cyan-400 mb-4 sm:mb-6">PROFILE</h2>
            <p className="text-slate-300 mb-4 leading-relaxed text-sm sm:text-base">
              I'm a passionate video editor and visual storyteller with{" "}
              <span className="text-orange-400 font-semibold">5+ years</span> of experience crafting cinematic
              experiences that captivate audiences and elevate brands. My expertise spans fast-paced editing, advanced
              color grading, and immersive motion graphics.
            </p>
            <p className="text-slate-300 mb-4 leading-relaxed text-sm sm:text-base">
              My approach combines <span className="text-cyan-400 font-semibold">technical precision</span> with{" "}
              <span className="text-orange-400 font-semibold">artistic vision</span>, transforming raw footage into
              compelling narratives across film, advertising, and digital platforms.
            </p>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              I believe in the power of visual storytelling to communicate ideas, emotions, and messages in ways that
              resonate deeply with audiences. Every project is an opportunity to push creative boundaries.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="p-6 sm:p-8 rounded-xl border border-orange-500/30 bg-orange-500/5 backdrop-blur-sm flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-mono font-bold text-orange-400 mb-4 sm:mb-6">STATS</h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="text-center">
                  <p className="text-3xl sm:text-4xl font-mono font-bold text-cyan-400">50+</p>
                  <p className="text-slate-400 text-xs sm:text-sm mt-1">Projects Completed</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl sm:text-4xl font-mono font-bold text-orange-400">100M+</p>
                  <p className="text-slate-400 text-xs sm:text-sm mt-1">Combined Views</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl sm:text-4xl font-mono font-bold text-cyan-400">15+</p>
                  <p className="text-slate-400 text-xs sm:text-sm mt-1">Awards Won</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Instagram Activity */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 sm:mt-12 p-6 sm:p-8 rounded-xl border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm"
        >
          <h2 className="text-xl sm:text-2xl font-mono font-bold text-cyan-400 mb-4 sm:mb-6">INSTAGRAM.ACTIVITY()</h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-cyan-500 to-orange-500 mb-6 sm:mb-8"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Instagram Profile Embed */}
            <div className="bg-slate-900/50 rounded-lg overflow-hidden border border-cyan-500/20">
              <div className="relative pt-[100%]">
                <iframe 
                  src="https://www.instagram.com/venkyfx__/embed/" 
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0" 
                  scrolling="no" 
                  allowTransparency="true"
                  title="Instagram Profile"
                ></iframe>
              </div>
            </div>
            
            {/* Instagram Analytics */}
            <div>
              <h3 className="text-lg sm:text-xl font-mono font-bold text-orange-400 mb-4 sm:mb-6">ANALYTICS.OVERVIEW()</h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="p-3 sm:p-4 rounded-lg border border-cyan-500/20 bg-cyan-500/10">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-300 font-mono text-sm">Followers</span>
                    <span className="text-cyan-400 font-mono font-bold text-sm">200K+</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden border border-cyan-500/20">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "95%" }}
                      transition={{ duration: 1, delay: 0.3 }}
                    />
                  </div>
                </div>
                
                <div className="p-3 sm:p-4 rounded-lg border border-orange-500/20 bg-orange-500/10">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-300 font-mono text-sm">Engagement Rate</span>
                    <span className="text-orange-400 font-mono font-bold text-sm">15.7%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden border border-orange-500/20">
                    <motion.div
                      className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "85%" }}
                      transition={{ duration: 1, delay: 0.4 }}
                    />
                  </div>
                </div>
                
                <div className="p-3 sm:p-4 rounded-lg border border-cyan-500/20 bg-cyan-500/10">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-300 font-mono text-sm">Monthly Views</span>
                    <span className="text-cyan-400 font-mono font-bold text-sm">8M+</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden border border-cyan-500/20">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "90%" }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6">
                  <div className="text-center p-2 sm:p-3 rounded-lg border border-cyan-500/20 bg-cyan-500/10">
                    <p className="text-lg sm:text-xl font-mono font-bold text-cyan-400">1.2M</p>
                    <p className="text-slate-400 text-xs mt-1">Likes/Month</p>
                  </div>
                  <div className="text-center p-2 sm:p-3 rounded-lg border border-orange-500/20 bg-orange-500/10">
                    <p className="text-lg sm:text-xl font-mono font-bold text-orange-400">85K</p>
                    <p className="text-slate-400 text-xs mt-1">Comments/Month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 sm:mt-8 p-4 sm:p-6 rounded-lg border border-orange-500/30 bg-orange-500/5">
            <h3 className="text-base sm:text-lg font-mono font-bold text-orange-400 mb-3 sm:mb-4">INSTAGRAM.INSIGHTS()</h3>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              My Instagram presence focuses on showcasing behind-the-scenes content, creative processes, and finished projects. 
              With a consistent posting schedule and high engagement rate, the account has become a valuable platform for 
              connecting with clients and collaborators in the video editing industry.
            </p>
            <p className="text-slate-300 mt-2 sm:mt-3 leading-relaxed text-sm sm:text-base">
              The content strategy emphasizes visual storytelling, technical tutorials, and creative inspiration, 
              which has helped build a loyal community of over 200K followers who actively engage with the posts.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12">
          {/* Toolkit */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="p-6 sm:p-8 rounded-xl border border-orange-500/30 bg-orange-500/5 backdrop-blur-sm"
          >
            <h3 className="text-lg sm:text-xl font-mono font-bold text-orange-400 mb-4 sm:mb-6">TOOLKIT</h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {tools.map((tool) => (
                <motion.span
                  key={tool}
                  className="px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-full border border-orange-500/50 text-orange-300 bg-orange-500/10 hover:bg-orange-500/20 transition-all cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="p-6 sm:p-8 rounded-xl border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm"
          >
            <h3 className="text-lg sm:text-xl font-mono font-bold text-cyan-400 mb-4 sm:mb-6">PROFICIENCY.MATRIX()</h3>
            <div className="space-y-4 sm:space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1 sm:mb-2 text-xs sm:text-sm">
                    <span className="text-slate-300">{skill.name}</span>
                    <span className="text-cyan-400 font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 sm:h-2 bg-slate-800 rounded-full overflow-hidden border border-cyan-500/20">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-8 sm:mt-12 p-6 sm:p-8 rounded-xl border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm"
        >
          <h2 className="text-xl sm:text-2xl font-mono font-bold text-cyan-400 mb-6 sm:mb-8">EXPERIENCE</h2>
          <div className="space-y-4 sm:space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 sm:gap-6 p-3 sm:p-4 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all"
                whileHover={{ x: 5 }}
              >
                <div className="text-cyan-400 font-mono text-xs sm:text-sm font-bold min-w-max">{exp.year}</div>
                <div>
                  <h4 className="text-base sm:text-lg font-mono font-bold text-cyan-300 mb-1">{exp.role}</h4>
                  <p className="text-slate-400 text-sm">{exp.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutPage
