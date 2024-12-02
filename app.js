function guessNumber() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log("Компьютер выбрал случайное число от 1 до 100");
  let minNum = 1;
  let maxNum = 100;
  let guessNum = null;
  let trying = 0;

  for (let i = 0; i < trying + 1; i++) {
    guessNum = Math.floor((minNum + maxNum) / 2);
    trying++;
    console.log(`Компьютер 2: Пробую число ${guessNum}`);

    if (guessNum > randomNumber) {
      console.log("Компьютер 1: Меньше !");
      maxNum = guessNum - 1;
    } else if (guessNum < randomNumber) {
      console.log("Компьютер 1: Больше !");
      minNum = guessNum + 1;
    } else {
      console.log("Ты угадал");
      console.log(`Количество твоих попыток ${trying}`);
      return;
    }
  }
}

guessNumber();
