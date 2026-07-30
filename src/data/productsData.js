// Product data for Sunrise Crest
// TODO: Backend integration required - Replace with API call to fetch products

// ── Pipe Accessory Images ──
import imgBottomAdapter        from '../assets/images/products/pipe_accessories/BOTTOM ADAPTER.png';
import imgCiReducerBottom      from '../assets/images/products/pipe_accessories/CI REDUCER BOTTOM.png';
import imgCiTopDoubleclamp     from '../assets/images/products/pipe_accessories/CI TOP WITH FLANGE DOUBLE CLAMP.png';
import imgLoweringJig          from '../assets/images/products/pipe_accessories/LOWERING JIG (SIGRI).png';
import imgPumpGuard            from '../assets/images/products/pipe_accessories/PUMP GUARD.png';
import imgSsBottomAdapter      from '../assets/images/products/pipe_accessories/SS BOTTOM ADAPTER.png';
import imgSsTopDoubleclamp     from '../assets/images/products/pipe_accessories/SS TOP WITH FLANGE DOUBLE CLAMP.png';
import imgCenteringGuide       from '../assets/images/products/pipe_accessories/centering guide.png';
import imgEndCap               from '../assets/images/products/pipe_accessories/end cap.png';
import imgLiftingCap           from '../assets/images/products/pipe_accessories/lifting cap.png';
import imgReducer              from '../assets/images/products/pipe_accessories/reducer.png';
import imgSplitClamp           from '../assets/images/products/pipe_accessories/split clamp.png';
import imgTopCap               from '../assets/images/products/pipe_accessories/top cap.png';
import imgTransitionFittings   from '../assets/images/products/pipe_accessories/transition fittings.png';
import imgWoodenClamp          from '../assets/images/products/pipe_accessories/wooden clamp.png';

