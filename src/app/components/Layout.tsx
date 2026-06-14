import { Outlet, Link, useLocation } from "react-router";
import { ShoppingCart, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import logoImage from "figma:asset/83534df55c7d8435a064a71b4e4e399ebef9139f.png";

export function Layout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalCount } = useCart();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/shop", label: "Shop" },
    { path: "/lookbook", label: "Lookbook" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5]">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sticky top-0 z-50 bg-[#faf8f5]/95 backdrop-blur-sm border-b border-[#d4c4b0]/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="group">
              <motion.img
                src={logoImage}
                alt="Classy"
                whileHover={{ scale: 1.05 }}
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative group"
                >
                  <span className="text-sm tracking-wide text-[#3d3026] hover:text-[#6b5d52] transition-colors">
                    {link.label}
                  </span>
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-[1px] bg-[#3d3026]"
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Cart & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Link to="/cart">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative p-2 hover:bg-[#e8dfd4] rounded-full transition-colors"
                >
                  <ShoppingCart className="w-5 h-5 text-[#3d3026]" />
                  <AnimatePresence>
                    {totalCount > 0 && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="absolute -top-1 -right-1 w-4 h-4 bg-[#3d3026] text-[#faf8f5] text-[9px] rounded-full flex items-center justify-center"
                      >
                        {totalCount}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 hover:bg-[#e8dfd4] rounded-full transition-colors"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-[#3d3026]" />
                ) : (
                  <Menu className="w-5 h-5 text-[#3d3026]" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t border-[#d4c4b0]/30"
            >
              <nav className="flex flex-col py-4 px-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-3 px-4 text-sm tracking-wide rounded-lg transition-colors ${
                      location.pathname === link.path
                        ? "bg-[#e8dfd4] text-[#3d3026]"
                        : "text-[#3d3026] hover:bg-[#e8dfd4]/50"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#3d3026] text-[#e8dfd4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-light tracking-[0.2em] mb-4 uppercase">
                Classy
              </h3>
              <p className="text-sm text-[#c4b5a6] leading-relaxed">
                Where simplicity meets timeless elegance. 
                Old money aesthetic for the modern era.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm tracking-wider mb-4 uppercase">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/shop"
                    className="text-sm text-[#c4b5a6] hover:text-[#e8dfd4] transition-colors"
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    to="/lookbook"
                    className="text-sm text-[#c4b5a6] hover:text-[#e8dfd4] transition-colors"
                  >
                    Lookbook
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-sm text-[#c4b5a6] hover:text-[#e8dfd4] transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-sm text-[#c4b5a6] hover:text-[#e8dfd4] transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm tracking-wider mb-4 uppercase">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.instagram.com/cl4ssystyle/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#c4b5a6] hover:text-[#e8dfd4] transition-colors"
                  >
                    Instagram — @cl4ssystyle
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:aymanoualaeou@gmail.com"
                    className="text-sm text-[#c4b5a6] hover:text-[#e8dfd4] transition-colors"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-[#4d4138]">
            <p className="text-sm text-[#c4b5a6] text-center">
              © 2026 Classy. All rights reserved. Designed with passion by Ayman Ouhandida.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}