import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { products } from "../data/products";
import { Plus, Shirt, Watch, LayoutGrid, ShoppingBag, Check } from "lucide-react";
import { useCart } from "../context/CartContext";

type FilterType = "all" | "clothing" | "accessories";

const tabs: { value: FilterType; label: string; icon: React.ReactNode }[] = [
  { value: "all", label: "All Men's", icon: <LayoutGrid className="w-4 h-4" /> },
  { value: "clothing", label: "Clothing", icon: <Shirt className="w-4 h-4" /> },
  { value: "accessories", label: "Accessories", icon: <Watch className="w-4 h-4" /> },
];

const CLOTHING_SIZES = ["XS", "S", "M", "L", "XL", "XXL"];
const ACCESSORIES_SIZES = ["One Size"];
const SHOE_SIZES = ["40", "41", "42", "43", "44", "45"];
const SHOE_TYPES = ["Oxford Shoes", "Suede Loafers"];

function getSizes(type: string, name: string) {
  if (SHOE_TYPES.includes(name)) return SHOE_SIZES;
  if (type === "accessories") return ACCESSORIES_SIZES;
  return CLOTHING_SIZES;
}

interface AddedToast {
  id: number;
  name: string;
}

export function Shop() {
  const [filter, setFilter] = useState<FilterType>("all");
  const [sizeModal, setSizeModal] = useState<{ product: (typeof products)[0] } | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [toast, setToast] = useState<AddedToast | null>(null);
  const { addItem } = useCart();
  const navigate = useNavigate();

  const filteredProducts =
    filter === "all" ? products : products.filter((p) => p.type === filter);

  const openSizePicker = (product: (typeof products)[0]) => {
    const sizes = getSizes(product.type, product.name);
    setSizeModal({ product });
    setSelectedSize(sizes[sizes.length === 1 ? 0 : 2] ?? sizes[0]);
  };

  const confirmAdd = () => {
    if (!sizeModal) return;
    addItem({
      id: sizeModal.product.id,
      name: sizeModal.product.name,
      price: sizeModal.product.price,
      image: sizeModal.product.image,
      size: selectedSize,
    });
    setToast({ id: sizeModal.product.id, name: sizeModal.product.name });
    setSizeModal(null);
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* Hero */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1633564285917-491371115135?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
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
          <p className="text-xs tracking-[0.35em] uppercase text-[#6b5d52] mb-4">Classy Menswear</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-wide text-[#3d3026] mb-4">
            The Gentleman's Shop
          </h1>
          <p className="text-lg text-[#4d4138] max-w-2xl mx-auto">
            Timeless pieces crafted for the modern man who values quiet luxury
          </p>
        </motion.div>
      </section>

      {/* Tab Navigation */}
      <section className="sticky top-[72px] z-30 bg-[#faf8f5] border-b border-[#d4c4b0]/40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex"
          >
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setFilter(tab.value)}
                className={`relative flex items-center gap-2 px-8 py-5 text-sm tracking-widest uppercase transition-colors ${
                  filter === tab.value ? "text-[#3d3026]" : "text-[#8c7d6f] hover:text-[#4d4138]"
                }`}
              >
                {tab.icon}
                {tab.label}
                {filter === tab.value && (
                  <motion.div
                    layoutId="shop-tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#3d3026]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Category Label */}
      <section className="pt-10 pb-2 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-4"
            >
              <h2 className="text-2xl font-light text-[#3d3026] tracking-wide">
                {filter === "all" ? "All Men's Collection" : filter === "clothing" ? "Men's Clothing" : "Men's Accessories"}
              </h2>
              <span className="text-sm text-[#8c7d6f] tracking-wider">{filteredProducts.length} pieces</span>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-10 px-4 pb-24">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="group"
                >
                  <div className="bg-white overflow-hidden">
                    <div className="aspect-[3/4] overflow-hidden bg-[#e8dfd4] relative">
                      <motion.img
                        whileHover={{ scale: 1.06 }}
                        transition={{ duration: 0.5 }}
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 text-[10px] tracking-widest uppercase bg-white/80 text-[#3d3026]">
                          {product.type}
                        </span>
                      </div>
                      {/* Add to Cart overlay */}
                      <div className="absolute inset-0 bg-black/15 flex items-end justify-center p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <motion.button
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                          onClick={() => openSizePicker(product)}
                          className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#3d3026] tracking-wider text-xs uppercase hover:bg-[#e8dfd4] transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          Add to Cart
                        </motion.button>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-base text-[#3d3026] mb-1 group-hover:text-[#6b5d52] transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-xs text-[#8c7d6f] mb-3 leading-relaxed">{product.description}</p>
                      <p className="text-base text-[#3d3026]">{product.price} MAD</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Size Picker Modal */}
      <AnimatePresence>
        {sizeModal && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSizeModal(null)}
              className="fixed inset-0 bg-black/40 z-50"
            />
            <motion.div
              key="modal"
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white w-full max-w-sm p-8 shadow-2xl"
            >
              <div className="flex gap-4 mb-6">
                <img
                  src={sizeModal.product.image}
                  alt={sizeModal.product.name}
                  className="w-20 h-24 object-cover bg-[#e8dfd4] flex-shrink-0"
                />
                <div className="flex flex-col justify-center">
                  <h3 className="text-base text-[#3d3026] mb-1">{sizeModal.product.name}</h3>
                  <p className="text-sm text-[#8c7d6f]">{sizeModal.product.price} MAD</p>
                </div>
              </div>

              <p className="text-[10px] tracking-[0.25em] uppercase text-[#6b5d52] mb-3">Select Size</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {getSizes(sizeModal.product.type, sizeModal.product.name).map((size) => (
                  <motion.button
                    key={size}
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.94 }}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 text-xs tracking-wider border transition-all ${
                      selectedSize === size
                        ? "bg-[#3d3026] text-[#faf8f5] border-[#3d3026]"
                        : "border-[#d4c4b0] text-[#3d3026] hover:border-[#3d3026]"
                    }`}
                  >
                    {size}
                  </motion.button>
                ))}
              </div>

              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={confirmAdd}
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#3d3026] text-[#faf8f5] tracking-wider text-xs uppercase hover:bg-[#4d4138] transition-colors"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  Add to Cart
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSizeModal(null)}
                  className="px-5 py-3 border border-[#d4c4b0] text-[#6b5d52] text-xs tracking-wider uppercase hover:border-[#3d3026] transition-colors"
                >
                  Cancel
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Added to cart toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#3d3026] text-[#faf8f5] px-6 py-3.5 flex items-center gap-3 shadow-xl"
          >
            <Check className="w-4 h-4 text-[#c4b5a6]" />
            <span className="text-xs tracking-wider">{toast.name} added to cart</span>
            <button
              onClick={() => navigate("/cart")}
              className="ml-2 text-xs tracking-wider underline text-[#c4b5a6] hover:text-[#faf8f5] transition-colors"
            >
              View Cart
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
