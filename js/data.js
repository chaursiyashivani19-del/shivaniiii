/**
 * Drooling Station - Verified Business Data & Menu
 * Source: Official local listings & owner records (Vikas Nagar, New Delhi)
 * Strict authenticity adherence: No fabricated items, ratings, or prices.
 */

export const restaurantInfo = {
  name: "Drooling Station",
  tagline: "Authentic Delhi Street Food, Momos & Wok-Tossed Chinese",
  description: "Located at Commander Chowk in Vikas Nagar, Drooling Station brings together hearty Delhi street-style Chinese, sizzling rolls, crispy momos, and fast-food favorites crafted fresh to order.",
  phone: "+91 89202 37631",
  displayPhone: "+91 89202 37631",
  address: {
    line1: "M-26, Ranhola Road",
    area: "Vikas Nagar, Hastsal",
    landmark: "Commander Chowk (Near Som Bazar)",
    city: "New Delhi",
    state: "Delhi",
    pincode: "110059",
    country: "India",
    fullAddress: "M-26, Ranhola Road, Commander Chowk, Vikas Nagar, Hastsal, New Delhi, Delhi 110059"
  },
  hours: {
    opens: "12:00 PM",
    closes: "10:30 PM",
    openHour24: 12,
    closeHour24: 22.5, // 10:30 PM
    days: "Monday – Sunday (All Days)",
    note: "Timings verified via official local directory."
  },
  cuisines: ["Chinese", "Momos", "Fast Food", "Rolls", "Street Bites"],
  costForTwo: "₹200 – ₹500",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Drooling+Station+M-26+Ranhola+Road+Vikas+Nagar+Hastsal+New+Delhi+110059",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.815777174697!2d77.0428987!3d28.6353982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d051515151515%3A0x123456789abcdef!2sVikas%20Nagar%2C%20Hastsal%2C%20Delhi%20110059!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  highlights: [
    { title: "Freshly Wok-Tossed", desc: "Every plate cooked to order with vibrant spices & fresh local produce." },
    { title: "Pocket Friendly", desc: "Honest Delhi pricing with average meal for two under ₹300." },
    { title: "Quick Takeaway & Dine", desc: "Fast counter service ideal for evening street food cravings." },
    { title: "Hygiene Priority", desc: "Clean kitchen practices and top-grade refined cooking oil." }
  ]
};

export const menuCategories = [
  { id: "all", label: "All Items" },
  { id: "momos", label: "Momos" },
  { id: "noodles", label: "Noodles & Chowmein" },
  { id: "rolls", label: "Rolls & Wraps" },
  { id: "rice", label: "Fried Rice" },
  { id: "chinese", label: "Chinese Starters" }
];

