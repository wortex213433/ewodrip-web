// Product Database
const products = [
    {
        id: 1,
        name: "Skull Chain Necklace",
        category: "chains",
        price: 89.99,
        icon: "💀",
        badge: "NEW"
    },
    {
        id: 2,
        name: "Gothic Cross Chain",
        category: "chains",
        price: 79.99,
        icon: "✝️",
        badge: null
    },
    {
        id: 3,
        name: "Black Metal Chain",
        category: "chains",
        price: 69.99,
        icon: "⛓️",
        badge: "SALE"
    },
    {
        id: 4,
        name: "Oversized Black Hoodie",
        category: "clothing",
        price: 119.99,
        icon: "🖤",
        badge: "NEW"
    },
    {
        id: 5,
        name: "Dark Graphic Tee",
        category: "clothing",
        price: 49.99,
        icon: "👕",
        badge: null
    },
    {
        id: 6,
        name: "Gothic Cargo Pants",
        category: "clothing",
        price: 99.99,
        icon: "👖",
        badge: null
    },
    {
        id: 7,
        name: "Skull Ring Silver",
        category: "rings",
        price: 59.99,
        icon: "💍",
        badge: "HOT"
    },
    {
        id: 8,
        name: "Gothic Band Ring",
        category: "rings",
        price: 45.99,
        icon: "💎",
        badge: null
    },
    {
        id: 9,
        name: "Dragon Ring",
        category: "rings",
        price: 64.99,
        icon: "🐉",
        badge: "NEW"
    },
    {
        id: 10,
        name: "Leather Bracelet",
        category: "accessories",
        price: 34.99,
        icon: "🎸",
        badge: null
    },
    {
        id: 11,
        name: "Gothic Sunglasses",
        category: "accessories",
        price: 54.99,
        icon: "🕶️",
        badge: "SALE"
    },
    {
        id: 12,
        name: "Spiked Choker",
        category: "accessories",
        price: 39.99,
        icon: "🔗",
        badge: "HOT"
    },
    {
        id: 13,
        name: "Silver Pendant Chain",
        category: "chains",
        price: 94.99,
        icon: "🌙",
        badge: null
    },
    {
        id: 14,
        name: "Distressed Black Jeans",
        category: "clothing",
        price: 89.99,
        icon: "🩺",
        badge: null
    },
    {
        id: 15,
        name: "Vampire Fang Ring",
        category: "rings",
        price: 49.99,
        icon: "🧛",
        badge: "NEW"
    },
    {
        id: 16,
        name: "Gothic Belt",
        category: "accessories",
        price: 44.99,
        icon: "⚡",
        badge: null
    }
];

// Get product by ID
function getProductById(id) {
    return products.find(product => product.id === id);
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { products, getProductById };
}