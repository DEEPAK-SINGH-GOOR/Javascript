let questions = [
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        option_a: 'var',
        option_b: 'let',
        option_c: 'const',
        option_d: 'all of the above',
        answer: 'var'
    },
    {
        question: "What will the following code output: console.log(typeof([]))?",
        option_a: '"array"',
        option_b: 'object',
        option_c: 'undefined',
        option_d: 'null',
        answer: 'object'
    },
    {
        question: "What is the correct way to check if a variable is an array in JavaScript?",
        option_a: 'typeof variable === \'array\'',
        option_b: 'Array.isArray(variable)',
        option_c: 'variable instanceof Array',
        option_d: 'variable.isArray()',
        answer: 'Array.isArray(variable)'
    },
    {
        question: "In JavaScript, which function is used to add a new element to the end of an array?",
        option_a: 'array.push(element)',
        option_b: 'array.add(element)',
        option_c: 'array.insert(element)',
        option_d: 'array.append(element)',
        answer: 'array.push(element)'
    },
    {
        question: "What does DOM stand for in JavaScript?",
        option_a: "Document Object Model",
        option_b: "Data Object Model",
        option_c: "Document Order Model",
        option_d: "Document Output Model",
        answer: "Document Object Model"
    },
    {
        question: "Which of the following is a correct way to create a function in JavaScript?",
        option_a: "function: myFunction() {}",
        option_b: "create myFunction() {}",
        option_c: "def myFunction() {}",
        option_d: "function myFunction() {}",
        answer: "function myFunction() {}"
    },
    {
        question: "What does the addEventListener method do in JavaScript?",
        option_a: "It removes an event listener from an element.",
        option_b: "It adds an event listener to an element.",
        option_c: "It creates a new event.",
        option_d: "It triggers an event.",
        answer: "It adds an event listener to an element."
    },
    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        option_a: "//",
        option_b: "/*",
        option_c: "&&",
        option_d: "--",
        answer: "//"
    },
    {
        question: "What does the JSON.stringify() function do in JavaScript?",
        option_a: "Parses a JSON string and returns a JavaScript object.",
        option_b: "Converts a JavaScript object into a JSON string.",
        option_c: "Checks if a string is valid JSON.",
        option_d: "Removes whitespace from a JSON string.",
        answer: "Converts a JavaScript object into a JSON string."
    },
    {
        question: "What will be the output of the following code: console.log(2 + '2' - 1)?",
        option_a: "22",
        option_b: "21",
        option_c: "3",
        option_d: "NaN",
        answer: "21",
    },

    {
        question: "What is the result of the following expression: 5 + '5'?",
        option_a: "'10'",
        option_b: "'55'",
        option_c: "55",
        option_d: "TypeError",
        answer: "'55'"
    },
    {
        question: "Which method is used to remove the last element from an array in JavaScript?",
        option_a: "array.pop()",
        option_b: "array.removeLast()",
        option_c: "array.deleteLast()",
        option_d: "array.shift()",
        answer: "array.pop()"
    },
    {
        question: "What is the output of the following code: console.log(typeof(undefined))?",
        option_a: "'undefined'",
        option_b: "'null'",
        option_c: "'object'",
        option_d: "'undefined'",
        answer: "'undefined'"
    },
    {
        question: "Which operator is used for strict equality comparison in JavaScript?",
        option_a: "==",
        option_b: "===",
        option_c: "!=",
        option_d: "!==",
        answer: "==="
    },
    {
        question: "What does the `isNaN()` function in JavaScript do?",
        option_a: "Checks if a value is a number.",
        option_b: "Returns true if a value is not a number.",
        option_c: "Returns true if a value is a number.",
        option_d: "Returns false if a value is not a number.",
        answer: "Returns true if a value is not a number."
    },
    {
        question: "Which method is used to concatenate two or more arrays in JavaScript?",
        option_a: "array.concat()",
        option_b: "array.combine()",
        option_c: "array.join()",
        option_d: "array.merge()",
        answer: "array.concat()"
    },
    {
        question: "What does the `parseInt()` function in JavaScript do?",
        option_a: "Parses a string and returns an integer.",
        option_b: "Converts a string to lowercase.",
        option_c: "Removes whitespace from both ends of a string.",
        option_d: "Returns a floating-point number from a string.",
        answer: "Parses a string and returns an integer."
    },
    {
        question: "Which built-in method returns the length of a string in JavaScript?",
        option_a: "string.size()",
        option_b: "string.length()",
        option_c: "string.count()",
        option_d: "string.size",
        answer: "string.length()"
    },
    {
        question: "What does the `indexOf()` method return if the value is not found in the array?",
        option_a: "-1",
        option_b: "0",
        option_c: "undefined",
        option_d: "NaN",
        answer: "-1"
    },
    {
        question: "Which operator is used to assign a default value to a variable if it is undefined or null?",
        option_a: "||",
        option_b: "??",
        option_c: "&&",
        option_d: "?:",
        answer: "??"
    }

];
questions.map((info, i) => {

    let question = document.createElement("h2");
    question.innerHTML = `${i + 1}.  ${info.question}`

    let option_a = document.createElement("button");
    option_a.innerHTML = info.option_a

    let option_b = document.createElement("button");
    option_b.innerHTML = info.option_b

    let option_c = document.createElement("button");
    option_c.innerHTML = info.option_c

    let option_d = document.createElement("button");
    option_d.innerHTML = info.option_d

    let answer = document.createElement("button");
    answer.innerHTML = info.answer

    let div = document.createElement("div");
    div.append(question, option_a, option_b, option_c, option_d)

    option_a.addEventListener("click", () => {
        if (option_a.innerHTML === info.answer) {
            option_a.style.backgroundColor = "green";
        }
        else {
            option_a.style.backgroundColor = "red";
        }
    });

    option_b.addEventListener("click", () => {
        if (option_b.innerHTML === info.answer) {
            option_b.style.backgroundColor = "green";
        }
        else {
            option_b.style.backgroundColor = "red";
        }
    });

    option_c.addEventListener("click", () => {
        if (option_c.innerHTML === info.answer) {
            option_c.style.backgroundColor = "green";
        }
        else {
            option_c.style.backgroundColor = "red";
        }
    });

    option_d.addEventListener("click", () => {
        if (option_d.innerHTML === info.answer) {
            option_d.style.backgroundColor = "green";
        }
        else {
            option_d.style.backgroundColor = "red";
        }
    });
    document.getElementById("product").append(div);
});
/*input question*/


