const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const TwitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];

// show new Quote
function newQuote() {
  // Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  // check If author field is blank and replace it with unknown

  if (!quote.author) authorText.textContent = 'Unknown';
  else {
    authorText.textContent = quote.author;
  }

  // Check quote length to determine the font-size.
  if (quote.text.length > 70) {
    quoteText.classList.add('long-quote');
  } else {
    quoteText.classList.remove('long-quote');
  }

  quoteText.textContent = quote.text;
}

// Get Quotes from API
async function getQuotes() {
  const apiUrl = 'https://type.fit/api/quotes';
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    alert(error);
    //catch Error here
  }
}

// Event Listener
newQuoteBtn.addEventListener('click', newQuote);

//on Load
getQuotes();
