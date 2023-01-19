let username = "eyup"
const DOMAIN = "kodluyoruz.org"

let email = username + "@" + DOMAIN

console.log("Merhaba:", username, "sitemize hoşgeldiniz", "mail adresin:", email)

let info = `
Merhaba ${username} 
sitemize hosgeldin.. 

kisa isminiz: ${username[0]}.

mail adresin ${email}
Mail adresinin uzunluğu ${email.length}
Borcunuz ${(2 + 3) * 10} TL
Gunun saat bilgisi : ${new Date().getHours()}
`
console.log(info);





