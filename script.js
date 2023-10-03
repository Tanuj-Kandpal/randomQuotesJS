let printQuote = document.querySelector('.quote');
let quoteBtn = document.querySelector('.quoteBtn');
const quoteGenerator = async function getQuotes(){
    try {
    const response  = await fetch("https://api.quotable.io/quotes/random");
    const quoteJson  = await response.json();
        let quote = quoteJson[0].content;
        printQuote.innerHTML = quote;
    } catch (error) {
        console.log(error);
    }
   
}
quoteBtn.addEventListener('click',function(){
    quoteGenerator();
})

