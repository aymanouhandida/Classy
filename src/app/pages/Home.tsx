import { motion } from "motion/react";
import { ArrowRight, Shield, Clock, Truck } from "lucide-react";
import { Link } from "react-router";
import { products } from "../data/products";
import heroImage from "figma:asset/f70855405f6581ab381328332a6eac3802691384.png";

export function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <motion.img
            src={heroImage}
            alt=""
            className="w-full h-full object-cover"
            animate={{ 
              x: [0, -8, 0],
              y: [0, -5, 0]
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
        
        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center px-4"
        >
          {/* CC Monogram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <svg width="100" height="100" viewBox="0 0 100 100" className="mx-auto">
              <text
                x="50"
                y="65"
                textAnchor="middle"
                fill="white"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "70px",
                  fontWeight: "300",
                  fontStyle: "italic"
                }}
              >
                CC
              </text>
            </svg>
          </motion.div>

          {/* CLASSY Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.2em] text-white mb-6 uppercase"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: "400" }}
          >
            CLASSY
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-white mb-10 max-w-3xl mx-auto"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: "300" }}
          >
            Old Money Style — The Gentleman's Collection
          </motion.p>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link to="/shop">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#f5f0eb" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-10 py-4 bg-white text-[#3d3026] tracking-wider text-sm uppercase transition-colors"
                style={{ fontWeight: "600", letterSpacing: "0.15em" }}
              >
                SHOP NOW
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Brand Philosophy */}
      <section className="py-20 px-4 bg-[#faf8f5]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-[#3d3026] mb-6">
              Dressed for the Gentleman
            </h2>
            <p className="text-lg text-[#6b5d52] leading-relaxed max-w-2xl mx-auto">
              At Classy, we believe in the old money aesthetic — refined, minimal,
              and effortlessly sophisticated. We curate menswear for those who appreciate
              classic fashion, clean lines, and quiet luxury at fair, accessible prices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 bg-[#f5f0eb]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-light tracking-wide text-[#3d3026] mb-4">
              Men's Featured Collection
            </h2>
            <p className="text-lg text-[#6b5d52]">Curated menswear for the modern gentleman</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to="/shop">
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="group bg-white overflow-hidden"
                  >
                    <div className="aspect-[3/4] overflow-hidden bg-[#e8dfd4]">
                      <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg text-[#3d3026] mb-2 group-hover:text-[#6b5d52] transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-[#8c7d6f] mb-3">{product.type}</p>
                      <p className="text-lg text-[#3d3026]">{product.price} MAD</p>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link to="/shop">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 border border-[#3d3026] text-[#3d3026] tracking-wider text-sm uppercase hover:bg-[#3d3026] hover:text-[#faf8f5] transition-all"
              >
                Shop Now
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Timeless Design",
                description: "Classic pieces that transcend fleeting trends and remain elegant season after season"
              },
              {
                title: "Premium Quality",
                description: "Carefully selected materials and impeccable craftsmanship for lasting wear"
              },
              {
                title: "Fair Pricing",
                description: "Accessible luxury — true elegance should be authentic and available to all"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 border border-[#3d3026] rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-[#3d3026] rounded-full" />
                </div>
                <h3 className="text-xl tracking-wide text-[#3d3026] mb-4">{value.title}</h3>
                <p className="text-[#6b5d52] leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#3d3026] text-[#faf8f5]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide mb-6">
              Discover More
            </h2>
            <p className="text-lg text-[#c4b5a6] mb-8 leading-relaxed">
              Explore our complete collection and find pieces that speak to your timeless style
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/lookbook">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-[#faf8f5] text-[#3d3026] tracking-wider text-sm uppercase hover:bg-[#e8dfd4] transition-colors"
                >
                  View Lookbook
                </motion.button>
              </Link>
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-[#faf8f5] text-[#faf8f5] tracking-wider text-sm uppercase hover:bg-[#faf8f5] hover:text-[#3d3026] transition-all"
                >
                  Our Story
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}