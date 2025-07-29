<script>
let str = "a123 9x b78 7k l56";
let words = str.split(" ");
let a = [], b = [];

for (let i = 0; i < words.length; i++) {
  let w = words[i];
  if (w[0] > "0") a.push(+w.slice(1));
  else if (w[w.length - 1] > "0") b.push(+w.slice(0, w.length - 1));
}

let sumA = a.reduce((x, y) => x + y, 0);
let sumB = b.reduce((x, y) => x + y, 0);
let avgA = sumA / a.length;
let avgB = sumB / b.length;

let result = Math.round((sumA - sumB) + (avgA - avgB));
console.log(result); // 318
</script>
