import OrderRepository from './OrderRepository';

export default class OrderService {
    constructor() {
        this.repo = new OrderRepository()
    }

    async createOrder(order) {
        return await this.repo.createOrder(order)
    }
}