import express from 'express'

const app = express();
const PORT = 3000;


app.listen(PORT, (req, res)=> {
    console.log(`App is listening to PORT : ${PORT}`);
})