export const productsData = [
    // ── Food Products ──────────────────────────────────────────────────────────
    {
        id: 1,
        name: "Basmati Rice",
        category: "Grains",
        origin: "India",
        exportMarkets: ["UAE", "Saudi Arabia", "Kuwait", "USA"],
        description: "Premium long-grain Basmati rice with authentic aroma and flavor. Aged for superior quality.",
        image: null,
    },
    {
        id: 2,
        name: "Turmeric Powder",
        category: "Spices",
        origin: "India",
        exportMarkets: ["UK", "Germany", "Japan", "Australia"],
        description: "Pure organic turmeric powder. High curcumin content, naturally processed without additives.",
        image: null,
    },
    {
        id: 3,
        name: "Cashew Nuts",
        category: "Nuts",
        origin: "Vietnam",
        exportMarkets: ["USA", "UK", "Germany", "Netherlands"],
        description: "Premium W320 grade cashews. Carefully selected, roasted to perfection.",
        image: null,
    },
    {
        id: 4,
        name: "Red Chili Powder",
        category: "Spices",
        origin: "India",
        exportMarkets: ["USA", "UAE", "Singapore", "Malaysia"],
        description: "Hot and flavorful red chili powder. Perfect for authentic ethnic cuisines.",
        image: null,
    },
    {
        id: 5,
        name: "Green Cardamom",
        category: "Spices",
        origin: "Guatemala",
        exportMarkets: ["Saudi Arabia", "UAE", "Qatar", "Kuwait"],
        description: "Premium quality green cardamom pods with intense aroma and flavor.",
        image: null,
    },
    {
        id: 6,
        name: "Black Pepper",
        category: "Spices",
        origin: "Vietnam",
        exportMarkets: ["USA", "UK", "Germany", "Japan"],
        description: "Bold-flavored black peppercorns. Sourced from the finest plantations.",
        image: null,
    },
    {
        id: 7,
        name: "Almonds",
        category: "Nuts",
        origin: "USA (California)",
        exportMarkets: ["India", "China", "Spain", "Germany"],
        description: "California almonds. Premium quality, rich in nutrients.",
        image: null,
    },
    {
        id: 8,
        name: "Saffron",
        category: "Spices",
        origin: "Iran",
        exportMarkets: ["UAE", "Saudi Arabia", "USA", "UK"],
        description: "Pure Persian saffron threads. Grade A quality with intense color and aroma.",
        image: null,
    },
    {
        id: 9,
        name: "Jasmine Rice",
        category: "Grains",
        origin: "Thailand",
        exportMarkets: ["USA", "UK", "Australia", "Singapore"],
        description: "Fragrant Thai jasmine rice. Long-grain variety with natural sweetness.",
        image: null,
    },
    {
        id: 10,
        name: "Dates (Medjool)",
        category: "Dried Fruits",
        origin: "Jordan",
        exportMarkets: ["USA", "UK", "Germany", "Japan"],
        description: "Premium Medjool dates. Naturally sweet, soft texture. Perfect for gifting.",
        image: null,
    },
    {
        id: 11,
        name: "Cumin Seeds",
        category: "Spices",
        origin: "India",
        exportMarkets: ["USA", "UK", "UAE", "Singapore"],
        description: "Aromatic cumin seeds. Essential for Mediterranean and Asian cuisines.",
        image: null,
    },
    {
        id: 12,
        name: "Pistachios",
        category: "Nuts",
        origin: "Iran",
        exportMarkets: ["UAE", "China", "India", "Germany"],
        description: "Premium Iranian pistachios. Rich flavor, naturally green kernels.",
        image: null,
    },

    // ── Pipe Accessories ───────────────────────────────────────────────────────
    {
        id: 13,
        name: "Bottom Adapter",
        category: "Pipe Accessories",
        origin: "India",
        exportMarkets: ["UAE", "Saudi Arabia", "UK", "Germany"],
        description: "Heavy-duty bottom adapter designed for secure pipe-to-pump connections. Corrosion-resistant finish suitable for industrial applications.",
        image: imgBottomAdapter,
    },
    {
        id: 14,
        name: "CI Reducer Bottom",
        category: "Pipe Accessories",
        origin: "India",
        exportMarkets: ["UAE", "Saudi Arabia", "Australia", "Singapore"],
        description: "Cast iron reducer bottom fitting for seamless pipe diameter transitions. Built for durability in high-pressure systems.",
        image: imgCiReducerBottom,
    },
    {
        id: 15,
        name: "CI Top With Flange Double Clamp",
        category: "Pipe Accessories",
        origin: "India",
        exportMarkets: ["UAE", "UK", "Germany", "Netherlands"],
        description: "Cast iron top flange unit with double clamp configuration. Provides a rigid, leak-proof assembly for pump installations.",
        image: imgCiTopDoubleclamp,
    },
    {
        id: 16,
        name: "Lowering Jig (SIGRI)",
        category: "Pipe Accessories",
        origin: "India",
        exportMarkets: ["UAE", "Saudi Arabia", "Singapore", "UK"],
        description: "SIGRI-pattern lowering jig for precision pipe alignment during installation. Reduces installation time and ensures accurate fit.",
        image: imgLoweringJig,
    },
    {
        id: 17,
        name: "Pump Guard",
        category: "Pipe Accessories",
        origin: "India",
        exportMarkets: ["UAE", "Germany", "Australia", "USA"],
        description: "Protective guard for submersible and surface pumps. Prevents debris ingress and mechanical damage in demanding environments.",
        image: imgPumpGuard,
    },
    {
        id: 18,
        name: "SS Bottom Adapter",
        category: "Pipe Accessories",
        origin: "India",
        exportMarkets: ["UAE", "UK", "Germany", "Japan"],
        description: "Stainless steel bottom adapter offering superior corrosion resistance. Ideal for potable water, chemical, and marine applications.",
        image: imgSsBottomAdapter,
    },
    {
        id: 19,
        name: "SS Top With Flange Double Clamp",
        category: "Pipe Accessories",
        origin: "India",
        exportMarkets: ["UAE", "Saudi Arabia", "UK", "Australia"],
        description: "Stainless steel top flange with double clamp for high-hygiene and corrosive environments. Premium finish for long service life.",
        image: imgSsTopDoubleclamp,
    },
    {
        id: 20,
        name: "Centering Guide",
        category: "Pipe Accessories",
        origin: "India",
        exportMarkets: ["UAE", "Singapore", "Germany", "Netherlands"],
        description: "Precision-engineered centering guide ensures accurate pipe alignment inside borehole casings. Minimizes wear and vibration.",
        image: imgCenteringGuide,
    },
    {
        id: 21,
        name: "End Cap",
        category: "Pipe Accessories",
        origin: "India",
        exportMarkets: ["UAE", "UK", "Saudi Arabia", "Kuwait"],
        description: "Heavy-duty end cap for pipe termination and pressure testing. Available in various sizes for standard pipe diameters.",
        image: imgEndCap,
    },
    {
        id: 22,
        name: "Lifting Cap",
        category: "Pipe Accessories",
        origin: "India",
        exportMarkets: ["UAE", "Germany", "Australia", "UK"],
        description: "Robust lifting cap for safe extraction and installation of pipes and pumps. Rated for high load capacities.",
        image: imgLiftingCap,
    },
    {
        id: 23,
        name: "Reducer",
        category: "Pipe Accessories",
        origin: "India",
        exportMarkets: ["UAE", "Saudi Arabia", "Singapore", "Japan"],
        description: "Standard pipe reducer for smooth flow transitions between different pipe diameters. Available in multiple material grades.",
        image: imgReducer,
    },
    {
        id: 24,
        name: "Split Clamp",
        category: "Pipe Accessories",
        origin: "India",
        exportMarkets: ["UAE", "UK", "Germany", "Australia"],
        description: "Two-piece split clamp for easy assembly and disassembly without disturbing the pipeline. Ideal for maintenance applications.",
        image: imgSplitClamp,
    },
    {
        id: 25,
        name: "Top Cap",
        category: "Pipe Accessories",
        origin: "India",
        exportMarkets: ["UAE", "Saudi Arabia", "Netherlands", "UK"],
        description: "Precision-machined top cap for sealing pipe ends and housing pump discharge heads. Ensures a watertight seal.",
        image: imgTopCap,
    },
    {
        id: 26,
        name: "Transition Fittings",
        category: "Pipe Accessories",
        origin: "India",
        exportMarkets: ["UAE", "Germany", "Singapore", "USA"],
        description: "Bi-material transition fittings for connecting pipes of different materials (e.g., GI to HDPE). Electrofusion or mechanical bonding available.",
        image: imgTransitionFittings,
    },
    {
        id: 27,
        name: "Wooden Clamp",
        category: "Pipe Accessories",
        origin: "India",
        exportMarkets: ["UAE", "Saudi Arabia", "UK", "Kuwait"],
        description: "Traditional wooden clamp for pipe support in temporary or sensitive installations. Non-conductive and lightweight.",
        image: imgWoodenClamp,
    },
];

export const categories = ["All", "Grains", "Spices", "Nuts", "Dried Fruits", "Pipe Accessories"];
