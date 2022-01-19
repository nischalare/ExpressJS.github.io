// console.log('Welcome To Socail Prachar')
import Express from 'express';


const app = Express();
var port = 3000;

app.get("/", (req, res)=> {
    res.send('Welcome To Socail Prachar')
})

app.listen(port, ()=> console.log("listening on port: " + port))

