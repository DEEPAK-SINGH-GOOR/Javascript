const Evensum = () => {
    let input = parseInt(document.getElementById("input").value);
    let sum = 0;

    for (let i = 0; i <= input; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    // enter 5 soo 2 , 4 sum of both = 6
    document.getElementById("output").textContent = "Sum Of Even Numbers: " + sum;
}
