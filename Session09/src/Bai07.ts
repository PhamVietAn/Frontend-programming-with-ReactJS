type User = {
    id: number;
    name: string;
    email: string;
    age?: number;
};

type Updates = Partial<Omit<User, "id">>;

function updateUser(user: User, updates: Updates): User {
    if ("id" in updates) {
        throw new Error("Id cannot be changed");
    }
    return { ...user, ...updates };
}

const user: User = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
};

const updates1 = { name: "Alice Johnson" };
console.log(updateUser(user, updates1));

const updates2 = { id: 2, name: "Alice Johnson" };
try {
    console.log(updateUser(user, updates2));
} catch (error: any) {
    console.error(error.message);
}