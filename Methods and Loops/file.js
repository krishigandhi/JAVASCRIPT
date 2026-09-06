const products = [
    {
        id: 1,
        name: "Laptop",
        category: "Electronics",
        price: 65000,
        rating: 4.5,
        inStock: true,
        brand: "Dell"
    },
    {
        id: 2,
        name: "Headphones",
        category: "Electronics",
        price: 2500,
        rating: 4.2,
        inStock: true,
        brand: "Sony"
    },
    {
        id: 3,
        name: "Running Shoes",
        category: "Footwear",
        price: 4500,
        rating: 4.7,
        inStock: false,
        brand: "Nike"
    },
    {
        id: 4,
        name: "T-Shirt",
        category: "Clothing",
        price: 1200,
        rating: 4.0,
        inStock: true,
        brand: "Adidas"
    },
    {
        id: 5,
        name: "Smartphone",
        category: "Electronics",
        price: 32000,
        rating: 4.6,
        inStock: true,
        brand: "Samsung"
    },
    {
        id: 6,
        name: "Backpack",
        category: "Accessories",
        price: 1800,
        rating: 3.9,
        inStock: true,
        brand: "Puma"
    },
    {
        id: 7,
        name: "Watch",
        category: "Accessories",
        price: 5500,
        rating: 4.3,
        inStock: false,
        brand: "Casio"
    },
    {
        id: 8,
        name: "Jeans",
        category: "Clothing",
        price: 2200,
        rating: 4.1,
        inStock: true,
        brand: "Levis"
    },
    {
        id: 9,
        name: "Gaming Mouse",
        category: "Electronics",
        price: 3500,
        rating: 4.8,
        inStock: true,
        brand: "Logitech"
    },
    {
        id: 10,
        name: "Sunglasses",
        category: "Accessories",
        price: 3000,
        rating: 3.8,
        inStock: false,
        brand: "Ray-Ban"
    }
];

const names = products.filter(function(amount){
    return amount.brand === 'Ray-Ban'
})
console.log(names)