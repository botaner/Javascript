// ************ Karsılastırma Operatorlerı ************ //
let price = "100"
let user = "Erdem"

// == esitse 
console.log("== : ", price == 1 )
console.log("== : ", price == 100 )

// === hem turu hem de degeri esitse
console.log("=== : ", price === 1)
console.log("=== : ", price === 100)

// != esit degilse
console.log( price != 1 )
console.log( price != "guest" )

// < kücükse
console.log("price < 100", price < 100 )

// > büyükse
console.log("price > 200", price > 200 )

// <= kücük veya esitse
console.log("price <= 100", price <= 100 )

// >= büyük veya esitse 
console.log("price >= 100", price >= 100 )

// && ve
price = 0
console.log( price > 0 && user != "guest")


// || veya

console.log( price > 0 || user != "guest")

// ! değilse
user = "guest"
price = ""
console.log( price > 0 && !user == "guest" )

console.log(!!2)

