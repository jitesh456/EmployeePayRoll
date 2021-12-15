employeeArray = []
employeeArray = localStorage.getItem('employee') ? JSON.parse(localStorage.getItem('employee')) : [...employeeArray];
localStorage.removeItem('editEmp')

const getDepartMentHtml = (array) => {
    let depart = ''
    for (const iterator of array) {
        depart = `${depart} <div class='dept-label'>${iterator}</div>`
    }
    return depart;
}
function getEmployeeData()
{
    employeeArray=JSON.parse(localStorage.getItem("EmployeePayrollList"));
    createInnerHtml();
}
const createInnerHtml = () => {
    var newhtml = "<tr><th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th></tr>"
    // for...of loop of es6 
    for (const element of employeeArray) {
        // template literal es6 feature
        newhtml = `${newhtml}<tr>
        <td><img class="profile" src="${element.profilePic}" alt=""></td>
        <td>${element._name}</td>
        <td>${element.gender}</td>
        <td>${getDepartMentHtml(element.department)}</td>
        <td> ₹ ${element.salary}</td>

        <td>${element.date}</td>
        <td><img name=${element.id} onclick="remove(${element.id})" src="../assets/icons/delete-black-18dp.svg" alt="delete">
            <img name=${element.id} onclick="update(${element.id})" src="../assets/icons/create-black-18dp.svg" alt="edit">
        </td>
    </tr>`
    }
    document.getElementById('display').innerHTML = newhtml
}

const remove = (id) => {
 //   ajaxCall("DELETE", "http://localhost:3000/employee/" + node.name)
    if(employeeArray!=null)
    {
       let data=employeeArray.find(x=>x.id=id);
        const index = employeeArray.indexOf(data);
        if (index > -1) {
            employeeArray.splice(index, 1);
        }
        
        //employeeArray.remove(data);
        localStorage.setItem("EmployeePayrollList", JSON.stringify(employeeArray)) 
    }
    getEmployeeData();
}

const update = (id) => {
    
   // ajaxCall("GET", "http://localhost:3000/employee");
    var employee = employeeArray.find(ele => ele.id == id)
    //localStorage.setItem('employee', JSON.stringify(employeeArray))
    localStorage.setItem('editEmp', JSON.stringify(employee))
    window.location.replace("../pages/new_payroll_form.html");
}

getEmployeeData();
/**
 * getData from json server
 */
