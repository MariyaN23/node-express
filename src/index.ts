import express from 'express'
import {productsRouter} from "./routes/products-route/products-router";
import {addressesRouter} from "./routes/addresses-route/addresses-router";

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())

app.use('/products', productsRouter)
app.use('/addresses', addressesRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})