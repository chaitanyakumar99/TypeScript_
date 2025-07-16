import React from 'react';

type User = {
    name: string;
    ispaid: boolean;
};

type Course = {
    name: string;
    price: number;
};

function createUser({ name, ispaid }: User): void {
    console.log(`User Created: ${name}, Paid: ${ispaid}`);
}

function createCourse(): Course {
    return { name: 'react.js', price: 399 };
}

const App: React.FC = () => {
    const user: User = { name: 'Rahul', ispaid: false };
    const course = createCourse();

    // Call function
    createUser(user);

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
            <h2>User Info</h2>
            <p>
                <strong>Name:</strong> {user.name}
            </p>
            <p>
                <strong>Paid:</strong> {user.ispaid ? 'Yes' : 'No'}
            </p>
            <h2>Course Info</h2>
            <p>
                <strong>Course Name:</strong> {course.name}
            </p>
            <p>
                <strong>Price:</strong> ₹{course.price}
            </p>
        </div>
    );
};

export default App;
