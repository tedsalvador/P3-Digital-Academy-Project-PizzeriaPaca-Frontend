import OrderRepository from './OrderRepository';
import { orderDto } from './OrderDto';

export default class OrderService {
    
    constructor() {
        this.repo = new OrderRepository()
    }

    async createOrder(orderDto) {
        // Asegúrate de que orderDto tenga la propiedad products
        if (!orderDto.products || !Array.isArray(orderDto.products)) {
            console.error("El orderDto debe contener un array de productos.");
            throw new Error("Invalid orderDto: products are missing or not an array");
        }

        console.log("Datos de la orderService.js:", JSON.stringify(orderDto, null, 2));
            try {
                const result = await this.repo.createOrder(orderDto); // Retorna directamente la respuesta
                console.log("Respuesta del backend:", result); // Usa result directamente sin 'result.data' aquí
                return result; // Retorna la respuesta completa del backend
            } catch (error) {
                console.error('Error al crear la orden:', error);
                throw error; // Lanza el error para manejarlo en la capa superior
            }


    }
}