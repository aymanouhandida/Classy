import { motion } from "motion/react";
import { Mail, Instagram, Send, MapPin, Clock, Phone } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* Hero */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1767360963892-3353defd6584?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt=""
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#e8dfd4]/90 to-[#c4b5a6]/90" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-7xl mx-auto text-center"
        >
          <p className="text-xs tracking-[0.35em] uppercase text-[#6b5d52] mb-4">
            Morocco — Rabat
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-wide text-[#3d3026] mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-[#4d4138] max-w-2xl mx-auto">
            We'd love to hear from you — whether it's a question, a styling inquiry, or simply a conversation.
          </p>
        </motion.div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-14 px-4 bg-[#f5f0eb]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: <MapPin className="w-5 h-5 text-[#3d3026]" />,
                label: "Location",
                value: "Rabat, Morocco",
                sub: "Available for appointments",
                href: null,
              },
              {
                icon: <Mail className="w-5 h-5 text-[#3d3026]" />,
                label: "Email",
                value: "aymanoualaeou@gmail.com",
                sub: "Reply within 24–48h",
                href: "mailto:aymanoualaeou@gmail.com",
              },
              {
                icon: <Instagram className="w-5 h-5 text-[#3d3026]" />,
                label: "Instagram — Brand",
                value: "@cl4ssystyle",
                sub: "Follow the Classy brand",
                href: "https://www.instagram.com/cl4ssystyle/",
              },
              {
                icon: <Instagram className="w-5 h-5 text-[#3d3026]" />,
                label: "Instagram — Founder",
                value: "@aymanouhandida",
                sub: "Personal account · Ayman",
                href: "https://www.instagram.com/aymanouhandida/",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, boxShadow: "0 8px 32px rgba(61,48,38,0.10)" }}
                className="bg-white p-7 flex flex-col gap-3 transition-shadow cursor-pointer"
                onClick={() => card.href && window.open(card.href, "_blank")}
              >
                <div className="w-10 h-10 rounded-full bg-[#f5f0eb] flex items-center justify-center">
                  {card.icon}
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.25em] uppercase text-[#8c7d6f] mb-0.5">{card.label}</p>
                  <p className="text-[#3d3026] text-sm">{card.value}</p>
                  <p className="text-[#8c7d6f] text-xs mt-0.5">{card.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main: Form + Map */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8">
                <p className="text-xs tracking-[0.25em] uppercase text-[#8c7d6f] mb-2">Write to us</p>
                <h2 className="text-3xl font-light tracking-wide text-[#3d3026]">Send a Message</h2>
                <div className="w-12 h-[1px] bg-[#3d3026] mt-4" />
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[#f5f0eb] border border-[#d4c4b0] p-10 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-[#3d3026] flex items-center justify-center mx-auto mb-4">
                    <Send className="w-6 h-6 text-[#faf8f5]" />
                  </div>
                  <h3 className="text-xl font-light text-[#3d3026] mb-2">Message Sent</h3>
                  <p className="text-sm text-[#6b5d52]">
                    Thank you for reaching out. We'll reply within 24–48 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] tracking-[0.25em] uppercase text-[#6b5d52] mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Ayman Ouhandida"
                        className="w-full px-4 py-3 bg-white border border-[#d4c4b0] focus:border-[#3d3026] focus:outline-none transition-colors text-[#3d3026] text-sm placeholder-[#c4b5a6]"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] tracking-[0.25em] uppercase text-[#6b5d52] mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 bg-white border border-[#d4c4b0] focus:border-[#3d3026] focus:outline-none transition-colors text-[#3d3026] text-sm placeholder-[#c4b5a6]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.25em] uppercase text-[#6b5d52] mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Product inquiry, collaboration, etc."
                      className="w-full px-4 py-3 bg-white border border-[#d4c4b0] focus:border-[#3d3026] focus:outline-none transition-colors text-[#3d3026] text-sm placeholder-[#c4b5a6]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.25em] uppercase text-[#6b5d52] mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={7}
                      placeholder="Tell us what's on your mind..."
                      className="w-full px-4 py-3 bg-white border border-[#d4c4b0] focus:border-[#3d3026] focus:outline-none transition-colors text-[#3d3026] text-sm placeholder-[#c4b5a6] resize-none"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, backgroundColor: "#4d4138" }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#3d3026] text-[#faf8f5] tracking-[0.2em] text-xs uppercase"
                  >
                    Send Message
                    <Send className="w-4 h-4" />
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Map + Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col gap-6"
            >
              <div className="mb-2">
                <p className="text-xs tracking-[0.25em] uppercase text-[#8c7d6f] mb-2">Find us</p>
                <h2 className="text-3xl font-light tracking-wide text-[#3d3026]">Our Location</h2>
                <div className="w-12 h-[1px] bg-[#3d3026] mt-4" />
              </div>

              {/* Morocco Map embed */}
              <div className="relative overflow-hidden" style={{ height: "340px" }}>
                <iframe
                  title="Classy — Rabat, Morocco"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106372.14968408478!2d-6.898158!3d33.9715904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76b8719330c3d%3A0x6d3cbc4f0b9a9e4e!2sRabat%2C%20Morocco!5e0!3m2!1sen!2sus!4v1718000000001!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "sepia(30%) contrast(1.05)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                {/* Elegant overlay frame */}
                <div className="absolute inset-0 pointer-events-none border-4 border-[#faf8f5]" />
              </div>

              {/* Detail cards */}
              <div className="grid grid-cols-1 gap-4">
                {[
                  {
                    icon: <MapPin className="w-4 h-4 text-[#3d3026]" />,
                    title: "Based in",
                    detail: "Rabat, Morocco",
                  },
                  {
                    icon: <Clock className="w-4 h-4 text-[#3d3026]" />,
                    title: "Response Hours",
                    detail: "Mon – Sat, 9:00 – 20:00 (GMT+1)",
                  },
                  {
                    icon: <Phone className="w-4 h-4 text-[#3d3026]" />,
                    title: "WhatsApp",
                    detail: "+212 6 24 84 44 97",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                    className="flex items-start gap-4 bg-[#f5f0eb] px-5 py-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.2em] uppercase text-[#8c7d6f]">{item.title}</p>
                      <p className="text-sm text-[#3d3026] mt-0.5">{item.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-[#f5f0eb]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-xs tracking-[0.25em] uppercase text-[#8c7d6f] mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-light tracking-wide text-[#3d3026]">
              Common Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "What is your return policy?",
                a: "We offer a 30-day return policy for unworn items in original condition with tags attached."
              },
              {
                q: "Do you ship across Morocco?",
                a: "Yes — we ship nationwide. Orders within Casablanca arrive within 24h, other cities within 2–3 business days."
              },
              {
                q: "How do I find my size?",
                a: "Each product page includes detailed sizing. For personalized guidance, reach out via Instagram or email."
              },
              {
                q: "Do you offer styling consultations?",
                a: "Yes. Send us a message or DM on Instagram and Ayman will help you put together the perfect wardrobe."
              }
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white p-6 border-l-2 border-[#3d3026]"
              >
                <h3 className="text-base text-[#3d3026] mb-2">{faq.q}</h3>
                <p className="text-sm text-[#6b5d52] leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-16 px-4 bg-[#3d3026]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Instagram className="w-8 h-8 text-[#c4b5a6] mx-auto mb-4" />
            <h2 className="text-2xl font-light tracking-wide text-[#faf8f5] mb-2">
              Follow the Journey
            </h2>
            <p className="text-sm text-[#c4b5a6] mb-7">
              Style inspiration, new arrivals, and behind-the-scenes moments
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://www.instagram.com/cl4ssystyle/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, backgroundColor: "#e8dfd4" }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="inline-flex flex-col items-center gap-1 px-8 py-4 bg-[#faf8f5] text-[#3d3026]"
              >
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#8c7d6f]">The Brand</span>
                <span className="flex items-center gap-2 text-xs tracking-wider">
                  @cl4ssystyle <Instagram className="w-3.5 h-3.5" />
                </span>
              </motion.a>
              <motion.a
                href="https://www.instagram.com/aymanouhandida/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, backgroundColor: "#4d4138" }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="inline-flex flex-col items-center gap-1 px-8 py-4 border border-[#faf8f5]/30 text-[#faf8f5]"
              >
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#c4b5a6]">The Founder</span>
                <span className="flex items-center gap-2 text-xs tracking-wider">
                  @aymanouhandida <Instagram className="w-3.5 h-3.5" />
                </span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
