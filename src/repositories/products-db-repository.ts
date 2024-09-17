import {productsCollection, ProductType} from "./db";

export const productsRepository = {
    async findProduct(title: string | null | undefined): Promise<ProductType[]> {
        const filter: any = {}
        if (title) {
            filter.title = {$regex: title}
        }
        return productsCollection.find(filter).toArray()
    },
    async findProductById(id: number): Promise<ProductType | null>  {
        let product: ProductType | null = await productsCollection.findOne({id})
        return product
    },
    async createProduct(newProduct: ProductType): Promise<ProductType> {
        await productsCollection.insertOne(newProduct)
        return newProduct
    },
    async updateProduct(id: number, title: string): Promise<boolean> {
        const result = await productsCollection.updateOne({id}, {$set: {title}})
        return result.matchedCount === 1
    },
    async deleteProduct(id: number): Promise<boolean> {
        const result = await productsCollection.deleteOne({id})
        return result.deletedCount === 1
    },
}