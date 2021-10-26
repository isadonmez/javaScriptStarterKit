console.log("Merhaba Kodlama.io")

let dolarBugun = 9.30 

//JS type safe değildir

let dolarDun = 9.20
dolarDun="Ankara"

{
    let dolarDun=9.10
}

sdfs
console.log(dolarDun)

const euroDun =11.2
//euroDun = 11
console.log(euroDun)

//birden fazla veriyi tek bir dizide tanımlamak için arraylarlerden yararlanılır.
let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Taşıt Kredileri","Okul Bursları"]

//let users = getUsersFromApi
//Tanımlama olarak camelCasing
//PascalCasing

console.log("<ul>")
for (let i = 0; i<konutKredileri.length; i++){
    console.log("</li>" +konutKredileri[i]+ "</li>")
}

console.log("</ul>")


{
    // <ul>
    //     <li>Konut Kredisi</li>
    //     <li>Emlak Konut Kredisi</li>
    //     <li>Kamu Konut Kredisi</li>
    // </ul>
}






console.log(konutKredileri)