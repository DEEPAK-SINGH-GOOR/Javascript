class Account {
    #accountnumber;
    #username;
    #branchname;
    #number;
    #password;
    #amount;

    constructor(accountnumber, username, branchname, number) {
        this.#accountnumber = accountnumber;
        this.#username = username;
        this.#branchname = branchname;
        this.#number = number;
        this.#password = 0;
        this.#amount = 0;
    }

    // Getter
    get accountnumber() {
        return this.#accountnumber;
    }

    get username() {
        return this.#username;
    }

    get branchname() {
        return this.#branchname;
    }

    get number() {
        return this.#number;
    }

    get password() {
        return this.#password;
    }

    get amount() {
        return this.#amount;
    }

    // Setter
    set accountnumber(value) {
        this.#accountnumber = value;
    }

    set username(value) {
        this.#username = value;
    }

    set branchname(value) {
        this.#branchname = value;
    }

    set number(value) {
        this.#number = value;
    }

    set password(value) {
        this.#password = value;
    }
    
    // getaccountnumber() {
    //     return this.#accountnumber;
    // }
}

let myaccount = new Account(123456, 'Deeper', 'Main Branch', '0');
console.log(myaccount.branchname); // Main Branch
