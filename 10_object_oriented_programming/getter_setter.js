class User{
    constructor(email , password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password.toUpperCase()}saqib`
    }
    set password(value){
        this._password = value
    }
}
const saqib = new User("s@gmail.com", "abc")
console.log(saqib.password)
console.log(saqib.email)