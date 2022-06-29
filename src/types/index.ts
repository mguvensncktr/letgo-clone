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
}

export interface Category {
    id: string,
    name: string,
    src: any,
}
