"use client";

import { Terminal, Cloud, Github as Git, Dock as Docker, Server, Database, Code2, Workflow } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [particles, setParticles] = useState<{ x: number; y: number }[]>([]);


  useEffect(() => {
    // Initialize particles with random positions based on window dimensions
    const newParticles = [...Array(20)].map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    }));
    setParticles(newParticles);
  }, []);

  const devopsTools = [
    { name: "CI/CD Pipeline", icon: <Workflow className="w-8 h-8" />, description: "Automated build and deployment workflows" },
    { name: "Containerization", icon: <Docker className="w-8 h-8" />, description: "Docker container management" },
    { name: "Version Control", icon: <Git className="w-8 h-8" />, description: "Git source control management" },
    { name: "Cloud Services", icon: <Cloud className="w-8 h-8" />, description: "Cloud infrastructure management" },
    { name: "Infrastructure", icon: <Server className="w-8 h-8" />, description: "Server and infrastructure management" },
    { name: "Databases", icon: <Database className="w-8 h-8" />, description: "Database administration" },
  ];

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#0A0F1C] text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle at 50% 50%, #1E40AF 0%, transparent 50%)",
            y: backgroundY
          }}
        />
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500 rounded-full"
            initial={{
              x: particle.x,
              y: particle.y,
              scale: 0
            }}
            animate={{
              y: [null, Math.random() * -500],
              scale: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <nav className="sticky top-0 z-50 backdrop-blur-lg border-b border-gray-800 bg-[#0D1425]/80 py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <motion.div
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Terminal className="w-6 h-6 text-blue-500" />
            <span className="text-xl font-bold">DevOps Lab</span>
          </motion.div>
          <motion.div
            className="flex space-x-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#tools" className="hover:text-blue-400 transition-colors">Tools</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </motion.div>
        </div>
      </nav>

      <main className="relative">
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div
                className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-75 blur-lg"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <h1 className="relative text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                Welcome to DevOps Testing Ground
              </h1>
              <p className="relative text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                A space-themed environment for practicing and testing DevOps workflows, 
                containerization, and deployment strategies.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {devopsTools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-500"/>
                  <div className="relative bg-[#1A2233] p-6 rounded-lg border border-gray-800">
                    <div className="flex items-center justify-center mb-4 text-blue-500">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {tool.icon}
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
                    <p className="text-gray-400">{tool.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative bg-[#0D1425]/90 backdrop-blur-sm py-16 px-4">
          <div className="container mx-auto">
            <motion.div
              className="flex flex-col md:flex-row items-center justify-between"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="md:w-1/2 mb-8 md:mb-0">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Code2 className="w-16 h-16 text-blue-500 mb-6" />
                </motion.div>
                <h2 className="text-3xl font-bold mb-4">Ready for Testing</h2>
                <p className="text-gray-400">
                  This website is specifically designed for DevOps practice. Clone, build,
                  test, and deploy using various tools and methodologies.
                </p>
              </div>
              <motion.div
                className="md:w-1/2 bg-[#1A2233] p-6 rounded-lg border border-gray-800 relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500"/>
                <pre className="relative text-sm text-gray-300 overflow-x-auto">
                  <code>{`# Clone the repository
git clone https://github.com/your-repo/devops-lab

# Build the Docker image
docker build -t devops-lab .

# Run the container
docker run -p 3000:3000 devops-lab`}</code>
                </pre>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="relative bg-[#0A0F1C] border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © 2025 DevOps Lab. Created for testing and learning purposes.
          </motion.p>
        </div>
      </footer>
    </div>
  );
}