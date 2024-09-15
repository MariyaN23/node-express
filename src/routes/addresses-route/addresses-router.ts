import {Request, Response, Router} from "express";
import {addressesRepository} from "../../repositories/addresses-repository";

export const addressesRouter = Router({})

addressesRouter.get('/', (req: Request, res: Response) => {
    const addresses = addressesRepository.findAddress(req.query.value?.toString())
    addresses ? res.send(addresses) : res.send(404)
})
addressesRouter.get('/:id', (req: Request, res: Response) => {
    const address = addressesRepository.findAddressById(+req.params.id)
    address ? res.send(address) : res.send(404)
})