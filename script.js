

window.onload = init;

function init() {
	// console.log("JS Loaded");
	generateQuote();
}

function generateQuote() {
	let quoteSize = BANKQUOTE.length;
	let randomIndex = Math.floor(Math.random() * quoteSize);
	let randomQuoteData = BANKQUOTE[randomIndex];
   
    let twitterLink = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='

    // add the quote to link
    let encodeQuote = randomQuoteData.quote.replace(/ /g, "%20");
    twitterLink += encodeQuote;
    // add author to link
    let encodeAuthor = randomQuoteData.author.replace(/ /g, "%20");
    twitterLink += " - " + encodeAuthor;

    // console.log("Quote Generated");
    document.getElementById('tweet-quote').href = twitterLink;
	document.getElementById('text').innerText = randomQuoteData.quote;
	document.getElementById('author').innerText = randomQuoteData.author;
}




