import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import GiftsController from '../controllers/gifts.js'

const __filename = fileURLToPath(import.meta.url);

//__dirname contains the directory name of the current module file: import.meta.url
const __dirname = path.dirname(__filename);

const router = express.Router();

//Serving data from the database using sql query
router.get('/', GiftsController.getGifts)

//This endpoint serves an html file
router.get('/:giftId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/gift.html'))
});

export default router;