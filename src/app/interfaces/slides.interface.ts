export interface Slides {
    title:       string;
    location:    string;
    priceDollar: Price;
    priceEuro:   Price;
    image:       string;
}

export interface Price {
    sale: number | null;
    rent: number | null;
}
