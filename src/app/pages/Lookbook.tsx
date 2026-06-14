import { motion } from "motion/react";
import { lookbookImages } from "../data/products";

export function Lookbook() {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1760108249194-f9cafd970762?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwbWluaW1hbGlzdCUyMGJhY2tncm91bmQlMjBiZWlnZXxlbnwxfHx8fDE3NzM4NzcxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#e8dfd4]/90 to-[#c4b5a6]/90" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-7xl mx-auto text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-wide text-[#3d3026] mb-4">
            Lookbook
          </h1>
          <p className="text-lg text-[#4d4138] max-w-2xl mx-auto">
            Styled ensembles showcasing the old money aesthetic
          </p>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-[#4d4138] leading-relaxed">
              Explore our carefully curated looks that embody timeless elegance and sophisticated 
              simplicity. Each ensemble tells a story of refined taste and understated luxury.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lookbook Grid */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {lookbookImages.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden bg-white">
                  <div className="aspect-[3/4] overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Overlay Info */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-8 opacity-0 transition-opacity duration-300"
                  >
                    <div className="text-white">
                      <h3 className="text-2xl font-light tracking-wide mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-200">{item.description}</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Style Guide */}
      <section className="py-20 px-4 bg-[#f5f0eb]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-light tracking-wide text-[#3d3026] mb-4">
              The Old Money Aesthetic
            </h2>
            <p className="text-lg text-[#6b5d52] max-w-2xl mx-auto">
              Principles of timeless style and quiet luxury
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Neutral Palette",
                description: "Soft beige, cream, deep brown, and muted tones create a harmonious and sophisticated look"
              },
              {
                title: "Quality Fabrics",
                description: "Natural materials like cotton, wool, cashmere, and silk that age beautifully"
              },
              {
                title: "Classic Silhouettes",
                description: "Tailored fits and clean lines that flatter and endure beyond seasonal trends"
              },
              {
                title: "Minimal Details",
                description: "Subtle accents and refined finishes that speak to craftsmanship"
              },
              {
                title: "Versatile Pieces",
                description: "Items that mix and match effortlessly for countless elegant combinations"
              },
              {
                title: "Understated Luxury",
                description: "Quality and elegance without loud branding or ostentatious displays"
              }
            ].map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 border border-[#3d3026] rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#3d3026] rounded-full" />
                </div>
                <h3 className="text-lg tracking-wide text-[#3d3026] mb-3">{principle.title}</h3>
                <p className="text-sm text-[#6b5d52] leading-relaxed">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Styling Tips */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-light tracking-wide text-[#3d3026] mb-4">
              Styling Tips
            </h2>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                tip: "Build a Capsule Wardrobe",
                detail: "Invest in fewer, higher-quality pieces that work together seamlessly"
              },
              {
                tip: "Focus on Fit",
                detail: "Well-tailored clothing in classic cuts will always look more elegant than trendy pieces"
              },
              {
                tip: "Layer with Purpose",
                detail: "Combine textures and tones thoughtfully for depth and sophistication"
              },
              {
                tip: "Accessorize Subtly",
                detail: "Choose timeless accessories that complement rather than dominate your outfit"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-6 items-start bg-white p-6"
              >
                <div className="flex-shrink-0 w-8 h-8 border border-[#3d3026] rounded-full flex items-center justify-center">
                  <span className="text-sm text-[#3d3026]">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl text-[#3d3026] mb-2">{item.tip}</h3>
                  <p className="text-[#6b5d52]">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}