import { Product, BlogPost } from '../types';

export const CATEGORIES = [
  { id: 'food', name: 'Food', countDogs: 12, countCats: 9, image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=300&auto=format&fit=crop&q=80' },
  { id: 'treats', name: 'Treats', countDogs: 8, countCats: 6, image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300&auto=format&fit=crop&q=80' },
  { id: 'toys', name: 'Toys', countDogs: 15, countCats: 11, image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=300&auto=format&fit=crop&q=80' },
  { id: 'leashes', name: 'Leashes', countDogs: 6, countCats: 4, image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=300&auto=format&fit=crop&q=80' },
  { id: 'supplies', name: 'Supplies', countDogs: 10, countCats: 8, image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=300&auto=format&fit=crop&q=80' },
  { id: 'beds', name: 'Beds', countDogs: 5, countCats: 4, image: 'https://images.unsplash.com/photo-1541599540903-216a46ca1df0?w=300&auto=format&fit=crop&q=80' }
];

export const BRANDS = [
  { name: 'Royal Canin', rating: 4.9 },
  { name: 'Whiskas', rating: 4.6 },
  { name: 'Taste of Wild', rating: 4.6 },
  { name: 'Hills', rating: 4.8 },
  { name: 'KONG', rating: 4.7 },
  { name: 'Pedigree', rating: 4.7 },
  { name: 'Catit', rating: 4.1 },
  { name: 'Hartz', rating: 4.7 }
];

export const COLLECTIONS = [
  'Best Sellers',
  'New Arrivals',
  'Trending Now',
  'Limited Stock',
  'Fresh Food',
  'Vet Recommended'
];

export const DEMO_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Royal Canin Fit 32 Adult Dry Cat Food 2kg",
    slug: "royal-canin-fit-32-adult-cat-food-2kg",
    category: "Food",
    petType: "Cat",
    brand: "Royal Canin",
    price: 31.99,
    oldPrice: 36.99,
    image: "https://marspetcareaprimocdn.petcare.global/d00b96be-3063-4140-ac03-b378009a2c3a/d00b96be-3063-4140-ac03-b378009a2c3a_DownloadAsJpg.jpg",
    rating: 4.9,
    reviewCount: 1240,
    stock: 9,
    badge: "Best Seller",
    description: "Balanced complete dry food for adult cats over 1 year old with moderate activity. Designed to support ideal weight, urinary health, and hairball reduction.",
    ingredients: "Dehydrated poultry protein, rice, wheat, animal fats, maize, vegetable fibres, wheat flour, hydrolysed animal proteins, vegetable protein isolate, maize gluten, yeasts, beet pulp, soya oil, fish oil, psyllium husks and seeds, minerals, marigold extract.",
    feedingGuide: "For a 3kg cat feed around 44g daily, 4kg around 54g, 5kg around 63g, and 6kg around 72g. Keep fresh water available.",
    reviews: [
      { id: "r1", author: "Maya R.", rating: 5, date: "2026-05-18", text: "Good daily food. My indoor cat eats it well and the kibble size is comfortable.", verified: true },
      { id: "r2", author: "Daniel K.", rating: 5, date: "2026-04-22", text: "Reliable Royal Canin quality. Coat and digestion stayed consistent after switching.", verified: true }
    ]
  },
  {
    id: 2,
    name: "WHISKAS 1+ Adult Wet Cat Food Chicken in Jelly 85g",
    slug: "whiskas-1-adult-chicken-in-jelly-85g",
    category: "Food",
    petType: "Cat",
    brand: "Whiskas",
    price: 1.49,
    oldPrice: 1.79,
    image: "https://www.whiskas.co.uk/cdn-cgi/image/format%3Dauto%2Cq%3D90/sites/g/files/fnmzdf8916/files/migrate-product-files/images/knafqqk7ednj425puo5d.png",
    rating: 4.6,
    reviewCount: 865,
    stock: 18,
    badge: "Trending",
    description: "Single-serve adult cat wet food pouch with chicken chunks in jelly. Formulated for 1+ cats with high-quality ingredients and no added artificial colours or preservatives.",
    ingredients: "Meat and animal derivatives including chicken, cereals, minerals, derivatives of vegetable origin including beet pulp, and various sugars.",
    feedingGuide: "Serve at room temperature. Adjust amount based on body weight, age, and activity. Keep fresh drinking water available.",
    reviews: [
      { id: "r3", author: "Aisha M.", rating: 5, date: "2026-06-02", text: "Perfect pouch size. My cat finishes it fast and the jelly texture is easy to serve.", verified: true }
    ]
  },
  {
    id: 3,
    name: "Taste of the Wild High Prairie Puppy Dry Dog Food 14lb",
    slug: "taste-of-the-wild-high-prairie-puppy-14lb",
    category: "Food",
    petType: "Dog",
    brand: "Taste of Wild",
    price: 39.99,
    oldPrice: 44.99,
    image: "https://image.chewy.com/catalog/general/images/moe/069fdf0b-74c6-761b-8000-686eaa2ee2e7._AC_SX500_SY400_QL75_V1_.jpg",
    rating: 4.6,
    reviewCount: 2896,
    stock: 6,
    badge: "Vet Recommended",
    description: "Grain-free puppy recipe with roasted bison and roasted venison, small kibble size, DHA, antioxidants, prebiotics, and species-specific probiotics.",
    ingredients: "Water buffalo, lamb meal, sweet potatoes, egg product, garbanzo beans, peas, pea flour, chicken fat, dried yeast, roasted bison, roasted venison, beef, tomato pomace, flaxseed, fish meal, salmon oil, dried chicory root, yucca extract, tomatoes, blueberries, raspberries, vitamins and minerals.",
    feedingGuide: "Transition gradually over 7-10 days. For puppies, portion depends on current weight and age. Always keep fresh water available.",
    reviews: [
      { id: "r4", author: "Jason W.", rating: 5, date: "2026-05-27", text: "My puppy adjusted well. Small kibble size makes feeding easier.", verified: true }
    ]
  },
  {
    id: 4,
    name: "Hill's Science Diet Adult Chicken & Barley Dry Dog Food 3kg",
    slug: "hills-science-diet-adult-chicken-barley-3kg",
    category: "Food",
    petType: "Dog",
    brand: "Hills",
    price: 28.99,
    oldPrice: 34.99,
    image: "https://pxmshare.colgatepalmolive.com/PNG_2000/8QGSStOoCB6RakdoYx2np.png",
    rating: 4.8,
    reviewCount: 2140,
    stock: 11,
    badge: "Best Seller",
    description: "Adult dry dog food made with chicken and barley. Supports lean muscle, healthy digestion, immune support, and healthy skin and coat.",
    ingredients: "Chicken, cracked pearled barley, brown rice, brewers rice, whole grain wheat, whole grain corn, corn protein meal, chicken meal, chicken fat, chicken liver flavour, soybean meal, dried beet pulp, soybean oil, flaxseed, vitamins, minerals, taurine and beta-carotene.",
    feedingGuide: "Example: 5lb dog 60g/day, 20lb dog 165g/day, 40lb dog 265g/day, 80lb dog 445g/day. Adjust to maintain ideal weight.",
    reviews: [
      { id: "r5", author: "Rachel S.", rating: 5, date: "2026-06-08", text: "Great daily food for my adult dog. The bag lasts well and digestion is stable.", verified: true }
    ]
  },
  {
    id: 5,
    name: "KONG Classic Treat-Dispensing Dog Toy Large",
    slug: "kong-classic-treat-dispensing-dog-toy-large",
    category: "Toys",
    petType: "Dog",
    brand: "KONG",
    price: 13.99,
    image: "https://s7d2.scene7.com/is/image/PetSmart/1811625?fmt=webp&hei=400&wid=400",
    rating: 4.7,
    reviewCount: 1315,
    stock: 14,
    badge: "Trending",
    description: "Durable red natural rubber toy for chewing, fetch, enrichment, and treat stuffing. Designed with an unpredictable bounce for active play.",
    ingredients: "Natural rubber.",
    feedingGuide: "Stuff with kibble, treats, or dog-safe paste. Supervise play and choose the correct size for your dog.",
    reviews: [
      { id: "r6", author: "Owen B.", rating: 5, date: "2026-05-10", text: "Classic toy for a reason. Keeps my dog busy longer than normal balls.", verified: true }
    ]
  },
  {
    id: 6,
    name: "PEDIGREE DENTASTIX Daily Oral Care Large Dog 28 Sticks",
    slug: "pedigree-dentastix-large-dog-28-sticks",
    category: "Treats",
    petType: "Dog",
    brand: "Pedigree",
    price: 12.99,
    oldPrice: 15.99,
    image: "https://www.pedigree.co.nz/cdn-cgi/image/width%3D472%2Cheight%3D472%2Cf%3Dauto%2Cquality%3D90/sites/g/files/fnmzdf3281/files/2026-03/9334214018805_2_PEDIGREE_DENTASTIX_Dog_Treats_Daily_Oral_Care_Large_Dog_28_Sticks.png",
    rating: 4.7,
    reviewCount: 980,
    stock: 4,
    badge: "Limited Stock",
    description: "Daily dental chew treats for large dogs. Unique X-shape helps clean hard-to-reach teeth, support gum health, and reduce tartar build-up when fed daily.",
    ingredients: "Cereal, starch, humectant, cereal protein, vegetable gum, minerals, sodium tripolyphosphate, meat and meat by-products, cellulose fibre, flavours, preservative, zinc sulphate and vegetable oil.",
    feedingGuide: "For large dogs 25kg+, feed 1 stick per day. Not suitable for puppies under 4 months.",
    reviews: [
      { id: "r7", author: "Henry T.", rating: 4, date: "2026-04-19", text: "Good daily chew. My dog likes it and it is easy to add to routine.", verified: true }
    ]
  },
  {
    id: 7,
    name: "Catit Senses 2.0 Super Circuit Interactive Cat Toy",
    slug: "catit-senses-2-super-circuit-interactive-cat-toy",
    category: "Toys",
    petType: "Cat",
    brand: "Catit",
    price: 24.99,
    image: "https://m.media-amazon.com/images/I/51qJb1APowL._AC_SX300_SY300_QL70_ML2_.jpg",
    rating: 4.1,
    reviewCount: 6344,
    stock: 7,
    badge: "New Arrival",
    description: "12-piece closed-track ball toy for indoor cats. Modular layout supports 100+ track combinations and encourages hunting-style play.",
    ingredients: "BPA-free plastic track parts and circuit ball.",
    feedingGuide: "Snap pieces together on a flat surface. Hand wash with mild soap and water when needed.",
    reviews: [
      { id: "r8", author: "Lily C.", rating: 4, date: "2026-03-28", text: "My cat plays with it every night. Changing the layout keeps it interesting.", verified: true }
    ]
  },
  {
    id: 8,
    name: "Hartz Groomer's Best Combo Brush for Dogs",
    slug: "hartz-groomers-best-combo-brush-dogs",
    category: "Supplies",
    petType: "Dog",
    brand: "Hartz",
    price: 8.25,
    oldPrice: 9.62,
    image: "https://i5.walmartimages.com/seo/Hartz-Groomer-s-Best-Combo-Brush-for-Dogs_83da20e2-170a-4d6d-b9b1-da446b40c56a.31747077ec8a774228fa6b5c1974f34c.jpeg?odnBg=FFFFFF&odnHeight=573&odnWidth=573",
    rating: 4.7,
    reviewCount: 212,
    stock: 21,
    badge: "Best Seller",
    description: "Dual-sided grooming brush with stainless steel pins for detangling and nylon bristles for smoothing coat and distributing natural oils.",
    ingredients: "Nylon bristles, stainless steel pins, ergonomic plastic handle.",
    feedingGuide: "Use the pin side for tangles and loose fur. Use the bristle side to smooth the coat after brushing.",
    reviews: [
      { id: "r9", author: "Sophie L.", rating: 5, date: "2026-05-04", text: "Solid brush for the price. Works well on medium coat dogs.", verified: true }
    ]
  }
];

export const UPSELL_PRODUCTS = [
  { id: 101, name: "PEDIGREE DENTASTIX Single Stick", price: 1.99, priceTaka: 199, image: "https://www.pedigree.co.nz/cdn-cgi/image/width%3D472%2Cheight%3D472%2Cf%3Dauto%2Cquality%3D90/sites/g/files/fnmzdf3281/files/2026-03/9334214018805_2_PEDIGREE_DENTASTIX_Dog_Treats_Daily_Oral_Care_Large_Dog_28_Sticks.png" },
  { id: 102, name: "KONG Classic Mini Toy", price: 1.99, priceTaka: 199, image: "https://s7d2.scene7.com/is/image/PetSmart/1811625?fmt=webp&hei=400&wid=400" },
  { id: 103, name: "WHISKAS Chicken Wet Pouch 85g", price: 1.99, priceTaka: 199, image: "https://www.whiskas.co.uk/cdn-cgi/image/format%3Dauto%2Cq%3D90/sites/g/files/fnmzdf8916/files/migrate-product-files/images/knafqqk7ednj425puo5d.png" },
  { id: 104, name: "Hartz Grooming Brush Add-on", price: 1.99, priceTaka: 199, image: "https://i5.walmartimages.com/seo/Hartz-Groomer-s-Best-Combo-Brush-for-Dogs_83da20e2-170a-4d6d-b9b1-da446b40c56a.31747077ec8a774228fa6b5c1974f34c.jpeg?odnBg=FFFFFF&odnHeight=573&odnWidth=573" }
];


export const DEMO_BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "First Night With Your Puppy: A Survival Guide",
    slug: "first-night-with-your-puppy-survival-guide",
    category: "Dogs",
    date: "Jun 18, 2026",
    author: "Dr. Eleanor Ross",
    excerpt: "Bringing a puppy home is magical, but that first night can be intimidating. Here is exactly how to settle crying, manage bathroom breaks, and sleep soundly.",
    content: "The day you finally bring your puppy home is filled with joy, fluffy cuddles, and photo opportunities. But as twilight looms, reality sets in: how do you survive the first night without continuous crying, mess, and absolute exhaustion?\n\n### 1. Set Up a 'Safe Space' Nest Ahead of Time\nBefore sunset, arrange a robust puppy playpen or crate near your bed. Equip it with a snug synthetic sheepskin, a safe chew toy, and an old t-shirt carrying your scent.\n\n### 2. The Evening Active Outing\nTire your pup out around 8:00 PM with supervised interactive play or pacing around. Keep them focused until bedtime.\n\n### 3. Handle Night Cryouts Gracefully\nIf they whine, place your hand reassuringly near the crate bars. Avoid getting them out to play as it teaches them that crying yields rewards. Keep midnight restroom breaks completely neutral and quick.",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&auto=format&fit=crop&q=80",
    tags: ["Puppy", "Dog Training", "New Pet Owner", "Pet Care"]
  },
  {
    id: 2,
    title: "Are Hamster Balls Safe? What to Know for Your Pet",
    slug: "are-hamster-balls-safe",
    category: "Pet Care",
    date: "May 29, 2026",
    author: "Oliver Thompson",
    excerpt: "Hamster balls are marketed as a convenient way to exercise your pocket pet safely. However, vets warn they carry hidden risks. Let us dive deep.",
    content: "We have all seen hamsters happily rolling around in plastic spheres. While they seem like safe energy boosters, veterinarian journals point out several stress and structural risks that active owners should keep in mind.\n\n### Why Are They Risky?\n* **Poor Air Circulation:** The ventilation slits are highly compact and easily clogged. This can lead to overheating.\n* **Toe Traps:** Foot-mesh slots can snap tiny legs or claws instantly.\n* **Farsighted Stress:** Hamsters have poor vision and rely on touch whiskers. Enclosing them in plastic blinds their navigation and escalates stress.",
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=600&auto=format&fit=crop&q=80",
    tags: ["Hamster", "Rodent Care", "Vet Advice"]
  },
  {
    id: 3,
    title: "What Is Catnip? A Guide to Your Cat’s Favorite Treat",
    slug: "what-is-catnip-guide",
    category: "Cats",
    date: "May 10, 2026",
    author: "Clara Benson",
    excerpt: "What makes cats go completely crazy over this humble aromatic plant? Discover the science of Nepeta cataria and how to use it appropriately.",
    content: "Catnip is a fragrant, wild-growing weed in the mint family. Known to scientists as *Nepeta cataria*, it triggers deep chemical effects in about 75% of domestic felines. Let's explore the biological science behind it.\n\n### The Science of Nepetalactone\nThe primary volatile oil chemical in catnip is nepetalactone. When a cat sniffs it, the chemical binds to receptors inside their olfactory system, stimulating parts of their brain that trigger euphoric responses.\n\n### How to Feed Catnip Safety\n* Sprinkle a pinch on scratch pads.\n* Limit exposure to 10-15 minutes once a day.\n* Safe for cats over 6 months old (younger kittens do not carry receptors).",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&auto=format&fit=crop&q=80",
    tags: ["Catnip", "Cat Behavior", "Feline Health"]
  },
  {
    id: 4,
    title: "The 30 Best Saltwater Fish for Your Tank",
    slug: "best-saltwater-fish-for-tanks",
    category: "Fish",
    date: "Apr 22, 2026",
    author: "Richard Wade",
    excerpt: "Ready to leap into the sparkling, vibrant world of reef aquariums? Here is our ultimate list of the best saltwater fish for absolute beginners.",
    content: "Saltwater aquariums are miniature coral reefs right in your living room. To succeed, you need resilient, community-friendly marine fish that look exciting but tolerate minor water parameter swings.\n\n### The Top 3 Starter Marine Species:\n1. **Ocellaris Clownfish:** Exceptionally brave and adaptable. Perfect in pairs.\n2. **Firefish Goby:** Peaceful bottom-dwellers with bright white and neon red colors.\n3. **Royal Gramma:** Peaceful, highly colorful purple-and-yellow reef dweller.",
    image: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=600&auto=format&fit=crop&q=80",
    tags: ["Saltwater Fish", "Aquarium Care", "Aquatic Hobby"]
  }
];

export const GENERAL_FAQS = [
  {
    category: "Orders",
    items: [
      { question: "How can I track my order?", answer: "Once your shipment is processed, we automatically email you a real-time carrier tracking number. You can also view it directly inside your account profile." },
      { question: "Can I modify or cancel my order?", answer: "We pack and dispatch orders extremely fast! If your shipment hasn't left our packaging hub (within 30 minutes of purchase), we can amend your address or cancel it immediately." }
    ]
  },
  {
    category: "Delivery",
    items: [
      { question: "How long does delivery take?", answer: "Usually 1 to 3 business days for standard city regions, and up to 5 business days for distant outline regions. Priority shipping option is available during checkout." },
      { question: "Do you offer free delivery?", answer: "Yes! We offer absolutely fast, free home delivery for all local orders totaling $59.99 (or ৳5,999) and above." }
    ]
  },
  {
    category: "Returns",
    items: [
      { question: "Can I return a product?", answer: "Absolutely! We cherish your pet's happiness. We offer a 30-day return policy for unopened dry food, sealed boxes, unused leashes, and pristine toys." }
    ]
  },
  {
    category: "Products",
    items: [
      { question: "Are your products original and certified?", answer: "Yes, 100%! We sourcelink directly with certified pet pharmaceutical makers and top nutrition brands like Advance, Royal Canin, and Josera." },
      { question: "Is this food suitable for all dog breeds?", answer: "Yes, we specify the breed compatibility in the details tab. Many products have variations for small, medium, and giant adult breeds." }
    ]
  }
];