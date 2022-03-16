namespace CMCPS.Northwind {
    export enum OrderShippingState {
        NotShipped = 0,
        Shipped = 1
    }
    Serenity.Decorators.registerEnumType(OrderShippingState, 'CMCPS.Northwind.OrderShippingState', 'Northwind.OrderShippingState');
}

