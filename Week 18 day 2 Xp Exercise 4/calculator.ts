// Define the Calculator class with static methods
class Calculator {
    // Static method to add two numbers
    public static add(a: number, b: number): number {
        return a + b;
    }

    // Static method to subtract two numbers
    public static subtract(a: number, b: number): number {
        return a - b;
    }
}

// Call static methods directly on the class
console.log(Calculator.add(10, 5));       // Output: 15
console.log(Calculator.subtract(10, 5));  // Output: 5