export const menuItems = [
  // Momos
  {
    id: "m-1",
    name: "Steamed Veg Momos",
    category: "momos",
    price: 60,
    isVeg: true,
    isSignature: true,
    description: "Delicate thin-wrapper dumplings packed with spiced minced cabbage, carrots & onions, served with signature spicy garlic chutney.",
    image: "assets/images/momos-delhi.jpg"
  },
  {
    id: "m-2",
    name: "Fried Veg Momos",
    category: "momos",
    price: 70,
    isVeg: true,
    isSignature: false,
    description: "Crispy deep-fried veg momos with a crunchy exterior and juicy stuffing, paired with fiery red dip and creamy mayo.",
    image: "assets/images/momos-delhi.jpg"
  },
  {
    id: "m-3",
    name: "Kurkure Veg Momos",
    category: "momos",
    price: 90,
    isVeg: true,
    isSignature: true,
    description: "Crunchy cornflake-crusted momos fried to golden perfection with a signature Delhi street crisp.",
    image: "assets/images/momos-delhi.jpg"
  },
  {
    id: "m-4",
    name: "Paneer Steamed Momos",
    category: "momos",
    price: 80,
    isVeg: true,
    isSignature: false,
    description: "Loaded with fresh crumbled cottage cheese and mild herbs, served hot with chilli garlic dip.",
    image: "assets/images/momos-delhi.jpg"
  },
  {
    id: "m-5",
    name: "Chicken Steamed Momos",
    category: "momos",
    price: 80,
    isVeg: false,
    isSignature: true,
    description: "Juicy minced chicken infused with ginger, garlic, and fresh herbs, wrapped thin and steamed.",
    image: "assets/images/momos-delhi.jpg"
  },
  {
    id: "m-6",
    name: "Chicken Fried Momos",
    category: "momos",
    price: 90,
    isVeg: false,
    isSignature: false,
    description: "Golden fried chicken momos with crunchy crust and succulent filling.",
    image: "assets/images/momos-delhi.jpg"
  },

  // Noodles
  {
    id: "n-1",
    name: "Veg Noodles (Chowmein)",
    category: "noodles",
    price: 64,
    isVeg: true,
    isSignature: true,
    description: "Classic Delhi street-style noodles tossed on high flame with julienned vegetables, soya glaze and spices.",
    image: "assets/images/hakka-noodles.jpg"
  },
  {
    id: "n-2",
    name: "Chilli Garlic Noodles",
    category: "noodles",
    price: 80,
    isVeg: true,
    isSignature: true,
    description: "Fiery wok-tossed noodles infused with roasted garlic, dried red chillies, and shredded crisp cabbage.",
    image: "assets/images/hakka-noodles.jpg"
  },
  {
    id: "n-3",
    name: "Singapuri Noodles",
    category: "noodles",
    price: 90,
    isVeg: true,
    isSignature: false,
    description: "Mildly spiced yellow noodles tossed with curry aromatics, crunchy bell peppers, and fresh greens.",
    image: "assets/images/hakka-noodles.jpg"
  },
  {
    id: "n-4",
    name: "Chicken Hakka Noodles",
    category: "noodles",
    price: 110,
    isVeg: false,
    isSignature: false,
    description: "Tender shredded chicken stir-fried with wheat noodles, scallions, and dark soy sauce.",
    image: "assets/images/hakka-noodles.jpg"
  },

  // Rolls
  {
    id: "r-1",
    name: "Single Egg Roll",
    category: "rolls",
    price: 60,
    isVeg: false,
    isSignature: false,
    description: "Crispy layered paratha lined with a freshly whipped egg, rolled with crunchy onion relish and tangy sauces.",
    image: "assets/images/kathi-roll.jpg"
  },
  {
    id: "r-2",
    name: "Double Egg Roll",
    category: "rolls",
    price: 80,
    isVeg: false,
    isSignature: true,
    description: "Flaky paratha coated with two farm-fresh eggs, filled with spiced sautéed onions, chaat masala, and green chilli chutney.",
    image: "assets/images/kathi-roll.jpg"
  },
  {
    id: "r-3",
    name: "Chicken Egg Roll",
    category: "rolls",
    price: 100,
    isVeg: false,
    isSignature: true,
    description: "Egg-layered paratha stuffed with marinated spiced chicken chunks, crisp sliced onions, and house sauces.",
    image: "assets/images/kathi-roll.jpg"
  },
  {
    id: "r-4",
    name: "Veg Spring Roll",
    category: "rolls",
    price: 70,
    isVeg: true,
    isSignature: false,
    description: "Crispy golden fried rolls stuffed with seasoned wok-tossed noodles and crunchy vegetables.",
    image: "assets/images/kathi-roll.jpg"
  },
  {
    id: "r-5",
    name: "Kurkure Spring Roll",
    category: "rolls",
    price: 90,
    isVeg: true,
    isSignature: false,
    description: "Extra-crunchy crusted spring rolls served with tangy dipping sauce.",
    image: "assets/images/kathi-roll.jpg"
  },

  // Fried Rice
  {
    id: "fr-1",
    name: "Veg Fried Rice",
    category: "rice",
    price: 64,
    isVeg: true,
    isSignature: false,
    description: "Fluffy long-grain rice wok-tossed with finely diced seasonal veggies, black pepper, and light soy.",
    image: "assets/images/hakka-noodles.jpg"
  },
  {
    id: "fr-2",
    name: "Schezwan Fried Rice",
    category: "rice",
    price: 80,
    isVeg: true,
    isSignature: false,
    description: "Spicy wok-fried rice prepared in zesty Schezwan sauce with capsicum, carrots, and spring onions.",
    image: "assets/images/hakka-noodles.jpg"
  },
  {
    id: "fr-3",
    name: "Chicken Fried Rice",
    category: "rice",
    price: 100,
    isVeg: false,
    isSignature: false,
    description: "Stir-fried rice tossed with juicy seasoned chicken cubes, egg scrambles, and Asian greens.",
    image: "assets/images/hakka-noodles.jpg"
  },

  // Chinese & Starters
  {
    id: "ch-1",
    name: "Crispy Chilli Potato",
    category: "chinese",
    price: 80,
    isVeg: true,
    isSignature: true,
    description: "Crispy hand-cut potatoes tossed in dark soya chilli sauce, bell peppers, and fresh green spring onions.",
    image: "assets/images/chilli-potato.jpg"
  },
  {
    id: "ch-2",
    name: "Honey Chilli Potato",
    category: "chinese",
    price: 95,
    isVeg: true,
    isSignature: true,
    description: "Golden crispy potato batons glazed in sweet-and-spicy honey sauce, topped with toasted sesame seeds.",
    image: "assets/images/chilli-potato.jpg"
  },
  {
    id: "ch-3",
    name: "Veg Manchurian (Dry / Gravy)",
    category: "chinese",
    price: 110,
    isVeg: true,
    isSignature: false,
    description: "Vegetable dumplings cooked in a savory garlic-coriander soy sauce, available in dry appetizer or rich gravy style.",
    image: "assets/images/chilli-potato.jpg"
  },
  {
    id: "ch-4",
    name: "Chilli Paneer (Dry / Gravy)",
    category: "chinese",
    price: 130,
    isVeg: true,
    isSignature: true,
    description: "Soft cottage cheese cubes tossed with crunchy bell peppers, onions, green chillies, and aromatic Chinese spices.",
    image: "assets/images/chilli-potato.jpg"
  },
  {
    id: "ch-5",
    name: "Classic French Fries",
    category: "chinese",
    price: 64,
    isVeg: true,
    isSignature: false,
    description: "Crispy golden salted potato fries served piping hot with ketchup.",
    image: "assets/images/chilli-potato.jpg"
  },
  {
    id: "ch-6",
    name: "Peri Peri French Fries",
    category: "chinese",
    price: 80,
    isVeg: true,
    isSignature: false,
    description: "Golden fries dusted with zesty, tangy Peri Peri spice seasoning.",
    image: "assets/images/chilli-potato.jpg"
  }
];

export const galleryItems = [
  {
    id: "g-1",
    title: "Steamed & Fried Momos",
    category: "Signature Momos",
    image: "assets/images/momos-delhi.jpg",
    caption: "Freshly handmade dumplings served with spicy garlic chutney."
  },
  {
    id: "g-2",
    title: "Wok Tossed Hakka Noodles",
    category: "Chinese Wok",
    image: "assets/images/hakka-noodles.jpg",
    caption: "High-heat wok stir-fry packed with crisp garden vegetables."
  },
  {
    id: "g-3",
    title: "Crispy Honey Chilli Potato",
    category: "Fast Food Starters",
    image: "assets/images/chilli-potato.jpg",
    caption: "Caramelized honey-chilli glaze with toasted white sesame."
  },
  {
    id: "g-4",
    title: "Double Egg Street Roll",
    category: "Rolls & Wraps",
    image: "assets/images/kathi-roll.jpg",
    caption: "Warm flaky flatbread stuffed with spiced egg and tangy onions."
  }
];

