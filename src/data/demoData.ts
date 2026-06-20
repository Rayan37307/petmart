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
  { name: 'Advance', rating: 4.8 },
  { name: 'Josera', rating: 4.9 },
  { name: 'Catit', rating: 4.7 },
  { name: 'Dentblue', rating: 4.6 },
  { name: 'Advantage', rating: 4.9 },
  { name: 'Hills', rating: 4.8 },
  { name: 'Taste of Wild', rating: 5.0 },
  { name: 'Royal Canin', rating: 4.9 },
  { name: 'Pedigree', rating: 4.5 },
  { name: 'Whiskas', rating: 4.6 }
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
    name: "Advance Adult Dry Cat Food",
    slug: "advance-adult-dry-cat-food",
    category: "Food",
    petType: "Cat",
    brand: "Advance",
    price: 78.21,
    oldPrice: 92.00,
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=600&auto=format&fit=crop&q=80",
    rating: 4.8,
    reviewCount: 34,
    stock: 7,
    badge: "Best Seller",
    description: "Complete and balanced dry food specially formulated for adult cats to sustain physical health and foster active vitality. High-quality animal proteins with natural prebiotic fibers.",
    ingredients: "Chicken meal, whole wheat, ground rice, corn gluten meal, poultry fat (preserved with mixed tocopherols), dried sugar beet pulp, natural flavors, fish oil, brewer's yeast, essential vitamins and minerals.",
    feedingGuide: "Feed daily according to weight: 2-3kg (35-45g), 4-5kg (55-65g), 6kg+ (75g+). Always ensure fresh drinking water is available.",
    reviews: [
      { id: 'r1', author: 'Sarah Mitchell', rating: 5, date: '2026-05-14', text: 'My cat absolutely loves this food. Her coat has never been shinier and her energy levels are back to normal!', verified: true },
      { id: 'r2', author: 'Edward K.', rating: 4, date: '2026-04-20', text: 'Great premium ingredients. Only issue is the bag zipper could be better. Food quality is excellent.', verified: true }
    ]
  },
  {
    id: 2,
    name: "Josera Chicken in Jelly Wet Cat Food",
    slug: "josera-chicken-in-jelly",
    category: "Food",
    petType: "Cat",
    brand: "Josera",
    price: 12.99,
    oldPrice: 15.50,
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&auto=format&fit=crop&q=80",
    rating: 5.0,
    reviewCount: 19,
    stock: 3,
    badge: "Limited Stock",
    description: "Delectable tender chicken chunks immersed in savory jelly, providing premium hydration and protein intake for pickiest cat breeds.",
    ingredients: "Meat and animal derivatives (chicken 40%), minerals, vegetable by-products, oils, and fats.",
    feedingGuide: "An adult cat of average size requires 3 to 4 pouches daily. Adjust according to activity level.",
    reviews: [
      { id: 'r3', author: 'Amelia Gray', rating: 5, date: '2026-06-01', text: 'My picky Persian cat finished the bowl in 2 minutes. High quality and good size chunks!', verified: true }
    ]
  },
  {
    id: 3,
    name: "Advantage Grain Free Salmon Dog Food",
    slug: "advantage-grain-free-salmon",
    category: "Food",
    petType: "Dog",
    brand: "Advantage",
    price: 84.99,
    image: "https://images.unsplash.com/photo-154df242110-7dee35810ae3?w=600&auto=format&fit=crop&q=80",
    rating: 4.7,
    reviewCount: 48,
    stock: 12,
    badge: "Trending",
    description: "Premium rich salmon kibble with fresh vegetables, fully allergen-safe, naturally grain-free for optimized digestion, muscular structure, and shiny skin in active adult dogs.",
    ingredients: "Fresh salmon (25%), dehydrated wild-caught fish, sweet potato, lentils, peas, flaxseed, cold-pressed sunflower oil, natural botanicals, taurine.",
    feedingGuide: "Large breed dogs (25-45kg) require 300g to 450g daily. Active dogs can increase portion size by 15%.",
    reviews: [
      { id: 'r4', author: 'Markus Vance', rating: 5, date: '2026-06-18', text: 'Sorted out our golden retriever digestive flareups immediately. Awesome food!', verified: true }
    ]
  },
  {
    id: 4,
    name: "Comfort Memory Foam Pet Bed",
    slug: "comfort-memory-foam-pet-bed",
    category: "Beds",
    petType: "Dog",
    brand: "Hills",
    price: 49.99,
    oldPrice: 65.00,
    image: "https://images.unsplash.com/photo-1541599540903-216a46ca1df0?w=600&auto=format&fit=crop&q=80",
    rating: 4.9,
    reviewCount: 74,
    stock: 5,
    badge: "Best Seller",
    description: "Orthopedic high-density memory foam bed with a washable ultra-soft plush velvet cover. Perfect for dogs with joint pains or who love absolute comfort.",
    ingredients: "Eco-friendly non-toxic memory foam core, synthetic fur cover, non-slip rubberized bottom.",
    feedingGuide: "Ideal for pets up to 35kg. Spot clean outer dirt or machine wash outer cover inside cold setting.",
    reviews: [
      { id: 'r5', author: 'Janice L.', rating: 5, date: '2026-05-30', text: 'My lab senior loves this bed. He does not sleep anywhere else now. Highly recommend!', verified: true }
    ]
  },
  {
    id: 5,
    name: "Dentblue Double Care Toothpaste Kit",
    slug: "dentblue-toothpaste-kit",
    category: "Supplies",
    petType: "Dog",
    brand: "Dentblue",
    price: 18.50,
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=600&auto=format&fit=crop&q=80",
    rating: 4.5,
    reviewCount: 22,
    stock: 25,
    badge: "New Arrival",
    description: "Double action dental care system with beef-flavored toothpaste and ergonomic dual-ended finger brushing tools for healthy white teeth and refreshing breath.",
    ingredients: "Sorbtol, hydrated silica, enzymes, proprietary fresh beef extracts, pet-safe breath fresheners.",
    feedingGuide: "Brush 2-3 times per week. Apply small pea size to brush, let the pet lick it first to get familiar.",
    reviews: []
  },
  {
    id: 6,
    name: "Pet Chew Rope Toy with Rubber Bone",
    slug: "pet-chew-rope-rubber-bone",
    category: "Toys",
    petType: "Dog",
    brand: "Pedigree",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=600&auto=format&fit=crop&q=80",
    rating: 4.6,
    reviewCount: 52,
    stock: 4,
    badge: "Trending",
    description: "Extremely rugged multi-stranded cotton rope with a flexible thermoplastic rubber bone insertion for interactive tug of war and teething gum exercise.",
    ingredients: "100% natural cotton fiber, eco-friendly food-grade TPR rubber.",
    feedingGuide: "Always monitor pets during playtime. Replace if sections become worn or detached.",
    reviews: []
  },
  {
    id: 7,
    name: "Taste of Wild High Prairie Puppy Food",
    slug: "taste-of-wild-high-prairie",
    category: "Food",
    petType: "Dog",
    brand: "Taste of Wild",
    price: 89.99,
    oldPrice: 99.99,
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&auto=format&fit=crop&q=80",
    rating: 5.0,
    reviewCount: 105,
    stock: 9,
    badge: "Hot",
    description: "Superb roasted bison and venison grain-free puppy formula providing outstanding digestible energy and balanced antioxidants for healthy growth.",
    ingredients: "Bison, lamb meal, sweet potatoes, egg product, pea protein, canola oil, roasted venison, beef, tomato pomace, oceanic fish meal, dry chicory prebiotic.",
    feedingGuide: "Puppies 3-5kg (100-150g), 10-20kg (250-380g). Divide into 3 daily feedings up to 6 months of age.",
    reviews: []
  },
  {
    id: 8,
    name: "Catit Wellness Senses Playground Kit",
    slug: "catit-wellness-senses-kit",
    category: "Toys",
    petType: "Cat",
    brand: "Catit",
    price: 38.00,
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&auto=format&fit=crop&q=80",
    rating: 4.7,
    reviewCount: 15,
    stock: 6,
    badge: "Trending",
    description: "Multi-layered stimulation hub for cats: features gum simulators, body scratchers, broad tactile massagers, and precision catnip infusions for ultimate sensory joy.",
    ingredients: "High-grade BPA-free plastic components, natural organic Canadian catnip.",
    feedingGuide: "Assemble simple snap-lock tracks on flat surface. Sprinkle catnip onto the mesh cushions.",
    reviews: []
  },
  {
    id: 9,
    name: "Royal Canin Fit 32 Balanced Cat Food",
    slug: "royal-canin-fit-32",
    category: "Food",
    petType: "Cat",
    brand: "Royal Canin",
    price: 72.50,
    image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=600&auto=format&fit=crop&q=80",
    rating: 4.9,
    reviewCount: 110,
    stock: 15,
    badge: "Best Seller",
    description: "Strictly balanced supply of 52 nutrients carefully tailored to meet the exact nutritional and physical requirements of moderately active adult indoor cats.",
    ingredients: "Dehydrated poultry protein, rice, wheat, maize, animal fats, vegetable fibers, wheat gluten, minerals, yeast, soya oil, borage oil, marigold extract.",
    feedingGuide: "Check standard feeding chart. E.g. 4kg active cat requires 51g of daily dry kibble.",
    reviews: []
  },
  {
    id: 10,
    name: "Whiskas Beef Chunks Classic Selection Pack",
    slug: "whiskas-beef-chunks-wet",
    category: "Food",
    petType: "Cat",
    brand: "Whiskas",
    price: 15.99,
    oldPrice: 19.99,
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=600&auto=format&fit=crop&q=80",
    rating: 4.4,
    reviewCount: 45,
    stock: 2,
    badge: "Sale",
    description: "Juicy chunks with real beef and calcium mineral complexes cooked to a mouthwatering delicious gravy standard. Perfect for playful felines.",
    ingredients: "Meat and animal derivatives (34%, including 4% beef chunks), cereals, vegetable protein extracts, essential minerals and trace elements.",
    feedingGuide: "Feed 2 pouches wet food alongside 15g premium dry food per day for optimal adult cat health.",
    reviews: []
  },
  {
    id: 11,
    name: "Premium Adjustable Pet Harness & Lead Set",
    slug: "premium-adjustable-pet-harness",
    category: "Leashes",
    petType: "Dog",
    brand: "Advance",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&auto=format&fit=crop&q=80",
    rating: 4.8,
    reviewCount: 29,
    stock: 22,
    badge: "New Arrival",
    description: "No-pull ergonomic reflective dog harness featuring dual D-ring attachment points and a matched durable double-stitch nylon leash.",
    ingredients: "Heavy duty double woven nylon, stainless steel alloys, padded cellular mesh liner.",
    feedingGuide: "Slip harness over the pet's head, adjust chest straps comfortably leaving 2-fingers gap space.",
    reviews: []
  },
  {
    id:12,
    name: "Eco-Friendly Wood Scented Bird Cage",
    slug: "eco-friendly-bird-cage",
    category: "Supplies",
    petType: "Bird",
    brand: "Catit",
    price: 115.00,
    oldPrice: 139.99,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&auto=format&fit=crop&q=80",
    rating: 4.6,
    reviewCount: 8,
    stock: 3,
    badge: "Limited Stock",
    description: "Genuinely built eco-friendly untreated pine bird cage. Complete with a extractable waste collection tray and internal feeding dishes.",
    ingredients: "Natural pine woods, non-toxic rustless steel bars, food-grade transparent feed scoops.",
    feedingGuide: "Ideal for small pet parakeets or finches. Clean pull-out tray once per week.",
    reviews: []
  }
];

export const UPSELL_PRODUCTS = [
  { id: 101, name: "Dental Care Stick (Beef flavor)", price: 1.99, priceTaka: 199, image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=150&auto=format&fit=crop&q=80" },
  { id: 102, name: "Interactive Pet Toy Ball", price: 1.99, priceTaka: 199, image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=150&auto=format&fit=crop&q=80" },
  { id: 103, name: "Tasty Cat Salmon Treat Pack", price: 1.99, priceTaka: 199, image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=150&auto=format&fit=crop&q=80" },
  { id: 104, name: "Dual-Sided Grooming Comb", price: 1.99, priceTaka: 199, image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=150&auto=format&fit=crop&q=80" }
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
