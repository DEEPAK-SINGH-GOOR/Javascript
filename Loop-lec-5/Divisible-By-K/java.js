const divisible = () => {
    let num = parseInt(document.getElementById("num").value);
    let k = parseInt(document.getElementById("k").value);
    let output = document.getElementById("output");

    let result = [];

    for (let i = 1; i <= num; i++) {
        if (i % k === 0) {
            result.push(i);
        }
    }

    output.textContent = result.join(', ');
}
