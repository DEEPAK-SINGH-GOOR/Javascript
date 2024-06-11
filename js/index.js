let datas = [];
// var salary =0;
let t_salary = 0;

const deletedatarow = (index,salary) =>{
    datas.splice(index,1);
    t_salary -= salary;
    putdata()
}

const sumsalary = (...salary) =>{
    // let l = [...salary];
    // let b =+ l[0];
    // console.log(b)
}

const putdata =()=>{
    let tbody = document.getElementById('tbody');
    tbody.innerHTML = '';

    datas.map((ele,ind,arr)=>{
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        let td6 = document.createElement('td');
        let td7 = document.createElement('td');
        let td8 = document.createElement('td');
        

        if(ele.eexpirence > 5){
            td8.innerHTML = 'senior';
        }else{
            td8.innerHTML = 'junior';
        }

        td1.innerText = ele.name;
        td2.innerText = ele.job_role;
        td3.innerText = ele.edepartment;
        td4.innerText = ele.esalary;
        td5.innerText = ele.eexpirence;
        td6.innerText = ele.eemail;

        
                

        td7.innerText = "DELETE";
        td7.addEventListener('click',()=>deletedatarow(ind,ele.esalary));

        tr.append(td1,td2,td3,td4,td5,td8,td6,td7);
        tbody.append(tr);
    })
    document.getElementById('total_emp').innerText = "total_employee :" + datas.length ;
                document.getElementById('co_salary').innerText = t_salary ;
}

const getdata = (e) =>{
    e.preventDefault();

    let name = document.getElementById('ename').value;
    let job_role = document.getElementById('jrole').value;
    let edepartment = document.getElementById('dpartment').value;
    let esalary = document.getElementById('salary').value;
    let eexpirence = document.getElementById('expirence').value;
    let eemail = document.getElementById('email').value;

    let E_data = { name , job_role , edepartment , esalary , eexpirence ,eemail};

    t_salary+=Number(E_data.esalary);


    datas.push(E_data);
    putdata();
    // console.log(datas);
}

 let form = document.getElementById("formdata");
 form.addEventListener("submit",getdata);

const deleateall = () =>{
    datas=[]
    document.getElementById("tbody").innerHTML="";
    t_salary=0;
    putdata();
}

 let deleall = document.getElementById('deleteall');
 deleall.addEventListener('click',deleateall);