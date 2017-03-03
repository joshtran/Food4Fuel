import Box, { getAllBoxes } from '../models/box';
import express from 'express';

const router = new express.Router();

router.get('/', (req, res) => {
  getAllBoxes().then(x => res.json(x))
})

export default router;