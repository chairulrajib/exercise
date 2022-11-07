// fizz buzz
const lmt = 45;

for (let i = 1 ; i <= lmt+1; i++) {
    if (i%3== 0 && i%5==0){
        console.log(`BizzBuzz => ${i}`)
    } else if (i%3== 0) {
        console.log(`Bizz => ${i}`)
    } else if (i%5==0) {
        console.log(`Buzz => ${i}`)
    }
}



// 1. multiplication 

const number = 9;
    console.log(`1. Multiplication`)
for(let i = 1; i <= number +1; i++) {
    console.log(`${number} x ${i}`)
}


// 2. palindrom

const str = "racecar" 
const temp = str.split('').reverse().join('')

if(str == temp) {
    console.log (`2. string ${str} adalah Palindrome`)
} else {
    console.log (`2. string ${str} adalah Bukan Palindrome`)
}

// 3. centi to kilometer

const centi = 900000
const kilo = centi/100000

console.log(`3. ${centi} centimeter adalah ${kilo} kilometer`)

// 4. currency
const currency = 1234567

const formatter = new Intl.NumberFormat('en-ID', {
    style: 'currency',
    currency: 'IDR'
  }).format(currency)
  .replace(/[IDR]/gi, '')
  
console.log(`4. Currency dari ${currency} adalah Rp ${formatter}`)

// 5. remove string
const hello = "Hello World"
const replace ="ld"
console.log(`5. Remove String ${`"${replace}"`} pada ${`"${hello}"`} adalah ${hello.replace(replace,'')}`)

// 6. Upper String 
const word = "hello world"

const kataSatuBesar = word.substring(0,1).toLocaleUpperCase()
const kataSatuKecil = word.substring(0,1)
const kataPertama = word.replace(kataSatuKecil,kataSatuBesar)


const tempo = kataPertama.indexOf(' ')+1
const kataDuaBesar = kataPertama.substring(tempo,tempo+1).toLocaleUpperCase()
const kataDuaKecil = kataPertama.substring(tempo,tempo+1)
const kataFinal = kataPertama.replace(kataDuaKecil,kataDuaBesar)

console.log(`6. Capital dari ${word} adalah ${kataFinal}`)


// 7. reverse string
const string1 = "string"
console.log(`7. reverse string dari ${string1} adalah ${string1.split("").reverse().join("")}`)


// ===================TUGAS LAGI==============
const kalimat = "hello world aaaa bbbbb iiiii"
const kal = kalimat.replaceAll(' ','')
const hurufVokal = "aiueo" 

let consonant = kal

let vokal =""
// console.log(consonant)
    
for (let i =0; i< hurufVokal.length; i++) {
        
    if (kalimat.includes(hurufVokal[i])) {
    vokal += hurufVokal[i]
    consonant = consonant.replaceAll(hurufVokal[i],'')

    }

}

console.log(consonant)

console.log(`Huruf Vokal dari ${kalimat} adalah ${vokal}`)

let const2 =""
const constTemp = consonant
const len =consonant.length

for (let i = 0; i <len ; i++) {
    if(consonant.includes(constTemp[i])){
        const2 += constTemp[i]
        // console.log(const2)
        consonant=consonant.replaceAll(constTemp[i],'')
    }
}

console.log(`Huruf Konsonan dari ${kalimat} adalah ${const2}`)


