export interface Cart{
    items: Array<CartItem>
}

export interface CartItem{
    quantity: number;
    propertyImg: string|undefined;
    property: string;
    type: string;
    price: number;
    id:number;
}

