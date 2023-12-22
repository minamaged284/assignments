
var quotes = [
    {quote:`"Live as if you were to die tomorrow. Learn as if you were to live forever."`,
     author:`- Mahatma Gandhi`}
     ,{quote:`"Anyone who has never made a mistake has never tried anything new."`
    ,author:`- Albert Einstein`},
    {quote:`"Life isn't about finding yourself. Life is about creating yourself."`
    ,author:`- George Bernard Shaw`},
    {
        quote:`"Success is not final, failure is not fatal: it is the courage to continue that counts."`
        ,author:`- Winston S. Churchil`
    },
    {
        quote:`"In a time of deceit telling the truth is a revolutionary act."`
        ,author:`- George Orwell`
    }
]

document.getElementById('gen').addEventListener('click', genQuote);
 function genQuote(){
randomNum();
    document.getElementById('quote').innerHTML = quotes[rnd].quote;
    document.getElementById('author').innerHTML = quotes[rnd].author;
    console.log(rnd)
 }
 var rnd = 0;
 function randomNum(){
   num= Math.floor(Math.random() * quotes.length );
   if(num==rnd){
    randomNum();
   }
   else{rnd=num;
}
   return rnd;
   
 }
    
