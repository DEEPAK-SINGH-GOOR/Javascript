let student=[]

const uimaker=()=>{
    document.getElementById("view").innerHTML=""

        for(let i=0;i<student.length;i++){
            // Name
            let name=document.createElement("li")
            // name.innerHTML=student[i].name
            document.getElementById("view").append(student[i].name)
            // Course

            let course=document.createElement("li")
            document.getElementById("view").append(student[i].course)
            // Grid
            
            let grid=document.createElement("li")
            document.getElementById("view").append(student[i].grid)
        }
       // console.log("uimaker");
}
   
const studentlist = (e) => {
    e.preventDefault();
    let data =
    {
        name: document.getElementById("name").value,
        course: document.getElementById("course").value,
        grid: document.getElementById("grid").value
    }
    console.log(data);
    student.push(data)
    uimaker();
    
}
document.getElementById("studentData").addEventListener("submit", studentlist)