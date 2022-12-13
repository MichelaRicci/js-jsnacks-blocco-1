console.log('JS OK');

// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
// l’utente inserisce il suo nome tramite un input.comunicagli se può partecipare o no alla festa.


const btnUser = document.getElementById('btnUser');

const guestName = ["Romolo", "Numa Pompilio", "Tullo Ostilio", "Anco Marzio", "Tarquinio Prisco","Servio Tullio", "Tarquinio il Superbo"];

const message = document.getElementById('message');

let contentMessage = '';


// Collego il pulsante e event listener 

btnUser.addEventListener("click", function(){

    const userName = document.getElementById('userName').value;
    let userAllowed = false; 

  
    
        // Stampo in pagina
     
    message.innerHTML = contentMessage;


})



