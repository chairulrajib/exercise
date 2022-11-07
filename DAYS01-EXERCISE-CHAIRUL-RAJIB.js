// /luas persegi

const sisi = 4;
let luasPersegi = Math.sqrt(sisi)
console.log (`luas Persegi adalah ${luasPersegi}`);

// keliling persegi

let kelPersegi= 4*sisi
console.log(`Keliling Persegi adalah ${kelPersegi}`)

// lingkaran
const jariJari = 7
let diameter = 2*jariJari;

console.log(`Diamter ligkaran adalah ${diameter}`)

let kelLing = diameter*Math.PI
console.log(`Keliling Lingkaran adalah ${kelLing}`)

let luasLing = Math.PI*((jariJari)**2)
console.log(`Luas Lingkaran adalah ${luasLing}`)

// triangle
const angle1 = 60
const angle2 = 30

let angle3 = 180 - (angle1+angle2)
console.log(`besar sudut ketiga adalah ${angle3}`)

// converting 400days

const target = 399

// const year = (target-(target%365))/365
// const month = ((target-(year*365))-((target-(year*365))%30))/30
// const day =target-(year*365)-(month*30)

const year = Math.floor(target/365)
const month = Math.floor((target-(365*year))/30)
const day =target-(year*365)-(month*30)

console.log(`${target} hari terdiri dari ${year} tahun, ${month} bulan, ${day} hari`)


// date 

const dateOne = new Date("2021-03-05")
const dateTwo = new Date("2022-03-06")

console.log(dateOne.getTime())
console.log(dateTwo.getTime())

const oneDayMS = 24*60*60*1000

let deltaDays = Math.floor((Math.abs(dateOne-dateTwo))/oneDayMS)
console.log(deltaDays)


