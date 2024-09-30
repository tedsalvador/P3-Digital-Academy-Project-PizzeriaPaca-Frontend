export class RegisterDto {
    constructor(username, password, email, firstName, lastName, address, postalCode, city) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.postalCode = postalCode;
        this.city = city;
    }
}