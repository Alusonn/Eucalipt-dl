import app from './app'
import { PORT } from './config'
import { connectToDB } from "./database";



const main = async() => {
   await  connectToDB()

    app.listen(PORT)
    console.log('Server running in port', PORT)
}

main()