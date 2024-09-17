// Define the base class Animal
class Animal {
    // Public property
    public name: string;

    // Constructor to initialize the property
    constructor(name: string) {
        this.name = name;
    }

    // Method that returns a generic sound
    public makeSound(): string {
        return 'Some generic animal sound';
    }
}

// Define the subclass Dog that extends Animal
class Dog extends Animal {
    // Override the makeSound method
    public makeSound(): string {
        return 'bark';
    }
}

// Create an instance of Dog
const myDog = new Dog('Rex');

// Call the makeSound method
console.log(myDog.makeSound()); // Output: bark
