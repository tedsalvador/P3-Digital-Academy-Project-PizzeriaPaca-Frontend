import axios from 'axios';
export default class OrderRepository {
    //obtiene datos del local storage
    loggeadotoken = localStorage.getItem("token");

    constructor() {
        this.baseUrl = import.meta.env.VITE_API_ENDPOINT
    }

    async createOrder(orderDto) {
        try {
            const {
                orderNumber,
                deliveryType,
                userId, 
                paymentId,                 
                orderStatus,
                dateOrder,
                orderTypeCode,
                totalPaid,
                products // Agregamos productos aquí
            } = orderDto; 

                  // Aquí usas los datos como `orderNumber`, `deliveryType`, etc.
                  console.log("Número de ordenXXX: ", orderNumber);
                  console.log("Número de deliverytype: ",deliveryType);
                  console.log("Número de userid: ",userId);
                  console.log("Número de payment: ",paymentId);
                  console.log("Número de ordenstatus: ",orderStatus);
                  console.log("Número de dateorder: ", dateOrder);
                  console.log("Order Type Code", orderTypeCode);
                  console.log("Número de total: ",totalPaid);
                  console.log("Productos: ", products); // Agregamos este log para verificar los productos

            const response = await axios.post(`${this.baseUrl}/order`, orderDto, {
                
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ${loggeadotoken}',
                },
                withCredentials: true
            })
            return response.data
        } catch (error) {
            throw error
        }
    }
}