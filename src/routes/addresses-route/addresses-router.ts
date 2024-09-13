import {Request, Response, Router} from "express";

export const addressesRouter = Router({})

const addresses = [{id: 1, value: 'Nezavisimosti, 18'}, {id: 2, value: 'Oktyabrskaya, 16'}]

addressesRouter.get('/', (req: Request, res: Response) => {
    res.send(addresses)
})
addressesRouter.get('/:id', (req: Request, res: Response) => {
    const address = addresses.find(p => p.id === +req.params.id)
    if (address) {
        res.send(address)
    } else {
        res.send(404)
    }
})