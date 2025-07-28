let string = "i am farming";
let cleanStr = string.replace(/\s/g, '');
let chars = cleanStr.split('');

let count = {};

chars.forEach(char => {
  count[char] = (count[char] || 0) + 1;
});

let result = Object.keys(count).map(char => ({
  name: char,
  occurrence: count[char]
}));

console.log(result);
