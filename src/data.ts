import { Product, Testimonial, FAQItem } from './types';

export const products: Product[] = [
  {
    id: 'multigrain-millet-porridge',
    name: 'Multigrain Millet Porridge',
    description: 'Vaatsalya Multigrain Millet Porridge is a carefully crafted blend of 7 whole grains that brings together the best of ancient Indian superfoods. Made from pearl millet, ragi, jowar, foxtail millet, oats, wheat, and rice — this porridge offers a complete nutritional profile for the entire family. Each serving provides a rich source of dietary fiber, plant-based protein, complex carbohydrates, and 16 essential vitamins and minerals including Iron, Calcium, Vitamin D, Vitamin C, and B-complex vitamins. With a low glycemic index, it supports steady energy release and keeps you feeling full longer.',
    price: 349,
    age: 'All Ages',
    image: 'https://raw.githubusercontent.com/lakshyabuilds/E-commerce-Site/main/public/images/product-1.jpg',
    features: ['16 Vitamins & Minerals', 'High Fiber', 'Plant Protein', 'Low GI', 'No Preservatives', 'No Artificial Colors'],
    ingredients: 'Pearl millet (bajra), finger millet (ragi), sorghum (jowar), foxtail millet, oats, wheat, and rice.',
    benefits: [
      'Boosts immunity',
      'Supports bone health',
      'Aids digestion',
      'Sustained energy',
      'Heart-healthy',
      'Weight management'
    ],
    preparation: [
      'Cook with milk or water for 5 minutes.',
      'Sweeten naturally with jaggery or honey.',
      'Top with fresh fruits and nuts for a wholesome start to your day.'
    ],
    nutrition: [
      { label: 'Dietary Fiber', value: 'High' },
      { label: 'Plant Protein', value: 'Rich' },
      { label: 'Vitamins & Minerals', value: '16 Types' },
      { label: 'Glycemic Index', value: 'Low' }
    ],
    category: 'Breakfast'
  },
  {
    id: 'ragi-bliss-baby-cereal',
    name: 'Ragi Bliss Baby Cereal',
    description: 'Vaatsalya Ragi Bliss Baby Cereal is specially formulated using organic finger millet (ragi) for babies starting from 6 months. Finger millet is one of nature\'s richest plant-based sources of Calcium, making it essential for your baby\'s growing bones and teeth. This gentle, easily digestible cereal is crafted with care — no added sugar, no salt, no artificial colors or preservatives. Just pure, organic ragi fortified with essential nutrients that your baby needs during this critical growth phase. Ragi is also rich in Methionine, an essential amino acid typically lacking in plant-based diets, making this cereal a complete nutrition solution for your little one.',
    price: 299,
    age: '6 months — 3 years',
    image: 'https://raw.githubusercontent.com/lakshyabuilds/E-commerce-Site/main/public/images/product-2.jpg',
    features: ['Highest Natural Calcium', 'Iron-Rich', 'No Added Sugar', 'No Salt', 'Organic Certified', 'Allergen-Friendly'],
    ingredients: 'Pure Organic Finger Millet (Ragi)',
    benefits: [
      'Bone development',
      'Brain development',
      'Healthy weight gain',
      'Easy digestion',
      'Immune support',
      'Natural energy'
    ],
    preparation: [
      'Mix with clean warm milk or water.',
      'Stir continuously to avoid lumps.',
      'Feed smoothly once cooled.'
    ],
    nutrition: [
      { label: 'Calcium', value: 'Highest Natural Source' },
      { label: 'Iron', value: 'Rich' },
      { label: 'Added Sugar', value: '0g' },
      { label: 'Added Salt', value: '0g' }
    ],
    category: 'Cereals'
  },
  {
    id: 'millet-power-energy-bars',
    name: 'Millet Power Energy Bars (12 Pack)',
    description: 'Vaatsalya Millet Power Energy Bars are your perfect companion for an active lifestyle. Each bar is crafted from a powerful combination of jowar (sorghum), bajra (pearl millet), and amaranth — ancient grains celebrated for their superior nutritional profile. Sweetened naturally with pure honey and date syrup instead of refined sugar, these bars deliver clean, sustained energy without the sugar crash. Loaded with pumpkin seeds, sunflower seeds, flaxseeds, almonds, and cashews, each bar packs a protein and healthy-fat punch that keeps you satiated between meals. Perfect pre-workout fuel, mid-afternoon snack, or kids\' tiffin treat.',
    price: 599,
    age: '5+ years',
    image: 'https://raw.githubusercontent.com/lakshyabuilds/E-commerce-Site/main/public/images/product-3.jpg',
    features: ['No Refined Sugar', 'High Protein', 'Healthy Fats', 'Complex Carbs', 'No Preservatives', 'Gluten-Friendly'],
    ingredients: 'Jowar (sorghum), bajra (pearl millet), amaranth, pure honey, date syrup, pumpkin seeds, sunflower seeds, flaxseeds, almonds, cashews.',
    benefits: [
      'Quick energy boost',
      'Muscle recovery',
      'Appetite control',
      'Heart health',
      'Bone strength',
      'Antioxidant-rich'
    ],
    preparation: [
      'Ready to eat naturally.',
      'Perfect for on-the-go snacking.'
    ],
    nutrition: [
      { label: 'Refined Sugar', value: '0g' },
      { label: 'Protein', value: 'High' },
      { label: 'Healthy Fats', value: 'Rich' },
      { label: 'Complex Carbs', value: 'High' }
    ],
    category: 'Snacks'
  },
  {
    id: 'bajra-vitality-drink-mix',
    name: 'Bajra Vitality Drink Mix',
    description: 'Vaatsalya Bajra Vitality Drink Mix harnesses the extraordinary power of pearl millet (bajra) — one of the world\'s most nutrient-dense grains — in a delicious, easy-to-prepare health drink. Bajra is naturally rich in phosphorus, magnesium, iron, and zinc. Our proprietary formulation amplifies these natural benefits with an additional 25 vitamins and minerals, making this the most comprehensive nutritional drink in the millet category. With a unique blend of prebiotic fiber that supports gut health and adaptogenic herbs known in Ayurvedic tradition, this drink helps build strong immunity, improve bone density, enhance mental clarity, and restore energy levels.',
    price: 499,
    age: '13+ years',
    image: 'https://raw.githubusercontent.com/lakshyabuilds/E-commerce-Site/main/public/images/product-4.jpg',
    features: ['25 Vitamins & Minerals', 'Prebiotic Fiber', 'Ashwagandha', 'High Iron', 'Calcium-Rich', 'No Artificial Sweeteners'],
    ingredients: 'Pearl millet (bajra), 25 vitamins & minerals, prebiotic fiber, ashwagandha.',
    benefits: [
      'Immunity boost',
      'Bone density',
      'Mental clarity',
      'Energy restoration',
      'Gut health',
      'Stress relief'
    ],
    preparation: [
      'Mix 2 scoops with hot or cold milk/water.',
      'Stir well until completely dissolved.',
      'Enjoy as a nutritious daily beverage.'
    ],
    nutrition: [
      { label: 'Vitamins & Minerals', value: '25 Types' },
      { label: 'Iron', value: 'High' },
      { label: 'Calcium', value: 'Rich' },
      { label: 'Artificial Sweeteners', value: '0g' }
    ],
    category: 'Beverages'
  },
  {
    id: 'kidgrow-multigrain-cereal',
    name: 'KidGrow Multigrain Cereal with Milk & Fruits',
    description: 'Vaatsalya KidGrow Multigrain Cereal is an award-winning growing-up cereal specially designed for children aged 2 to 10 years. Inspired by the best cereal nutrition science, it combines the wholesome goodness of multiple grains with the nourishment of real milk and natural fruit extracts. Fortified with 16 essential vitamins and minerals — including Iron for cognitive development, Calcium for strong bones, Vitamin D for immune support, and Zinc for growth — KidGrow ensures your child gets complete nutrition every morning. No artificial colors, no preservatives, no added flavors — just pure, honest nutrition that tastes great and that kids actually love!',
    price: 425,
    age: '2–10 years',
    image: 'https://raw.githubusercontent.com/lakshyabuilds/E-commerce-Site/main/public/images/product-5.jpg',
    features: ['16 Vitamins & Minerals', 'Real Milk Solids', 'Natural Fruit Extracts', 'Iron for Brain', 'No Artificial Colors', 'Individual Sachets'],
    ingredients: 'Multiple whole grains, real milk solids, natural fruit extracts, 16 essential vitamins and minerals.',
    benefits: [
      'Cognitive development',
      'Bone growth',
      'Immune support',
      'Healthy weight gain',
      'Energy for play',
      'Complete morning nutrition'
    ],
    preparation: [
      'Empty one sachet into a bowl.',
      'Add warm water or milk as preferred.',
      'Mix well and serve immediately.'
    ],
    nutrition: [
      { label: 'Vitamins & Minerals', value: '16 Types' },
      { label: 'Milk Solids', value: 'Present' },
      { label: 'Fruit Extracts', value: 'Natural' },
      { label: 'Artificial Colors', value: '0g' }
    ],
    category: 'Cereals'
  },
  {
    id: 'pure-jowar-flour',
    name: 'Pure Jowar Flour (Sorghum)',
    description: 'Vaatsalya Pure Jowar Flour is made from the finest quality white sorghum grains, stone-ground using traditional methods to preserve the bran, germ, and all vital nutrients in their whole form. Jowar (sorghum) is one of the most drought-resistant and eco-friendly crops, requiring significantly less water than wheat or rice — making it a sustainability champion. Nutritionally, it\'s a powerhouse: high in dietary fiber, rich in antioxidants, naturally gluten-free, and packed with B vitamins, iron, phosphorus, and potassium. Our jowar flour has a mild, slightly sweet flavor that works beautifully in traditional Indian rotis, bhakri, and also in modern gluten-free baking.',
    price: 149,
    age: 'All Ages',
    image: 'https://raw.githubusercontent.com/lakshyabuilds/E-commerce-Site/main/public/images/product-6.jpg',
    features: ['100% Whole Grain', 'Naturally Gluten-Free', 'High Antioxidants', 'Stone-Ground', 'No Additives', 'Eco-Friendly Crop'],
    ingredients: 'Finest quality white sorghum grains.',
    benefits: [
      'Digestive health',
      'Blood sugar control',
      'Heart health',
      'Celiac-safe',
      'Weight management',
      'Antioxidant protection'
    ],
    preparation: [
      'Knead with warm water for traditional rotis or bhakris.',
      'Mix with other flours for gluten-free baking.',
      'Use for pancakes, muffins, cookies, and pasta.'
    ],
    nutrition: [
      { label: 'Whole Grain', value: '100%' },
      { label: 'Gluten', value: 'Naturally Free' },
      { label: 'Antioxidants', value: 'High' },
      { label: 'Additives', value: '0g' }
    ],
    category: 'Flours'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    text: "This blend made introducing solids much easier for our baby. The smooth texture of the sprouted ragi is perfect, and there's no added sugar!",
    author: "Waitress Mom",
    role: "Mother of 8-month-old"
  },
  {
    id: 't2',
    text: "My baby loves the natural banana taste. It gives him the energy support he needs for being so active all day.",
    author: "Rahul M.",
    role: "Father of 10-month-old"
  },
  {
    id: 't3',
    text: "A simple and wholesome option for busy parents. I love that it has absolutely zero preservatives or salt.",
    author: "Sneha V.",
    role: "Working Mother"
  }
];

export const faqs: FAQItem[] = [
  {
    question: "What age is the Sprouted Ragi & Banana blend suitable for?",
    answer: "Our blend is suitable for babies aged 6 to 12+ months. It's a great option for supporting active growth as they transition into solid foods."
  },
  {
    question: "Does your blend contain added sugar or salt?",
    answer: "No! There is absolutely no added sugar and no added salt. The sweetness comes purely from natural banana powder."
  },
  {
    question: "Are there any preservatives or artificial flavors?",
    answer: "None whatsoever. Our product is made with 100% natural sprouted ragi flour and banana powder, with zero preservatives or artificial flavours."
  },
  {
    question: "Why sprouted ragi instead of regular ragi?",
    answer: "Sprouting ragi breaks down complex starches, making it significantly easier for tiny tummies to digest and absorb nutrients."
  },
  {
    question: "How should I store the product?",
    answer: "Store in a cool, dry place away from direct sunlight. Once opened, keep the pouch tightly sealed to maintain freshness."
  }
];
