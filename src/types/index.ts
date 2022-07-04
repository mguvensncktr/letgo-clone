export interface Product {
    id: string,
    image: string,
    images: string[],
    brand: string,
    price: number,
    rating: number,
    numReviews?: number,
    isFeatured: boolean,
    name: string,
    description?: string,
    category: number,
    countInStock: number,
    type: string,
    time: number,
    seller: {
        name: string,
        rating: number,
        photo: string,
        lat: number,
        long: number,
        city: string
    }
}

export interface Category {
    id: string,
    name: string,
    src: any,
}

export interface Filtering {
    id: string,
    name: string
}

export interface Message {
    id: string,
    image: string,
    productName: string,
    sellerName: string,
    status: string,
    time: string 
}

