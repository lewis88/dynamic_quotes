quotesArray = [
{ quote: 'A disordered database is a sign of a disfunctional mind', author: 'Aiden Pinkman' },
{ quote: 'Programming is like table tennis: just smash it!', author: 'Chris Wood' },
{ quote: '01110001010010010010011110011010101001100', author: 'Harry Swan'},
]


window.onload = function(){


}

var main = function(){

  // Select quotes randomly from an array of quotes

  // Add quotes functionality

  // While Typing see quotes added at real time

}

function newQuote(){

  var index = Math.floor( (Math.random() * ( quotesArray.length - 1 ) ) );
  var rQuote = quotesArray[index];

  var quoteArticle = document.createElement('P');

  var blockQuote = document.createElement('blockquote');
  blockQuote.innerText = rQuote['quote'];

  var cite = document.createElement('cite');
  cite.innerText = rQuote['author'];

  blockQuote.appendChild(cite);
  quoteArticle.appendChild(blockQuote);

  var quotes = document.querySelector('#quotes');
  quotes.appendChild(quoteArticle);
}
