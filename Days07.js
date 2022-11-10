const obj1 = {
    name : `rajib`,
    class : 2000,
    method : function coba () {
        console.log(this.name)
    }
}

const obj2 = {
    name : `rajib `,
    class : 2000,
    method : function coba () {
        console.log(this.name)
    }
}

function showEqual (obj1,obj2){
    JSON.stringify(obj1)===JSON.stringify(obj2) ? console.log(`oke sama`) : console.log(`gak sama euy`)
}

showEqual(obj1,obj2)

//////////////////////////////////

var firstObject = {
    a: 1,
    b: 2
    }
  
  var secondObject = {
    a: 1,
    c: 3
  }

function intersection (obj1,obj2) {
    const [k1, k2] = [Object.keys(obj1), Object.keys(obj2)];
    const [first, next] = k1.length > k2.length ? [k2, obj1] : [k1, obj2];
    let inter =  first.filter(k => k in next);
    let tempObj = {}
    
    for (let i = 0; i< inter.length ; i++){
        if(k1.includes(inter[i])){
          tempObj[inter[i]] = obj1[k1[i]]
          
        }
    }
    
    return tempObj

}
  

const result = intersection(firstObject, secondObject)
console.log(result)


//////////////////////////


const arr1 = [
  {name : `student1`, email : `student1@mail.com`},
  {name : `student2`, email : `student2@mail.com`},
]
const arr2 = [
  {name : `student1`, email : `student1@mail.com`},
  {name : `student3`, email : `student3@mail.com`},
]

const allArr = [...arr1, ...arr2]

const filteredArr = allArr.reduce((acc, current) => {
  const x = acc.find(item => item.name === current.name);
  if (!x) {
    return acc.concat([current]);
  } else {
    return acc;
  }
}, []);

console.log(filteredArr)

//////////////////////////////////

const input = [{
  name : 'David',
  age : 20  
}]

const keys = Object.keys(input[0])
const values = Object.values(input[0])

// console.log (values)
let output = [{}]
// console.log (output[0][1] = keys[1])

function switchArr (keys,values) {
  let output = [{}]
  for (let i = 0; i < keys.length ; i++) {
    output[0][values[i]] = keys[i]
  }
  console.log(output)
}

switchArr(keys,values)


//////////////////////////


function factorialNum (inputNum) {

  if(inputNum===0){
    return 1
  } 
  return inputNum * factorialNum(inputNum-1)
  
}

console.log(factorialNum(5))

