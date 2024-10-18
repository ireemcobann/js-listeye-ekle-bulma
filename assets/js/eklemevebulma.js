// Kullanıcıya listeye kaç adet isim eklemek istediğini soralım.
// Kullanıcı cevabına göre isimleri girelim ve daha sonra console'da yazdıralım. (isimler birden fazla eklenebilir)
// Kullanıcıya liste içinden hangi ismi aradığını soralım.
// Kullanıcının vereceği cevaba göre "... ismi listenizde .... adet bulundu" gibi mesaj çıkartalım.

let isimAdeti = prompt("Listeye kaç adet isim eklemek istiyorsunuz?");
let isimler = [];

for (let i = 0; i < isimAdeti; i++) {
  let isim = prompt(i + 1 + ". ismi girin:");
  isimler.push(isim);
}

console.log(`Eklenen isimler: ${isimler}`);

let arananIsim = prompt("Listede hangi ismi aratmak istiyorsunuz?").toLowerCase();

let sayac = 0;

for (let i = 0; i < isimler.length; i++) {
  if (isimler[i].toLowerCase() === arananIsim) {
    sayac++;
  }
}

if (sayac > 0) {
  console.log(`${arananIsim} ismi listenizde ${sayac} adet bulunuyor.`);
} else {
  console.log(`${arananIsim} ismi listenizde bulunamadı.`);
}
