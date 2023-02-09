// ****** Ternary Operator ile Short if ******** //

// eger kullanici adin varsa yazdır yoksa kullanici bilginiz bulunmadı yaz

let userName = prompt("Kullanici Bilginizi Yaziniz")
let info = document.querySelector("#info")

info.innerHTML = `${userName.lenght > 0 ? userName : "Kullanici Bilginiz Bulunamadi"}`




