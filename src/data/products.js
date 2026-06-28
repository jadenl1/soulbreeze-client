export const VARIETY_PACKS = [
  {
    id: "original",
    name: "Original Variety Pack",
    subtitle: "The Best of Soulbreeze",
    flavors: ["classic", "peach", "raspberry", "tropical"],
    description: "The full intro to Soulbreeze. Four of our most beloved flavors packed together so you can find your go-to — or share the love.",
    totalCans: 12,
    rating: 5,
  },
  {
    id: "summer",
    name: "Summer Variety Pack",
    subtitle: "Built for the Beach",
    flavors: ["watermelon", "tropical", "peach", "classic"],
    description: "Built for the beach, the boat, or wherever summer takes you. Four bright, refreshing flavors that taste better with sand between your toes.",
    totalCans: 12,
    rating: 4,
  },
  {
    id: "bold",
    name: "Bold Variety Pack",
    subtitle: "For the Ones Who Want More",
    flavors: ["raspberry", "blueberry", "classic", "watermelon"],
    description: "For the ones who want more. Four of our boldest, most distinct flavors — each one a statement, none of them subtle.",
    totalCans: 12,
    rating: 5,
  },
];

const SIZES = ["12 oz Can", "16 oz Can"];
const PACKS = ["6-Pack", "12-Pack", "24-Pack"];

