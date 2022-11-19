// // PSEUDOCODE : create a function to check even or odd 


// //PSEUDOCODE OF ODD EVEN NUMBER CHECKING
// // INPUT :
// // 1. param is a number
// const evenOdd =(n) =>{
//     // PROCESS :
//     // 1. Check, is param has no a remaind when divided by 2
//     if (n%2==0) {
//         // 2. if yes, return result of the process "even"
//         return "even"
//     } else {
//         // 3. else, return result of the process  "odd"
//         return "odd"
//     }
//    //
// }

// console.log(evenOdd(6))


// //PSEUDOCODE TO REVERSE STRING

// // 1. param is a string type data 
// const reverse = (s) => {

//     // 2. create a new constanta that contain an array of param's letter
//     const arr = s.split('')
//     // 3. create a new constanta that reverse the array
//     const revArr = arr.reverse()
//     // 4. return a string by join the reversed array
//     return revArr.join('')
// }

// console.log(reverse('makan apa rek?'))

/////////////////////////////////////
// const mapDuplicate = (arr,cb) => {
    //     const result = []
//     cb(result,arr)
//     return result
// }

// const cbMap = (A, arr) => {
//     // const result = []
//     for (const element of arr){
//         A.push(element*5)
//     }
//     // return result
// }

// console.log(mapDuplicate(arr,cbMap))
///////////////////////////////////////////////

const arr = [5,10,15,20,25]
// const arr = ['bantu','gunting','kertas','kertas']
// // map takes an array and function as argument 
// function map(arr, mapFunc) {    
//     const mapArr = []; // empty array           
//     for(let i=0;i<arr.length;i++) {        // loop though array  
//         const result = mapFunc(arr[i], i);        // Call Calback Function with item and index as argument
//         mapArr.push(result);    
//     }    
//     return mapArr;
// }


// function cbfn (arr,i) {
//     // return arr ** 2
//     return `${i+1}. ${arr}`
// }

// const squareArr2 = map(arr, cbfn);

// console.table(squareArr2)


// /////////////////////////////

const filterDuplicate =(arr,cb) => { //create function filter duplicate with argument 
    const filteredArr = []
    for (let i =0 ; i < arr.length; i++){
        
        const result = cb(arr[i],i)
        if(result){
            filteredArr.push(arr[i])
        }
    }
    return filteredArr
}


const cbFilter = (item,index)=> {
    
    // if(item > 10){
    //     return item
    // } 

    return item % 2 == 0
}

// console.log(filterDuplicate(arr,cbFilter))


