// 1. sort 
const arr = [3,4,8,9,1]
// use function sort 
function sortWith (arr) {
    const hasSorted = arr.sort()

    console.log(`1. Nilai minimum dari Array adalah ${hasSorted[0]}
Nilai maksimum dari Array adalah ${hasSorted[arr.length - 1]}`)
average(arr)
}

sortWith(arr)

// without function sort 

function sortWithOut (arr) {
    console.log(`Nilai minimum dari Array adalah ${Math.min(...arr)}
Nilai maksimum dari Array adalah ${Math.max(...arr)}`)
    average(arr)
}

sortWithOut(arr)

// function average
function average (arr) {
    let sum =0
    for(let i =0; i<arr.length; i++){
        sum +=i
    }
    console.log(`Nilai rerata dari Array adalah ${sum/(arr.length)}`)
}

///////////////////// 2. Concat
const concatArray= ['aku', 'seorang', 'kapiten', 'mempunyai', 'pedang', 'panjang', 'kalau', 'berjalan', 'prok', 'prok', 'prok']
let string = ""
function concate (arr) {
    
    for (let i =0 ; i<arr.length; i++) {
        if(i==(arr.length-1)){
          string += ' and '
          string += arr[i]
        } else if (i==0) {
          string += arr[i]
        } else {
          string += ', '
          string += arr[i]
        }
    }
    console.log(`2. hasil Concat Array adalah ${string}`)
}

concate(concatArray)

// ////////////////////////////////////////////////// 3. Split

let splitArray=[]

function splitString (text,char) {
  
  if (text.includes(char)){
    let index = text.indexOf(char)
    let temp = text.substring(0,index)
    splitArray.push(temp)
    tempText= text.replace(`${temp}`,``)
    tempText= tempText.replace(`${char}`,``)
    splitString(tempText,char)

  } else {
    splitArray.push(text)
    printSplitString(splitArray)
  }

}


function printSplitString (splitArray) {
  console.log(splitArray)
}

splitString("Hello World Bro",'rld')

////////////////////////////////// 4. Sum Asimetris Array

const arrayA = [ 1, 2, 3]
const arrayB = [ 4, 5, 6, 4 , 10 , 6 , 7, 8]

function calcArray (a,b) {
  const c =[]

  for (let i =0; i < Math.max(a.length, b.length); i++){
    c.push((a[i]||0) + (b[i]|| 0))
  }

  console.log(`4. hasil Penjumlahan Array Asimetris adalah ${c}`)
}

calcArray(arrayA,arrayB)

////////////////////////// 5. Add Element

let ellArray = ['a', 'b', 'c']

function addEl(arr,char){
  const tempArr = arr
  if(!(arr.includes(char))){
    arr.unshift(char)
  }
  console.log(`5. hasil Add Element pada Array adalah ${arr}`)
}

addEl(ellArray,'d')

//////////// 6. Filter Odd

const numArr = [1,2,3,4,5,6,7,8,9]

function filterOdd (arr) {
  let evenArr = []

  for(let i =0; i < arr.length; i++) {
    if(arr[i]%2==0){
      evenArr.push(arr[i])
    }
  }

  console.log(`6. angka genap pada sebuah array input adalah ${evenArr}`)
}

filterOdd(numArr)
