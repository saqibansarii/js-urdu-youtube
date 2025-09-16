// object based syntax
const User = {
    eamil: 'h@gmai.com',
    _password: "abc",

    get email(){
        return this.eamil.toUpperCase()
    },
    set email(value){
        this.eamil = value
    }
}

const tea = Object.create(User)
console.log(tea.email)