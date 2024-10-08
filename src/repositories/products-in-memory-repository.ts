export type ProductType = {
    id: number
    title: string
}

const products: ProductType[] = [{id: 1, title: 'tomato'}, {id: 2, title: 'orange'}]

export const productsRepository = {
    async findProduct(title: string | null | undefined): Promise<ProductType[]> {
        if (title) {
            return products.filter(p => p.title.indexOf(title) > -1)
        } else {
            return products
        }
    },
    async findProductById(id: number): Promise<ProductType | undefined>  {
        return products.find(p => p.id === id)
    },
    async createProduct(title: string): Promise<ProductType> {
        const newProduct = {id: +new Date(), title}
        products.push(newProduct)
        return newProduct
    },
    async updateProduct(id: number, title: string): Promise<boolean> {
        const product = products.find(p => p.id === id)
        if (product) {
            product.title = title
            return true
        } else {
            return false
        }
    },
    async deleteProduct(id: number): Promise<boolean> {
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                products.splice(i, 1)
                return true
            }
        }
        return false
    },
}