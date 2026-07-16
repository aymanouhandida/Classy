export interface Product {
  id: number;
  name: string;
  category: "men";
  type: "clothing" | "accessories";
  price: number;
  image: string;
  description: string;
}

export const products: Product[] = [
  // Clothing
  {
    id: 1,
    name: "Classic Fluid Shirt",
    category: "men",
    type: "clothing",
    price: 125,
    image: "/images/chemises.png",
    description: "button-up shirt featuring an elegant draped silhouette and rolled cuffs"
  },
  {
    id: 2,
    name: "Modern Mandarin Jacket",
    category: "men",
    type: "clothing",
    price: 290,
    image: "/images/chinise.png",
    description: "Blazer elegant mandarin collar,minimalist silver toggle closures"
  },
  {
    id: 3,
    name: "Signature Wrap Jacket",
    category: "men",
    type: "clothing",
    price: 200,
    image: "/images/Design sans titre (4).png",
    description: "Timeless grey collarless overshirt crafted for versatile styling"
  },
  {
    id: 4,
    name: "Classic Knit Cardigan",
    category: "men",
    type: "clothing",
    price: 145,
    image: "/images/Design sans titre (3).png",
    description: "Premium rib-knit buttoned cardigan in a timeless olive green"
  },
  {
    id: 5,
    name: "Classic Knit Vest",
    category: "men",
    type: "clothing",
    price: 100,
    image: "/images/Design sans titre (7).png",
    description: "Premium V-neck sleeveless sweater in a soft, elegant cream tone"
  },
  {
    id: 6,
    name: "Striped Quarter-Zip Sweater",
    category: "men",
    type: "clothing",
    price: 150,
    image: "/images/Trico.png",
    description: "Premium rib-knit half-zip pullover featuring timeless nautical cream and black stripes"
  },
  {
    id: 7,
    name: "Classic Pique Polo Shirt",
    category: "men",
    type: "clothing",
    price: 120,
    image: "/images/Design sans titre (8).png",
    description: "Premium cotton-pique polo shirts featuring a timeless tailored fit, available in four rich heritage tones"
  },
  {
    id: 8,
    name: "Classic Tailored Trousers",
    category: "men",
    type: "clothing",
    price: 185,
    image: "/images/Design sans titre (6).png",
    description: "Refined slim-fit trousers with sharp front pleats and a structured waistband"
  },
  // Accessories
  {
    id: 9,
    name: "Oxford Shoes",
    category: "men",
    type: "accessories",
    price: 200,
    image: "https://images.unsplash.com/photo-1772678144516-4fddf7635ab4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwbWVucyUyMG94Zm9yZCUyMHNob2VzfGVufDF8fHx8MTc3Mzg3NjUyMXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Premium leather Oxford shoes"
  },
  {
    id: 10,
    name: "Leather Belt",
    category: "men",
    type: "accessories",
    price: 75,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    description: "Full-grain leather belt with brass buckle"
  },
  {
    id: 11,
    name: "Cashmere Scarf",
    category: "men",
    type: "accessories",
    price: 99,
    image: "https://images.unsplash.com/photo-1609803384069-19f3e5a70e75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    description: "Pure cashmere scarf in warm cream"
  },
  {
    id: 12,
    name: "Classic Leather Travel Wallet",
    category: "men",
    type: "accessories",
    price: 80,
    image: "/images/da332507-7805-4110-91b5-2746cb011d4c.jpg",
    description: "wallet featuring clean-cut stitching and structured compartments for your daily essentials"
  },
  {
    id: 13,
    name: "Classic Newsboy Cap",
    category: "men",
    type: "accessories",
    price: 75,
    image: "/images/2d5d48ca-33b2-4478-bdb7-01bf8aa65049.jpg",
    description: "newsboy cap featuring a timeless grey herringbone wool pattern and a refined central button"
  },
  {
    id: 14,
    name: "Silk Tie",
    category: "men",
    type: "accessories",
    price: 55,
    image: "https://images.unsplash.com/photo-1598032895397-b9472444bf93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    description: "Hand-finished silk tie in burgundy"
  },
  // More clothing
  {
    id: 15,
    name: "Ribbed Quarter-Zip Polo",
    category: "men",
    type: "clothing",
    price: 180,
    image: "/images/polos.png",
    description: "Premium heavy rib-knit polo shirt with a modern half-zip collar and structured cuffs"
  },
  {
    id: 16,
    name: "Classic Harrington Jacket",
    category: "men",
    type: "clothing",
    price: 265,
    image: "/images/Design sans titre (5).png",
    description: "Premium structured zip-up jacket featuring a refined fold-down collar and sleek welt pockets"
  },
  {
    id: 17,
    name: "Classic Double-Breasted Coat",
    category: "men",
    type: "clothing",
    price: 320,
    image: "/images/Design sans titre (2).png",
    description: "Premium double-breasted long coat featuring a rich textured wool finish, elegant notched lapels"
  },
  {
    id: 18,
    name: "y Modern Pinstripe Set",
    category: "men",
    type: "clothing",
    price: 220,
    image: "/images/outfit.png",
    description: "A sophisticated two-piece ensemble featuring a tailored monochrome pinstripe shirt and high-waisted"
  },
  // More accessories
  {
    id: 19,
    name: "Classic Silver Link Watch",
    category: "men",
    type: "accessories",
    price: 200,
    image: "/images/d157c22321364641eb755d005189ff77.jpg",
    description: "Sleek and timeless stainless steel watch "
  },
  {
    id: 20,
    name: "Classic Onyx Signet Ring",
    category: "men",
    type: "accessories",
    price: 35,
    image: "/images/f5be4d6001a70b2e388ebbbb3ec0aa1b.jpg",
    description: "Premium stainless steel signet ring featuring a polished deep black inlay"
  },
  {
    id: 21,
    name: "Classic Riviera Sunglasses",
    category: "men",
    type: "accessories",
    price: 75,
    image: "/images/76939fac1dace477f27d3e7374f6f273.jpg",
    description: "Premium round acetate sunglasses featuring a polished black frame paired "
  }
];

export const lookbookImages = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1667243142746-deb10f212300?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    title: "Heritage Style",
    description: "Honoring traditional craftsmanship"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1526632503813-6f479409d7bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    title: "Sophisticated Style",
    description: "Refined pieces for the modern gentleman"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1516540896870-2aed89d0288f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    title: "Minimal Aesthetic",
    description: "Simplicity as the ultimate sophistication"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1564518160120-94178fcdf5d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    title: "Timeless Elegance",
    description: "Classic silhouettes that transcend trends"
  }
];
