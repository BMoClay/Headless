import { Product } from "@common/types/product"


type AvailableChoices = "color" | "size" | string

export type Choices = {
    [P in AvailableChoices]: string
}

export function getVariant(product: Product, choices: Choices) { 

    const variant = product.variants.find((variant) => {
        console.log(variant.options)
        console.log("Should match")
        console.log(choices)

        const isMatchingChoice = variant.options.every(variantOption => {
            const optionName = variantOption.displayName.toLocaleLowerCase()
            if (optionName )
        
        })
    })
    return variant
}