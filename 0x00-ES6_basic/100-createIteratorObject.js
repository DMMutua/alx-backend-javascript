export default function createIteratorObject(report) {
  const allEmployees = report.allEmployees;
  const departments = Object.keys(allEmployees);
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  const iterator = {
    next: function () {
      if (currentDepartmentIndex >= departments.length) {
        return {
          done: true
        };
      }

      const departmentName = departments[currentDepartmentIndex];
      const employees = allEmployees[departmentName];

      if (currentEmployeeIndex >= employees.length) {
        currentDepartmentIndex++;
        currentEmployeeIndex = 0;
        return this.next();
      }

      const currentEmployee = employees[currentEmployeeIndex];
      currentEmployeeIndex++;

      return {
        value: currentEmployee,
        done: false
      };
    }
  };

  iterator[Symbol.iterator] = function () {
    return this;
  };

  return iterator;
}

