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
    name: "Classic Oxford Shirt",
    category: "men",
    type: "clothing",
    price: 89,
    image: "https://i.postimg.cc/G3Y0cVFW/Preppy-style-with-classy-details.png",
    description: "Timeless white Oxford shirt in premium cotton"
  },
  {
    id: 2,
    name: "Tailored Blazer",
    category: "men",
    type: "clothing",
    price: 299,
    image: "https://images.unsplash.com/photo-1712773663204-9dce38ddae57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtZW5zJTIwYmxhemVyJTIwYnJvd258ZW58MXx8fHwxNzczODc2NTE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Elegant brown blazer with refined tailoring"
  },
  {
    id: 3,
    name: "Cashmere Sweater",
    category: "men",
    type: "clothing",
    price: 189,
    image: "https://images.unsplash.com/photo-1766727923658-ae4d4d837239?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBrbml0d2VhciUyMHN3ZWF0ZXIlMjBjcmVhbXxlbnwxfHx8fDE3NzM4NzY1MTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Luxurious cream cashmere sweater"
  },
  {
    id: 4,
    name: "Tailored Trousers",
    category: "men",
    type: "clothing",
    price: 149,
    image: "https://images.unsplash.com/photo-1565728769229-e6e5b989a824?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWlsb3JlZCUyMHRyb3VzZXJzJTIwYmVpZ2V8ZW58MXx8fHwxNzczODc2NTE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Classic beige tailored trousers"
  },
  {
    id: 5,
    name: "Polo Shirt",
    category: "men",
    type: "clothing",
    price: 79,
    image: "https://images.unsplash.com/photo-1644860588182-0998b4ef5587?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwcG9sbyUyMHNoaXJ0JTIwd2hpdGV8ZW58MXx8fHwxNzczODc2NTE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Essential white polo shirt"
  },
  {
    id: 6,
    name: "Linen Summer Shirt",
    category: "men",
    type: "clothing",
    price: 95,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    description: "Breathable linen shirt in warm sand tones"
  },
  {
    id: 7,
    name: "Wool Overcoat",
    category: "men",
    type: "clothing",
    price: 420,
    image: "https://images.unsplash.com/photo-1544923246-77307dd654cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    description: "Heritage wool overcoat in camel brown"
  },
  {
    id: 8,
    name: "Chino Trousers",
    category: "men",
    type: "clothing",
    price: 120,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    description: "Slim-fit chinos in neutral olive"
  },
  // Accessories
  {
    id: 9,
    name: "Oxford Shoes",
    category: "men",
    type: "accessories",
    price: 219,
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
    name: "Classic Watch",
    category: "men",
    type: "accessories",
    price: 350,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    description: "Timeless dress watch with leather strap"
  },
  {
    id: 13,
    name: "Suede Loafers",
    category: "men",
    type: "accessories",
    price: 185,
    image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    description: "Supple suede loafers in tan"
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
    name: "Merino Turtleneck",
    category: "men",
    type: "clothing",
    price: 145,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    description: "Slim merino wool turtleneck in warm oatmeal"
  },
  {
    id: 16,
    name: "Houndstooth Blazer",
    category: "men",
    type: "clothing",
    price: 340,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    description: "Heritage houndstooth pattern blazer in navy"
  },
  {
    id: 17,
    name: "Formal Dress Shirt",
    category: "men",
    type: "clothing",
    price: 110,
    image: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    description: "Crisp white poplin dress shirt with fine stitching"
  },
  {
    id: 18,
    name: "Slim Suit Trousers",
    category: "men",
    type: "clothing",
    price: 165,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    description: "Slim-cut suit trousers in charcoal grey"
  },
  // More accessories
  {
    id: 19,
    name: "Leather Gloves",
    category: "men",
    type: "accessories",
    price: 85,
    image: "https://images.unsplash.com/photo-1545594861-3bef43ff0c15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    description: "Supple Italian leather gloves in cognac"
  },
  {
    id: 20,
    name: "Pocket Square",
    category: "men",
    type: "accessories",
    price: 35,
    image: "https://images.unsplash.com/photo-1598032895397-b9472444bf93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    description: "Hand-rolled linen pocket square in ivory"
  },
  {
    id: 21,
    name: "Canvas Tote Bag",
    category: "men",
    type: "accessories",
    price: 95,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    description: "Heavy canvas tote with leather handles"
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
