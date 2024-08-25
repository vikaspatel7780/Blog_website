import dbConnect from './db/index.js'
import app from './app.js'
dbConnect()
.then( () => {
    const port = process.env.PORT || 8000
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`)
    })
}).catch( (err) =>{
    console.log("Mongo Db Conection Failed !!!",err)
})
