// quotes container
const quotes = [
  `Do not do unto others as you would that they should do unto you. Their tastes may not be the same.`,
  `Happiness lies in the joy of achievement and the thrill of creative effort.`,
  `Somebody once said that beauty is the passport to success, but it's not a passport. It's a visa and it expires.`,
  `I stand by all the misstatements that I've made.`,
  `It's all knowing what to start with. If you start in the right place and follow all the steps, you will get to the right end.`,
  `The world is my lobster.`,
  `Let a good man do good deeds with the same zeal that the evil man does bad ones.`,
  `No one is useless in this world who lightens the burdens of another.`,
  `A person is never happy except at the price of some ignorance.`,
];
// generate a random number on each click to the button, pick a quote with the random number, render the quote.
document.querySelector(`a`).addEventListener(`click`, function () {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  let randomQutoe = quotes[randomNumber];

  document.querySelector(`h1`).textContent = randomQutoe;
});
