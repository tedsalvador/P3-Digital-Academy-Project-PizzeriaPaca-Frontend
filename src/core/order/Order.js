export default class order {
    constructor(OrderNumber, OrderTypeCode, UserId, PaymentId, OrderStatus, DateOrder) {
        this.OrderNumber=OrderNumber; //("1");
        this.OrderTypeCode=OrderTypeCode; //("D");
        this.UserId=UserId; //(1L);
        this.PaymentId=PaymentId;//(1L);
        this.OrderStatus=OrderStatus;//("PEND");
        this.DateOrder=DateOrder; //(orderDto.getDateOrder());
    }
}