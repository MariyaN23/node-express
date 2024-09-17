import {Request, Response, Router} from "express";
import {usersRepository} from "../../repositories/users-repository";

export const usersRouter = Router({})

usersRouter.get('/', (req: Request, res: Response) => {
    const users = usersRepository.getUsers()
    users ? res.send(users) : res.send(404)
})
usersRouter.post('/',
    (req: Request, res: Response) => {
        /*const newProduct = productsRepository.createProduct(req.body.title)
        res.status(201).send(newProduct)*/
    })