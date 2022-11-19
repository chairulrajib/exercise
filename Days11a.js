const QueueFood = require('./Days11')

const queue = new QueueFood()
queue.enqueue('Nasi Padang')
queue.enqueue('Nasi Rames')
queue.enqueue('Gule Ayam')
queue.enqueue('Sate Ayam')

queue.executeOrder()
