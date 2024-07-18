const api = async ()=>{
    let response = await fetch('https://localhost:3000/name');
    let data = await response.json();
    console.log(data);
    return data;
}
api();