->  create a folder and name it as 'EXPRESS_JS'
->  open that folder in vs code
->  open integrated terminal in vs code 
->  type 'npm init' in cmd
->  a package.json file will be created
->  type 'cd package.json' 
->  type 'npm install express'
->  create new file in the same project folder and call it as 'index.js'
->  edit the 'index.js' file as shown below
    [
        console.log('Welcome To Socail Prachar')
    ]
->  type 'npm start' in cmd to see the output in the console
->  Now edit the 'index.js' file as shown below
    [
        import Express from 'express';
        var port = 3000;
        const app = Express();

        app.get("/", (req, res)=> {
            res.send('Welcome To Socail Prachar')
        })

        app.listen(port, ()=> console.log("listening on port" + port))
    ]
->  Again type 'npm start' in cmd, open a browser, go to 'localhost:3000' in any browser to 
    see the corresponding output