export const PRODUCTS = [
  {
    id: "classic",
    name: "Classic",
    subtitle: "Black Tea · Lime · Agave",
    rating: 5,
    description:
      "Our signature pour. Bold black tea brewed slow and cold, cut with fresh lime and carried by real blue agave tequila from Jalisco. Clean, crisp, and built for wherever the day takes you.",
    callouts: [
      { value: "100", label: "Calories" },
      { value: "5%", label: "ABV" },
      { value: "0g", label: "Sugar" },
      { value: "1g", label: "Carbs" },
    ],
    nutrition: {
      servingSize: "12 fl oz (355mL)",
      calories: 100,
      totalFat: "0g",
      sodium: "10mg",
      totalCarbs: "1g",
      totalSugars: "0g",
      addedSugars: "0g",
      protein: "0g",
      alcohol: "5% ABV",
    },
    ingredients:
      "Sparkling Water, Blue Agave Tequila (5%), Brewed Black Tea, Natural Lime Flavor, Citric Acid.",
    sizes: SIZES,
    packs: PACKS,
  },
  {
    id: "peach",
    name: "Peach Honey",
    subtitle: "White Tea · Peach · Honey",
    rating: 4,
    description:
      "Delicate white tea meets sun-ripened Georgia peach with a finish of wildflower honey. Soft, floral, and dangerously easy to drink. The one everyone asks for by name.",
    callouts: [
      { value: "100", label: "Calories" },
      { value: "5%", label: "ABV" },
      { value: "0g", label: "Sugar" },
      { value: "1g", label: "Carbs" },
    ],
    nutrition: {
      servingSize: "12 fl oz (355mL)",
      calories: 100,
      totalFat: "0g",
      sodium: "10mg",
      totalCarbs: "1g",
      totalSugars: "0g",
      addedSugars: "0g",
      protein: "0g",
      alcohol: "5% ABV",
    },
    ingredients:
      "Sparkling Water, Blue Agave Tequila (5%), Brewed White Tea, Natural Peach Flavor, Natural Honey Flavor, Citric Acid.",
    sizes: SIZES,
    packs: PACKS,
  },
  {
    id: "raspberry",
    name: "Raspberry Citrus",
    subtitle: "Hibiscus · Raspberry · Citrus",
    rating: 5,
    description:
      "Tart hibiscus tea and wild raspberry collide with a burst of citrus and smooth tequila. Bold, bright, and unapologetically refreshing. The one that always goes first at the party.",
    callouts: [
      { value: "100", label: "Calories" },
      { value: "5%", label: "ABV" },
      { value: "0g", label: "Sugar" },
      { value: "1g", label: "Carbs" },
    ],
    nutrition: {
      servingSize: "12 fl oz (355mL)",
      calories: 100,
      totalFat: "0g",
      sodium: "10mg",
      totalCarbs: "1g",
      totalSugars: "0g",
      addedSugars: "0g",
      protein: "0g",
      alcohol: "5% ABV",
    },
    ingredients:
      "Sparkling Water, Blue Agave Tequila (5%), Brewed Hibiscus Tea, Natural Raspberry Flavor, Natural Citrus Flavor, Citric Acid.",
    sizes: SIZES,
    packs: PACKS,
  },
  {
    id: "tropical",
    name: "Mango Pineapple",
    subtitle: "Green Tea · Mango · Pineapple",
    rating: 4,
    description:
      "Crisp green tea meets ripe mango and tangy pineapple for a sip that tastes like somewhere warmer. Bright, tropical, and smooth all the way through.",
    callouts: [
      { value: "100", label: "Calories" },
      { value: "5%", label: "ABV" },
      { value: "0g", label: "Sugar" },
      { value: "1g", label: "Carbs" },
    ],
    nutrition: {
      servingSize: "12 fl oz (355mL)",
      calories: 100,
      totalFat: "0g",
      sodium: "10mg",
      totalCarbs: "1g",
      totalSugars: "0g",
      addedSugars: "0g",
      protein: "0g",
      alcohol: "5% ABV",
    },
    ingredients:
      "Sparkling Water, Blue Agave Tequila (5%), Brewed Green Tea, Natural Mango Flavor, Natural Pineapple Flavor, Citric Acid.",
    sizes: SIZES,
    packs: PACKS,
  },
  {
    id: "watermelon",
    name: "Watermelon Mint",
    subtitle: "Mint Tea · Watermelon · Lime",
    rating: 5,
    description:
      "Juicy watermelon and cool mint tea with a squeeze of lime. The one you crack open the second you hit the beach. Crushable, refreshing, and built for summer.",
    callouts: [
      { value: "100", label: "Calories" },
      { value: "5%", label: "ABV" },
      { value: "0g", label: "Sugar" },
      { value: "1g", label: "Carbs" },
    ],
    nutrition: {
      servingSize: "12 fl oz (355mL)",
      calories: 100,
      totalFat: "0g",
      sodium: "10mg",
      totalCarbs: "1g",
      totalSugars: "0g",
      addedSugars: "0g",
      protein: "0g",
      alcohol: "5% ABV",
    },
    ingredients:
      "Sparkling Water, Blue Agave Tequila (5%), Brewed Mint Tea, Natural Watermelon Flavor, Natural Lime Flavor, Citric Acid.",
    sizes: SIZES,
    packs: PACKS,
  },
  {
    id: "blueberry",
    name: "Blueberry Lavender",
    subtitle: "Lavender · Blueberry · Lemon",
    rating: 4,
    description:
      "Wild blueberries and fragrant lavender tea with a bright lemon finish. Floral, fruity, and unlike anything else in the cooler. The sleeper hit of the lineup.",
    callouts: [
      { value: "100", label: "Calories" },
      { value: "5%", label: "ABV" },
      { value: "0g", label: "Sugar" },
      { value: "1g", label: "Carbs" },
    ],
    nutrition: {
      servingSize: "12 fl oz (355mL)",
      calories: 100,
      totalFat: "0g",
      sodium: "10mg",
      totalCarbs: "1g",
      totalSugars: "0g",
      addedSugars: "0g",
      protein: "0g",
      alcohol: "5% ABV",
    },
    ingredients:
      "Sparkling Water, Blue Agave Tequila (5%), Brewed Lavender Tea, Natural Blueberry Flavor, Natural Lemon Flavor, Citric Acid.",
    sizes: SIZES,
    packs: PACKS,
  },
];
