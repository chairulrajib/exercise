
function lettersToNumber(letters){
    for(var p = 0, n = 0; p < letters.length; p++){
        n = letters[p].charCodeAt() - 64 + n * 26;
    }
    return n;
}

console.log(`////// Letter to Number ///////`)
console.log(lettersToNumber('AA'))


///////////////////////////////////////////
// 1. inisiasi array number tidak kosong
// 2. lakukan sort array agar isi array urut
// 3. membuat fungsi cek duplikat
// inisiasi array hasil yg masih kosong
// inisiasi array sementara
// array sementara = arrayinput[0]
// shift array input 
// cek apakah pada array input, masih include array temp  ?
// jika masih include, shift array input. lalu lakukan ulang (array temp = array input[0])
// jika tidak push arr temp ke arr hasil, lalu lakukan ulang (array temp = array input[0])


// 1. inisiasi array number tidak kosong
const num = [3,2,1,2,1, 4,4,5]
// 2. lakukan sort array agar isi array urut
const nums = num.sort()
// 3. membuat fungsi cek duplikat
const checkDouble = (arr) =>{

    // inisiasi array hasil yg masih kosong
    let hasil =[]
    // inisiasi array sementara
    
    return loop(arr,hasil)
}

const loop = (arr,hasil) => {
    for (let i =0;i <arr.length; i++){

        let temp = arr[0]
        // array sementara = arrayinput[0]
    
        // shift array input
        arr.shift() 
        // cek apakah pada array input, masih include array temp  ?
        
        if (arr.includes(temp)){
           
            // jika masih include, shift array input. lalu lakukan ulang (array temp = array input[0])
            arr.shift()
            loop(arr,hasil)
    
        }
        // jika tidak push arr temp ke arr hasil, shift array input, lalu lakukan ulang (array temp = array input[0])
        else {
            hasil.push(temp)
            loop(arr,hasil)
        }
    }
    return hasil
}

console.log(`//////// Find Single Array /////////////`)
console.log(checkDouble(nums))

//////////////////////////////////////////////
function anagram(name, words) {
	const a = name.replace(/\s/g,'').toLowerCase().split('').sort().join('');
	const b = words.replace(/\s/g,'').toLowerCase().split('').sort().join('');
	return a == b;
}

console.log(`///////// Anagram ///////////`)
console.log(anagram('anagram','nagaram'))

/////////////////////////////////////

const stairCase = (n) => {
    switch (n) {
        case 1: return 1
        case 2 : return 2
        default : return stairCase(n-1) + stairCase(n-2)
    }
}


console.log(`//////// Stair Case /////////`)
console.log(stairCase(5))