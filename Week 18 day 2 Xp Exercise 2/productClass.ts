// Define the Product class
class Product {
    // Readonly property
    readonly id: number;

    // Public properties
    public name: string;
    public price: number;

    // Constructor to initialize properties
    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    // Method to get product information
    public getProductInfo(): string {
        return `Product: ${this.name}, Price: $${this.price}`;
    }
}

// Example usage
const product = new Product(1, 'Laptop', 999.99);
console.log(product.getProductInfo()); // Output: Product: Laptop, Price: $999.99

