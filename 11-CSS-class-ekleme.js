// ************ CSS class *********** //

let greeting = document.querySelector("#greeting")

greeting.classList.add("text-primary")
greeting.classList.add("title")
greeting.classList.add("new-info", "second-class", "third-class") // Birden fazla class eklemek

greeting.classList.remove("text-primary") // birden fazla class silmek


console.log(greeting.classList)





