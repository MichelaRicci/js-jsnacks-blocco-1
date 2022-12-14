console.log('JS OK');


// Il software deve chiedere per 10 volte all’utente di inserire un numero. (prompt)
// Il programma stampa la somma di tutti i numeri inseriti.


//Chiedere all'utente di inserire un numero per 10 volte (con prompt)

const result = document.getElementById('result');

let sum = 0; 


// Flag validazione numeri

let isValid = true;

for (let i = 0; i < 10 && isValid; i++) {
    let numbers = parseInt(prompt('Inserisci un numero').trim());

    console.log(numbers);


    if(isNaN(numbers)) {
        isValid = false;

    } else {

        sum = sum + numbers;

        console.log(sum);

    }

}


// Il programma stampa la somma di tutti i numeri inseriti

result.innerHTML = "La somma dei numeri che hai scelto è:" + `<p>${sum}</p>`;

