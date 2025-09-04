// Immediately Invoked Function Expression (IIFE)


(function chai (){
    // named iife
    console.log(`DB CONNECTED`)
})();

( (name) => (console.log(`DB connected two ${name}`)) )("saqib");