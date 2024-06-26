function storeui1() {
    let count1 = +localStorage.getItem('count1') || 0;
    document.getElementById("count1").innerText = count1;
    return count1;
}
let count1 = storeui1();

document.getElementById("btn1").addEventListener("click", function() 
{
    count1++;
    document.getElementById("count1").innerText = count1;
    localStorage.setItem('count1', count1);
    sessionStorage.setItem('count1', count1);
});
// Secound
function storeui2() {
    let count2 = +localStorage.getItem('count2') || 0;
    document.getElementById("count2").innerText = count2;
    return count2;
}
let count2 = storeui2();

document.getElementById("btn2").addEventListener("click", function() 
{
    count2++;
    document.getElementById("count2").innerText = count2;
    localStorage.setItem('count2', count2);
    sessionStorage.setItem('count2', count2);
});
// Third
function storeui3() {
    let count3 = +localStorage.getItem('count3') || 0;
    document.getElementById("count3").innerText = count3;
    return count3;
}
let count3 = storeui3();

document.getElementById("btn3").addEventListener("click", function() 
{
    count3++;
    document.getElementById("count3").innerText = count3;
    localStorage.setItem('count3', count3);
    sessionStorage.setItem('count3', count3);
});
// Four
function storeui4() {
    let count4 = +localStorage.getItem('count4') || 0;
    document.getElementById("count4").innerText = count4;
    return count4;
}
let count4 = storeui4();

document.getElementById("btn4").addEventListener("click", function() 
{
    count4++;
    document.getElementById("count4").innerText = count4;
    localStorage.setItem('count4', count4);
    sessionStorage.setItem('count4', count4);
});
