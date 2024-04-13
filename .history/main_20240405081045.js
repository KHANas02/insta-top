const words = [
  'Gulsanam',
  'Said',
  'Madina',
    'Saida',
    'Gulzoda',
    'Nozima',
     'Alish',
  'O',
     'Azizbek'
];

let counter = 1;

let interal = setInterval(() => {
  if (counter >= words.length) {
    counter = 0;
  }
  
  const nextWord = words[counter];
  
  document.startViewTransition(() => {
    document.querySelector('.word').innerText = nextWord;
  });

  counter ++;
}, 1500)