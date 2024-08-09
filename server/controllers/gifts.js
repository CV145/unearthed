import { pool } from '../config/database.js';

const getGifts = async (req, res) => {
    try {
        // Query the database to get all rows from the gifts table
        const result = await pool.query('SELECT * FROM gifts ORDER BY id ASC');

        // Send the result rows as the response
        res.status(200).json(result.rows);
    } catch (error) {
        // Handle any errors that occur during the query
        console.error('Error fetching gifts:', error);
        res.status(409).json({ error: error.message })
    }
};

export default { getGifts };