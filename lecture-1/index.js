<script>
let str = "a123 9x b78 7k l56";
let string = str.split(" ");

let a = [];
let b = [];

for (let i = 0; i < string.length; i++) {
  let store = string[i];
  let temp = "";

  for (let j = 0; j < store.length; j++) {
    if (store[j] >= "0" && store[j] <= "9") {
      temp += store[j];
    }
  }

  if (store[0] >= "A") {
    a.push(Number(temp));
  } else {
    b.push(Number(temp));
  }
}

let sumA = a.reduce((x, y) => x + y, 0);
let sumB = b.reduce((x, y) => x + y, 0);
let avgA = sumA / a.length;
let avgB = sumB / b.length;

let diff1 = sumA - sumB;
let diff2 = avgA - avgB;
let total = diff1 + diff2;

let final = Math.round(total);
console.log(final); // 318
</script>
