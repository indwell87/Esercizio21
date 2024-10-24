let sommadispari = 0;
let contadispari = 0;

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    } else {
        sommadispari += i;
        contadispari++;
    }
}

let mediadispari = sommadispari / contadispari;
console.log("La media dei numeri dispari è: " + mediadispari);
