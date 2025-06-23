// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // name iife
    console.log(`DB CONNECTED`);
})();

( () => {
    console.log(`DB CONNECTED TWO`);
    
} )();

( (name) => {
    // simple iife
    console.log(`DB CONNECTED THREE ${name}`);
} )('harsh')