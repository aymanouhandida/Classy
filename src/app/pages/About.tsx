import { motion } from "motion/react";
import founderImage from "figma:asset/91aa6677e12656264769c00362f76ae822084b4b.png";

export function About() {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* Hero with Background Image */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1759229874914-c1ffdb3ebd0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZmFicmljJTIwdGV4dHVyZSUyMGJlaWdlfGVufDF8fHx8MTc3Mzg3NzEzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
            Our Story
          </h1>
          <p className="text-lg text-[#4d4138] max-w-2xl mx-auto">
            A journey of passion, elegance, and timeless style
          </p>
        </motion.div>
      </section>

      {/* Main Story */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Founder Photo Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <div className="inline-block">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                <img
                  src={founderImage}
                  alt="Ayman Ouhandida - Founder of Classy"
                  className="w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-[#c4b5a6] rounded-lg -z-10" />
              </motion.div>
              <p className="mt-6 text-lg text-[#3d3026] tracking-wide">Ayman Ouhandida</p>
              <p className="text-sm text-[#8c7d6f] tracking-wider uppercase">Founder & Designer</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-light tracking-wide text-[#3d3026] mb-6">
                The Vision Behind Classy
              </h2>
              <div className="space-y-6 text-[#4d4138] leading-relaxed">
                <p>
                  I created Classy to express my passion for the old money style — a fashion that 
                  represents simplicity, elegance, and timeless identity. This aesthetic speaks to me 
                  because it values quality over quantity, refinement over excess, and lasting style 
                  over fleeting trends.
                </p>
                <p>
                  Starting this brand is my way to prove myself, to turn an idea into something real, 
                  and to grow through experience and feedback. It's more than just clothing — it's 
                  about creating a lifestyle that honors sophistication and authenticity.
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12 p-8 bg-[#f5f0eb] border-l-4 border-[#3d3026]"
            >
              <p className="text-xl text-[#3d3026] italic font-light">
                "At Classy, my goal is simple: to offer high-quality clothing with a fair and 
                accessible price. Because I believe that true elegance should not be expensive — 
                it should be authentic, minimal, and available to those who appreciate it."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-3xl sm:text-4xl font-light tracking-wide text-[#3d3026] mb-6">
                Our Philosophy
              </h2>
              <div className="space-y-6 text-[#4d4138] leading-relaxed">
                <p>
                  The old money aesthetic is more than a style — it's a mindset. It's about choosing 
                  pieces that will look just as elegant in ten years as they do today. It's about 
                  investing in quality craftsmanship, classic cuts, and neutral palettes that never 
                  go out of fashion.
                </p>
                <p>
                  We design for women and men who appreciate this timeless approach to fashion. 
                  Our pieces feature clean lines, refined silhouettes, and subtle details that 
                  showcase quiet luxury without ostentation.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Grid */}
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
              What We Stand For
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Timeless Design",
                description: "Every piece is designed to transcend trends and remain elegant for years to come. We focus on classic silhouettes and refined details that never go out of style."
              },
              {
                title: "Quality Craftsmanship",
                description: "We believe in the value of well-made clothing. Each item is crafted with attention to detail and selected materials that ensure lasting wear and comfort."
              },
              {
                title: "Accessible Luxury",
                description: "True elegance shouldn't come with an unreachable price tag. We're committed to offering sophisticated pieces at fair prices that make old money style accessible to all."
              },
              {
                title: "Authentic Expression",
                description: "Classy is about quiet confidence and authentic self-expression. Our pieces allow you to showcase your refined taste without needing loud branding or excess."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8"
              >
                <h3 className="text-2xl tracking-wide text-[#3d3026] mb-4">{value.title}</h3>
                <p className="text-[#6b5d52] leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-light tracking-wide text-[#3d3026] mb-6">
              The Journey Continues
            </h2>
            <p className="text-lg text-[#4d4138] leading-relaxed mb-8">
              This is just the beginning of my journey. Classy represents not just a brand, 
              but a commitment to growth, learning, and creating something meaningful. 
              Every piece we offer, every customer we serve, is a step forward in this adventure.
            </p>
            <p className="text-lg text-[#4d4138] leading-relaxed">
              Thank you for being part of this story. Welcome to Classy.
            </p>
            <div className="mt-12">
              <p className="text-xl text-[#3d3026] tracking-wide">— Ayman Ouhandida</p>
              <p className="text-sm text-[#8c7d6f] mt-2 tracking-wider uppercase">Founder & Designer</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}