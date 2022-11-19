class QueueFood {
    #container =[],
    let i =0;

    enqueue(element) {
        this.#container.push(element)
    };
    
    executeOrder(){
        while (i < #container.length){
            i++
        }
    }
}

module.export = QueueFood
const A =(Math.floor(Math.random() * 10) + 1)*100

