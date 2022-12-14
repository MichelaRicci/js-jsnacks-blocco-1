console.log('JS OK');

// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
// l’utente inserisce il suo nome tramite un input.comunicagli se può partecipare o no alla festa.


// Creo lista degli invitati 

const guestNames = ['Romolo', 'Numa Pompilio', 'Tullo Ostilio', 'Anco Marzio', 'Tarquinio Prisco', 'Servio Tullio', 'Tarquinio il Superbo'];


// Prendo elementi dalla pagina 

const btnUser = document.getElementById('btnUser');

const message = document.getElementById('message');

let contentMessage = '';


// Collego il pulsante e event listener 

btnUser.addEventListener("click", function(){

    // Recupero il valore dall'input, nome inserito dall'utente 

    const userName = document.getElementById('userName').value;
    

    // Flag validazione invitati

    let isAllowed = false; 


    // Controllo che il nome inserito sia tra gli invitati 

    for (let i = 0; !isAllowed && i < guestNames.length; i++) {

        const guest = guestNames[i];

        if (userName === guest) {

           isAllowed = true;


        }

        console.log(guestNames);

    }

    // Monto il messaggio (metodo ternario)

        // contentMessage = isAllowed ? 'Il tuo invito è confermato!' : 'Non sei stato invitato alla festa del Grande Gatsby, ci dispiace.';


        if (isAllowed) {
        
            contentMessage = `<p>"Il tuo invito è confermato!"</p>`;
    
    
        } else {
            contentMessage = `<p>"Non sei stato invitato alla festa del Grande Gatsby, ci dispiace."</p>`;
        }
    
    
        console.log(contentMessage);


  
    
    // Stampo in pagina
     
    message.innerHTML = contentMessage;


})



