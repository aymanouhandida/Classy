import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import {
  ShoppingBag, Minus, Plus, Trash2, ArrowRight,
  ArrowLeft, CheckCircle2, MapPin, CreditCard, Package
} from "lucide-react";
import { Link } from "react-router";
import { useCart } from "../context/CartContext";

type Step = "cart" | "shipping" | "payment" | "confirmation";

const STEPS: { id: Step; label: string; icon: React.ReactNode }[] = [
  { id: "cart", label: "Cart", icon: <ShoppingBag className="w-4 h-4" /> },
  { id: "shipping", label: "Shipping", icon: <MapPin className="w-4 h-4" /> },
  { id: "payment", label: "Payment", icon: <CreditCard className="w-4 h-4" /> },
  { id: "confirmation", label: "Confirmed", icon: <Package className="w-4 h-4" /> },
];

const stepOrder: Step[] = ["cart", "shipping", "payment", "confirmation"];

const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
};

function StepIndicator({ current }: { current: Step }) {
  const currentIdx = stepOrder.indexOf(current);
  return (
    <div className="flex items-center justify-center gap-0 mb-12">
      {STEPS.map((step, idx) => {
        const done = idx < currentIdx;
        const active = idx === currentIdx;
        return (
          <div key={step.id} className="flex items-center">
            <motion.div
              animate={{ scale: active ? 1.1 : 1 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center"
            >
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                  done || active ? "bg-[#3d3026] text-[#faf8f5]" : "bg-[#e8dfd4] text-[#8c7d6f]"
                }`}
              >
                {done ? <CheckCircle2 className="w-4 h-4" /> : step.icon}
              </div>
              <span
                className={`mt-1 text-[10px] tracking-widest uppercase hidden sm:block ${
                  active ? "text-[#3d3026]" : done ? "text-[#6b5d52]" : "text-[#8c7d6f]"
                }`}
              >
                {step.label}
              </span>
            </motion.div>
            {idx < STEPS.length - 1 && (
              <motion.div
                animate={{ backgroundColor: done ? "#3d3026" : "#d4c4b0" }}
                transition={{ duration: 0.4 }}
                className="w-12 sm:w-20 h-[1px] mx-1"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

function OrderMiniSummary({ subtotal, shippingCost, total }: { subtotal: number; shippingCost: number; total: number }) {
  const { items } = useCart();
  return (
    <div className="bg-white p-6">
      <h3 className="text-base font-light tracking-wide text-[#3d3026] mb-4">Summary</h3>
      <div className="space-y-2 mb-4">
        {items.map((item) => (
          <div key={`${item.id}-${item.size}`} className="flex justify-between text-xs text-[#6b5d52]">
            <span>{item.name} × {item.quantity}</span>
            <span>{item.price * item.quantity} MAD</span>
          </div>
        ))}
      </div>
      <div className="space-y-2 pt-3 border-t border-[#d4c4b0]">
        <div className="flex justify-between text-xs text-[#6b5d52]">
          <span>Subtotal</span><span>{subtotal} MAD</span>
        </div>
        <div className="flex justify-between text-xs text-[#6b5d52]">
          <span>Shipping</span><span>{shippingCost} MAD</span>
        </div>
        <div className="flex justify-between text-sm text-[#3d3026] pt-2 border-t border-[#d4c4b0]">
          <span>Total</span><span>{total} MAD</span>
        </div>
      </div>
    </div>
  );
}

export function Cart() {
  const { items, removeItem, changeQty, clearCart, subtotal } = useCart();
  const [step, setStep] = useState<Step>("cart");
  const [direction, setDirection] = useState(1);
  const [orderRef] = useState(() => `CLY-${Math.floor(Math.random() * 90000) + 10000}`);

  const shippingCost = items.length > 0 ? 35 : 0;
  const total = subtotal + shippingCost;

  const [shippingInfo, setShippingInfo] = useState({
    firstName: "", lastName: "", email: "",
    address: "", city: "", postal: "", phone: "",
  });
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "", expiry: "", cvv: "", name: "",
  });

  const goTo = (next: Step) => {
    setDirection(stepOrder.indexOf(next) > stepOrder.indexOf(step) ? 1 : -1);
    setStep(next);
  };

  const placeOrder = () => {
    goTo("confirmation");
    clearCart();
  };

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1760108249194-f9cafd970762?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt=""
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#e8dfd4]/90 to-[#c4b5a6]/90" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-7xl mx-auto text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-wide text-[#3d3026] mb-3">
            {step === "confirmation" ? "Order Confirmed" : "Your Selection"}
          </h1>
          <p className="text-lg text-[#4d4138]">
            {step === "cart" ? "Review your chosen pieces"
              : step === "shipping" ? "Delivery details"
              : step === "payment" ? "Secure payment"
              : "Thank you for your order"}
          </p>
        </motion.div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <StepIndicator current={step} />

          <AnimatePresence mode="wait" custom={direction}>

            {/* ── CART ── */}
            {step === "cart" && (
              <motion.div
                key="cart"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {items.length > 0 ? (
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    <div className="lg:col-span-2 space-y-5">
                      {items.map((item, index) => (
                        <motion.div
                          key={`${item.id}-${item.size}`}
                          initial={{ opacity: 0, y: 16 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, x: -30 }}
                          transition={{ duration: 0.4, delay: index * 0.07 }}
                          className="bg-white p-5 flex gap-5"
                        >
                          <div className="w-24 h-28 flex-shrink-0 overflow-hidden bg-[#e8dfd4]">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1 flex flex-col justify-between">
                            <div>
                              <h3 className="text-base text-[#3d3026]">{item.name}</h3>
                              <p className="text-xs text-[#8c7d6f] mt-1">Size: {item.size}</p>
                              <p className="text-base text-[#3d3026] mt-1">{item.price} MAD</p>
                            </div>
                            <div className="flex items-center justify-between mt-3">
                              <div className="flex items-center gap-3">
                                <motion.button
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  onClick={() => changeQty(item.id, item.size, -1)}
                                  className="w-7 h-7 border border-[#d4c4b0] hover:border-[#3d3026] flex items-center justify-center transition-colors"
                                >
                                  <Minus className="w-3.5 h-3.5 text-[#3d3026]" />
                                </motion.button>
                                <span className="text-sm text-[#3d3026] w-5 text-center">{item.quantity}</span>
                                <motion.button
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  onClick={() => changeQty(item.id, item.size, 1)}
                                  className="w-7 h-7 border border-[#d4c4b0] hover:border-[#3d3026] flex items-center justify-center transition-colors"
                                >
                                  <Plus className="w-3.5 h-3.5 text-[#3d3026]" />
                                </motion.button>
                              </div>
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => removeItem(item.id, item.size)}
                                className="p-1.5 hover:bg-[#f5f0eb] rounded-full transition-colors"
                              >
                                <Trash2 className="w-4 h-4 text-[#8c7d6f]" />
                              </motion.button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="lg:col-span-1">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="bg-white p-7 sticky top-24"
                      >
                        <h2 className="text-xl font-light tracking-wide text-[#3d3026] mb-5">Order Summary</h2>
                        <div className="space-y-3 mb-5">
                          <div className="flex justify-between text-sm text-[#6b5d52]">
                            <span>Subtotal</span><span>{subtotal} MAD</span>
                          </div>
                          <div className="flex justify-between text-sm text-[#6b5d52]">
                            <span>Shipping</span><span>{shippingCost} MAD</span>
                          </div>
                          <div className="pt-4 border-t border-[#d4c4b0] flex justify-between text-base text-[#3d3026]">
                            <span>Total</span><span>{total} MAD</span>
                          </div>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => goTo("shipping")}
                          className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#3d3026] text-[#faf8f5] tracking-wider text-xs uppercase hover:bg-[#4d4138] transition-colors mb-3"
                        >
                          Proceed to Shipping <ArrowRight className="w-4 h-4" />
                        </motion.button>
                        <Link to="/shop">
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full px-6 py-3.5 border border-[#3d3026] text-[#3d3026] tracking-wider text-xs uppercase hover:bg-[#e8dfd4] transition-colors"
                          >
                            Continue Shopping
                          </motion.button>
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-20"
                  >
                    <ShoppingBag className="w-20 h-20 mx-auto text-[#d4c4b0] mb-5" />
                    <h2 className="text-2xl font-light tracking-wide text-[#3d3026] mb-4">Your cart is empty</h2>
                    <p className="text-[#6b5d52] mb-8">Discover timeless pieces in our men's collection</p>
                    <Link to="/shop">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-[#3d3026] text-[#faf8f5] tracking-wider text-sm uppercase hover:bg-[#4d4138] transition-colors"
                      >
                        Explore Collection <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </Link>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* ── SHIPPING ── */}
            {step === "shipping" && (
              <motion.div
                key="shipping"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                  <div className="lg:col-span-2">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="bg-white p-8"
                    >
                      <h2 className="text-xl font-light tracking-wide text-[#3d3026] mb-6">Delivery Information</h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {[
                          { key: "firstName", label: "First Name", placeholder: "Ayman" },
                          { key: "lastName", label: "Last Name", placeholder: "Ouhandida" },
                          { key: "email", label: "Email Address", placeholder: "ayman@example.com", full: true },
                          { key: "phone", label: "Phone Number", placeholder: "+212 6 24 84 44 97" },
                          { key: "address", label: "Street Address", placeholder: "123 Avenue Mohammed V", full: true },
                          { key: "city", label: "City", placeholder: "Rabat" },
                          { key: "postal", label: "Postal Code", placeholder: "10000" },
                        ].map((field) => (
                          <div key={field.key} className={field.full ? "sm:col-span-2" : ""}>
                            <label className="block text-xs tracking-widest uppercase text-[#6b5d52] mb-2">
                              {field.label}
                            </label>
                            <input
                              type="text"
                              placeholder={field.placeholder}
                              value={shippingInfo[field.key as keyof typeof shippingInfo]}
                              onChange={(e) => setShippingInfo((s) => ({ ...s, [field.key]: e.target.value }))}
                              className="w-full px-4 py-3 border border-[#d4c4b0] bg-[#faf8f5] text-[#3d3026] placeholder-[#c4b5a6] text-sm focus:outline-none focus:border-[#3d3026] transition-colors"
                            />
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                  <div className="lg:col-span-1">
                    <OrderMiniSummary subtotal={subtotal} shippingCost={shippingCost} total={total} />
                    <div className="mt-4 flex flex-col gap-3">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => goTo("payment")}
                        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#3d3026] text-[#faf8f5] tracking-wider text-xs uppercase hover:bg-[#4d4138] transition-colors"
                      >
                        Continue to Payment <ArrowRight className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => goTo("cart")}
                        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 border border-[#3d3026] text-[#3d3026] tracking-wider text-xs uppercase hover:bg-[#e8dfd4] transition-colors"
                      >
                        <ArrowLeft className="w-4 h-4" /> Back to Cart
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ── PAYMENT ── */}
            {step === "payment" && (
              <motion.div
                key="payment"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                  <div className="lg:col-span-2">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="bg-white p-8"
                    >
                      <h2 className="text-xl font-light tracking-wide text-[#3d3026] mb-6">Secure Payment</h2>

                      {/* Card preview */}
                      <motion.div
                        initial={{ opacity: 0, rotateY: -10 }}
                        animate={{ opacity: 1, rotateY: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-full max-w-sm mx-auto mb-8 rounded-xl p-6 bg-gradient-to-br from-[#3d3026] to-[#6b5d52] text-[#faf8f5] aspect-[1.586/1] flex flex-col justify-between"
                      >
                        <div className="flex justify-between items-start">
                          <p className="text-xs tracking-widest uppercase opacity-70">Classy Card</p>
                          <div className="flex gap-1">
                            <div className="w-6 h-6 rounded-full bg-[#c4b5a6] opacity-60" />
                            <div className="w-6 h-6 rounded-full bg-[#faf8f5] opacity-40 -ml-3" />
                          </div>
                        </div>
                        <div>
                          <p className="text-base tracking-[0.25em] mb-3">
                            {paymentInfo.cardNumber
                              ? paymentInfo.cardNumber.replace(/(.{4})/g, "$1 ").trim()
                              : "•••• •••• •••• ••••"}
                          </p>
                          <div className="flex justify-between items-end">
                            <div>
                              <p className="text-[10px] opacity-60 mb-0.5 uppercase tracking-wider">Name</p>
                              <p className="text-sm tracking-wider">{paymentInfo.name || "Your Name"}</p>
                            </div>
                            <div>
                              <p className="text-[10px] opacity-60 mb-0.5 uppercase tracking-wider">Expires</p>
                              <p className="text-sm tracking-wider">{paymentInfo.expiry || "MM/YY"}</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      <div className="space-y-5">
                        <div>
                          <label className="block text-xs tracking-widest uppercase text-[#6b5d52] mb-2">Cardholder Name</label>
                          <input
                            type="text"
                            placeholder="Ayman Ouhandida"
                            value={paymentInfo.name}
                            onChange={(e) => setPaymentInfo((p) => ({ ...p, name: e.target.value }))}
                            className="w-full px-4 py-3 border border-[#d4c4b0] bg-[#faf8f5] text-[#3d3026] placeholder-[#c4b5a6] text-sm focus:outline-none focus:border-[#3d3026] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs tracking-widest uppercase text-[#6b5d52] mb-2">Card Number</label>
                          <input
                            type="text"
                            placeholder="1234 5678 9012 3456"
                            maxLength={16}
                            value={paymentInfo.cardNumber}
                            onChange={(e) => setPaymentInfo((p) => ({ ...p, cardNumber: e.target.value.replace(/\D/g, "") }))}
                            className="w-full px-4 py-3 border border-[#d4c4b0] bg-[#faf8f5] text-[#3d3026] placeholder-[#c4b5a6] text-sm focus:outline-none focus:border-[#3d3026] transition-colors"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs tracking-widest uppercase text-[#6b5d52] mb-2">Expiry Date</label>
                            <input
                              type="text"
                              placeholder="MM/YY"
                              maxLength={5}
                              value={paymentInfo.expiry}
                              onChange={(e) => setPaymentInfo((p) => ({ ...p, expiry: e.target.value }))}
                              className="w-full px-4 py-3 border border-[#d4c4b0] bg-[#faf8f5] text-[#3d3026] placeholder-[#c4b5a6] text-sm focus:outline-none focus:border-[#3d3026] transition-colors"
                            />
                          </div>
                          <div>
                            <label className="block text-xs tracking-widest uppercase text-[#6b5d52] mb-2">CVV</label>
                            <input
                              type="text"
                              placeholder="•••"
                              maxLength={3}
                              value={paymentInfo.cvv}
                              onChange={(e) => setPaymentInfo((p) => ({ ...p, cvv: e.target.value }))}
                              className="w-full px-4 py-3 border border-[#d4c4b0] bg-[#faf8f5] text-[#3d3026] placeholder-[#c4b5a6] text-sm focus:outline-none focus:border-[#3d3026] transition-colors"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mt-5 flex items-center gap-2 text-xs text-[#8c7d6f]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#6b5d52]" />
                        Your payment is encrypted and secure
                      </div>
                    </motion.div>
                  </div>
                  <div className="lg:col-span-1">
                    <OrderMiniSummary subtotal={subtotal} shippingCost={shippingCost} total={total} />
                    <div className="mt-4 flex flex-col gap-3">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={placeOrder}
                        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#3d3026] text-[#faf8f5] tracking-wider text-xs uppercase hover:bg-[#4d4138] transition-colors"
                      >
                        Place Order — {total} MAD <ArrowRight className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => goTo("shipping")}
                        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 border border-[#3d3026] text-[#3d3026] tracking-wider text-xs uppercase hover:bg-[#e8dfd4] transition-colors"
                      >
                        <ArrowLeft className="w-4 h-4" /> Back to Shipping
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ── CONFIRMATION ── */}
            {step === "confirmation" && (
              <motion.div
                key="confirmation"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="max-w-xl mx-auto text-center"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 18, delay: 0.1 }}
                    className="w-20 h-20 rounded-full bg-[#3d3026] flex items-center justify-center mx-auto mb-8"
                  >
                    <CheckCircle2 className="w-10 h-10 text-[#faf8f5]" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <h2 className="text-3xl font-light tracking-wide text-[#3d3026] mb-3">
                      Thank You for Your Order
                    </h2>
                    <p className="text-[#6b5d52] mb-2 leading-relaxed">
                      Your order has been placed and is being prepared with care.
                    </p>
                    <p className="text-sm text-[#8c7d6f] mb-8">
                      Order reference: <span className="text-[#3d3026]">#{orderRef}</span>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Link to="/shop">
                        <motion.button
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                          className="px-8 py-3.5 bg-[#3d3026] text-[#faf8f5] tracking-wider text-xs uppercase hover:bg-[#4d4138] transition-colors"
                        >
                          Continue Shopping
                        </motion.button>
                      </Link>
                      <Link to="/">
                        <motion.button
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                          className="px-8 py-3.5 border border-[#3d3026] text-[#3d3026] tracking-wider text-xs uppercase hover:bg-[#e8dfd4] transition-colors"
                        >
                          Return Home
                        </motion.button>
                      </Link>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {step !== "confirmation" && (
        <section className="py-14 px-4 bg-[#f5f0eb]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                { title: "Secure Checkout", description: "256-bit SSL encryption on all transactions" },
                { title: "Free Returns", description: "30-day return policy on all orders" },
                { title: "Customer Support", description: "Available 7 days a week for any queries" },
              ].map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-5"
                >
                  <h3 className="text-base text-[#3d3026] mb-1">{badge.title}</h3>
                  <p className="text-sm text-[#6b5d52]">{badge.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