document.getElementById("form1").addEventListener("submit", function (e) {
    e.preventDefault();

    let q = document.getElementById("question").value;
    let a = document.getElementById("op1").value;
    let b = document.getElementById("op2").value;
    let c = document.getElementById("op3").value;
    let d = document.getElementById("op4").value;
    let answer = document.getElementById("op5").value;

    let i = 0;
    let question = document.createElement("h2");
    i = questions.length;
    question.innerText = `${i + 1}.${q}`;

    let option_a = document.createElement("button");
    option_a.innerText = a;

    let option_b = document.createElement("button");
    option_b.innerText = b;

    let option_c = document.createElement("button");
    option_c.innerText = c;

    let option_d = document.createElement("button");
    option_d.innerText = d;

    let Detail = document.createElement("div");
    Detail.append(question, option_a, option_b, option_c, option_d);


    document.getElementById("product").append(Detail);
    questions.push(Detail)

    option_a.addEventListener("click", () => {
        if (option_a.innerHTML === answer) {
            option_a.style.backgroundColor = "green";
        }
        else {
            option_a.style.backgroundColor = "red";
        }
    });
    option_b.addEventListener("click", () => {
        if (option_b.innerHTML === answer) {
            option_b.style.backgroundColor = "green";
        }
        else {
            option_b.style.backgroundColor = "red";
        }
    });
    option_c.addEventListener("click", () => {
        if (option_c.innerHTML === answer) {
            option_c.style.backgroundColor = "green";
        }
        else {
            option_c.style.backgroundColor = "red";
        }
    });
    option_d.addEventListener("click", () => {
        if (option_d.innerHTML === answer) {
            option_d.style.backgroundColor = "green";
        }
        else {
            option_d.style.backgroundColor = "red";
        }
    });
});



