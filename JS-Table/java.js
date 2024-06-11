document.getElementById("studentData").addEventListener("submit", stdData);

let student = [];

function stdData(e) {
    e.preventDefault();
    let data = {
        name: document.getElementById("name").value,
        course: document.getElementById("course").value,
        grid: document.getElementById("grid").value
    };
    student.push(data);
    uimaker();
    document.getElementById("name").value = "";
    document.getElementById("course").value = "";
    document.getElementById("grid").value = "";
}

function uimaker() {
    document.getElementById("output").innerHTML = "";
    student.forEach((info) => {
        let tr = document.createElement("tr");
        // Name
        let td1 = document.createElement("td");
        td1.innerHTML = info.name;
        // Course 
        let td2 = document.createElement("td");
        td2.innerHTML = info.course;
        // Grid
        let td3 = document.createElement("td");
        td3.innerHTML = info.grid;

        tr.append(td1, td2, td3);
        document.getElementById("output").append(tr);
    });
}
function uimaker() {
    document.getElementById("output").innerHTML = "";
    student.forEach((info) => {
        let tr = document.createElement("tr");
        // Name
        let td1 = document.createElement("td");
        td1.innerHTML = info.name;
        // Course 
        let td2 = document.createElement("td");
        td2.innerHTML = info.course;
        // Grid
        let td3 = document.createElement("td");
        td3.innerHTML = info.grid;

        tr.append(td1, td2, td3);
        document.getElementById("output").append(tr);
    });
}
