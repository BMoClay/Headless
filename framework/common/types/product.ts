
export interface ProductImage {
    url: string;
    alt?: string
}

export interface ProductPrice {
    value: number
    currencyCode: "USD" | "EUR" | string
}

// makeChanges
// to add: estimatedCostOfMaterials, ingredients, tags, 
// collection, stars, reviews, questions, 
// maxNumberOfItemAvailable, interestFreePaymentPlanPrice

// booleans: alcoholFree, organic, cannabinoid, uniqueStock, 
// customOrder, subscription, memberPrice, onSale, newItem,
// inStock, giftOrder


export interface ProductOptionValues {
    label: string 
    hexColor?: string
}
export interface ProductOption {
    id: string
    displayName: string 
    values: ProductOptionValues[]
}

export interface ProductVariant {
    id: string 
    name: string
    sku: string
    image?: ProductImage 
    requiresShipping: boolean 
    price: number 
    listPrice: number 
    options: ProductOption[] 
}
export interface Product {
    id: string
    name: string
    description: string
    slug: string
    path: string
    images: ProductImage[]
    price: ProductPrice
    options: ProductOption[]
    variants: ProductVariant[]
}
