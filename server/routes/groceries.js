import Grocery, { getAllGroceries } from '../models/groceries';
import express from 'express';

const router = new express.Router();

router.get('/', (req, res) => {
  getAllGroceries().then(x => res.json(x))
})

// ES7 in all its glory!
// router.get('/', async (req, res) => {
//   const groceries = await getAllGroceries();
//   const stuff = await someAsyncBusiness();

//   res.json(groceries);
// });

// router.get('/', (req, res) => getAllGroceries().then(res.json));


export default router;