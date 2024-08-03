// Employee management mini project

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Initialize an array to store employees
const employees = [];

// Function to find an employee by ID
const findEmployeeById = (id) => {
    return employees.find((employee) => employee.id === id);
};

// Function to add a new employee
const addNewEmployee = (ID, Name, Position) => {
    const newEmployee = {
        id: ID,
        name: Name,
        position: Position,
    };
    employees.push(newEmployee);
};

// Function to update an employee
const updateEmployee = (employee, property, newValue) => {
    employee[property] = newValue;
};

// Function to delete an employee by ID
const deleteEmployee = (id) => {
    const index = employees.findIndex((employee) => employee.id === id);
    if (index !== -1) {
        employees.splice(index, 1);
        console.log('Employee deleted successfully.');
    } else {
        console.log('Employee not found.');
    }
};

// Function to display all employees
const displayEmployees = () => {
    console.log('Current employee list:');
    employees.forEach((employee) => {
        console.log(`ID: ${employee.id}, Name: ${employee.name}, Position: ${employee.position}`);
    });
};

// Main function
const main = async () => {
    try {
        while (true) {
            console.log('\n1. Add new employee');
            console.log('2. Update employee information');
            console.log('3. Delete an employee');
            console.log('4. Find an employee by ID'); // New menu option
            console.log('5. Display all employees');
            console.log('6. Exit');
            const choice = await getUserInput('Enter your choice: ');

            switch (choice) {
                case '1':
                    const id = parseInt(await getUserInput('Enter employee ID: '));
                    const name = await getUserInput('Enter employee name: ');
                    const position = await getUserInput('Enter employee position: ');
                    addNewEmployee(id, name, position);
                    console.log('Employee added successfully.');
                    break;

                case '2':
                    const employeeId = parseInt(await getUserInput('Enter employee ID to update: '));
                    const employeeToUpdate = findEmployeeById(employeeId);
                    if (employeeToUpdate) {
                        console.log('Current employee information:');
                        console.log(employeeToUpdate);
                        const propertyToUpdate = await getUserInput('Enter the attribute you want to modify: ');
                        const newValue = await getUserInput(`Enter the new value for ${propertyToUpdate}: `);
                        updateEmployee(employeeToUpdate, propertyToUpdate, newValue);
                        console.log('Employee information updated successfully.');
                    } else {
                        console.log('Employee not found.');
                    }
                    break;

                case '3':
                    const idToDelete = parseInt(await getUserInput('Enter employee ID to delete: '));
                    deleteEmployee(idToDelete);
                    break;

                case '4':
                    const idToFind = parseInt(await getUserInput('Enter employee ID to find: '));
                    const foundEmployee = findEmployeeById(idToFind);
                    if (foundEmployee) {
                        console.log('Employee found:');
                        console.log(foundEmployee);
                    } else {
                        console.log('Employee not found.');
                    }
                    break;

                case '5':
                    displayEmployees();
                    break;

                case '6':
                    console.log('Exiting the program.');
                    rl.close();
                    return;

                default:
                    console.log('Invalid choice. Please try again.');
            }
        }
    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        rl.close();
    }
};

// Function to get user input
const getUserInput = (question) => {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
};

// Call the main function
main();
