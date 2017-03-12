import Grocery, { getAllGroceries } from '../models/grocery';
import express from 'express';

const router = new express.Router();

router.get('/', (req, res) => {
  getAllGroceries().then(x => res.json(x))
})


export default router;