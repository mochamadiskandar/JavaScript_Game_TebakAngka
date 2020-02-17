//Awalan
alert(
  "Selamat bermain Game Tebak Angka !!" +
    "\nkamu bisa pilih angka 1 - 10, dan kamu hanya punya 3x kesempatan."
);

//get random computer
var com = Math.floor(Math.random() * 11);
console.log(com);

//rules game
var tanya = true;
var player;
var hasil;
var kesempatan;

while (tanya == 1) {
  for (kesempatan = 2; kesempatan >= 0; kesempatan--) {
    player = prompt("Tebakan angka");
    if (player == com && kesempatan != 0) {
      hasil = "Selamat, tebakan anda benar !!";
      alert(hasil);
      tanya = confirm("Mau main lagi ?");
      break;
    } else if (player < com && kesempatan != 0) {
      hasil = "tebakan angka anda lebih kecil";
      alert(hasil + " , kesempatan anda tersisa : " + kesempatan + "x");
    } else if (player > com && kesempatan != 0) {
      hasil = "tebakan angka anda lebih besar";
      alert(hasil + " , kesempatan anda tersisa : " + kesempatan + "x");
    } else if (kesempatan == 0) {
      alert(
        "Yah kesempatan anda habis" +
          "\ntebakan yang benar :  " +
          com +
          "\nGame over !!"
      );
      tanya = confirm("mau main lagi ?");
    }
  }
}
alert("Terima kasih telah bermain :)");
