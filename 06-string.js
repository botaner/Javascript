
let email1 = "erdemeyuub@icloud.com"
let firstName = "Eyup"
let lastName = "ERDEM"

console.log( email1.length )

// ilk karakteri bulmak
console.log(firstName [0])
console.log(firstName.charAt(1))

// buyuk harf kucuk harf

firstName = firstName.toUpperCase()
console.log(firstName);

firstName = firstName.toLowerCase()
console.log(firstName);

// search --> string içinde bilgi aramak

console.log(email1.search("@"));
console.log( email1[15] )

 email.search("olmayan") // -1 olmadığı için -1 geldi

// belli bir yere kadar almak --> slice : (domain bilgisi)

let DOMAIN1 = email.slice( email.search("@") + 1)
console.log(DOMAIN1)

DOMAIN1.search(".")

console.log(DOMAIN1.slice(0,DOMAIN1.indexOf(".")))

// bilgiyi değiştir
email1 = email1.replace("icloud.com", "gmail.com")
console.log(email1);

// istedigim bilgi var mı 

console.log(
    email1.endsWith("gmail.com")
)

email1.includes("@") //true
email1.search("dsfsdf") //-1
email1.includes("fsdfsd") //false
email1.endsWith("com") //true





