import {Request, Response, Router} from "express";
//import {productsRepository, ProductType} from "../../repositories/products-in-memory-repository";
import {productsRepository, ProductType} from "../../repositories/products-db-repository";
import {body} from "express-validator";
import {inputValidationMiddleware} from "../../middlewares/input-validation-middleware";

export const productsRouter = Router({})

const titleValidation = body('title').trim().isLength({
    min: 1,
    max: 30
}).withMessage("Title length should be from 3 to 10 symbols")

productsRouter.get('/', async (req: Request, res: Response) => {
    const foundProduct: ProductType[] = await productsRepository.findProduct(req.query.title?.toString())
    res.send(foundProduct)

    //synchronous
    /*let start = performance.now()
    while (performance.now() - start < 3000) {
        console.log(performance.now() - start)
        //do nothing
    }*/

    //asynchronous
    /*setInterval(()=> {
        res.send(foundProduct)
    }, 3000)*/
})
productsRouter.get('/:id', async (req: Request, res: Response) => {
    const product: ProductType | null = await productsRepository.findProductById(+req.params.id)
    product ? res.send(product) : res.send(404)
})
productsRouter.post('/',
    titleValidation,
    inputValidationMiddleware,
    async (req: Request, res: Response) => {
        const newProduct: ProductType = await productsRepository.createProduct(req.body.title)
        res.status(201).send(newProduct)
    })
productsRouter.put('/:id',
    titleValidation,
    inputValidationMiddleware,
    async (req: Request, res: Response) => {
        const isUpdated: boolean = await productsRepository.updateProduct(+req.params.id, req.body.title)
        const product: ProductType | null = await productsRepository.findProductById(+req.params.id)
        isUpdated ? res.send(product) : res.send(404)
    })
productsRouter.delete('/:id', async (req: Request, res: Response) => {
    const isDeleted: boolean | undefined = await productsRepository.deleteProduct(+req.params.id)
    isDeleted ? res.send(204) : res.send(404)
})