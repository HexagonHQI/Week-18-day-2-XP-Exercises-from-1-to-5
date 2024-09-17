// Define the Employee class
class Employee {
    // Private properties
    private name: string;
    private salary: number;

    // Public property
    public position: string;

    // Protected property
    protected department: string;

    // Constructor to initialize properties
    constructor(name: string, salary: number, position: string, department: string) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }

    // Public method to get employee information
    public getEmployeeInfo(): string {
        return `Name: ${this.name}, Position: ${this.position}`;
    }
}

// Example usage
const employee = new Employee('Alice', 50000, 'Developer', 'Engineering');
console.log(employee.getEmployeeInfo()); // Output: Name: Alice, Position: Developer

// Accessing public property directly
console.log(employee.position); // Output: Develloper


