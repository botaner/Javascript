let price = 100
let tax = 0.18
let priceTax = price * tax
let total = price + priceTax
console.log(
    "Fiyat:", price,
    "KDV Oranı:", tax, 
    "KDV Tutarı:", priceTax,
    "Fiyat: ", total
)
let stringNumber = "11"
console.log(stringNumber)
let newNumber = Number(stringNumber);
console.log(newNumber);
console.log("Number Contractor içine bilgi gonderildi", Number("111"));


// arttırma azaltma işlemleri;
let counter = 320
counter = counter + 1
counter += 1;
counter ++;
console.log(counter);

counter --;
counter -= 1;
console.log(counter)

counter *= 10;
console.log(counter)

counter /= 2;
console.log(counter) 


console.log(2 + 3 * 10) // = 50?

console.log((2 + 3) * 10);


// mod
console.log(15 % 2);
console.log(14 % 2);

console.log("Koli Kalan Urun Orneği: ", 18 % 8);

// us alma
 console.log(2 * 2 * 2 * 2)
 console.log(2 ** 4)

 // aşağı yuvarlama 
 console.log("Aşağı yuvarlama:", Math.floor(1.9) );
 console.log("Yukarı yuvarlama:", Math.ceil(1,9) );
 console.log("Yakına Yuvarlama:", Math.round(1,6) );





