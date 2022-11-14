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

  let text =''
  
 function car1 (datas) {
  let num =0
  for (let value of datas){
    num ++
    let {name, brand, machine, cc} = value
    text += `${num}. ${brand} ${name} with ${machine} ${cc.toLocaleString('id')} \n`
  }
  return text
}

// console.log(car1(datas))
  
  console.log(car1 (datas))
  
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
      return (obj) => obj.name == 'supra'
    }
  
  
  // car (datas, (obj) => obj.name == 'supra')
  console.log(car(datas, filterName))
//   console.log(car (datas))
  