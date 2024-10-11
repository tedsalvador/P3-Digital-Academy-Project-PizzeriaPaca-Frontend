import axios from 'axios';

export default class OrderRepository {
    
    constructor() {
        this.baseUrl = import.meta.env.VITE_API_ENDPOINT
    }

    async createOrder(order) {
        try {
            const response = await axios.post(`${this.baseUrl}/order`, order, {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true
            })
            return response.data
        } catch (error) {
            throw error
        }
    }
}