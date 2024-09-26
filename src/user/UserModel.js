export class User {
    constructor(name, lastName, username, email, password, city, address, postalCode) {
        this.name = name;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.password = password;
        this.city = city;
        this.address = address;
        this.postalCode = postalCode;
    }
}

export class Login {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}