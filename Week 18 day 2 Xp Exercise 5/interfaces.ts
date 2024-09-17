// Define the User interface
interface User {
    readonly id: number;       // Readonly property
    name: string;
    email: string;
}

// Extend User to create PremiumUser interface
interface PremiumUser extends User {
    membershipLevel?: string;  // Optional property
}

// Function to print user details
function printUserDetails(user: PremiumUser): void {
    console.log(`ID: ${user.id}`);
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
    if (user.membershipLevel) {
        console.log(`Membership Level: ${user.membershipLevel}`);
    } else {
        console.log('Membership Level: Not available');
    }
}

// Example usage
const premiumUser: PremiumUser = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    membershipLevel: 'Gold'
};

printUserDetails(premiumUser);

// Example usage with optional property omitted
const regularUser: PremiumUser = {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com'
};

printUserDetails(regularUser);
