import express from 'express';
import giftsRouter from './routes/gifts.js';

const app = express();

// Define the middleware to serve static files from the 'public' directory
app.use('/public', express.static('./public'))

// middleware to serve static files from the scripts directory
app.use('/scripts', express.static('./public/scripts'))

// Your other routes and middleware here
app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>')
})

//use this endpoint
app.use('/gifts', giftsRouter)

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`)
})

/*
in many production environments, the server doesn't get to decide which port it listens on -- instead, it's assigned a port by the environment, and the server needs to be able to find out what that port is and use it.
*/