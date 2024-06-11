let employee = [];
let empsalary = 0;
//
const deleteData = (i, salary) => {
    employee.splice(i, 1);
    empsalary -= salary;
    uimaker();
    EmployeeCount();
};

const uimaker = () => {
    document.getElementById("output").innerHTML = "";
    employee.map((info, i) => {
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.innerHTML = info.name;

        let td2 = document.createElement("td");
        td2.innerHTML = info.jobrole;

        let td3 = document.createElement("td");
        td3.innerHTML = info.department;

        let td4 = document.createElement("td");
        td4.innerHTML = info.salary;

        let td5 = document.createElement("td");
        td5.innerHTML = info.exp;

        let td6 = document.createElement("td");
        td6.innerHTML = info.email;

        let td7 = document.createElement("td");
        if (info.exp < 5) {
            td7.innerHTML = "Junior";
        } else {
            td7.innerHTML = "Senior";
        }
        //-------->
        let td8 = document.createElement("td");
        td8.innerHTML = "Delete";
        td8.addEventListener("click", () => deleteData(i, info.salary));
        // td8.setAttribute("id", "deleteItem");
        td8.style.backgroundColor = "red";
        //
        tr.append(td1, td2, td3, td4, td5, td6, td7, td8);

        document.getElementById("output").append(tr);
    });
    //----->
    document.getElementById('totalemployee').innerText = "total_employee :" + employee.length ;
    document.getElementById('totalsalary').innerText = empsalary ;
    EmployeeCount();
    //
};

const Employeelist = (e) => {
    e.preventDefault();
    let data = {
        name: document.getElementById("name").value,
        jobrole: document.getElementById("jobrole").value,
        department: document.getElementById("department").value,
        salary: document.getElementById("salary").value,
        exp: document.getElementById("exp").value,
        email: document.getElementById("email").value
    };

     data.salary = Number(data.salary); 

    empsalary += data.salary; 
    employee.push(data);
    uimaker();
};

document.getElementById("submit").addEventListener("click", Employeelist);

const deleteAllData = () => {
    employee = [];
    uimaker();
};
document.getElementById("dataDelete").addEventListener("click", deleteAllData); //Delete all

// const EmployeeCount = () => {
//     document.getElementById("totalemployee").innerHTML = `Total Employee: ${employee.length}`;
// };