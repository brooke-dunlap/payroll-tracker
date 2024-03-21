// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // Get user input to create and return an array of employee objects
  const employees = [];

  while (true){
    const employee = {
      firstName: "",
      lastName: "",
      salary: 0,
    }

    employee.firstName= prompt("Enter first name:");
    employee.lastName = prompt("Enter last name:");
    const sal = prompt("Enter salary:");  

    //Makes sal equal to 0 if the user doesn't input a number
    if (isNaN(sal)){
     sal = 0;
    }

    employee.salary = sal;
    employees.push(employee);

    const addEmployee = prompt("Do you want to add another employee?");
    addEmployee.toLowerCase;

    //Breaks out of the while loop 
   if (addEmployee !== "yes"){
     break;
    }
  }
  return employees;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // Calculate and display the average salary

  let totalSalary = 0;
  let numOfEmployees = employeesArray.length;

  for (let i = 0; i <employeesArray.length; i++){
    totalSalary = totalSalary + employeesArray[i].salary;
  }

  const avgSalary = totalSalary / numOfEmployees;

  console.log("The average salary is: $ ", avgSalary, ". The number of employees is: ", numOfEmployees, ".");
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // Select and display a random employee

  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];

  console.log(randomEmployee.firstName,"", randomEmployee.lastName);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
