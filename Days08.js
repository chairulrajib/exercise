// const arr1 = [
//     {name : `student1`, email : `student1@mail.com`},
//     // {name : `student2`, email : `student2@mail.com`},
//   ]
//   const arr2 = [
//     {name : `student1`, email : `student1@mail.com`},
//     {name : `student3`, email : `student3@mail.com`},
//   ]
  


//   const allArr = [...arr1, ...arr2]

//   const setArr = new Set(allArr)
//   console.log(setArr)

////////////////////////////////////////////////////////
datas = [
  {
    name :'avanza',
    brand : 'toyota',
    machine : 'DOHC',
    cc : 1500
  },
  {
    name :'supra',
    brand : 'toyota',
    machine : 'v8',
    cc : 5000
  },
  {
    name :'ertiga',
    brand : 'suzuki',
    machine : 'DOHC',
    cc : 1550
  }
]

// function car (datas) {
//   for (let i = 0 ; i < datas.length; i++) {
//     console.log(`${i+1}. ${datas[i].brand} ${datas[i].name} with ${datas[i].machine} ${datas[i].cc.toLocaleString('id')} `)
//   }
// }

// car (datas)

let text =''
// function car1 (datas) {
//   let num =0
//   for (let value of datas){
//     num ++
//     let {name, brand, machine, cc} = value
//     text += `${num}. ${brand} ${name} with ${machine} ${cc.toLocaleString('id')} \n`
//   }
//   return text
// }

// console.log(car1(datas))

// let text =''
// function car1 (datas) {
//   let num =0
//   for (let value in datas){
//     num ++
//     let {name, brand, machine, cc} = value
//     text += `${num}. ${brand} ${name} with ${machine} ${cc} \n`
//   }
//   return text
// }

// console.log(car1(datas))
////////////////////////////////////////////////////////////

function car (datas, cb) {
  if (!cb){

    let num =0
    for (let value of datas){
    num ++
    let {name, brand, machine, cc} = value
    text += `${num}. ${brand} ${name} with ${machine} ${cc.toLocaleString('id')} \n`
    }
  return text
  } else {
    for (let i = 0 ; i < datas.length; i++) {
      if (cb(datas[i])){
        return (`${i+1}. ${datas[i].brand} ${datas[i].name} with ${datas[i].machine} ${datas[i].cc.toLocaleString('id')}` )
      }
    }

    }
    
  }

  function filterName() {
    return (obj) => obj.name == 'avanza'
  }


// car (datas, (obj) => obj.name == 'supra')
console.log(car(datas, filterName))
// console.log(car (datas))



// car (datas, (obj) => obj.name == 'avanza')

// const trial = datas.filter((data)=> data.name == 'avanza')
// console.log(trial)

// const coba =(shoes,cb) => {
//   return shoes.filter(cb(shoe))
// }

// console.log(coba(datas, (obj) => obj.name == 'avanza'))