let score = Math.ceil(Math.random() * 5);
switch (score) {
  case 1:
    console.log(score, `coba lagi ya`);
    break;
  case 2:
    console.log(score, `selamat kamu mendapatkan kupon sebanyak 5`);
    break;
  case 3:
    console.log(score, `selamat kamu mendapatkan kupon sebanyak 15`);
    break;
  case 4:
    console.log(score, `selamat kamu mendapatkan kupon sebanyak 50`);
    break;
  case 5:
    console.log(score, `WOW, kamu menang jackpot! Selamat!!`);
    break;
  default:
    break;
}
