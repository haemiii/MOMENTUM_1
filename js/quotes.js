const quotes = [
  {
    quote: "If you cannot do great things, do small things in a great way.",
    author: "-Napoleon Hill-",
  },
  {
    quote: "If opportunity doesn’t knock, build a door.",
    author: "-Milton Berle-",
  },
  {
    quote: "Life shrinks or expands in proportion to one’s courage.",
    author: "-Anais Nin-",
  },
  {
    quote: "You must be the change you wish to see in the world.",
    author: "-Mahatma Gandhi-",
  },
  {
    quote: "Everything has beauty, but not everyone can see.",
    author: "-Congucius-",
  },
  {
    quote: "Change your thoughts and you change your world.",
    author: "-Norman Vincent-",
  },
  {
    quote: "It is never too late to be what you might have been.",
    author: "-George Eliot-",
  },
  {
    quote: "A person who never made a mistake never tried anything new.",
    author: "-Albert Einstein-",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "-Mae West-",
  },
  {
    quote: "Life has no limitations, except the ones you make.",
    author: "-Les Brown-",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
