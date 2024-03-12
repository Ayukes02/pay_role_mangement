const employeeForm = document.getElementById('employeeForm');
const employeeList = document.getElementById('employeeList');

// Event listener for form submission
employeeForm.addEventListener('submit', addEmployee);

// Function to add a new employee
function addEmployee(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value.trim(); // Get employee name
    const designation = document.getElementById('designation').value.trim(); // Get employee designation
    const salary = parseFloat(document.getElementById('salary').value); // Get employee salary

    if (name !== '' && designation !== '' && !isNaN(salary)) {
        const employeeItem = document.createElement('div'); // Create new employee item
        employeeItem.classList.add('employee-item'); // Add 'employee-item' class
        employeeItem.innerHTML = `
            <strong>Name:</strong> ${name}<br>
            <strong>Designation:</strong> ${designation}<br>
            <strong>Salary:</strong> $${salary.toFixed(2)}
        `; // Set employee details

        employeeList.appendChild(employeeItem); // Append new employee to employee list

        employeeForm.reset(); // Clear form fields
    } else {
        alert('Please enter valid employee details.'); // Alert user if any field is empty or salary is not a number
    }
}
