class EmployeePayrollData {
  // property
  id; 
  salary; 
  gender;
  startDate;
  

  // constructor
  constructor() { 
    
  }

  // getter and setter method
  get name() { return this._name; }
  set name(name) { 
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
    if (nameRegex.test(name))
      this._name = name; 
    else throw 'Name is Incorrect!';
  }
  set salary(salary) { 
    let salaryRegex = RegExp('^[1-9]{4}$');
    if (salaryRegex.test(salary))
      this._salary = salary; 
    else throw 'salary is Incorrect!';
  }
  get salary() { return this._salary; }

  // method
  toString() {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const empDate = !this.startDate ? "undefined" : 
                    this.startDate.toLocaleDateString("en-US", options);
    return "id=" + this.id + ", name='" + this.name + ", salary=" + this.salary + ", "+
           "gender=" + this.gender + ", startDate=" + empDate;
  }
}




