//creo un array per la lista delle mail

const email = ['filippo.rossi@gmail.com', 'luca.bianchi@gmail.com', 'franco.casale@yahoo.it', 'giuseppe.berlusconi@hotmail.com', 'leonardo.catalfamo@gmail.com'];

let user = prompt('inserisci la tue email');

let checkEmail = false

for (i = 0; !checkEmail && i < email.length; i++){
    if (email[i] === user){
       console.log(checkEmail = true)
    }

    else{
        console.log(checkEmail = false)
    }
}