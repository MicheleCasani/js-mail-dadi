//creo un array per la lista delle mail
const email = ['filippo.rossi@gmail.com', 'luca.bianchi@gmail.com', 'franco.casale@yahoo.it', 'giuseppe.berlusconi@hotmail.com', 'leonardo.catalfamo@gmail.com'];
//dichiaro la variabile dove l'utente inserisce la sua email
let user = prompt('inserisci la tue email');
//dichiaro la variabile di controllo che ci serve per fare il controllo della email inserita
let checkEmail = false
//creo il ciclo inserendo come valori di confronto il valore di lunghezza dell'array e la variabile di controllo che deve essere diversa da "i"
for (i = 0; !checkEmail && i < email.length; i++) {
    //qua sto dicendo che se "i" assegnato ad "email" è uguale al valore inserito dall'utente allora ci viene riportato il valore "true"
    if (email[i] === user) {
        checkEmail = true;
    }


}
//qua sto dicendo che se la variabile di controllo risulta "true" in base al risultato che deriva dal ciclo sopra allora la email è corretta, se invece il valore non risultasse "true" da come risultato "email errata"
if (checkEmail === true) {
    console.log('email corretta')
}
else {
    console.log('email errata')
}
