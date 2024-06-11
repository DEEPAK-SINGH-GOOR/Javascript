class Employee {
  constructor(name, salary, department, experience) {
      this.name = name;
      this.salary = salary;
      this.department = department;
      this.experience = experience;
  }
}

let employees = [];

const hireEmp = () => {
  let name = document.getElementById('name').value;
  let salary = parseFloat(document.getElementById('salary').value);
  let department = document.getElementById('department').value;
  let experience = parseInt(document.getElementById('experience').value);

  if (name && !isNaN(salary) && department && !isNaN(experience)) {
      let newEmployee = new Employee(name, salary, department, experience);
      employees.push(newEmployee);
      employeeList();
  }
};

const fireEmployee = (name) => {
  employees = employees.filter(emp => emp.name !== name);
  employeeList();
};

const fireAllEmployees = () => {
  employees = [];
  employeeList();
};

const employeeList = () => {
  let employeeList = document.getElementById('employeeList');
  employeeList.innerHTML = '';

  employees.forEach(emp => {
      let employeeItem = document.createElement('li');
      employeeItem.textContent = `${emp.name} - $${emp.salary.toFixed(2)} - ${emp.department} - ${emp.experience} years`;

      let fireButton = document.createElement('button');
      fireButton.textContent = 'Fire';
      fireButton.classList.add('fire-btn');
      fireButton.onclick = () => fireEmployee(emp.name);
          
      employeeItem.append(fireButton);
      employeeList.append(employeeItem);
  });
};

const fireunExperienced = () => {
  employees = employees.filter(emp => emp.experience > 2);
  employeeList();
};
