const studArray =[
    {Name : 'Chairul',
    Email: 'chairul@gmail.com',
    Age : '06/24/2002',
    Score : 85 },
    {Name : 'Rajib',
    Email: 'chairul@gmail.com',
    Age : '07/25/1998',
    Score : 90 },
    {Name : 'Kusnadi',
    Email: 'kusnadi@gmail.com',
    Age : '06/23/2000',
    Score : 70 }
]

// console.log(studArray)
 function calcArr (arr) {
     let tempArr =[]
     for (let i=0; i<arr.length ; i++){
         tempArr.push(arr[i].Score)
    }
        
    const score = hiLoAv(tempArr)
    const score1 = findObject(score,arr,arr,'Score')
        
        // console.log(score1)
            
    let tempArr2 = []
    let tempArr3 = []
    for (let i= 0 ; i<arr.length; i++){
        tempArr2.push({})
        tempArr2[i].Age = arr[i].Age
        let birth = new Date (arr[i].Age)
        let age_date = new Date (Date.now()-birth.getTime())
        tempArr2[i].Agedate = Math.abs(age_date.getFullYear()-1970)
        tempArr3.push(Math.abs(age_date.getFullYear()-1970))
    }
    
    // console.log (tempArr2)
    
    const age = hiLoAv(tempArr3)
    const age1 = findObject(age,tempArr2,arr,'Age')
    // console.log (age1)
    
    return (console.log({
        Score : score1,
        Age : age1
    }))
 }

 
 function hiLoAv (arr) {
    Min = Math.min(...arr)
    Max = Math.max(...arr)
    // average
    let sum =0
    for(let i =0; i<arr.length; i++){
        sum +=arr[i]
    }
    Ave = sum/(arr.length)

    const data = {Max, Min, Ave}

    return data
}

function findObject (calculatedArray,arr,arr1,key) {

    if (key === 'Score') {

        const highest = arr1.find(({Score})=> Score === calculatedArray.Max)
        const lowest = arr1.find(({Score})=> Score === calculatedArray.Min)
        const average = Ave
        // console.log(arr1)
        return {highest, lowest, average}
        
    } else if (key == 'Age'){
        const A = arr.find(({Agedate})=> Agedate == calculatedArray.Max)
        const highest = arr1.find(({Age})=> Age == A.Age)
        // console.log(arr)
        const B = arr.find(({Agedate})=> Agedate == calculatedArray.Min)
        const lowest= arr1.find(({Age})=> Age == B.Age)
        const average = Ave
        // console.log(Object.keys(arr))
        return {highest, lowest, average}
    }
}

calcArr(studArray)

////////////////////////////////////

class Product {
    constructor (name, price) {
        this.name = name
        this.price = price
    }
}

class Transaction extends Product {
    total = 0
    products = []

    addToCart(product, qty) {
        this.products.push(product);
        for (product in this.products) {
            if (!this.products[product].qty) {
                this.products[product].qty = qty
            }
        }
    }

    showTotal() {
        let listCart = `\n 2. PURWADHIKA MART   \n\n Product Name     Quantity        Price`
        for (let i in this.products) {
            this.total += this.products[i].price * this.products[i].qty
            listCart += `\n ${this.products[i].name}              ${this.products[i].qty}         ${this.products[i].price}   `
        }
        console.log(listCart);
        let totalAmount = `\n Total Amount ${this.total} \n\n`;
        console.log(totalAmount);
    }

    checkOut(n) {
        if (n>this.total){
            console.log(`Thank You for Your Visit \n this is the Change ${n-this.total}`)
            this.removeCart()
        } else if (n == this.total) {
            console.log(`Thank You for Your Visit`)
            this.removeCart()
        } else if (n<this.total){
            console.log(`this is not enough, check your Total Amount`)
        }
    }

    removeCart() {
        this.product = []
    }
   
}

const apel = new Product("apel", 50000);
const jeruk = new Product("jeruk", 40000);
const mangga = new Product("mangga", 30000);

const shopping = new Transaction () ;
shopping.addToCart(apel, 3)
shopping.addToCart(jeruk, 2)
shopping.addToCart(mangga, 4)

// console.log(shopping)

shopping.showTotal();

shopping.checkOut(3500000)