export default class Order {

    constructor(items, userId, dateOrder, totalAmount) {
        this.items = items
        this.userId = userId
        this.dateOrder = dateOrder
        this.totalAmount = totalAmount
    }
}