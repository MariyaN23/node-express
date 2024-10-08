import express from 'express'
import {productsRouter} from "./routes/products-route/products-router";
import {addressesRouter} from "./routes/addresses-route/addresses-router";
import {usersRouter} from "./routes/users-route/users-router";
import {runDb} from "./repositories/db";

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())

app.use('/products', productsRouter)
app.use('/addresses', addressesRouter)
app.use('/users', usersRouter)

const startApp = async ()=> {
    await runDb()
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}

startApp()