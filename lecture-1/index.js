console.log("deepak hello javascript");

let text = "w57 t2v 5v e59";
let arr = text.split(" ");
let final = [];

for (let i = 0; i < arr.length; i++) {
  let str = arr[i];
  let letter = "";
  let num = "";

  for (let j = 0; j < str.length; j++) {
    if (isNaN(str[j])) {
      letter += str[j];
    } else {
      num += str[j];
    }
  }

  final.push([letter, Number(num)]);
}

final.sort(); // sort by letters

let onlyNumber = final.map(x => x[1]);

console.log("Only Numbers:", onlyNumber); // [59, 5, 2, 57]
