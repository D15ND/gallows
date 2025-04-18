let words = [
  "программа",
  "макака",
  "прекрасный",
  "оладушек",
  "джаваскриптизер",
  "лев",
  "огонь"
];

let word = words[Math.floor(Math.random() * words.length)];

let answerArray = [];
for (let i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}

let remainingLetters = word.length;
let trySum=0;
let tryLimmit=20;

while (remainingLetters > 0) {
  alert(answerArray.join(" "));
  let guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры");
  trySum++;
  guess=guess.toLowerCase();
  if (guess === null) {
    // alert("Игра окончена не начавшись")
    break;
  } else if (guess.length !== 1) {
    alert("Введите одну букву");
  } else {
    tryLimmit--;
    for (let j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        answerArray[j] = guess;
        remainingLetters--;
      }
    }
  }
}

alert(answerArray.join(" "));

if (tryLimmit>0) {
  alert("Отгадано, было слово: " + word);
  alert("Количество попыток: "+trySum);
} else {
  alert("Попытки кончились, ты проиграл. Слово было: "+word);
  alert("Твои попытки: "+trySum);
}
