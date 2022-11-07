// date 

const dateOne = new Date("2021-03-05")
const dateTwo = new Date("2022-03-06")

// console.log(dateOne.getTime())
// console.log(dateTwo.getTime())

const oneDayMS = 24*60*60*1000

let deltaDays = Math.floor((Math.abs(dateOne-dateTwo))/oneDayMS)
console.log(`1. Delta days dari ${dateOne.toLocaleString()} ke ${dateTwo.toLocaleString()} adalah ${deltaDays}`)

// celcius to fahrenheit

const celcius = 50
const fahrenheit = celcius *(9/5) +32;

console.log(`2. ${celcius} celcius menjadi ${fahrenheit} fahrenheit `)

// odd or even 
const angka = 1001

if (angka%2 == 0) {
    console.log(`3. ${angka} adalah bilangan genap`)
} else {
    console.log(`3. ${angka} adalah bilangan ganjil`)
}

// bilangan prima 
const bilPrim = 15

if (bilPrim == 1) {
    console.log(`4. ${bilPrim} bukan Bilangan Prima`)
    
} else if (bilPrim%2 == 0) {
    console.log(`4. ${bilPrim} bukan Bilangan Prima`)
    
} else if (bilPrim%3 ==0) {
    console.log(`4. ${bilPrim} bukan Bilangan Prima`)
} else {console.log(`4. ${bilPrim} Bilangan Prima`)}


// sum n 

let N = 5, sum=0
 for(let i = 1; i<=N;i++){
    sum += i
 }
 console.log(`5. jumlah dari angka 1 sampai ${N} adalah ${sum}`)



// factorial number 

let inputNum = 4, factNum =1
for(let i = inputNum; i>0; i--){
    factNum *=i
}

console.log(`6. factorial angka ${inputNum} adalah ${factNum}`)


// fibonacci 

const fibo = 10
let A =0, B=1, C=1 
console.log(`7. fibonacci dari ${fibo} adalah`)
console.log(A)
console.log(B)



for (let i=0; i < fibo-2 ; i++) {
    console.log(C)
    A = B+C
    B = C 
    C = A
}