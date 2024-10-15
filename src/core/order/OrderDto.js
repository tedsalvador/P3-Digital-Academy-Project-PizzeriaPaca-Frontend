
export class orderDto {
    
     constructor (orderNumber, orderTypeCode, userId, paymentId, orderStatus, dateOrder, totalPaid, products) {
        this.orderNumber=orderNumber; //("1");
        this.orderTypeCode=orderTypeCode; //("D");
        this.userId=userId; //(1L);
        this.paymentId=paymentId;//(1L);
        this.orderStatus=orderStatus;//("PEND");
        this.dateOrder=dateOrder; //(orderDto.getDateOrder());
        this.totalPaid=totalPaid;
        
        // Ahora, productos es un array de objetos, cada uno con ID, cantidad y precio
        this.products = products; // [{ productId, productQuantity, productPrice }, ...]

    }
}

