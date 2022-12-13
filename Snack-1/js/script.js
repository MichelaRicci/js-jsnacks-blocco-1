console.log('JS OK');


// Il software deve chiedere per 10 volte all’utente di inserire un numero. (prompt)
// Il programma stampa la somma di tutti i numeri inseriti.


//Chiedere all'utente di inserire un numero per 10 volte (con prompt)

let sum = 0; 

for (let i = 0; i < 10; i++) {
    let numbers = parseInt(prompt('Inserisci un numero').trim());

    console.log(numbers);

    sum = sum + numbers;

    console.log(sum);


}
