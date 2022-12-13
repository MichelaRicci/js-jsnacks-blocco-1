console.log('JS OK');

// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
// l’utente inserisce il suo nome tramite un input.comunicagli se può partecipare o no alla festa.


// Creo lista degli invitati 

const guestName = ["Romolo", "Numa Pompilio", "Tullo Ostilio", "Anco Marzio", "Tarquinio Prisco","Servio Tullio", "Tarquinio il Superbo"];


// Prendo elementi dalla pagina 

const btnUser = document.getElementById('btnUser');

const message = document.getElementById('message');

let contentMessage = '';


// Collego il pulsante e event listener 

btnUser.addEventListener("click", function(){

    // Recupero il valore dall'input, nome inserito dall'utente 

    const userName = document.getElementById('userName').value;
    
    let userAllowed = false; 


    // Controllo il nome inserito tra gli invitati 

    for (let i = 0; i < guestName.length && !userAllowed; i++) {

        const currentName = guestName[i];
        console.log(currentName, guestName);

        
        if (currentName === guestName) {

           userAllowed = true;

           console.log('userAllowed');

        }

    


    }

    // Monto il messaggio

    if (userAllowed) {
        
        contentMessage = `<p>"Il tuo invito è confermato!"</p>`;


        } else {
            contentMessage = `<p>"Non sei stato invitato alla festa del Grande Gatsby, ci dispiace."</p>`;
        }


        console.log(contentMessage);

  
    
    // Stampo in pagina
     
    message.innerHTML = contentMessage;


})



